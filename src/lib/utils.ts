import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import ReactGA from "react-ga4";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const callEvent = (eventName:string, category:string) => {
  ReactGA.event(eventName,{
      category: category,
    });
}