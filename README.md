# quoin/eslint-config-quoin

Shared configuration for [eslint](http://eslint.org/)

## Usage

    npm install --save-dev @quoin/eslint-config-quoin

In your `.eslintrc.json`, use as follow:

    {
      "root": true,
      "extends": "@quoin/eslint-config-quoin"
    }

In your `.eslintrc.test.json`, use as follow:

    {
      "root": true,
      "extends": "@quoin/eslint-config-quoin/node-test"
    }

In your `.eslintrc.client.json`, use as follow:

    {
      "root": true,
      "extends": "@quoin/eslint-config-quoin/client",
      "env": {
        "jquery": true
      }
    }

### grunt-eslint

If you are using `grunt-eslint`, add the same line in your grunt configs.
