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
            renderFileTree(fileStructures[structure]);
        });
    });
    
    // Initialize with messy structure
    renderFileTree(fileStructures.messy);
}

// Design system playground
function initDesignPlayground() {
    const primaryColorInput = document.getElementById('primaryColor');
    const fontSizeInput = document.getElementById('fontSize');
    const borderRadiusInput = document.getElementById('borderRadius');
    
    const fontSizeValue = document.getElementById('fontSizeValue');
    const borderRadiusValue = document.getElementById('borderRadiusValue');
    
    const showcaseComponents = document.querySelector('.showcase-components');
    
    function updateDesignSystem() {
        const primaryColor = primaryColorInput.value;
        const fontSize = fontSizeInput.value + 'px';
        const borderRadius = borderRadiusInput.value + 'px';
        
        // Update display values
        fontSizeValue.textContent = fontSize;
        borderRadiusValue.textContent = borderRadius;
        
        // Apply styles to demo components
        showcaseComponents.style.setProperty('--demo-primary', primaryColor);
        showcaseComponents.style.setProperty('--demo-font-size', fontSize);
        showcaseComponents.style.setProperty('--demo-border-radius', borderRadius);
        
        // Update individual components
        const demoButton = showcaseComponents.querySelector('.demo-button');
        const demoCard = showcaseComponents.querySelector('.demo-card');
        const demoInput = showcaseComponents.querySelector('.demo-input');
        const demoCheckbox = showcaseComponents.querySelector('input[type="checkbox"]');
        
        if (demoButton) {
            demoButton.style.backgroundColor = primaryColor;
            demoButton.style.borderRadius = borderRadius;
            demoButton.style.fontSize = fontSize;
        }
        
        if (demoCard) {
            demoCard.style.borderRadius = borderRadius;
            demoCard.style.fontSize = fontSize;
        }
        
        if (demoInput) {
            demoInput.style.borderRadius = borderRadius;
            demoInput.style.fontSize = fontSize;
        }
        
        if (demoCheckbox) {
            demoCheckbox.style.accentColor = primaryColor;
        }
    }
    
    // Add event listeners
    primaryColorInput.addEventListener('input', updateDesignSystem);
    fontSizeInput.addEventListener('input', updateDesignSystem);
    borderRadiusInput.addEventListener('input', updateDesignSystem);
    
    // Initialize
    updateDesignSystem();
}

// Style adaptation showcase
function initStyleAdaptation() {
    const styleButtons = document.querySelectorAll('.style-btn');
    const adaptiveComponent = document.getElementById('adaptiveComponent');
    const adaptationDescription = document.getElementById('adaptationDescription');
    
    styleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const style = btn.dataset.style;
            
            // Update active button
            styleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Remove all style classes
            adaptiveComponent.className = 'preview-component';
            
            // Add new style class with animation
            setTimeout(() => {
                adaptiveComponent.classList.add(style);
            }, 50);
            
            // Update description
            const styleInfo = styleDescriptions[style];
            adaptationDescription.innerHTML = `
                <h4>${styleInfo.title}</h4>
                <p>${styleInfo.description}</p>
            `;
        });
    });
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