// Mockup Showcase Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching (Web vs Mobile)
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active content
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(`${category}-showcase`).classList.add('active');
            
            // Reset tier selection for the new tab
            const firstTierBtn = document.querySelector(`#${category}-showcase .tier-btn`);
            if (firstTierBtn) {
                firstTierBtn.click();
            }
        });
    });
    
    // Tier switching within each category
    document.querySelectorAll('.tier-selector').forEach(selector => {
        const tierButtons = selector.querySelectorAll('.tier-btn');
        const showcase = selector.closest('.tab-content');
        const mockupContents = showcase.querySelectorAll('.mockup-content');
        
        tierButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tier = button.dataset.tier;
                
                // Update active button
                tierButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Update active mockup
                mockupContents.forEach(content => {
                    if (content.dataset.tier === tier) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
                
                // Update feature list
                updateFeatureList(tier, showcase.id);
            });
        });
    });
    
    // Device switching (Desktop, Tablet, Mobile)
    document.querySelectorAll('.device-btn').forEach(button => {
        button.addEventListener('click', () => {
            const device = button.dataset.device;
            const container = button.closest('.mockup-container');
            const frame = container.querySelector('.device-frame');
            const deviceButtons = container.querySelectorAll('.device-btn');
            
            // Update active button
            deviceButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update frame class
            frame.className = 'device-frame';
            frame.classList.add(`${device}-frame`);
            
            // Add animation
            frame.style.animation = 'none';
            setTimeout(() => {
                frame.style.animation = 'slideIn 0.5s ease';
            }, 10);
        });
    });
    
    // Feature list updater
    function updateFeatureList(tier, showcaseId) {
        const featuresDiv = document.getElementById('tier-features');
        if (!featuresDiv) return;
        
        const features = {
            'web-showcase': {
                starter: [
                    '✓ Single-page responsive design',
                    '✓ Mobile-optimized layout',
                    '✓ Contact form integration',
                    '✓ Basic SEO setup',
                    '✓ SSL certificate',
                    '✓ 2-3 week delivery'
                ],
                professional: [
                    '✓ 5-8 custom pages',
                    '✓ Blog/News CMS',
                    '✓ Advanced SEO optimization',
                    '✓ Google Analytics',
                    '✓ Newsletter integration',
                    '✓ 4-6 week delivery'
                ],
                ecommerce: [
                    '✓ Full e-commerce platform',
                    '✓ Product catalog',
                    '✓ Shopping cart & checkout',
                    '✓ Payment gateway',
                    '✓ Inventory management',
                    '✓ 6-8 week delivery'
                ],
                enterprise: [
                    '✓ Custom web application',
                    '✓ User authentication',
                    '✓ Database architecture',
                    '✓ Admin dashboard',
                    '✓ API development',
                    '✓ Custom timeline'
                ]
            },
            'mobile-showcase': {
                mvp: [
                    '✓ Core functionality',
                    '✓ iOS or Android',
                    '✓ Basic UI/UX',
                    '✓ 3-5 key features',
                    '✓ App store submission',
                    '✓ 6-8 week delivery'
                ],
                standard: [
                    '✓ iOS AND Android',
                    '✓ Polished UI/UX',
                    '✓ 8-10 features',
                    '✓ Push notifications',
                    '✓ Basic analytics',
                    '✓ 10-12 week delivery'
                ],
                premium: [
                    '✓ Advanced features',
                    '✓ Offline mode & sync',
                    '✓ Backend infrastructure',
                    '✓ Cloud storage',
                    '✓ Admin panel',
                    '✓ Custom timeline'
                ]
            }
        };
        
        const currentFeatures = features[showcaseId]?.[tier] || [];
        
        featuresDiv.innerHTML = currentFeatures.map(feature => 
            `<div class="feature-item" style="color: white; padding: 0.5rem; background: rgba(255,255,255,0.1); border-radius: 8px;">
                ${feature}
            </div>`
        ).join('');
    }
    
    // Initialize with first tier selected
    const firstWebTier = document.querySelector('#web-showcase .tier-btn');
    if (firstWebTier) {
        firstWebTier.click();
    }
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);