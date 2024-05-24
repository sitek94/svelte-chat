const overridableDefaults = {
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
}

export default {
  ...overridableDefaults,
  singleQuote: true,
  arrowParens: 'avoid',
  bracketSpacing: false,
  semi: false,
  trailingComma: 'all',
  proseWrap: 'always',
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 120,
      },
    },
    {files: '*.svelte', options: {parser: 'svelte', printWidth: 100}},
  ],
  plugins: [
    'prettier-plugin-svelte',
    'prettier-plugin-packagejson',
    'prettier-plugin-tailwindcss',
  ],
}
