// Simplified Packages Service Form - Uses shared utilities

document.addEventListener('DOMContentLoaded', function() {
    // Replace all email links with form triggers
    replaceEmailLinksWithFormTriggers();
});

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
            button.href = '#';
            button.style.cursor = 'pointer';
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showPackageForm(packageName, packagePrice);
            });
        }
    });
    
    // Also handle the custom solutions button
    const customButton = document.querySelector('.custom-content .btn-primary');
    if (customButton && customButton.href && customButton.href.includes('mailto:')) {
        customButton.href = '#';
        customButton.style.cursor = 'pointer';
        customButton.addEventListener('click', function(e) {
            e.preventDefault();
            showPackageForm('Custom Solution', 'Custom Pricing');
        });
    }
}

function showPackageForm(packageName, packagePrice) {
    const isCustom = packageName.includes('Custom');
    
    const formHTML = `
        <div class="form-header">
            <h2>Start Your Project</h2>
            <div class="selected-package">
                <span class="package-label">Selected Package:</span>
                <span class="package-info">${packageName} - ${packagePrice}</span>
            </div>
            <p>Tell us about your project and we'll get back to you within 24 hours</p>
        </div>
        
        <form class="service-inquiry-form" data-package="${packageName}">
            ${FormUtils.generateContactSection()}
            
            <!-- Project Details -->
            <div class="form-section">
                <h3>Project Details</h3>
                
                <div class="form-group">
                    <label for="projectType">Project Type *</label>
                    <select id="projectType" name="projectType" required onchange="FormUtils.updateProjectFields(this.value)">
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
        formData.append('package', packageName);
        formData.append('packagePrice', packagePrice);
        formData.append('source', 'Service Packages Page');
        
        // Call the original handler with our custom data
        FormUtils.handleFormSubmit.call(FormUtils, event);
    };
    
    FormUtils.showModal(formHTML);
    
    // Override the form handler to add our metadata
    const form = document.querySelector('#formContent form');
    form.removeEventListener('submit', FormUtils.handleFormSubmit);
    form.addEventListener('submit', formDataHandler);
}
