const {defaults} = require('jest-config');

module.exports = {
    preset: "react-native",
    'moduleNameMapper': {
        'styled-components': '<rootDir>/node_modules/styled-components/native/dist/styled-components.native.cjs.js'
    }
};