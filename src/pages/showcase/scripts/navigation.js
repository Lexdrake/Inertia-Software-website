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

