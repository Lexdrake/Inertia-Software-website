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
        
        // Prevent navigation demo from jumping to page sections
        initNavigationDemo();
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
    
    // Debug logging
    console.log('InitStyleAdaptation called');
    console.log('Style buttons found:', styleButtons.length);
    console.log('Layout buttons found:', layoutButtons.length);
    console.log('Adaptive component found:', !!adaptiveComponent);
    console.log('Adaptation description found:', !!adaptationDescription);
    
    // Initialize layout switching
    layoutButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Layout button clicked:', btn.dataset.layout);
            
            const layout = btn.dataset.layout;
            
            // Update active button
            layoutButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Switch layouts
            switchLayout(layout);
            
            // Update description based on current style and new layout
            const currentStyleBtn = document.querySelector('.style-btn.active');
            if (currentStyleBtn) {
                const currentStyle = currentStyleBtn.dataset.style;
                updateDescription(currentStyle, layout);
            }
        });
    });
    
    // Initialize style switching
    styleButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Style button clicked:', btn.dataset.style);
            
            const style = btn.dataset.style;
            
            // Update active button
            styleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Apply style to current layout
            applyStyleToLayout(style);
            
            // Update description based on new style and current layout
            const currentLayoutBtn = document.querySelector('.layout-btn.active');
            if (currentLayoutBtn) {
                const currentLayout = currentLayoutBtn.dataset.layout;
                updateDescription(style, currentLayout);
            }
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

// Prevent navigation demo links from jumping to page sections
function initNavigationDemo() {
    // Handle navigation demo links to prevent page jumps
    const navLinks = document.querySelectorAll('.demo-nav .nav-link, .demo-breadcrumb .breadcrumb-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Toggle active state for navigation demo
            if (link.classList.contains('nav-link')) {
                const parentNav = link.closest('.demo-nav');
                if (parentNav) {
                    const siblingLinks = parentNav.querySelectorAll('.nav-link');
                    siblingLinks.forEach(sibling => sibling.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });
}