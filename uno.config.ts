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
                custom: {}
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
