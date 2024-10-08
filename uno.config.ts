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
            warn: true,
            unit: 'em',
            collections: {
                carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
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
