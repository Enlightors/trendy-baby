import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localeDetection: false,
  // Skip locale prefix for Admin routes
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      en: "",
      ar: "ar",
    },
  },
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*|admin).*)"],
};
