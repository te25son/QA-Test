import { Options } from 'selenium-webdriver/firefox';

const config = {
    baseUrl: process.env.BASE_URL,
    timeout: process.env.TIMEOUT || 10000,
    options: new Options({
        resolutionX: 1920,
        resolutionY: 1080,
    }),
};

export default config;
