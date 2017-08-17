module.exports = {
    "extends": ["airbnb", "plugin:flowtype/recommended"],
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "flowtype/*": 0,
        "no-case-declarations": 0,
        "no-console": 0,
        "react/prop-types": 0,
        "class-methods-use-this": 0,
        "react/jsx-filename-extension": 0,
        "camelcase": 0,
        "arrow-parens": [2, "always"],
        "jsx-a11y/href-no-hash": "off",
        //"jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
        "jsx-a11y/anchor-is-valid": 0,
        "import/no-extraneous-dependencies": 0,
        "no-multi-spaces": ["error", { exceptions: { "ImportDeclaration": true, "VariableDeclarator": true } }],
        "max-len": [2, { "code": 120 }],
        "indent": 0,
        /*"indent": ["error", 2, {
            "VariableDeclarator": 2,
            "SwitchCase": 1,
            "MemberExpression": 1,
            "FunctionDeclaration": { "body": 1, "parameters": "first" },
            "CallExpression": { "arguments": "first" },
            "ArrayExpression": "first",
            "ObjectExpression": "first",
            ImportDeclaration: "first",
        }],
        */
        "arrow-body-style": ["error", "always"],
        "key-spacing": [1, { "align": "value" }],
    },
    "globals": {
        "fetch": true,
        "window": true,
        "document": true,
        "localStorage": true
    }
};