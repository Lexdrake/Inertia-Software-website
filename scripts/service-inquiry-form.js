// Service Inquiry Form System for Main Site

let currentService = null;

// Initialize form system when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Only run if we're not on the packages page (avoid conflicts)
    if (window.location.pathname.includes('/packages/')) return;
    
    // Create modal container
    createFormModal();
    
    // Replace all service email links with form triggers
    replaceServiceLinksWithFormTriggers();
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

function replaceServiceLinksWithFormTriggers() {
    // Find all service "View Packages" and "Get Quote" buttons
    const serviceButtons = document.querySelectorAll('.service-card .btn-primary');
    
    serviceButtons.forEach(button => {
        if (button.href && (button.href.includes('mailto:') || button.href.includes('/packages/'))) {
            // Get service info from the card
            const serviceCard = button.closest('.service-card');
            const serviceName = serviceCard.querySelector('h3').textContent;
            
            // Store original href if it's a packages link
            const originalHref = button.href;
            
            // Convert to button and add click handler
            button.onclick = (e) => {
                e.preventDefault();
                
                // If it was a packages link, show service-specific form
                if (originalHref.includes('/packages/')) {
                    showServiceForm(serviceName, 'View Packages');
                } else {
                    // It was a mailto link (like Custom Software)
                    showServiceForm(serviceName, 'Get Quote');
                }
            };
        }
    });
}

function showServiceForm(serviceName, actionType) {
    currentService = { name: serviceName, action: actionType };
    const modal = document.getElementById('serviceFormModal');
    const formContent = document.getElementById('formContent');
    
    formContent.innerHTML = createServiceInquiryForm(serviceName, actionType);
    modal.style.display = 'flex';
    
    // Add form submission handler
    const form = formContent.querySelector('form');
    form.addEventListener('submit', handleServiceFormSubmit);
}

function createServiceInquiryForm(serviceName, actionType) {
    const isCustomSoftware = serviceName.includes('Custom Software');
    
    return `
        <div class="form-header">
            <h2>Get Started with ${serviceName}</h2>
            <div class="selected-service">
                <span class="service-label">Service:</span>
                <span class="service-info">${serviceName}</span>
            </div>
            <p>Tell us about your project and we'll provide a detailed response within 24 hours</p>
        </div>
        
        <form class="service-inquiry-form" data-service="${serviceName}">
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
                        ${serviceName.includes('Mobile') ? `
                            <option value="mobile-app" selected>Mobile App</option>
                            <option value="web-app">Web Application</option>
                            <option value="both">Mobile App + Website</option>
                        ` : serviceName.includes('Website') ? `
                            <option value="new-website" selected>New Website</option>
                            <option value="website-redesign">Website Redesign</option>
                            <option value="ecommerce">E-Commerce Store</option>
                            <option value="web-app">Web Application</option>
                        ` : `
                            <option value="custom-software" selected>Custom Software</option>
                            <option value="web-app">Web Application</option>
                            <option value="mobile-app">Mobile App</option>
                            <option value="both">Web + Mobile</option>
                            <option value="integration">System Integration</option>
                            <option value="automation">Process Automation</option>
                        `}
                        <option value="maintenance">Maintenance & Support</option>
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
                            <option value="6-months">Within 6 months</option>
                            <option value="flexible">I'm flexible</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="budget">Budget Range ${isCustomSoftware ? '*' : ''}</label>
                        <select id="budget" name="budget" ${isCustomSoftware ? 'required' : ''}>
                            <option value="">Select budget range</option>
                            <option value="under-5k">Under $5,000</option>
                            <option value="5k-15k">$5,000 - $15,000</option>
                            <option value="15k-30k">$15,000 - $30,000</option>
                            <option value="30k-50k">$30,000 - $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="100k+">$100,000+</option>
                            <option value="not-sure">Not sure yet</option>
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
                    <label for="competitors">Competitor/Inspiration Examples</label>
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
    currentService = null;
}

function handleServiceFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Add metadata
    formData.append('service', currentService.name);
    formData.append('action', currentService.action);
    formData.append('submittedAt', new Date().toISOString());
    formData.append('source', 'Main Website - Services Section');
    
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
                Need immediate assistance? Email us at <strong>useinertia@gmail.com</strong>
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
    const descriptionField = document.getElementById('projectDescription');
    
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
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('serviceFormModal');
    if (event.target == modal) {
        closeServiceForm();
    }
}

// Add styles if not already present
if (!document.querySelector('link[href*="service-form.css"]')) {
    const style = document.createElement('style');
    style.textContent = `
        /* Service Form Modal Styles - Inline for main site */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 9999;
            align-items: center;
            justify-content: center;
            padding: 20px;
            overflow-y: auto;
        }

        .modal-container {
            background: white;
            border-radius: 16px;
            max-width: 800px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: modalSlideIn 0.3s ease;
        }

        @keyframes modalSlideIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .modal-close {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            background: #f5f5f5;
            border: none;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            transition: all 0.3s;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-close:hover {
            background: #e0e0e0;
            transform: rotate(90deg);
        }

        #formContent { padding: 3rem; }

        .form-header { text-align: center; margin-bottom: 2.5rem; }
        .form-header h2 { color: #1a1a1a; margin-bottom: 1rem; font-size: 2rem; }

        .selected-service {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
            color: white;
            border-radius: 25px;
            margin-bottom: 1rem;
            font-size: 0.95rem;
        }

        .service-label { opacity: 0.9; }
        .service-info { font-weight: 600; }
        .form-header p { color: #666; line-height: 1.6; }

        .form-section {
            margin-bottom: 2.5rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid #e0e0e0;
        }
        
        .form-section:last-of-type { border-bottom: none; }
        
        .form-section h3 {
            color: #333;
            margin-bottom: 1.5rem;
            font-size: 1.25rem;
            display: flex;
            align-items: center;
        }
        
        .form-section h3::after {
            content: '';
            flex: 1;
            height: 1px;
            background: #e0e0e0;
            margin-left: 1rem;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .form-group { margin-bottom: 1.5rem; }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #333;
            font-weight: 500;
            font-size: 0.95rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.875rem;
            border: 1px solid #d0d0d0;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s;
            background: white;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-group textarea {
            resize: vertical;
            font-family: inherit;
            line-height: 1.5;
        }

        .checkbox-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-top: 0.75rem;
        }

        .checkbox-label {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 0.75rem;
            background: #f8f9fa;
            border-radius: 8px;
            transition: all 0.3s;
        }

        .checkbox-label:hover { background: #e9ecef; }

        .checkbox-label input[type="checkbox"] {
            width: auto;
            margin-right: 0.75rem;
            cursor: pointer;
        }

        .checkbox-label span { color: #555; font-size: 0.95rem; }
        .checkbox-label input[type="checkbox"]:checked + span {
            color: var(--primary-color);
            font-weight: 500;
        }

        .form-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin: 2rem 0;
        }

        .form-actions .btn { min-width: 150px; }

        .form-note {
            text-align: center;
            color: #888;
            font-size: 0.875rem;
            line-height: 1.6;
        }

        .form-note a { color: var(--primary-color); text-decoration: none; }
        .form-note a:hover { text-decoration: underline; }

        .thank-you-container { text-align: center; padding: 2rem; }
        .thank-you-icon { font-size: 4rem; margin-bottom: 1rem; }
        .thank-you-container h2 { color: #333; margin-bottom: 1rem; }
        .thank-you-message { color: #666; font-size: 1.125rem; margin-bottom: 2rem; }

        .what-happens-next {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 2rem;
            margin: 2rem 0;
        }

        .what-happens-next h3 { color: #333; margin-bottom: 1.5rem; font-size: 1.25rem; }

        .timeline-steps {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            text-align: left;
            max-width: 500px;
            margin: 0 auto;
        }

        .timeline-step {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
        }

        .step-number {
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
        }

        .step-content strong { display: block; color: #333; margin-bottom: 0.25rem; }
        .step-content p { color: #666; font-size: 0.95rem; margin: 0; }
        .contact-note { color: #666; margin: 1.5rem 0; }
        .contact-note strong { color: var(--primary-color); }

        .error-container { text-align: center; padding: 3rem; }
        .error-icon { font-size: 4rem; margin-bottom: 1rem; }
        .error-container h2 { color: #333; margin-bottom: 1rem; }
        .error-container p { color: #666; margin-bottom: 2rem; }
        .error-actions { display: flex; gap: 1rem; justify-content: center; }

        @media (max-width: 768px) {
            .modal-container { margin: 20px; }
            #formContent { padding: 2rem 1.5rem; }
            .form-row { grid-template-columns: 1fr; }
            .checkbox-grid { grid-template-columns: 1fr; }
            .form-actions { flex-direction: column; }
            .form-actions .btn { width: 100%; }
            .timeline-steps { padding: 0 1rem; }
            .modal-close { top: 10px; right: 10px; width: 35px; height: 35px; }
        }
    `;
    document.head.appendChild(style);
}