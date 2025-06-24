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

### 4. Testing the Setup

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

### 5. S3 Bucket Configuration

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