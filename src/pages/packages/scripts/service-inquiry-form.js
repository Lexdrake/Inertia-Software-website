// Service Inquiry Form System

let currentPackage = null;

// Initialize form system when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Create modal container
    createFormModal();
    
    // Replace all email links with form triggers
    replaceEmailLinksWithFormTriggers();
});

function createFormModal() {
    const modalHTML = `
        <div id="serviceFormModal" class="modal-overlay" style="display: none;">
            <div class="modal-container">
                <button class="modal-close" onclick="closeServiceForm()">×</button>
                <div id="formContent"></div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function replaceEmailLinksWithFormTriggers() {
    // Find all package "Get Started" buttons
    const packageButtons = document.querySelectorAll('.package-card .btn-primary');
    
    packageButtons.forEach(button => {
        if (button.href && button.href.includes('mailto:')) {
            // Get package info from the card
            const packageCard = button.closest('.package-card');
            const packageName = packageCard.querySelector('h3').textContent;
            const packagePrice = packageCard.querySelector('.package-price').textContent;
            
            // Convert to button and add click handler
            button.removeAttribute('href');
            button.style.cursor = 'pointer';
            button.onclick = (e) => {
                e.preventDefault();
                showServiceForm(packageName, packagePrice);
            };
        }
    });
    
    // Also handle the custom solutions button
    const customButton = document.querySelector('.custom-content .btn-primary');
    if (customButton && customButton.href && customButton.href.includes('mailto:')) {
        customButton.removeAttribute('href');
        customButton.style.cursor = 'pointer';
        customButton.onclick = (e) => {
            e.preventDefault();
            showServiceForm('Custom Solution', 'Custom Pricing');
        };
    }
}

function showServiceForm(packageName, packagePrice) {
    currentPackage = { name: packageName, price: packagePrice };
    const modal = document.getElementById('serviceFormModal');
    const formContent = document.getElementById('formContent');
    
    formContent.innerHTML = createServiceInquiryForm(packageName, packagePrice);
    modal.style.display = 'flex';
    
    // Add form submission handler
    const form = formContent.querySelector('form');
    form.addEventListener('submit', handleServiceFormSubmit);
}

function createServiceInquiryForm(packageName, packagePrice) {
    const isCustom = packageName.includes('Custom');
    
    return `
        <div class="form-header">
            <h2>Start Your Project</h2>
            <div class="selected-package">
                <span class="package-label">Selected Package:</span>
                <span class="package-info">${packageName} - ${packagePrice}</span>
            </div>
            <p>Tell us about your project and we'll get back to you within 24 hours</p>
        </div>
        
        <form class="service-inquiry-form" data-package="${packageName}">
            <!-- Contact Information -->
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
            
            <!-- Project Details -->
            <div class="form-section">
                <h3>Project Details</h3>
                
                <div class="form-group">
                    <label for="projectType">Project Type *</label>
                    <select id="projectType" name="projectType" required onchange="updateProjectFields(this.value)">
                        <option value="">Select project type</option>
                        <option value="new-website" ${packageName.includes('Starter') || packageName.includes('Professional') ? 'selected' : ''}>New Website</option>
                        <option value="website-redesign">Website Redesign</option>
                        <option value="ecommerce" ${packageName.includes('E-Commerce') ? 'selected' : ''}>E-Commerce Store</option>
                        <option value="web-app" ${packageName.includes('Enterprise') ? 'selected' : ''}>Web Application</option>
                        <option value="mobile-app" ${packageName.includes('MVP') || packageName.includes('Standard') || packageName.includes('Premium') ? 'selected' : ''}>Mobile App</option>
                        <option value="both">Website + Mobile App</option>
                        <option value="maintenance" ${packageName.includes('Maintenance') ? 'selected' : ''}>Maintenance & Support</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="projectDescription">Project Description *</label>
                    <textarea id="projectDescription" name="projectDescription" rows="4" 
                        placeholder="Describe your project, goals, and what you'd like to achieve" required></textarea>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="timeline">Desired Timeline *</label>
                        <select id="timeline" name="timeline" required>
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP (Rush delivery +25%)</option>
                            <option value="1-month">Within 1 month</option>
                            <option value="2-months">Within 2 months</option>
                            <option value="3-months">Within 3 months</option>
                            <option value="flexible">I'm flexible</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="budget">Budget Range ${isCustom ? '*' : ''}</label>
                        <select id="budget" name="budget" ${isCustom ? 'required' : ''}>
                            <option value="${packagePrice}">${packagePrice} (Selected Package)</option>
                            ${isCustom ? `
                                <option value="5k-10k">$5,000 - $10,000</option>
                                <option value="10k-25k">$10,000 - $25,000</option>
                                <option value="25k-50k">$25,000 - $50,000</option>
                                <option value="50k-100k">$50,000 - $100,000</option>
                                <option value="100k+">$100,000+</option>
                            ` : `
                                <option value="lower">Lower budget available</option>
                                <option value="higher">Higher budget for more features</option>
                            `}
                        </select>
                    </div>
                </div>
            </div>
            
            <!-- Additional Information -->
            <div class="form-section">
                <h3>Additional Information</h3>
                
                <div class="form-group">
                    <label for="currentWebsite">Current Website (if applicable)</label>
                    <input type="url" id="currentWebsite" name="currentWebsite" placeholder="https://example.com">
                </div>
                
                <div class="form-group">
                    <label for="competitors">Competitor/Inspiration Sites</label>
                    <textarea id="competitors" name="competitors" rows="2" 
                        placeholder="List any websites or apps you like or compete with"></textarea>
                </div>
                
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
                
                <div class="form-group">
                    <label for="additionalNotes">Additional Notes or Questions</label>
                    <textarea id="additionalNotes" name="additionalNotes" rows="3" 
                        placeholder="Anything else you'd like us to know?"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="howHeard">How did you hear about us?</label>
                    <select id="howHeard" name="howHeard">
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="social-media">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            
            <div class="form-actions">
                <button type="submit" class="btn btn-primary btn-large">Submit Inquiry</button>
                <button type="button" class="btn btn-secondary" onclick="closeServiceForm()">Cancel</button>
            </div>
            
            <p class="form-note">
                By submitting this form, you agree to our 
                <a href="/src/pages/legal/privacy-policy.html" target="_blank">Privacy Policy</a> and 
                <a href="/src/pages/legal/terms.html" target="_blank">Terms of Service</a>.
                We'll respond within 24 hours.
            </p>
        </form>
    `;
}

function closeServiceForm() {
    const modal = document.getElementById('serviceFormModal');
    modal.style.display = 'none';
    currentPackage = null;
}

function handleServiceFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Add metadata
    formData.append('package', currentPackage.name);
    formData.append('packagePrice', currentPackage.price);
    formData.append('submittedAt', new Date().toISOString());
    formData.append('source', 'Service Packages Page');
    
    // Collect checked features
    const features = [];
    form.querySelectorAll('input[name="features"]:checked').forEach(checkbox => {
        features.push(checkbox.value);
    });
    formData.append('selectedFeatures', features.join(', '));
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Submit to Formspree
    fetch('https://formspree.io/f/xgvlpqyr', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showThankYouMessage();
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showErrorMessage();
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

function showThankYouMessage() {
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
                Need immediate assistance? Call us at <strong>(555) 123-4567</strong>
            </p>
            <button class="btn btn-primary" onclick="closeServiceForm()">Got It</button>
        </div>
    `;
}

function showErrorMessage() {
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
}

// Helper function to update form fields based on project type
function updateProjectFields(projectType) {
    // This could be expanded to show/hide specific fields based on project type
    const descriptionField = document.getElementById('projectDescription');
    
    const placeholders = {
        'new-website': 'Describe your business, target audience, and website goals',
        'website-redesign': 'What do you want to improve about your current website?',
        'ecommerce': 'What products will you sell? How many SKUs? Any special requirements?',
        'web-app': 'Describe the application functionality and user workflows',
        'mobile-app': 'What problem does your app solve? Who are your target users?',
        'both': 'Describe both your website and mobile app requirements',
        'maintenance': 'What kind of support do you need? Current tech stack?',
        'other': 'Please describe your project requirements in detail'
    };
    
    if (placeholders[projectType]) {
        descriptionField.placeholder = placeholders[projectType];
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('serviceFormModal');
    if (event.target == modal) {
        closeServiceForm();
    }
}