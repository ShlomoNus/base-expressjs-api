import { defineConfig } from 'eslint/config'; 
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import-x';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default defineConfig([ 
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            '@stylistic': stylistic,
            import: importPlugin as any,
        },
    },
    {
        ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js'],
    },
    {
        files: ['src/**/*.ts'],
        rules: {
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/quotes': ['error', 'double'],
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            "@stylistic/comma-dangle": ["error", "never"],
            '@stylistic/indent': ['error', 4],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/space-before-function-paren': ['error', 'never'],
            '@stylistic/padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: '*', next: 'block' },
                { blankLine: 'always', prev: 'for', next: '*' },
                { blankLine: 'always', prev: '*', next: 'for' },
                { blankLine: 'always', prev: 'if', next: '*' },
                { blankLine: 'always', prev: '*', next: 'if' },
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },

                { blankLine: 'always', prev: 'export', next: '*' },
                { blankLine: 'never', prev: 'export', next: 'export' },
                { blankLine: 'always', prev: 'function', next: '*' },
                { blankLine: 'always', prev: '*', next: 'function' },
                { blankLine: 'always', prev: '*', next: 'export' },
                { blankLine: 'always', prev: '*', next: 'function' },
                { blankLine: 'always', prev: 'function', next: '*' },
            ],
            '@stylistic/padded-blocks': ['error', 'never'],
            '@stylistic/lines-between-class-members': ['error',
                {
                    enforce: [
                        { blankLine: "always", prev: "method", next: "field" },
                        { blankLine: "always", prev: "field", next: "method" },
                        { blankLine: "always", prev: "method", next: "method" },
                        { blankLine: "never", prev: "field", next: "field" }
                    ]
                },
            ],
            'no-duplicate-imports': ["error", { "includeExports": true }],
            'no-console': ['error', { allow: ['warn', 'error', 'info', 'time', 'timeEnd'] }],
            "@stylistic/curly-newline": ["error", { "minElements": 1 }],
            'prefer-const': 'error',
            'no-debugger': 'warn',
            'no-var': 'error',
            'no-control-regex': 'off',
            'max-lines': ['warn', { max: 300 }],
            'max-params': ["error", 2],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/naming-convention': [
                'error',
                { selector: 'class', format: ['PascalCase'] },
                { selector: 'typeAlias', format: ['PascalCase'] },
                { selector: 'interface', format: ['PascalCase'] },
                {
                    selector: 'variable',
                    format: ['camelCase', 'UPPER_CASE'],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'allow',
                },
                { selector: 'function', format: ['camelCase'] },
                { selector: 'enum', format: ['PascalCase'] },
            ],
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
            '@typescript-eslint/promise-function-async': 'error',
            'capitalized-comments': ['warn', 'always', { ignoreConsecutiveComments: true }],
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
        },
    },
          {
        languageOptions: {
            parser: tseslint.parser,
            globals: {
                ...globals.node,
                ...globals.es2025,
            },
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json',
                },
            },
        },
    },
]);