module.exports = {
    'extends': 'eslint-config-kujon',
    'plugins': ['react'],
    'settings': {
        'react': {
            'pragma': 'React',
            'version': '15.0'
        }
    },
    'rules': {
        'react/jsx-uses-react': [2],
        'react/jsx-uses-vars': [2],
        'react/jsx-no-undef': [2]
    }
};
