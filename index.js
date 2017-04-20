module.exports = {
    parserOptions: {
        ecmaVersion: 6
    },
    env: {
        node: true
    },
    plugins: [
        'standard',
        'promise',
        'html'
    ],
    rules: {
        'brace-style': ['error', '1tbs', {
            allowSingleLine: false
        }],
        'curly': ['error', 'all'],
        'indent': ['error', 4, {
            SwitchCase: 1
        }],
        'no-unused-vars': ['error', {
            "args": 'none'
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
