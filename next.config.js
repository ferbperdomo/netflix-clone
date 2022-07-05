const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
]) // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['rb.gy', 'image.tmdb.org'],
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  productionBrowserSourceMaps: true,
})