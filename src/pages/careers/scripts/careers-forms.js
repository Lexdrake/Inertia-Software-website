// Careers Form Handlers

// Form submission endpoint - using the provided Formspree link
const CAREERS_FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpwjonko';

// Open job application form
function openJobApplication(jobId) {
    const formContent = generateJobApplicationForm(jobId);
    FormUtils.showModal(formContent);
}

// Open general inquiry form
function openGeneralInquiry() {
    const formContent = generateGeneralInquiryForm();
    FormUtils.showModal(formContent);
}

// Generate job application form HTML
function generateJobApplicationForm(jobId) {
    const jobTitles = {
        'content-community-manager': 'Content & Community Manager'
    };
    
    const jobTitle = jobTitles[jobId] || 'Position';
    
    return `
        <form class="careers-form-container" action="${CAREERS_FORMSPREE_ENDPOINT}" method="POST">
            <input type="hidden" name="formType" value="job-application">
            <input type="hidden" name="position" value="${jobTitle}">
            
            <div class="careers-form-header">
                <h2>Apply for ${jobTitle}</h2>
                <p>We're excited to learn more about you and how you can contribute to our team.</p>
            </div>
            
            ${generateContactSection()}
            
            <div class="form-section">
                <h3>Professional Background</h3>
                
                <div class="form-group">
                    <label for="currentRole">Current Role/Status</label>
                    <input type="text" id="currentRole" name="currentRole" placeholder="e.g., Social Media Manager at XYZ Company, Recent Graduate, Freelancer">
                </div>
                
                <div class="form-group">
                    <label for="experience">Years of Relevant Experience</label>
                    <select id="experience" name="experience" required>
                        <option value="">Select experience level</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="portfolio">Portfolio/Work Samples</label>
                    <textarea id="portfolio" name="portfolio" placeholder="Please share links to your best work, social media accounts you've managed, or relevant projects. Include any metrics or results you're proud of."></textarea>
                </div>
            </div>
            
            <div class="form-section">
                <h3>Role-Specific Questions</h3>
                
                <div class="form-group">
                    <label for="platforms">Which social platforms do you have the most experience with?</label>
                    <div class="checkbox-grid">
                        <label class="checkbox-label">
                            <input type="checkbox" name="platforms" value="TikTok">
                            <span>TikTok</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="platforms" value="Instagram">
                            <span>Instagram</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="platforms" value="Facebook">
                            <span>Facebook</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="platforms" value="X (Twitter)">
                            <span>X (Twitter)</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="platforms" value="LinkedIn">
                            <span>LinkedIn</span>
                        </label>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="contentStrategy">Describe your approach to content strategy for a productivity app</label>
                    <textarea id="contentStrategy" name="contentStrategy" required placeholder="How would you approach creating content that resonates with people struggling with productivity and organization? What types of content perform best in this space?"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="communityBuilding">Tell us about your community building experience</label>
                    <textarea id="communityBuilding" name="communityBuilding" placeholder="Have you built or managed online communities? How do you foster engagement and create meaningful connections between users?"></textarea>
                </div>
            </div>
            
            <div class="form-section">
                <h3>Additional Information</h3>
                
                <div class="form-group">
                    <label for="availability">When could you start?</label>
                    <select id="availability" name="availability" required>
                        <option value="">Select availability</option>
                        <option value="Immediately">Immediately</option>
                        <option value="Within 2 weeks">Within 2 weeks</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="Within 2 months">Within 2 months</option>
                        <option value="Other">Other (please specify in cover letter)</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="workingHours">Preferred working hours (timezone)</label>
                    <input type="text" id="workingHours" name="workingHours" placeholder="e.g., 9 AM - 5 PM EST, Flexible, Night owl">
                </div>
                
                <div class="form-group">
                    <label for="coverLetter">Cover Letter</label>
                    <textarea id="coverLetter" name="coverLetter" required placeholder="Tell us why you're interested in this role and how you'd contribute to Inertia Software. What excites you about helping people improve their productivity?"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="resume">Resume/CV</label>
                    <textarea id="resume" name="resume" placeholder="Please paste your resume or provide a link to your LinkedIn profile/resume"></textarea>
                </div>
            </div>
            
            ${generateFooterSection()}
        </form>
    `;
}

// Generate general inquiry form HTML
function generateGeneralInquiryForm() {
    return `
        <form class="careers-form-container" action="${CAREERS_FORMSPREE_ENDPOINT}" method="POST">
            <input type="hidden" name="formType" value="general-inquiry">
            
            <div class="careers-form-header">
                <h2>General Career Inquiry</h2>
                <p>Interested in joining our team? Let us know how you'd like to contribute to Inertia Software.</p>
            </div>
            
            ${generateContactSection()}
            
            <div class="form-section">
                <h3>Professional Background</h3>
                
                <div class="form-group">
                    <label for="currentRole">Current Role/Status</label>
                    <input type="text" id="currentRole" name="currentRole" placeholder="e.g., Software Developer, Designer, Marketing Professional">
                </div>
                
                <div class="form-group">
                    <label for="skills">Key Skills & Expertise</label>
                    <textarea id="skills" name="skills" required placeholder="What are your main skills and areas of expertise? What would you bring to our team?"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="interest">Area of Interest</label>
                    <select id="interest" name="interest" required>
                        <option value="">Select area of interest</option>
                        <option value="Development">Development</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Customer Success">Customer Success</option>
                        <option value="Operations">Operations</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            
            <div class="form-section">
                <h3>Tell Us More</h3>
                
                <div class="form-group">
                    <label for="motivation">Why are you interested in Inertia Software?</label>
                    <textarea id="motivation" name="motivation" required placeholder="What draws you to our company and mission? How do you see yourself contributing?"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="availability">When could you start?</label>
                    <select id="availability" name="availability">
                        <option value="">Select availability</option>
                        <option value="Immediately">Immediately</option>
                        <option value="Within 2 weeks">Within 2 weeks</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="Within 2 months">Within 2 months</option>
                        <option value="Just exploring">Just exploring opportunities</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="portfolio">Portfolio/Work Samples</label>
                    <textarea id="portfolio" name="portfolio" placeholder="Share links to your work, LinkedIn profile, or relevant projects"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="additionalInfo">Additional Information</label>
                    <textarea id="additionalInfo" name="additionalInfo" placeholder="Anything else you'd like us to know about you or your interest in working with us?"></textarea>
                </div>
            </div>
            
            ${generateFooterSection()}
        </form>
    `;
}

// Generate contact section HTML (reusing from FormUtils but customizing for careers)
function generateContactSection() {
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
                <label for="location">Location (City, State/Country)</label>
                <input type="text" id="location" name="location" placeholder="e.g., San Francisco, CA or Remote">
            </div>
        </div>
    `;
}

// Generate footer section HTML (customized for careers)
function generateFooterSection() {
    return `
        <div class="form-actions">
            <button type="submit" class="btn btn-primary btn-large">Submit Application</button>
            <button type="button" class="btn btn-secondary" onclick="FormUtils.closeModal()">Cancel</button>
        </div>
        
        <p class="form-note">
            By submitting this application, you agree to our 
            <a href="/src/pages/legal/privacy-policy.html" target="_blank">Privacy Policy</a> and 
            <a href="/src/pages/legal/terms.html" target="_blank">Terms of Service</a>.
            We'll review your application and respond within one week.
        </p>
    `;
}

// Override FormUtils form submission for careers-specific endpoint
const originalHandleFormSubmit = FormUtils.handleFormSubmit;
FormUtils.handleFormSubmit = function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Add metadata
    formData.append('submittedAt', new Date().toISOString());
    formData.append('userAgent', navigator.userAgent);
    formData.append('referrer', document.referrer);
    formData.append('source', 'careers-page');
    
    // Collect checked platforms if they exist
    const platforms = [];
    form.querySelectorAll('input[name="platforms"]:checked').forEach(checkbox => {
        platforms.push(checkbox.value);
    });
    if (platforms.length > 0) {
        formData.append('selectedPlatforms', platforms.join(', '));
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Submit to careers-specific Formspree endpoint
    fetch(CAREERS_FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            this.showCareersThankYou();
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
};

// Careers-specific thank you message
FormUtils.showCareersThankYou = function() {
    const formContent = document.getElementById('formContent');
    
    formContent.innerHTML = `
        <div class="thank-you-container">
            <div class="thank-you-icon">🎉</div>
            <h2>Application Submitted Successfully!</h2>
            <p class="thank-you-message">
                Thank you for your interest in joining Inertia Software. We're excited to learn more about you!
            </p>
            <div class="what-happens-next">
                <h3>What Happens Next?</h3>
                <div class="timeline-steps">
                    <div class="timeline-step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                            <strong>Within one week</strong>
                            <p>We'll review your application and respond with next steps</p>
                        </div>
                    </div>
                    <div class="timeline-step">
                        <span class="step-number">2</span>
                        <div class="step-content">
                            <strong>Initial Interview</strong>
                            <p>If you're a good fit, we'll schedule a conversation</p>
                        </div>
                    </div>
                    <div class="timeline-step">
                        <span class="step-number">3</span>
                        <div class="step-content">
                            <strong>Next Steps</strong>
                            <p>We'll discuss the role in detail and potential collaboration</p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="contact-note">
                Questions? Feel free to email us at <strong>useinertia@gmail.com</strong>
            </p>
            <button class="btn btn-primary" onclick="FormUtils.closeModal()">Got It</button>
        </div>
    `;
};