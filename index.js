module.exports = {
    extends: "standard",
    parserOptions: {
        ecmaVersion: 6
    },
    env: {
        node: true
    },
    plugins: [
        'standard',
        'promise',
        'html',
        'json'
    ],
    rules: {
        'brace-style': ['error', '1tbs', {
            allowSingleLine: false
        }],
        'curly': ['error', 'all'],
        'indent': ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: {
                parameters: 2,
                body: 1
            },
            FunctionExpression: {
                parameters: 2,
                body: 1
            },
            CallExpression: {
                arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            flatTernaryExpressions: true
        }],
        'no-unused-vars': ['error', {
            args: 'none'
        }],
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': 'off',
        'semi': ['error', 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'ignore'
        }]
    }
};
