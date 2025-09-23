// next.config.js
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./lib/translations.ts');

module.exports = withNextIntl({
  reactStrictMode: true
});