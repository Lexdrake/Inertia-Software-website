// Simplified Service Form - Uses shared utilities

document.addEventListener('DOMContentLoaded', function() {
    // Only run if we're not on the packages page (avoid conflicts)
    if (window.location.pathname.includes('/packages/')) return;
    
    // Replace service email links with form triggers
    replaceServiceLinksWithFormTriggers();
});

function replaceServiceLinksWithFormTriggers() {
    // Find all service "View Packages" and "Get Quote" buttons
    const serviceButtons = document.querySelectorAll('.service-card .btn-primary');
    
    serviceButtons.forEach(button => {
        // Only intercept mailto links, let packages links work normally
        if (button.href && button.href.includes('mailto:')) {
            // Get service info from the card
            const serviceCard = button.closest('.service-card');
            const serviceName = serviceCard.querySelector('h3').textContent;
            
            // Convert to button and add click handler
            button.onclick = (e) => {
                e.preventDefault();
                showServiceForm(serviceName, 'Get Quote');
            };
        }
        // For packages links, do nothing - let them navigate normally
    });
}

function showServiceForm(serviceName, actionType) {
    const isCustomSoftware = serviceName.includes('Custom Software');
    
    const formHTML = `
        <div class="form-header">
            <h2>Get Started with ${serviceName}</h2>
            <div class="selected-service">
                <span class="service-label">Service:</span>
                <span class="service-info">${serviceName}</span>
            </div>
            <p>Tell us about your project and we'll provide a detailed response within 24 hours</p>
        </div>
        
        <form class="service-inquiry-form" data-service="${serviceName}">
            ${FormUtils.generateContactSection()}
            
            <!-- Project Details -->
            <div class="form-section">
                <h3>Project Details</h3>
                
                <div class="form-group">
                    <label for="projectType">Project Type *</label>
                    <select id="projectType" name="projectType" required onchange="FormUtils.updateProjectFields(this.value)">
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
                
                ${FormUtils.generateFeaturesSection()}
                
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
            
            ${FormUtils.generateFooterSection()}
        </form>
    `;
    
    // Add additional metadata before showing
    const formDataHandler = function(event) {
        const form = event.target;
        const formData = new FormData(form);
        formData.append('service', serviceName);
        formData.append('action', actionType);
        formData.append('source', 'Main Website - Services Section');
        
        // Call the original handler with our custom data
        FormUtils.handleFormSubmit.call(FormUtils, event);
    };
    
    FormUtils.showModal(formHTML);
    
    // Override the form handler to add our metadata
    const form = document.querySelector('#formContent form');
    form.removeEventListener('submit', FormUtils.handleFormSubmit);
    form.addEventListener('submit', formDataHandler);
}
