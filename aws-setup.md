# AWS S3 + CloudFront Setup for SPA 404 Handling

## Manual CloudFront Configuration (One-time setup)

### 1. Configure CloudFront Error Pages

In your CloudFront distribution:

1. Go to **AWS CloudFront Console**
2. Select your distribution
3. Go to **Error Pages** tab
4. Click **Create Custom Error Response**

#### Error Page 1 (403 Forbidden → 200 OK)
- **HTTP Error Code**: 403 Forbidden
- **Customize Error Response**: Yes
- **Response Page Path**: `/index.html`
- **HTTP Response Code**: 200 OK
- **Error Caching Minimum TTL**: 300 seconds

#### Error Page 2 (404 Not Found → 404 Not Found)
- **HTTP Error Code**: 404 Not Found  
- **Customize Error Response**: Yes
- **Response Page Path**: `/index.html`
- **HTTP Response Code**: 404 Not Found
- **Error Caching Minimum TTL**: 300 seconds

### 2. Why These Configurations?

#### 403 → 200 Conversion
- **Purpose**: Handle SPA routing for valid app routes
- **When it triggers**: S3 returns 403 for paths that don't exist as objects
- **Result**: CloudFront serves index.html with 200 status
- **SEO Impact**: Valid app routes get proper 200 status

#### 404 → 404 Preservation  
- **Purpose**: Maintain 404 status for truly non-existent pages
- **When it triggers**: True 404 errors from S3
- **Result**: CloudFront serves index.html but keeps 404 status
- **SEO Impact**: Search engines see proper 404 status code

### 3. Alternative: AWS CLI Commands

If you prefer CLI configuration, run these commands once:

```bash
# Get your distribution config
aws cloudfront get-distribution-config --id YOUR_DISTRIBUTION_ID > dist-config.json

# Create error pages configuration
cat > error-pages.json << EOF
{
  "Quantity": 2,
  "Items": [
    {
      "ErrorCode": 403,
      "ResponsePagePath": "/index.html",
      "ResponseCode": "200",
      "ErrorCachingMinTTL": 300
    },
    {
      "ErrorCode": 404,
      "ResponsePagePath": "/index.html",
      "ResponseCode": "404", 
      "ErrorCachingMinTTL": 300
    }
  ]
}
EOF

# Update your distribution (replace ETAG_VALUE with actual ETag)
aws cloudfront update-distribution \
  --id YOUR_DISTRIBUTION_ID \
  --distribution-config file://updated-config.json \
  --if-match ETAG_VALUE
```

### 4. Cache Behaviors Configuration (Fix "Use efficient cache lifetimes")

Configure different cache behaviors for optimal performance:

#### 4.1 Default Behavior (HTML files)
1. Go to **CloudFront Console** → Your distribution → **Behaviors** tab
2. Edit the **Default (*)** behavior:
   - **Cache Policy**: Create custom policy called `html-no-cache`:
     - **TTL Settings**: 
       - Minimum TTL: `0`
       - Default TTL: `0` 
       - Maximum TTL: `31536000` (1 year)
     - **Cache Key Settings**: Include only required headers
   - **Purpose**: HTML files shouldn't be cached (for app updates)

#### 4.2 Static Assets Behavior (Images, CSS, JS)
1. Click **Create behavior**
2. **Path Pattern**: `/assets/*` (covers your Vite build assets)
3. **Origin and origin groups**: Select your S3 origin
4. **Cache Policy**: Create custom policy called `static-assets-cache`:
   - **TTL Settings**:
     - Minimum TTL: `86400` (1 day)
     - Default TTL: `2592000` (30 days)
     - Maximum TTL: `31536000` (1 year)
   - **Cache Key Settings**: URL only (no query strings/headers)
5. **Origin Request Policy**: CORS-S3Origin
6. **Response Headers Policy**: (optional - your security headers)

#### 4.3 Images Behavior  
1. Click **Create behavior**
2. **Path Pattern**: `/images/*`
3. Same settings as static assets above
4. **Compress objects automatically**: Yes

#### 4.4 Alternative: Use S3 Metadata Headers

If you prefer setting cache headers at the S3 level, add this to your deployment script:

```bash
# Set cache headers when uploading to S3
aws s3 sync dist/ s3://your-bucket-name/ \
  --exclude "*.html" \
  --cache-control "public, max-age=2592000, immutable"

# Upload HTML files separately with no cache
aws s3 sync dist/ s3://your-bucket-name/ \
  --exclude "*" \
  --include "*.html" \
  --cache-control "public, max-age=0, must-revalidate"
```

#### 4.5 Vite Build Optimization

Add cache-friendly asset naming to `vite.config.ts`:

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Add hashes to all assets for cache busting
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
});
```

### 5. Security Headers Configuration

Add response headers to protect against clickjacking and other security vulnerabilities:

#### 5.1 CloudFront Response Headers Policy (Recommended)

1. Go to **CloudFront Console**
2. Select **Policies** → **Response headers**
3. Click **Create response headers policy**
4. Configure:
   - **Policy name**: `security-headers`
   - **Security headers**:
     - ✅ `X-Frame-Options`: `DENY`
     - ✅ `X-Content-Type-Options`: `nosniff`  
     - ✅ `Referrer-Policy`: `strict-origin-when-cross-origin`
     - ✅ `X-XSS-Protection`: `1; mode=block`
   - **Custom headers**:
     - `Content-Security-Policy`: `frame-ancestors 'none'; default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;`

5. Go to your distribution **Behaviors**
6. Edit the default behavior (`*`)
7. Associate the **Response headers policy**
8. Save and deploy

#### 5.2 AWS CLI Configuration

```bash
# Create response headers policy
cat > security-headers-policy.json << EOF
{
  "ResponseHeadersPolicyConfig": {
    "Name": "security-headers",
    "SecurityHeadersConfig": {
      "FrameOptions": {
        "FrameOption": "DENY",
        "Override": true
      },
      "ContentTypeOptions": {
        "Override": true
      },
      "ReferrerPolicy": {
        "ReferrerPolicy": "strict-origin-when-cross-origin",
        "Override": true
      }
    },
    "CustomHeadersConfig": {
      "Quantity": 1,
      "Items": [
        {
          "Header": "Content-Security-Policy",
          "Value": "frame-ancestors 'none'; default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          "Override": true
        }
      ]
    }
  }
}
EOF

# Create the policy
aws cloudfront create-response-headers-policy --response-headers-policy-config file://security-headers-policy.json
```

### 6. Testing the Setup

#### Test Valid Routes (should return 200)
```bash
curl -I https://yourdomain.com/
curl -I https://yourdomain.com/privacy-policy
```

#### Test Invalid Routes (should return 404)
```bash
curl -I https://yourdomain.com/non-existent-page
curl -I https://yourdomain.com/random/path
```

#### Test Security Headers
```bash
curl -I https://yourdomain.com/ | grep -E "(X-Frame-Options|Content-Security-Policy)"
```

### 7. S3 Bucket Configuration

Ensure your S3 bucket has:

#### Bucket Policy (for CloudFront access)
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::YOUR_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
        }
      }
    }
  ]
}
```

#### Static Website Hosting (Optional)
- **Index Document**: `index.html`
- **Error Document**: `index.html`

## Benefits of This Setup

✅ **Proper SEO**: 404 status codes for non-existent pages  
✅ **SPA Routing**: Valid app routes work correctly  
✅ **Performance**: CloudFront caching for better speed  
✅ **Cost Effective**: Minimal AWS costs  
✅ **Scalable**: Handles traffic spikes automatically

## Troubleshooting

### Common Issues

1. **Still getting 403 errors**: CloudFront error pages not configured
2. **404 pages show 200 status**: Wrong error page configuration  
3. **Changes not taking effect**: CloudFront cache needs time to propagate
4. **Build files not updating**: Clear CloudFront cache with invalidation

### Debug Commands

```bash
# Check distribution status
aws cloudfront get-distribution --id YOUR_DISTRIBUTION_ID

# List error pages
aws cloudfront get-distribution-config --id YOUR_DISTRIBUTION_ID --query 'DistributionConfig.CustomErrorResponses'

# Create cache invalidation
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
``` 