// Shared Form Utilities - Reusable across main site and packages page

const FormUtils = {
    // Formspree endpoint
    FORMSPREE_ENDPOINT: 'https://formspree.io/f/xgvlpqyr',
    
    // Create modal container if it doesn't exist
    createModal: function() {
        if (document.getElementById('serviceFormModal')) return;
        
        const modalHTML = `
            <div id="serviceFormModal" class="modal-overlay" style="display: none;">
                <div class="modal-container">
                    <button class="modal-close" onclick="FormUtils.closeModal()">×</button>
                    <div id="formContent"></div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    },
    
    // Show modal with content
    showModal: function(content) {
        this.createModal();
        const modal = document.getElementById('serviceFormModal');
        const formContent = document.getElementById('formContent');
        
        formContent.innerHTML = content;
        modal.style.display = 'flex';
        
        // Add form submission handler if form exists
        const form = formContent.querySelector('form');
        if (form) {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        }
    },
    
    // Close modal
    closeModal: function() {
        const modal = document.getElementById('serviceFormModal');
        if (modal) {
            modal.style.display = 'none';
            
            // If we're on the home page and the form was opened from services section, scroll back
            if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    },
    
    // Handle form submission
    handleFormSubmit: function(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        
        // Add metadata
        formData.append('submittedAt', new Date().toISOString());
        formData.append('userAgent', navigator.userAgent);
        formData.append('referrer', document.referrer);
        
        // Collect checked features if they exist
        const features = [];
        form.querySelectorAll('input[name="features"]:checked').forEach(checkbox => {
            features.push(checkbox.value);
        });
        if (features.length > 0) {
            formData.append('selectedFeatures', features.join(', '));
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Submit to Formspree
        fetch(this.FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                this.showThankYouMessage();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            this.showErrorMessage();
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    },
    
    // Show thank you message
    showThankYouMessage: function() {
        const formContent = document.getElementById('formContent');
        
        formContent.innerHTML = `
            <div class="thank-you-container">
                <div class="thank-you-icon">🎉</div>
                <h2>Thank You for Your Inquiry!</h2>
                <p class="thank-you-message">
                    We've received your project details and are excited to learn more about your needs.
                </p>
                <div class="what-happens-next">
                    <h3>What Happens Next?</h3>
                    <div class="timeline-steps">
                        <div class="timeline-step">
                            <span class="step-number">1</span>
                            <div class="step-content">
                                <strong>Within 24 hours</strong>
                                <p>We'll review your requirements and send a detailed response</p>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <span class="step-number">2</span>
                            <div class="step-content">
                                <strong>Discovery Call</strong>
                                <p>We'll schedule a call to discuss your project in detail</p>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <span class="step-number">3</span>
                            <div class="step-content">
                                <strong>Custom Proposal</strong>
                                <p>You'll receive a tailored proposal with timeline and pricing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="contact-note">
                    Need immediate assistance? Email us at <strong>useinertia@gmail.com</strong>
                </p>
                <button class="btn btn-primary" onclick="FormUtils.closeModal()">Got It</button>
            </div>
        `;
    },
    
    // Show error message
    showErrorMessage: function() {
        const formContent = document.getElementById('formContent');
        
        formContent.innerHTML = `
            <div class="error-container">
                <div class="error-icon">😕</div>
                <h2>Oops! Something Went Wrong</h2>
                <p>We couldn't submit your form at this time. Please try again or contact us directly.</p>
                <div class="error-actions">
                    <a href="mailto:useinertia@gmail.com" class="btn btn-primary">Email Us Directly</a>
                    <button class="btn btn-secondary" onclick="location.reload()">Try Again</button>
                </div>
            </div>
        `;
    },
    
    // Update project description placeholder based on project type
    updateProjectFields: function(projectType) {
        const descriptionField = document.getElementById('projectDescription');
        if (!descriptionField) return;
        
        const placeholders = {
            'new-website': 'Describe your business, target audience, and website goals',
            'website-redesign': 'What do you want to improve about your current website?',
            'ecommerce': 'What products will you sell? How many SKUs? Any special requirements?',
            'web-app': 'Describe the application functionality and user workflows',
            'mobile-app': 'What problem does your app solve? Who are your target users?',
            'both': 'Describe both your website and mobile app requirements',
            'custom-software': 'What business problem needs solving? What should the software do?',
            'integration': 'Which systems need to be connected? What data needs to flow between them?',
            'automation': 'What processes do you want to automate? What are the current pain points?',
            'maintenance': 'What kind of support do you need? Current tech stack?',
            'other': 'Please describe your project requirements in detail'
        };
        
        if (placeholders[projectType]) {
            descriptionField.placeholder = placeholders[projectType];
        }
    },
    
    // Generate form sections HTML
    generateContactSection: function() {
        return `
            <div class="form-section">
                <h3>Contact Information</h3>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName">First Name *</label>
                        <input type="text" id="firstName" name="firstName" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="lastName">Last Name *</label>
                        <input type="text" id="lastName" name="lastName" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567">
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="company">Company Name</label>
                    <input type="text" id="company" name="company" placeholder="Your company or organization">
                </div>
            </div>
        `;
    },
    
    // Generate features section HTML
    generateFeaturesSection: function() {
        return `
            <div class="form-group">
                <label>Specific Features Needed (check all that apply)</label>
                <div class="checkbox-grid">
                    <label class="checkbox-label">
                        <input type="checkbox" name="features" value="user-accounts">
                        <span>User Accounts/Login</span>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="features" value="payment-processing">
                        <span>Payment Processing</span>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="features" value="booking-system">
                        <span>Booking/Scheduling</span>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="features" value="cms">
                        <span>Content Management</span>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="features" value="analytics">
                        <span>Analytics Dashboard</span>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="features" value="api-integration">
                        <span>API Integrations</span>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="features" value="multi-language">
                        <span>Multi-language Support</span>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="features" value="real-time">
                        <span>Real-time Features</span>
                    </label>
                </div>
            </div>
        `;
    },
    
    // Generate footer section HTML
    generateFooterSection: function() {
        return `
            <div class="form-actions">
                <button type="submit" class="btn btn-primary btn-large">Submit Inquiry</button>
                <button type="button" class="btn btn-secondary" onclick="FormUtils.closeModal()">Cancel</button>
            </div>
            
            <p class="form-note">
                By submitting this form, you agree to our 
                <a href="/src/pages/legal/privacy-policy.html" target="_blank">Privacy Policy</a> and 
                <a href="/src/pages/legal/terms.html" target="_blank">Terms of Service</a>.
                We'll respond within 24 hours.
            </p>
        `;
    }
};

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('serviceFormModal');
    if (event.target === modal) {
        FormUtils.closeModal();
    }
});

// Make FormUtils globally available
window.FormUtils = FormUtils;
