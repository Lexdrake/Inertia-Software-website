// Careers Form Handlers - Using beta page pattern

// Form submission endpoint - using the provided Formspree link
const CAREERS_FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpwjonko';

// Show form function (similar to beta page pattern)
function showForm(formType) {
    const formsSection = document.getElementById('careersFormsSection');
    const formContainer = formsSection.querySelector('.careers-form-container-wrapper');
    
    // Show the forms section
    formsSection.style.display = 'block';
    
    // Clear existing content
    formContainer.innerHTML = '';
    
    // Create form based on type
    let formHTML = '';
    
    switch (formType) {
        case 'job-application':
            formHTML = generateJobApplicationForm();
            break;
        case 'general-inquiry':
            formHTML = generateGeneralInquiryForm();
            break;
    }
    
    formContainer.innerHTML = formHTML;
    
    // Scroll to the form
    formsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Add form submission handling
    const form = formContainer.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleCareersFormSubmit);
    }
}

// Hide form function
function hideForm() {
    const formsSection = document.getElementById('careersFormsSection');
    formsSection.style.display = 'none';
    
    // Scroll back to appropriate section for better UX
    const currentOpeningsSection = document.querySelector('.current-openings');
    if (currentOpeningsSection) {
        currentOpeningsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Generate job application form HTML
function generateJobApplicationForm() {
    return `
        <div class="careers-form-header">
            <h3>💼 Apply for Content & Community Manager</h3>
            <p>We're excited to learn more about you and how you can contribute to our team!</p>
        </div>
        
        <form class="careers-form" data-form-type="job-application">
            <input type="hidden" name="formType" value="job-application">
            <input type="hidden" name="position" value="Content & Community Manager">
            
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required>
            </div>
            
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="phone">Phone Number (optional)</label>
                <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567">
            </div>
            
            <div class="form-group">
                <label for="location">Location</label>
                <input type="text" id="location" name="location" placeholder="City, State/Country or Remote" required>
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
                <label for="platforms">Which social platforms do you have the most experience with?</label>
                <div class="platform-checkboxes">
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
                <label for="portfolio">Portfolio/Work Samples</label>
                <textarea id="portfolio" name="portfolio" rows="4" placeholder="Please share links to your best work, social media accounts you've managed, or relevant projects. Include any metrics or results you're proud of."></textarea>
            </div>
            
            <div class="form-group">
                <label for="contentStrategy">Describe your approach to content strategy for a productivity app</label>
                <textarea id="contentStrategy" name="contentStrategy" rows="4" required placeholder="How would you approach creating content that resonates with people struggling with productivity and organization? What types of content perform best in this space?"></textarea>
            </div>
            
            <div class="form-group">
                <label for="communityBuilding">Tell us about your community building experience</label>
                <textarea id="communityBuilding" name="communityBuilding" rows="4" placeholder="Have you built or managed online communities? How do you foster engagement and create meaningful connections between users?"></textarea>
            </div>
            
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
                <label for="coverLetter">Why are you interested in this role?</label>
                <textarea id="coverLetter" name="coverLetter" rows="5" required placeholder="Tell us why you're interested in this role and how you'd contribute to Inertia Software. What excites you about helping people improve their productivity?"></textarea>
            </div>
            
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Submit Application</button>
                <button type="button" class="btn btn-secondary" onclick="hideForm()">Cancel</button>
            </div>
        </form>
    `;
}

// Generate general inquiry form HTML
function generateGeneralInquiryForm() {
    return `
        <div class="careers-form-header">
            <h3>💬 General Career Inquiry</h3>
            <p>Interested in joining our team? Let us know how you'd like to contribute to Inertia Software.</p>
        </div>
        
        <form class="careers-form" data-form-type="general-inquiry">
            <input type="hidden" name="formType" value="general-inquiry">
            
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required>
            </div>
            
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="location">Location</label>
                <input type="text" id="location" name="location" placeholder="City, State/Country or Remote">
            </div>
            
            <div class="form-group">
                <label for="currentRole">Current Role/Status</label>
                <input type="text" id="currentRole" name="currentRole" placeholder="e.g., Software Developer, Designer, Marketing Professional">
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
            
            <div class="form-group">
                <label for="skills">Key Skills & Expertise</label>
                <textarea id="skills" name="skills" rows="4" required placeholder="What are your main skills and areas of expertise? What would you bring to our team?"></textarea>
            </div>
            
            <div class="form-group">
                <label for="motivation">Why are you interested in Inertia Software?</label>
                <textarea id="motivation" name="motivation" rows="4" required placeholder="What draws you to our company and mission? How do you see yourself contributing?"></textarea>
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
                <label for="portfolio">Portfolio/Work Samples (optional)</label>
                <textarea id="portfolio" name="portfolio" rows="3" placeholder="Share links to your work, LinkedIn profile, or relevant projects"></textarea>
            </div>
            
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Send Inquiry</button>
                <button type="button" class="btn btn-secondary" onclick="hideForm()">Cancel</button>
            </div>
        </form>
    `;
}

// Handle form submission
function handleCareersFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formType = form.dataset.formType;
    const formData = new FormData(form);
    
    // Add form metadata
    formData.append('form-type', formType);
    formData.append('timestamp', new Date().toISOString());
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
            showCareersThankYou(formType);
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showCareersError();
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// Show thank you message
function showCareersThankYou(formType) {
    const formsSection = document.getElementById('careersFormsSection');
    const formContainer = formsSection.querySelector('.careers-form-container-wrapper');
    
    let message = formType === 'job-application' ? 
        '💼 Application submitted!' : 
        '💬 Inquiry sent!';
    
    formContainer.innerHTML = `
        <div class="careers-thank-you-message">
            <div class="thank-you-icon">${message}</div>
            <h3>Thanks for reaching out!</h3>
            <p>We've received your ${formType === 'job-application' ? 'application' : 'inquiry'} and are excited to learn more about you.</p>
            <p>We'll review everything and get back to you within one week. Feel free to email us at <strong>useinertia@gmail.com</strong> if you have any questions!</p>
            <button class="btn btn-primary" onclick="hideForm()">Done</button>
        </div>
    `;
}

// Show error message
function showCareersError() {
    const formsSection = document.getElementById('careersFormsSection');
    const formContainer = formsSection.querySelector('.careers-form-container-wrapper');
    
    formContainer.innerHTML = `
        <div class="careers-error-message">
            <div class="error-icon">😅</div>
            <h3>Oops, something went wrong!</h3>
            <p>The form didn't submit properly. No worries though - you can email us directly instead!</p>
            <div class="error-actions">
                <a href="mailto:useinertia@gmail.com?subject=Career Inquiry" class="btn btn-primary">Send Email</a>
                <button class="btn btn-secondary" onclick="hideForm()">Try Again</button>
            </div>
        </div>
    `;
}