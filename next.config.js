/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
    },
    images: {
        domains: [
            'source.unsplash.com',
            'yt3.ggpht.com',
            'i.ytimg.com',
            process.env.NEXT_IMAGE_DOMAIN,
        ],
    },
};
