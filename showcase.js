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

// Timeline data showing project growth over time
const timelineData = {
    messy: [
        // Month 1
        [
            { name: 'src', type: 'folder', level: 0 },
            { name: 'App.js', type: 'file', level: 1 },
            { name: 'Button.js', type: 'component', level: 1 },
            { name: 'utils.js', type: 'file', level: 1 },
            { name: 'styles.css', type: 'file', level: 1 }
        ],
        // Month 3
        [
            { name: 'src', type: 'folder', level: 0 },
            { name: 'App.js', type: 'file', level: 1 },
            { name: 'Button.js', type: 'component', level: 1 },
            { name: 'utils.js', type: 'file', level: 1 },
            { name: 'styles.css', type: 'file', level: 1 },
            { name: 'Header.js', type: 'component', level: 1 },
            { name: 'HomePage.js', type: 'component', level: 1 },
            { name: 'api-calls.js', type: 'file', level: 1 },
            { name: 'data.js', type: 'file', level: 1 },
            { name: 'helpers.js', type: 'file', level: 1 }
        ],
        // Month 6
        [
            { name: 'src', type: 'folder', level: 0 },
            { name: 'App.js', type: 'file', level: 1 },
            { name: 'Button.js', type: 'component', level: 1 },
            { name: 'utils.js', type: 'file', level: 1 },
            { name: 'styles.css', type: 'file', level: 1 },
            { name: 'Header.js', type: 'component', level: 1 },
            { name: 'HomePage.js', type: 'component', level: 1 },
            { name: 'api-calls.js', type: 'file', level: 1 },
            { name: 'data.js', type: 'file', level: 1 },
            { name: 'helpers.js', type: 'file', level: 1 },
            { name: 'LoginForm.js', type: 'component', level: 1 },
            { name: 'config.js', type: 'config', level: 1 },
            { name: 'UserProfile.js', type: 'component', level: 1 },
            { name: 'api-helpers.js', type: 'file', level: 1 },
            { name: 'form-utils.js', type: 'file', level: 1 }
        ],
        // Month 9
        [
            { name: 'src', type: 'folder', level: 0 },
            { name: 'App.js', type: 'file', level: 1 },
            { name: 'Button.js', type: 'component', level: 1 },
            { name: 'utils.js', type: 'file', level: 1 },
            { name: 'styles.css', type: 'file', level: 1 },
            { name: 'Header.js', type: 'component', level: 1 },
            { name: 'HomePage.js', type: 'component', level: 1 },
            { name: 'api-calls.js', type: 'file', level: 1 },
            { name: 'data.js', type: 'file', level: 1 },
            { name: 'helpers.js', type: 'file', level: 1 },
            { name: 'LoginForm.js', type: 'component', level: 1 },
            { name: 'config.js', type: 'config', level: 1 },
            { name: 'UserProfile.js', type: 'component', level: 1 },
            { name: 'api-helpers.js', type: 'file', level: 1 },
            { name: 'form-utils.js', type: 'file', level: 1 },
            { name: 'Dashboard.js', type: 'component', level: 1 },
            { name: 'Modal.js', type: 'component', level: 1 },
            { name: 'utils2.js', type: 'file', level: 1, duplicate: true },
            { name: 'api-service.js', type: 'file', level: 1 },
            { name: 'helpers2.js', type: 'file', level: 1, duplicate: true },
            { name: 'more-styles.css', type: 'file', level: 1 },
            { name: 'constants.js', type: 'config', level: 1 }
        ],
        // Month 12
        [
            { name: 'src', type: 'folder', level: 0 },
            { name: 'App.js', type: 'file', level: 1 },
            { name: 'Button.js', type: 'component', level: 1 },
            { name: 'utils.js', type: 'file', level: 1 },
            { name: 'styles.css', type: 'file', level: 1 },
            { name: 'Header.js', type: 'component', level: 1 },
            { name: 'HomePage.js', type: 'component', level: 1 },
            { name: 'api-calls.js', type: 'file', level: 1 },
            { name: 'data.js', type: 'file', level: 1 },
            { name: 'helpers.js', type: 'file', level: 1 },
            { name: 'LoginForm.js', type: 'component', level: 1 },
            { name: 'config.js', type: 'config', level: 1 },
            { name: 'UserProfile.js', type: 'component', level: 1 },
            { name: 'api-helpers.js', type: 'file', level: 1 },
            { name: 'form-utils.js', type: 'file', level: 1 },
            { name: 'Dashboard.js', type: 'component', level: 1 },
            { name: 'Modal.js', type: 'component', level: 1 },
            { name: 'utils2.js', type: 'file', level: 1, duplicate: true },
            { name: 'api-service.js', type: 'file', level: 1 },
            { name: 'helpers2.js', type: 'file', level: 1, duplicate: true },
            { name: 'more-styles.css', type: 'file', level: 1 },
            { name: 'constants.js', type: 'config', level: 1 },
            { name: 'Settings.js', type: 'component', level: 1 },
            { name: 'Sidebar.js', type: 'component', level: 1 },
            { name: 'auth-utils.js', type: 'file', level: 1 },
            { name: 'form-helpers.js', type: 'file', level: 1, duplicate: true },
            { name: 'validation.js', type: 'file', level: 1 },
            { name: 'theme.css', type: 'file', level: 1 }
        ],
        // Month 18
        [
            { name: 'src', type: 'folder', level: 0 },
            { name: 'App.js', type: 'file', level: 1 },
            { name: 'Button.js', type: 'component', level: 1 },
            { name: 'utils.js', type: 'file', level: 1 },
            { name: 'styles.css', type: 'file', level: 1 },
            { name: 'Header.js', type: 'component', level: 1 },
            { name: 'HomePage.js', type: 'component', level: 1 },
            { name: 'api-calls.js', type: 'file', level: 1 },
            { name: 'data.js', type: 'file', level: 1 },
            { name: 'helpers.js', type: 'file', level: 1 },
            { name: 'LoginForm.js', type: 'component', level: 1 },
            { name: 'config.js', type: 'config', level: 1 },
            { name: 'UserProfile.js', type: 'component', level: 1 },
            { name: 'api-helpers.js', type: 'file', level: 1 },
            { name: 'form-utils.js', type: 'file', level: 1 },
            { name: 'Dashboard.js', type: 'component', level: 1 },
            { name: 'Modal.js', type: 'component', level: 1 },
            { name: 'utils2.js', type: 'file', level: 1, duplicate: true },
            { name: 'api-service.js', type: 'file', level: 1 },
            { name: 'helpers2.js', type: 'file', level: 1, duplicate: true },
            { name: 'more-styles.css', type: 'file', level: 1 },
            { name: 'constants.js', type: 'config', level: 1 },
            { name: 'Settings.js', type: 'component', level: 1 },
            { name: 'Sidebar.js', type: 'component', level: 1 },
            { name: 'auth-utils.js', type: 'file', level: 1 },
            { name: 'form-helpers.js', type: 'file', level: 1, duplicate: true },
            { name: 'validation.js', type: 'file', level: 1 },
            { name: 'theme.css', type: 'file', level: 1 },
            { name: 'SearchPage.js', type: 'component', level: 1 },
            { name: 'Filters.js', type: 'component', level: 1 },
            { name: 'utils3.js', type: 'file', level: 1, duplicate: true },
            { name: 'search-helpers.js', type: 'file', level: 1, duplicate: true },
            { name: 'pagination.js', type: 'file', level: 1 },
            { name: 'sorting.js', type: 'file', level: 1 },
            { name: 'filters-data.js', type: 'file', level: 1 },
            { name: 'search-config.js', type: 'config', level: 1 }
        ]
    ],
    organized: [
        // Month 1
        [
            { name: 'src', type: 'folder', level: 0 },
            { name: 'components/', type: 'folder', level: 1 },
            { name: 'Button/', type: 'folder', level: 2 },
            { name: 'Button.jsx', type: 'component', level: 3 },
            { name: 'utils/', type: 'folder', level: 1 },
            { name: 'helpers.js', type: 'file', level: 2 },
            { name: 'config/', type: 'folder', level: 1 },
            { name: 'app.config.js', type: 'config', level: 2 }
        ],
        // Month 3
        [
            { name: 'src', type: 'folder', level: 0 },
            { name: 'components/', type: 'folder', level: 1 },
            { name: 'Button/', type: 'folder', level: 2 },
            { name: 'Button.jsx', type: 'component', level: 3 },
            { name: 'Button.styles.js', type: 'file', level: 3 },
            { name: 'Header/', type: 'folder', level: 2 },
            { name: 'Header.jsx', type: 'component', level: 3 },
            { name: 'Header.styles.js', type: 'file', level: 3 },
            { name: 'pages/', type: 'folder', level: 1 },
            { name: 'HomePage/', type: 'folder', level: 2 },
            { name: 'HomePage.jsx', type: 'component', level: 3 },
            { name: 'services/', type: 'folder', level: 1 },
            { name: 'api/', type: 'folder', level: 2 },
            { name: 'apiService.js', type: 'file', level: 3 },
            { name: 'utils/', type: 'folder', level: 1 },
            { name: 'helpers.js', type: 'file', level: 2 },
            { name: 'config/', type: 'folder', level: 1 },
            { name: 'app.config.js', type: 'config', level: 2 }
        ],
        // Month 6
        [
            { name: 'src', type: 'folder', level: 0 },
            { name: 'components/', type: 'folder', level: 1 },
            { name: 'Button/', type: 'folder', level: 2 },
            { name: 'Button.jsx', type: 'component', level: 3 },
            { name: 'Button.styles.js', type: 'file', level: 3 },
            { name: 'Button.test.js', type: 'file', level: 3 },
            { name: 'Header/', type: 'folder', level: 2 },
            { name: 'Header.jsx', type: 'component', level: 3 },
            { name: 'Header.styles.js', type: 'file', level: 3 },
            { name: 'LoginForm/', type: 'folder', level: 2 },
            { name: 'LoginForm.jsx', type: 'component', level: 3 },
            { name: 'LoginForm.styles.js', type: 'file', level: 3 },
            { name: 'pages/', type: 'folder', level: 1 },
            { name: 'HomePage/', type: 'folder', level: 2 },
            { name: 'HomePage.jsx', type: 'component', level: 3 },
            { name: 'HomePage.hooks.js', type: 'file', level: 3 },
            { name: 'services/', type: 'folder', level: 1 },
            { name: 'api/', type: 'folder', level: 2 },
            { name: 'apiService.js', type: 'file', level: 3 },
            { name: 'authService.js', type: 'file', level: 3 },
            { name: 'utils/', type: 'folder', level: 1 },
            { name: 'helpers.js', type: 'file', level: 2 },
            { name: 'formUtils.js', type: 'file', level: 2 },
            { name: 'config/', type: 'folder', level: 1 },
            { name: 'app.config.js', type: 'config', level: 2 }
        ],
        // Month 9
        [
            { name: 'src', type: 'folder', level: 0 },
            { name: 'components/', type: 'folder', level: 1 },
            { name: 'Button/', type: 'folder', level: 2 },
            { name: 'Button.jsx', type: 'component', level: 3 },
            { name: 'Button.styles.js', type: 'file', level: 3 },
            { name: 'Button.test.js', type: 'file', level: 3 },
            { name: 'Header/', type: 'folder', level: 2 },
            { name: 'Header.jsx', type: 'component', level: 3 },
            { name: 'Header.styles.js', type: 'file', level: 3 },
            { name: 'LoginForm/', type: 'folder', level: 2 },
            { name: 'LoginForm.jsx', type: 'component', level: 3 },
            { name: 'LoginForm.styles.js', type: 'file', level: 3 },
            { name: 'UserProfile/', type: 'folder', level: 2 },
            { name: 'UserProfile.jsx', type: 'component', level: 3 },
            { name: 'Dashboard/', type: 'folder', level: 2 },
            { name: 'Dashboard.jsx', type: 'component', level: 3 },
            { name: 'Modal/', type: 'folder', level: 2 },
            { name: 'Modal.jsx', type: 'component', level: 3 },
            { name: 'pages/', type: 'folder', level: 1 },
            { name: 'HomePage/', type: 'folder', level: 2 },
            { name: 'HomePage.jsx', type: 'component', level: 3 },
            { name: 'HomePage.hooks.js', type: 'file', level: 3 },
            { name: 'services/', type: 'folder', level: 1 },
            { name: 'api/', type: 'folder', level: 2 },
            { name: 'apiService.js', type: 'file', level: 3 },
            { name: 'authService.js', type: 'file', level: 3 },
            { name: 'userService.js', type: 'file', level: 3 },
            { name: 'utils/', type: 'folder', level: 1 },
            { name: 'helpers.js', type: 'file', level: 2 },
            { name: 'formUtils.js', type: 'file', level: 2 },
            { name: 'constants.js', type: 'config', level: 2 },
            { name: 'config/', type: 'folder', level: 1 },
            { name: 'app.config.js', type: 'config', level: 2 }
        ],
        // Month 12
        [
            { name: 'src', type: 'folder', level: 0 },
            { name: 'components/', type: 'folder', level: 1 },
            { name: 'Button/', type: 'folder', level: 2 },
            { name: 'Button.jsx', type: 'component', level: 3 },
            { name: 'Button.styles.js', type: 'file', level: 3 },
            { name: 'Button.test.js', type: 'file', level: 3 },
            { name: 'Header/', type: 'folder', level: 2 },
            { name: 'Header.jsx', type: 'component', level: 3 },
            { name: 'Header.styles.js', type: 'file', level: 3 },
            { name: 'LoginForm/', type: 'folder', level: 2 },
            { name: 'LoginForm.jsx', type: 'component', level: 3 },
            { name: 'LoginForm.styles.js', type: 'file', level: 3 },
            { name: 'UserProfile/', type: 'folder', level: 2 },
            { name: 'UserProfile.jsx', type: 'component', level: 3 },
            { name: 'Dashboard/', type: 'folder', level: 2 },
            { name: 'Dashboard.jsx', type: 'component', level: 3 },
            { name: 'Modal/', type: 'folder', level: 2 },
            { name: 'Modal.jsx', type: 'component', level: 3 },
            { name: 'Settings/', type: 'folder', level: 2 },
            { name: 'Settings.jsx', type: 'component', level: 3 },
            { name: 'Sidebar/', type: 'folder', level: 2 },
            { name: 'Sidebar.jsx', type: 'component', level: 3 },
            { name: 'pages/', type: 'folder', level: 1 },
            { name: 'HomePage/', type: 'folder', level: 2 },
            { name: 'HomePage.jsx', type: 'component', level: 3 },
            { name: 'HomePage.hooks.js', type: 'file', level: 3 },
            { name: 'services/', type: 'folder', level: 1 },
            { name: 'api/', type: 'folder', level: 2 },
            { name: 'apiService.js', type: 'file', level: 3 },
            { name: 'authService.js', type: 'file', level: 3 },
            { name: 'userService.js', type: 'file', level: 3 },
            { name: 'utils/', type: 'folder', level: 1 },
            { name: 'helpers.js', type: 'file', level: 2 },
            { name: 'formUtils.js', type: 'file', level: 2 },
            { name: 'authUtils.js', type: 'file', level: 2 },
            { name: 'validation.js', type: 'file', level: 2 },
            { name: 'constants.js', type: 'config', level: 2 },
            { name: 'config/', type: 'folder', level: 1 },
            { name: 'app.config.js', type: 'config', level: 2 },
            { name: 'theme.config.js', type: 'config', level: 2 }
        ],
        // Month 18
        [
            { name: 'src', type: 'folder', level: 0 },
            { name: 'components/', type: 'folder', level: 1 },
            { name: 'Button/', type: 'folder', level: 2 },
            { name: 'Button.jsx', type: 'component', level: 3 },
            { name: 'Button.styles.js', type: 'file', level: 3 },
            { name: 'Button.test.js', type: 'file', level: 3 },
            { name: 'Header/', type: 'folder', level: 2 },
            { name: 'Header.jsx', type: 'component', level: 3 },
            { name: 'Header.styles.js', type: 'file', level: 3 },
            { name: 'LoginForm/', type: 'folder', level: 2 },
            { name: 'LoginForm.jsx', type: 'component', level: 3 },
            { name: 'LoginForm.styles.js', type: 'file', level: 3 },
            { name: 'UserProfile/', type: 'folder', level: 2 },
            { name: 'UserProfile.jsx', type: 'component', level: 3 },
            { name: 'Dashboard/', type: 'folder', level: 2 },
            { name: 'Dashboard.jsx', type: 'component', level: 3 },
            { name: 'Modal/', type: 'folder', level: 2 },
            { name: 'Modal.jsx', type: 'component', level: 3 },
            { name: 'Settings/', type: 'folder', level: 2 },
            { name: 'Settings.jsx', type: 'component', level: 3 },
            { name: 'Sidebar/', type: 'folder', level: 2 },
            { name: 'Sidebar.jsx', type: 'component', level: 3 },
            { name: 'SearchPage/', type: 'folder', level: 2 },
            { name: 'SearchPage.jsx', type: 'component', level: 3 },
            { name: 'Filters/', type: 'folder', level: 2 },
            { name: 'Filters.jsx', type: 'component', level: 3 },
            { name: 'pages/', type: 'folder', level: 1 },
            { name: 'HomePage/', type: 'folder', level: 2 },
            { name: 'HomePage.jsx', type: 'component', level: 3 },
            { name: 'HomePage.hooks.js', type: 'file', level: 3 },
            { name: 'services/', type: 'folder', level: 1 },
            { name: 'api/', type: 'folder', level: 2 },
            { name: 'apiService.js', type: 'file', level: 3 },
            { name: 'authService.js', type: 'file', level: 3 },
            { name: 'userService.js', type: 'file', level: 3 },
            { name: 'searchService.js', type: 'file', level: 3 },
            { name: 'utils/', type: 'folder', level: 1 },
            { name: 'helpers.js', type: 'file', level: 2 },
            { name: 'formUtils.js', type: 'file', level: 2 },
            { name: 'authUtils.js', type: 'file', level: 2 },
            { name: 'validation.js', type: 'file', level: 2 },
            { name: 'searchUtils.js', type: 'file', level: 2 },
            { name: 'pagination.js', type: 'file', level: 2 },
            { name: 'constants.js', type: 'config', level: 2 },
            { name: 'config/', type: 'folder', level: 1 },
            { name: 'app.config.js', type: 'config', level: 2 },
            { name: 'theme.config.js', type: 'config', level: 2 },
            { name: 'search.config.js', type: 'config', level: 2 }
        ]
    ]
};

// Style descriptions
const styleDescriptions = {
    modern: {
        title: "Modern Style",
        description: "Clean lines, subtle shadows, and a focus on whitespace create a contemporary feel that appeals to tech-savvy users."
    },
    corporate: {
        title: "Corporate Style", 
        description: "Professional, trustworthy design with structured layouts and conservative colors that instill confidence in business environments."
    },
    playful: {
        title: "Playful Style",
        description: "Vibrant colors, rounded corners, and engaging animations create a fun, approachable experience perfect for consumer applications."
    },
    minimal: {
        title: "Minimal Style",
        description: "Essential elements only, with generous whitespace and subtle typography focusing attention on content and functionality."
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initBreadcrumbNavigation();
    initFileTreeDemo();
    initDesignPlayground();
    initStyleAdaptation();
    initWorkflowPreview();
});

// Scroll-triggered animations
function initScrollAnimations() {
    const sections = document.querySelectorAll('.showcase-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Breadcrumb navigation
function initBreadcrumbNavigation() {
    const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');
    const sections = document.querySelectorAll('.showcase-section');

    // Update active breadcrumb based on scroll position
    const updateActiveBreadcrumb = () => {
        let current = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 200) {
                current = section.id;
            }
        });

        breadcrumbItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === current) {
                item.classList.add('active');
            }
        });
    };

    // Smooth scroll to section when breadcrumb clicked
    breadcrumbItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offset = 150; // Account for sticky nav
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update breadcrumb on scroll
    window.addEventListener('scroll', updateActiveBreadcrumb);
    updateActiveBreadcrumb(); // Initial call
}

// File tree demonstration
function initFileTreeDemo() {
    const demoButtons = document.querySelectorAll('.demo-btn');
    const fileTreeContainer = document.getElementById('fileTree');
    
    function renderFileTree(structure) {
        const html = structure.map(item => {
            const indent = '  '.repeat(item.level);
            const icon = getFileIcon(item.type);
            const className = item.type;
            
            return `<div class="file-item ${className}" style="padding-left: ${item.level * 20}px;">
                <span class="file-icon">${icon}</span>
                <span>${item.name}</span>
            </div>`;
        }).join('');
        
        fileTreeContainer.innerHTML = html;
        
        // Animate items in
        const items = fileTreeContainer.querySelectorAll('.file-item');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 50);
        });
    }
    
    function getFileIcon(type) {
        const icons = {
            folder: '📁',
            file: '📄',
            component: '⚛️',
            config: '⚙️'
        };
        return icons[type] || '📄';
    }
    
    // Handle demo button clicks
    demoButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            demoButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const structure = btn.dataset.architecture;
            
            if (structure === 'timeline') {
                document.getElementById('singleTreeView').style.display = 'none';
                document.getElementById('timelineView').style.display = 'block';
                initTimelineComparison();
            } else {
                document.getElementById('singleTreeView').style.display = 'block';
                document.getElementById('timelineView').style.display = 'none';
                renderFileTree(fileStructures[structure]);
            }
        });
    });
    
    // Initialize with messy structure
    renderFileTree(fileStructures.messy);
}

// Timeline comparison functionality
function initTimelineComparison() {
    const timelineSlider = document.getElementById('timelineSlider');
    
    if (!timelineSlider) return;
    
    timelineSlider.addEventListener('input', (e) => {
        const timelineIndex = parseInt(e.target.value);
        updateTimelineView(timelineIndex);
    });
    
    // Initialize with first timeline state
    updateTimelineView(0);
}

function updateTimelineView(timelineIndex) {
    const messyData = timelineData.messy[timelineIndex];
    const organizedData = timelineData.organized[timelineIndex];
    
    // Render both trees
    renderTimelineTree('messyTimelineTree', messyData, 'messy');
    renderTimelineTree('organizedTimelineTree', organizedData, 'organized');
    
    // Update metrics
    updateMetrics(messyData, organizedData);
}

function renderTimelineTree(containerId, structure, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const html = structure.map((item, index) => {
        const indent = '  '.repeat(item.level);
        const icon = getFileIcon(item.type);
        const className = item.type + (item.duplicate ? ' duplicate-file' : ' new-file');
        
        return `<div class="file-item ${className}" style="padding-left: ${item.level * 20}px;">
            <span class="file-icon">${icon}</span>
            <span>${item.name}</span>
        </div>`;
    }).join('');
    
    container.innerHTML = html;
    
    // Animate items in with staggered timing
    const items = container.querySelectorAll('.file-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        setTimeout(() => {
            item.style.transition = 'all 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 30);
    });
}

function updateMetrics(messyData, organizedData) {
    // Calculate metrics for messy structure
    const messyFileCount = messyData.length - messyData.filter(item => item.type === 'folder').length;
    const messyMaxDepth = Math.max(...messyData.map(item => item.level));
    const messyDuplicates = messyData.filter(item => item.duplicate).length;
    
    // Calculate metrics for organized structure
    const organizedFileCount = organizedData.length - organizedData.filter(item => item.type === 'folder').length;
    const organizedMaxDepth = Math.max(...organizedData.map(item => item.level));
    const organizedDuplicates = organizedData.filter(item => item.duplicate).length;
    
    // Update UI
    document.getElementById('messyFileCount').textContent = messyFileCount;
    document.getElementById('messyDepth').textContent = messyMaxDepth;
    document.getElementById('messyDuplicates').textContent = messyDuplicates;
    
    document.getElementById('organizedFileCount').textContent = organizedFileCount;
    document.getElementById('organizedDepth').textContent = organizedMaxDepth;
    document.getElementById('organizedDuplicates').textContent = organizedDuplicates;
    
    // Highlight duplicate metrics if they exist
    const messyDuplicateMetric = document.querySelector('#messyDuplicates').closest('.metric');
    const organizedDuplicateMetric = document.querySelector('#organizedDuplicates').closest('.metric');
    
    if (messyDuplicates > 0) {
        messyDuplicateMetric.classList.add('has-duplicates');
    } else {
        messyDuplicateMetric.classList.remove('has-duplicates');
    }
    
    if (organizedDuplicates > 0) {
        organizedDuplicateMetric.classList.add('has-duplicates');
    } else {
        organizedDuplicateMetric.classList.remove('has-duplicates');
    }
    
    // Animate metric updates
    animateMetricUpdate('messyFileCount', messyFileCount);
    animateMetricUpdate('organizedFileCount', organizedFileCount);
}

function animateMetricUpdate(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.style.transform = 'scale(1.2)';
    element.style.color = '#4caf50';
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.color = '';
    }, 300);
}

// Design system playground
function initDesignPlayground() {
    const primaryColorInput = document.getElementById('primaryColor');
    const fontSizeInput = document.getElementById('fontSize');
    const borderRadiusInput = document.getElementById('borderRadius');
    const shadowIntensityInput = document.getElementById('shadowIntensity');
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    const fontSizeValue = document.getElementById('fontSizeValue');
    const borderRadiusValue = document.getElementById('borderRadiusValue');
    const shadowIntensityValue = document.getElementById('shadowIntensityValue');
    
    // Component picker functionality
    initComponentPicker();
    
    // Component state functionality
    initComponentStates();
    
    function updateDesignSystem() {
        const primaryColor = primaryColorInput.value;
        const fontSize = fontSizeInput.value + 'px';
        const borderRadius = borderRadiusInput.value + 'px';
        const shadowIntensity = shadowIntensityInput.value;
        
        // Update display values
        fontSizeValue.textContent = fontSize;
        borderRadiusValue.textContent = borderRadius;
        shadowIntensityValue.textContent = shadowIntensity;
        
        // Calculate shadow based on intensity
        const shadowValue = `0 ${shadowIntensity * 2}px ${shadowIntensity * 4}px rgba(0, 0, 0, 0.${shadowIntensity})`;
        
        // Apply CSS custom properties globally for the design system
        const root = document.documentElement;
        root.style.setProperty('--demo-primary-color', primaryColor);
        root.style.setProperty('--demo-font-size', fontSize);
        root.style.setProperty('--demo-border-radius', borderRadius);
        root.style.setProperty('--demo-shadow', shadowValue);
        
        // Update all demo components with current styles
        updateAllComponents();
    }
    
    function updateAllComponents() {
        const primaryColor = primaryColorInput.value;
        const borderRadius = borderRadiusInput.value + 'px';
        const shadowIntensity = shadowIntensityInput.value;
        
        // Update buttons
        document.querySelectorAll('.primary-btn').forEach(btn => {
            btn.style.backgroundColor = primaryColor;
            btn.style.borderRadius = borderRadius;
        });
        
        // Update cards
        document.querySelectorAll('.demo-card').forEach(card => {
            card.style.borderRadius = borderRadius;
        });
        
        // Update form elements
        document.querySelectorAll('.demo-input, .demo-textarea, .demo-select').forEach(input => {
            input.style.borderRadius = borderRadius;
        });
        
        // Update checkboxes
        document.querySelectorAll('.demo-checkbox').forEach(checkbox => {
            checkbox.style.accentColor = primaryColor;
        });
        
        // Update navigation
        document.querySelectorAll('.demo-nav').forEach(nav => {
            nav.style.borderRadius = borderRadius;
        });
    }
    
    function toggleDarkMode() {
        const designSystemSection = document.getElementById('design-system');
        if (darkModeToggle.checked) {
            designSystemSection.classList.add('dark-mode');
        } else {
            designSystemSection.classList.remove('dark-mode');
        }
    }
    
    // Add event listeners
    primaryColorInput.addEventListener('input', updateDesignSystem);
    fontSizeInput.addEventListener('input', updateDesignSystem);
    borderRadiusInput.addEventListener('input', updateDesignSystem);
    shadowIntensityInput.addEventListener('input', updateDesignSystem);
    darkModeToggle.addEventListener('change', toggleDarkMode);
    
    // Initialize
    updateDesignSystem();
}

function initComponentPicker() {
    const pickerTabs = document.querySelectorAll('.picker-tab');
    const componentSets = document.querySelectorAll('.component-set');
    
    pickerTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            pickerTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Hide all component sets
            componentSets.forEach(set => set.style.display = 'none');
            
            // Show selected component set
            const targetComponent = tab.dataset.component;
            const targetSet = document.getElementById(`${targetComponent}-set`);
            if (targetSet) {
                targetSet.style.display = 'block';
                
                // Animate components in
                const components = targetSet.querySelectorAll('.demo-button, .demo-card, .demo-input, .nav-link');
                components.forEach((component, index) => {
                    component.style.opacity = '0';
                    component.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        component.style.transition = 'all 0.4s ease';
                        component.style.opacity = '1';
                        component.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    });
}

function initComponentStates() {
    const stateButtons = document.querySelectorAll('.state-btn');
    
    stateButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state button
            stateButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const selectedState = btn.dataset.state;
            applyComponentStates(selectedState);
        });
    });
}

function applyComponentStates(state) {
    // Get currently visible component set
    const visibleSet = document.querySelector('.component-set[style*="block"], .component-set:not([style*="none"])');
    if (!visibleSet) return;
    
    // Remove all state classes from all components
    const allComponents = visibleSet.querySelectorAll('.demo-button, .demo-card, .demo-input, .demo-textarea, .demo-select, .nav-link');
    allComponents.forEach(component => {
        component.classList.remove('state-hover', 'state-active', 'state-disabled');
    });
    
    // Apply new state if not normal
    if (state !== 'normal') {
        allComponents.forEach(component => {
            component.classList.add(`state-${state}`);
        });
    }
    
    // Special handling for disabled state
    if (state === 'disabled') {
        const inputs = visibleSet.querySelectorAll('.demo-input, .demo-textarea, .demo-select, .demo-checkbox');
        inputs.forEach(input => {
            input.disabled = true;
        });
        
        const buttons = visibleSet.querySelectorAll('.demo-button, .card-action');
        buttons.forEach(button => {
            button.disabled = true;
        });
    } else {
        // Re-enable all inputs and buttons for other states
        const inputs = visibleSet.querySelectorAll('.demo-input, .demo-textarea, .demo-select, .demo-checkbox');
        inputs.forEach(input => {
            input.disabled = false;
        });
        
        const buttons = visibleSet.querySelectorAll('.demo-button, .card-action');
        buttons.forEach(button => {
            button.disabled = false;
        });
    }
}

// Style adaptation showcase
function initStyleAdaptation() {
    const styleButtons = document.querySelectorAll('.style-btn');
    const layoutButtons = document.querySelectorAll('.layout-btn');
    const adaptiveComponent = document.getElementById('adaptiveComponent');
    const adaptationDescription = document.getElementById('adaptationDescription');
    
    // Initialize layout switching
    layoutButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const layout = btn.dataset.layout;
            
            // Update active button
            layoutButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Switch layouts
            switchLayout(layout);
            
            // Update description based on current style and new layout
            const currentStyle = document.querySelector('.style-btn.active').dataset.style;
            updateDescription(currentStyle, layout);
        });
    });
    
    // Initialize style switching
    styleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const style = btn.dataset.style;
            
            // Update active button
            styleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Apply style to current layout
            applyStyleToLayout(style);
            
            // Update description based on new style and current layout
            const currentLayout = document.querySelector('.layout-btn.active').dataset.layout;
            updateDescription(style, currentLayout);
        });
    });
}

function switchLayout(targetLayout) {
    const allLayouts = document.querySelectorAll('.layout-content');
    const targetLayoutElement = document.getElementById(`${targetLayout}-layout`);
    
    // Hide all layouts
    allLayouts.forEach(layout => {
        layout.style.display = 'none';
        layout.style.opacity = '0';
    });
    
    // Show target layout with animation
    if (targetLayoutElement) {
        setTimeout(() => {
            targetLayoutElement.style.display = 'block';
            setTimeout(() => {
                targetLayoutElement.style.opacity = '1';
                
                // Animate elements within the layout
                const elements = targetLayoutElement.querySelectorAll('h3, .component-button, .stat-item, .feature-item, .form-field');
                elements.forEach((el, index) => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        el.style.transition = 'all 0.4s ease';
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 50);
        }, 100);
    }
}

function applyStyleToLayout(style) {
    const adaptiveComponent = document.getElementById('adaptiveComponent');
    
    // Remove all style classes
    adaptiveComponent.className = 'preview-component';
    
    // Add new style class with smooth transition
    setTimeout(() => {
        adaptiveComponent.classList.add(style);
    }, 50);
}

function updateDescription(style, layout) {
    const adaptationDescription = document.getElementById('adaptationDescription');
    const descriptions = getLayoutStyleDescriptions();
    
    const key = `${style}_${layout}`;
    const description = descriptions[key] || descriptions[`${style}_dashboard`];
    
    adaptationDescription.innerHTML = `
        <h4>${description.title}</h4>
        <p>${description.description}</p>
    `;
}

function getLayoutStyleDescriptions() {
    return {
        // Modern Style Descriptions
        modern_dashboard: {
            title: "Modern Dashboard",
            description: "Clean lines, subtle shadows, and focused whitespace create a contemporary feel perfect for data-driven applications."
        },
        modern_landing: {
            title: "Modern Landing Page", 
            description: "Minimalist hero sections with clear typography and strategic use of space to guide user attention and drive conversions."
        },
        modern_product: {
            title: "Modern Product Page",
            description: "Product-focused layout with clean imagery and structured information hierarchy that builds trust and encourages purchases."
        },
        modern_contact: {
            title: "Modern Contact Form",
            description: "Streamlined forms with clear labels and intuitive flow that reduces friction and increases completion rates."
        },
        
        // Corporate Style Descriptions
        corporate_dashboard: {
            title: "Corporate Dashboard",
            description: "Professional, structured design with traditional colors and formal typography that instills confidence in enterprise environments."
        },
        corporate_landing: {
            title: "Corporate Landing Page",
            description: "Authoritative design with conservative layout and professional messaging that establishes credibility and trust."
        },
        corporate_product: {
            title: "Corporate Product Page",
            description: "Business-focused presentation with detailed specifications and formal pricing structure for B2B decision makers."
        },
        corporate_contact: {
            title: "Corporate Contact Form",
            description: "Professional contact interface with structured fields and formal language appropriate for business communications."
        },
        
        // Playful Style Descriptions
        playful_dashboard: {
            title: "Playful Dashboard",
            description: "Vibrant colors, animated elements, and engaging visuals create an energetic experience that makes data exploration fun."
        },
        playful_landing: {
            title: "Playful Landing Page",
            description: "Dynamic design with bright gradients and friendly copy that creates excitement and encourages user engagement."
        },
        playful_product: {
            title: "Playful Product Page", 
            description: "Fun, approachable design with colorful elements and casual language perfect for consumer-focused products."
        },
        playful_contact: {
            title: "Playful Contact Form",
            description: "Friendly, welcoming interface with vibrant colors and encouraging language that makes reaching out feel comfortable."
        },
        
        // Minimal Style Descriptions
        minimal_dashboard: {
            title: "Minimal Dashboard",
            description: "Essential elements only with generous whitespace and subtle typography that puts focus entirely on the data."
        },
        minimal_landing: {
            title: "Minimal Landing Page",
            description: "Distraction-free design with clear hierarchy and purposeful whitespace that guides users toward key actions."
        },
        minimal_product: {
            title: "Minimal Product Page",
            description: "Clean, uncluttered presentation that lets the product speak for itself through thoughtful use of space and typography."
        },
        minimal_contact: {
            title: "Minimal Contact Form",
            description: "Simple, focused interface with clean lines and clear labels that eliminates confusion and streamlines communication."
        }
    };
}

// Workflow preview interactions
function initWorkflowPreview() {
    const workflowSteps = document.querySelectorAll('.workflow-step');
    
    workflowSteps.forEach((step, index) => {
        step.addEventListener('click', () => {
            // Highlight the step
            workflowSteps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');
            
            // Scroll to corresponding section
            const sectionIds = ['architecture', 'design-system', 'style-adaptation'];
            const targetSection = document.getElementById(sectionIds[index]);
            
            if (targetSection) {
                const offset = 150;
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add some additional interactive flourishes
document.addEventListener('DOMContentLoaded', function() {
    // Animate workflow steps on load
    const workflowSteps = document.querySelectorAll('.workflow-step');
    workflowSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            step.style.transition = 'all 0.5s ease';
            step.style.opacity = '1';
            step.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
    
    // Add hover effects to benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animate chart bars
    const chartBars = document.querySelectorAll('.chart-bar');
    const animateCharts = () => {
        chartBars.forEach((bar, index) => {
            const height = bar.style.height;
            bar.style.height = '0%';
            bar.style.transition = 'height 0.8s ease';
            
            setTimeout(() => {
                bar.style.height = height;
            }, index * 100 + 200);
        });
    };
    
    // Animate charts when they come into view
    const chartContainer = document.querySelector('.component-chart');
    if (chartContainer) {
        const chartObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCharts();
                    chartObserver.unobserve(entry.target);
                }
            });
        });
        
        chartObserver.observe(chartContainer);
    }
});