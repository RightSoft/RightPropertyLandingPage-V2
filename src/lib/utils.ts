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

type F = (...p: any[]) => any

export function debounce(fn: F, t: number): F {
    let id: any;
    return function (...args) {
        clearTimeout(id);
        // @ts-ignore
        let self = this;
        id = setTimeout(() => {
            fn.apply(self, args)
        }, t)
    }
};