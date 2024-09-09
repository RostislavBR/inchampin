import {fileURLToPath} from 'url';
import {dirname} from 'path';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {

        // Получаем путь к текущему файлу
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        // Добавляем алиасы в конфигурацию webpack
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/': path.resolve(__dirname, '..'),
            '@public': path.resolve(__dirname, 'public'),
            '@app': path.resolve(__dirname, 'app'),
            '@components': path.resolve(__dirname, 'app/components'),
            '@utils': path.resolve(__dirname, 'app/utils'),
            '@types': path.resolve(__dirname, 'app/types'),
            '@interfaces': path.resolve(__dirname, 'app/interfaces'),
            '@styles': path.resolve(__dirname, 'app/styles'),
        };

        // Добавляем правило для обработки SVG файло
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;
