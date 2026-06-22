import { useLenis } from "lenis/react";

export const useButtonClick = () => {
  const lenis = useLenis();

  const handleButtonClick = (href: string) => {
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      lenis?.scrollTo(`#${sectionId}`);
    } else {
      window.location.href = href;
    }
  };

  return { handleButtonClick };
};
