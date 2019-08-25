// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        jest: true,
    },
    globals: {
        expect: true,
        it: true,
        describe: true,
        heap: true,
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        // 'vue',
        // 'html'
    ],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack.config.js'
            }
        }
    },
    // add your custom rules here
    rules: {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            js: 'never',
        }],
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'state', // for vuex state
                'acc', // for reduce accumulators
                'e' // for e.returnvalue
            ]
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            optionalDependencies: ['test/unit/index.js']
        }],
        // allow debugger during development
        'no-debugger': 'error',
        // allow importer with glob
        'import/no-unresolved': ['error', {
            ignore: ['\\*']
        }],
        // disable camalcase
        'camelcase': ['off'],
        'class-methods-use-this': ['off'],
        "indent": ["error", 2]
    }
};
