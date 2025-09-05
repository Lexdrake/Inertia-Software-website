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
                    '✓ Real-time analytics dashboard',
                    '✓ Team collaboration tools',
                    '✓ Advanced data visualization',
                    '✓ Live activity feeds',
                    '✓ Enterprise-grade security',
                    '✓ Offline mode & cloud sync',
                    '✓ Multi-level navigation',
                    '✓ Push notifications & badges',
                    '✓ Custom reporting system',
                    '✓ API integration platform'
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
    
    // Premium app interactive features
    initializePremiumAppInteractions();
});

// Premium App Interactive Features
function initializePremiumAppInteractions() {
    // Animate chart points
    function animateChartPoints() {
        const chartPoints = document.querySelectorAll('.chart-point');
        chartPoints.forEach((point, index) => {
            setTimeout(() => {
                point.style.animation = 'pulse 2s ease-in-out infinite';
                setTimeout(() => {
                    point.style.animation = '';
                }, 2000);
            }, index * 500);
        });
    }
    
    // Start chart animation when premium tier is selected
    document.addEventListener('click', function(e) {
        if (e.target.matches('[data-tier="premium"]')) {
            setTimeout(animateChartPoints, 1000);
        }
    });
    
    // Simulate real-time updates
    function simulateRealTimeUpdates() {
        const statNumbers = document.querySelectorAll('.premium .stat-number');
        const activities = document.querySelector('.activity-feed');
        
        if (statNumbers.length > 0) {
            // Update stats periodically
            setInterval(() => {
                if (document.querySelector('.mockup-content[data-tier="premium"].active')) {
                    statNumbers.forEach(stat => {
                        const currentValue = parseFloat(stat.textContent.replace(/[$,KM]/g, ''));
                        const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
                        let newValue = currentValue * (1 + variation);
                        
                        // Format the number appropriately
                        if (stat.textContent.includes('$')) {
                            if (newValue >= 1000000) {
                                stat.textContent = '$' + (newValue / 1000000).toFixed(1) + 'M';
                            } else if (newValue >= 1000) {
                                stat.textContent = '$' + (newValue / 1000).toFixed(0) + 'K';
                            }
                        } else {
                            stat.textContent = Math.round(newValue).toLocaleString();
                        }
                        
                        // Add highlight animation
                        stat.style.animation = 'highlight 0.5s ease';
                        setTimeout(() => {
                            stat.style.animation = '';
                        }, 500);
                    });
                }
            }, 8000);
        }
    }
    
    // Chart control interactivity
    function setupChartControls() {
        document.addEventListener('click', function(e) {
            if (e.target.matches('.chart-controls span')) {
                // Remove active class from siblings
                e.target.parentNode.querySelectorAll('span').forEach(span => {
                    span.classList.remove('active');
                });
                // Add active class to clicked item
                e.target.classList.add('active');
                
                // Animate chart update
                const chart = e.target.closest('.premium-chart-card').querySelector('.premium-chart');
                chart.style.animation = 'fadeIn 0.5s ease';
                setTimeout(() => {
                    chart.style.animation = '';
                }, 500);
            }
        });
    }
    
    // FAB menu interactions
    function setupFABInteractions() {
        const fab = document.querySelector('.fab.premium');
        if (fab) {
            fab.addEventListener('mouseenter', () => {
                fab.style.transform = 'scale(1.1) rotate(45deg)';
            });
            
            fab.addEventListener('mouseleave', () => {
                fab.style.transform = 'scale(1) rotate(0deg)';
            });
            
            // FAB option clicks
            document.addEventListener('click', function(e) {
                if (e.target.matches('.fab-option')) {
                    e.target.style.animation = 'bounce 0.5s ease';
                    setTimeout(() => {
                        e.target.style.animation = '';
                    }, 500);
                }
            });
        }
    }
    
    // Activity feed updates
    function simulateActivityUpdates() {
        const activities = [
            { user: 'Alex Kim', action: 'shared a document', time: 'now' },
            { user: 'Lisa Wang', action: 'completed review', time: '1 min ago' },
            { user: 'David Chen', action: 'updated metrics', time: '3 min ago' },
            { user: 'Maria Garcia', action: 'added comment', time: '5 min ago' }
        ];
        
        setInterval(() => {
            const activityFeed = document.querySelector('.activity-feed');
            if (activityFeed && document.querySelector('.mockup-content[data-tier="premium"].active')) {
                const randomActivity = activities[Math.floor(Math.random() * activities.length)];
                const activityItems = activityFeed.querySelectorAll('.activity-item');
                
                if (activityItems.length > 0) {
                    // Update first activity item
                    const firstItem = activityItems[0];
                    const userSpan = firstItem.querySelector('.activity-user');
                    const actionSpan = firstItem.querySelector('.activity-action');
                    const timeSpan = firstItem.querySelector('.activity-time');
                    
                    if (userSpan && actionSpan && timeSpan) {
                        userSpan.textContent = randomActivity.user;
                        actionSpan.textContent = randomActivity.action;
                        timeSpan.textContent = randomActivity.time;
                        
                        // Highlight the update
                        firstItem.style.animation = 'slideIn 0.5s ease';
                        setTimeout(() => {
                            firstItem.style.animation = '';
                        }, 500);
                    }
                }
            }
        }, 12000);
    }
    
    // Navigation badge updates
    function animateNavBadges() {
        setInterval(() => {
            const badges = document.querySelectorAll('.nav-badge');
            badges.forEach(badge => {
                if (Math.random() > 0.7) { // 30% chance to update
                    const currentCount = parseInt(badge.textContent);
                    const newCount = Math.max(0, currentCount + (Math.random() > 0.5 ? 1 : -1));
                    badge.textContent = newCount;
                    
                    if (newCount > currentCount) {
                        badge.style.animation = 'bounce 0.5s ease';
                        setTimeout(() => {
                            badge.style.animation = '';
                        }, 500);
                    }
                }
            });
        }, 15000);
    }
    
    // Initialize all interactions
    setTimeout(() => {
        simulateRealTimeUpdates();
        setupChartControls();
        setupFABInteractions();
        simulateActivityUpdates();
        animateNavBadges();
    }, 1000);
}

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
    
    @keyframes highlight {
        0% { background: transparent; }
        50% { background: rgba(102, 126, 234, 0.1); }
        100% { background: transparent; }
    }
    
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.15); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0.7; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);