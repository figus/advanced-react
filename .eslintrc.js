module.exports = {
  parser: 'babel-eslint', // Hace que el parser de babel sea compatible con el de eslint, instalar con npm
  env: {
    // Environment, cada ambiente incluye algunas variables globales predefinidas...
    browser: true, // ... para el navegador
    commonjs: true, // ... para Common JS y su Scoping (Sólo para codigo de navegador que usa webpack/browserify)
    es6: true, // ... activa ECMAScript 6 excepto para modulos (Activa ecmaVersion 6 en las opciones del parser)
    node: true, // ... para Node.js y su scoping
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'], // Instalarlos con npm, prefix: eslint-plugin-
  rules: {
    // off: 0, warn: 1, error: 2
    'arrow-parens': ['warn'],
    'react/prop-types': ['off'], // Especificar Prop Types en los componentes de react
    indent: ['error', 2], // Tamaño de la identación (espacios)
    'linebreak-style': ['error', 'unix'], // Tipo de cambio de línea
    quotes: ['error', 'single'], // Tipo de comillas para los strings
    semi: ['error', 'always'], // Terminar con punto y coma cada statement
    'no-console': ['warn', { allow: ['info', 'error'] }] // Prohibido usar console, permitir console.info y console.error
  }
};
