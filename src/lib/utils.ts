import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ReactGA from "react-ga4";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const callEvent = (eventName: string, category: string) => {
  ReactGA.event(eventName, {
    category: category,
  });
};

type F = (...p: any[]) => any;

export function debounce(fn: F, t: number): F {
  let id: any;
  return function (...args) {
    clearTimeout(id);
    // @ts-ignore
    let self = this;
    id = setTimeout(() => {
      fn.apply(self, args);
    }, t);
  };
}

export const subscribeToCampaign = async (email: string) => {
  const url = "https://api.rightproperty.app/api/Campaign/subscribe";

  const requestData = {
    campaignId: "CMP01",
    source: "web",
    email: email,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/octet-stream",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Subscription successful:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error subscribing to campaign:", error);
    throw error;
  }
};


export const interpolateColor = (color1: string, color2: string, progress: number): string => {
  // Simple hex color interpolation
  if (color1.startsWith('#') && color2.startsWith('#')) {
    const r1 = parseInt(color1.slice(1, 3), 16)
    const g1 = parseInt(color1.slice(3, 5), 16)
    const b1 = parseInt(color1.slice(5, 7), 16)

    const r2 = parseInt(color2.slice(1, 3), 16)
    const g2 = parseInt(color2.slice(3, 5), 16)
    const b2 = parseInt(color2.slice(5, 7), 16)

    const r = Math.round(r1 + (r2 - r1) * progress)
    const g = Math.round(g1 + (g2 - g1) * progress)
    const b = Math.round(b1 + (b2 - b1) * progress)

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  }

  // For rgba colors, return the target color
  return color2
}