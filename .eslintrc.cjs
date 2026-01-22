/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,

  env: {
    node: true,
    es2023: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },

  plugins: [
    '@typescript-eslint',
    'import',
    'promise',
  ],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    'plugin:import/recommended',
    'plugin:import/typescript',

    'plugin:promise/recommended',
  ],

  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },

  rules: {
    /* ===== Gerais ===== */
    'no-console': 'off',
    'no-debugger': 'warn',
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    'prefer-const': 'warn',

    /* ===== TypeScript ===== */
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/no-floating-promises': 'error',

    /* ===== Async / API ===== */
    'promise/always-return': 'off',
    'promise/no-nesting': 'warn',
    'no-return-await': 'warn',

    /* ===== Imports ===== */
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    /* ===== Prisma ===== */
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],

    /* ===== Regras ===== */
    'no-unused-vars': 'on',
    'no-useless-constructor': 'off',
  },

overrides: [
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    env: {
      node: true,
    },
    globals: {
      describe: 'readonly',
      it: 'readonly',
      test: 'readonly',
      expect: 'readonly',
      beforeAll: 'readonly',
      afterAll: 'readonly',
      beforeEach: 'readonly',
      afterEach: 'readonly',
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
],


  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    'commitlint.config.cjs',
  ],
};
