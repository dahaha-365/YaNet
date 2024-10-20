import fs from 'node:fs/promises'
import {
    defineConfig,
    presetUno,
    presetIcons,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
    presetAttributify, presetMini,
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            cdn: 'https://esm.sh/',
            scale: 1.2,
            warn: true,
            unit: 'em',
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
            },
            collections: {
                carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
                logos: () => import('@iconify-json/logos/icons.json').then(i => i.default),
                cib: () => import('@iconify-json/cib/icons.json').then(i => i.default),
                arcticons: () => import('@iconify-json/arcticons/icons.json').then(i => i.default),
                simple: () => import('@iconify-json/simple-icons/icons.json').then(i => i.default),
                twemoji: () => import('@iconify-json/twemoji/icons.json').then(i => i.default),
                skill: () => import('@iconify-json/skill-icons/icons.json').then(i => i.default),
                custom: {
                    'google-gemini-icon': () => fs.readFile('./IconSet/google-gemini-icon.svg', 'utf-8'),
                    'microsoft-copilot-icon': () => fs.readFile('./IconSet/copilot-icon.svg', 'utf-8'),
                    'dropbox-icon': () => fs.readFile('./IconSet/dropbox-icon.svg', 'utf-8'),
                    'evernote-icon': () => fs.readFile('./IconSet/evernote-icon.svg', 'utf-8'),
                    'quora-icon': () => fs.readFile('./IconSet/quora-icon.svg', 'utf-8'),
                    'slack-icon': () => fs.readFile('./IconSet/slack-icon.svg', 'utf-8'),
                }
            }
        }),
        presetAttributify(),
        presetMini(),
        presetWebFonts({
            provider: 'bunny',
            fonts: {
                sans: 'Inter',
            },
        }),
        presetScrollbar(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
    theme: {
        colors: {
            veryCool: '#0000ff', // class="text-very-cool"
            brand: {
                youtube: '#ff0000', //class="bg-brand-youtube"
                hulu: '#66aa33', //class="bg-brand-hulu"
                netflix: '#e50914',
                google: '#4285f4',
                spotify: '#1db954',
            },
        },
    }
})
