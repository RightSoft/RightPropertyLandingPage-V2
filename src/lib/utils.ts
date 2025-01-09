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
