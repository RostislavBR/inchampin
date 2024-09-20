import {fileURLToPath} from 'url';
import {dirname} from 'path';
import path from 'path';

// Получаем путь к текущему файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {

        // Добавляем алиасы в конфигурацию webpack
        config.resolve.alias = {
            ...config.resolve.alias,
            '@app': path.resolve(__dirname, 'app'),
            '@components': path.resolve(__dirname, 'app/components'),
            '@styles': path.resolve(__dirname, 'app/styles'),
            '@utils': path.resolve(__dirname, 'app/utils'),
            '@types': path.resolve(__dirname, 'app/types'),
            '@interfaces': path.resolve(__dirname, 'app/interfaces'),
            '@constants': path.resolve(__dirname, 'app/constants'),
        };

        // Добавляем правило для обработки SVG файлов
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.module.rules.push({
            test: [/\.module\.scss$/],
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        sassOptions: {
                            includePaths: [path.resolve(__dirname, 'app/styles')],
                        },
                    },
                },
            ],
            include: path.resolve(__dirname, 'app/styles'),
        });

        return config;
    },
};

export default nextConfig;
