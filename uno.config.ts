import {
    defineConfig,
    presetIcons,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
    presetAttributify, presetMini,
} from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            scale: 1.2,
            warn: true,
            unit: 'em',
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
            },
            collections: {
                carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
                logos: () => import('@iconify-json/logos/icons.json').then(i => i.default)
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
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
