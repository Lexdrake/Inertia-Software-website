// Showcase Page JavaScript

// File tree data structures
const fileStructures = {
    messy: [
        { name: 'src', type: 'folder', level: 0 },
        { name: 'App.js', type: 'file', level: 1 },
        { name: 'Button.js', type: 'component', level: 1 },
        { name: 'utils.js', type: 'file', level: 1 },
        { name: 'data.js', type: 'file', level: 1 },
        { name: 'Header.js', type: 'component', level: 1 },
        { name: 'api-calls.js', type: 'file', level: 1 },
        { name: 'styles.css', type: 'file', level: 1 },
        { name: 'HomePage.js', type: 'component', level: 1 },
        { name: 'config.js', type: 'config', level: 1 },
        { name: 'LoginForm.js', type: 'component', level: 1 },
        { name: 'helpers.js', type: 'file', level: 1 }
    ],
    organized: [
        { name: 'src', type: 'folder', level: 0 },
        { name: 'components/', type: 'folder', level: 1 },
        { name: 'Button/', type: 'folder', level: 2 },
        { name: 'Button.jsx', type: 'component', level: 3 },
        { name: 'Button.styles.js', type: 'file', level: 3 },
        { name: 'Button.test.js', type: 'file', level: 3 },
        { name: 'Header/', type: 'folder', level: 2 },
        { name: 'Header.jsx', type: 'component', level: 3 },
        { name: 'Header.styles.js', type: 'file', level: 3 },
        { name: 'pages/', type: 'folder', level: 1 },
        { name: 'HomePage/', type: 'folder', level: 2 },
        { name: 'HomePage.jsx', type: 'component', level: 3 },
        { name: 'HomePage.hooks.js', type: 'file', level: 3 },
        { name: 'services/', type: 'folder', level: 1 },
        { name: 'api/', type: 'folder', level: 2 },
        { name: 'userService.js', type: 'file', level: 3 },
        { name: 'authService.js', type: 'file', level: 3 },
        { name: 'utils/', type: 'folder', level: 1 },
        { name: 'helpers.js', type: 'file', level: 2 },
        { name: 'constants.js', type: 'config', level: 2 },
        { name: 'config/', type: 'folder', level: 1 },
        { name: 'app.config.js', type: 'config', level: 2 }
    ]
};

