import type { Linter } from "eslint";

const config: Linter.Config = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:regexp/recommended",
        "plugin:unicorn/recommended",
        "plugin:sonarjs/recommended",
        "plugin:security/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
    },
    plugins: [
        "regexp",
        "jsx-a11y",
        "autofix",
        "sonarjs",
        "unicorn",
        "@typescript-eslint",
        "simple-import-sort",
    ],
    rules: {
        quotes: [
            2,
            "double",
            {
                avoidEscape: true,
            },
        ],
        // Eslint
        "prefer-arrow-callback": 2,
        semi: [2, "always"],
        // Import sorting
        "simple-import-sort/imports": 2,
        "simple-import-sort/exports": 2,
        // SonarJS
        "sonarjs/no-duplicate-string": 0,
        // Unicorn
        "unicorn/no-null": 0,
        "unicorn/prefer-module": 0,
        "unicorn/no-useless-undefined": 0,
        "unicorn/prevent-abbreviations": 0,
        "unicorn/no-await-expression-member": 0,
        // Typescript
        "@typescript-eslint/no-namespace": 0,
        "@typescript-eslint/no-misused-promises": 0,
        "@typescript-eslint/no-unused-vars": [2],
        "@typescript-eslint/no-unsafe-call": 0,
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
    },
    overrides: [
        {
            files: ["*.js", "*.cjs"],
            rules: {
                "@typescript-eslint/no-var-requires": 0,
            },
        },
        {
            files: ["*.js", "*.ts", "*.cjs", "*.mjs", "*.mts", "*.cts"],
            rules: {
                "simple-import-sort/imports": [
                    "error",
                    {
                        groups: [
                            ["dotenv/config"],
                            ["^node:"],
                            ["^@?\\w"],
                            ["^[\\w]"],
                            ["^"],
                            ["^\\."],
                        ],
                    },
                ],
            },
        },
    ],
};

export default config;
