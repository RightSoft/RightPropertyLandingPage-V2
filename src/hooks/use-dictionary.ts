import useOnlyHome from "./use-only-home";

export const useDictionary = (key: string) => {
  const isHome = useOnlyHome();
  const dictionary: Record<string, string> = {
    "book-a-demo": isHome ? "Book a Demo" : "Register Now",
  };

  return dictionary[key];
};
