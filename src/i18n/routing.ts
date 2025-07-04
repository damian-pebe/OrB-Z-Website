import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "es"],
  // Used when no locale matches
  defaultLocale: "en",
  //change path name for SEO
  pathnames: {
    "/": {
      es: "/",
      en: "/",
    },
    "/about": {
      es: "/sobre-nosotros",
      en: "/about-us",
    },
  },
});
