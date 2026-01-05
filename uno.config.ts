import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-gradient-to-r from-teal-600 to-blue-600 text-white cursor-pointer !outline-none hover:from-teal-700 hover:to-blue-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 shadow-md hover:shadow-lg transition-all duration-300'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-300 ease-in-out hover:opacity-100 hover:text-teal-600 dark:hover:text-teal-400 hover:scale-110'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
