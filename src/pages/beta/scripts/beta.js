// Beta page functionality
function showAgreementForm() {
    const agreementFormSection = document.getElementById('agreementFormSection');
    const formContainer = agreementFormSection.querySelector('.form-container');
    
    // Show the agreement form section
    agreementFormSection.style.display = 'block';
    
    // Create the agreement form
    formContainer.innerHTML = createBetaAgreementForm();
    
    // Scroll to the form
    agreementFormSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Add form submission handling
    const form = formContainer.querySelector('form');
    form.addEventListener('submit', handleAgreementFormSubmit);
}

function showForm(formType) {
    const formsSection = document.getElementById('formsSection');
    const formContainer = formsSection.querySelector('.form-container');
    
    // Show the forms section
    formsSection.style.display = 'block';
    
    // Clear existing content
    formContainer.innerHTML = '';
    
    // Create form based on type
    let formHTML = '';
    
    switch (formType) {
        case 'general':
            formHTML = createGeneralFeedbackForm();
            break;
        case 'bug':
            formHTML = createBugReportForm();
            break;
        case 'feature':
            formHTML = createFeatureRequestForm();
            break;
    }
    
    formContainer.innerHTML = formHTML;
    
    // Scroll to the form
    formsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Add form submission handling
    const form = formContainer.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function createGeneralFeedbackForm() {
    return `
        <div class="form-header">
            <h3>💬 Share Your Thoughts</h3>
            <p>Tell me what you think about the app - the good, the bad, and everything in between!</p>
        </div>
        
        <form class="beta-form" data-form-type="general">
            <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email (optional)</label>
                <input type="email" id="email" name="email" placeholder="In case I want to follow up">
            </div>
            
            <div class="form-group">
                <label for="overall-rating">Overall Experience</label>
                <select id="overall-rating" name="overall-rating" required>
                    <option value="">How's it going so far?</option>
                    <option value="love-it">Love it! 😍</option>
                    <option value="pretty-good">Pretty good 👍</option>
                    <option value="okay">It's okay 😐</option>
                    <option value="needs-work">Needs work 😕</option>
                    <option value="not-great">Not great 😞</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="feedback">Your Thoughts</label>
                <textarea id="feedback" name="feedback" rows="6" placeholder="What do you like? What's confusing? What would make this more useful for you?" required></textarea>
            </div>
            
            <div class="form-group">
                <label for="most-useful">What's Most Useful?</label>
                <textarea id="most-useful" name="most-useful" rows="3" placeholder="Which features or parts of the app do you find yourself using most?"></textarea>
            </div>
            
            <div class="form-group">
                <label for="least-useful">What's Not Working?</label>
                <textarea id="least-useful" name="least-useful" rows="3" placeholder="Anything confusing, annoying, or that you just don't use?"></textarea>
            </div>
            
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Send Feedback</button>
                <button type="button" class="btn btn-secondary" onclick="hideForm()">Cancel</button>
            </div>
        </form>
    `;
}

function createBugReportForm() {
    return `
        <div class="form-header">
            <h3>🐛 Bug Report</h3>
            <p>Help me squash this bug! The more details you can provide, the easier it'll be to fix.</p>
        </div>
        
        <form class="beta-form" data-form-type="bug">
            <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email (optional)</label>
                <input type="email" id="email" name="email" placeholder="In case I need more details">
            </div>
            
            <div class="form-group">
                <label for="bug-severity">How Bad Is It?</label>
                <select id="bug-severity" name="bug-severity" required>
                    <option value="">Select severity</option>
                    <option value="critical">App crashes or won't open 💥</option>
                    <option value="major">Core feature doesn't work 🚫</option>
                    <option value="minor">Something's weird but usable 🤔</option>
                    <option value="cosmetic">Visual/text issue 🎨</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="device-info">Device & Version</label>
                <input type="text" id="device-info" name="device-info" placeholder="e.g., iPhone 14 Pro, iOS 17.2" required>
            </div>
            
            <div class="form-group">
                <label for="what-happened">What Happened?</label>
                <textarea id="what-happened" name="what-happened" rows="4" placeholder="Describe exactly what went wrong" required></textarea>
            </div>
            
            <div class="form-group">
                <label for="steps-to-reproduce">How to Reproduce It</label>
                <textarea id="steps-to-reproduce" name="steps-to-reproduce" rows="4" placeholder="1. I opened the app&#10;2. I tapped on...&#10;3. Then I...&#10;4. And this happened..."></textarea>
            </div>
            
            <div class="form-group">
                <label for="expected-behavior">What Should Have Happened?</label>
                <textarea id="expected-behavior" name="expected-behavior" rows="3" placeholder="What were you expecting to happen instead?"></textarea>
            </div>
            
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Report Bug</button>
                <button type="button" class="btn btn-secondary" onclick="hideForm()">Cancel</button>
            </div>
        </form>
    `;
}

function createFeatureRequestForm() {
    return `
        <div class="form-header">
            <h3>💡 Feature Idea</h3>
            <p>Got an idea that would make the app more useful? I'd love to hear it!</p>
        </div>
        
        <form class="beta-form" data-form-type="feature">
            <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email (optional)</label>
                <input type="email" id="email" name="email" placeholder="In case I want to discuss the idea">
            </div>
            
            <div class="form-group">
                <label for="feature-priority">How Important Is This?</label>
                <select id="feature-priority" name="feature-priority" required>
                    <option value="">Select priority</option>
                    <option value="must-have">Must have - I really need this! 🔥</option>
                    <option value="would-help">Would definitely help 👍</option>
                    <option value="nice-to-have">Nice to have 😊</option>
                    <option value="just-an-idea">Just an idea 💭</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="feature-description">The Idea</label>
                <textarea id="feature-description" name="feature-description" rows="5" placeholder="Describe your feature idea. What should it do?" required></textarea>
            </div>
            
            <div class="form-group">
                <label for="problem-solved">What Problem Would This Solve?</label>
                <textarea id="problem-solved" name="problem-solved" rows="4" placeholder="What specific problem or frustration would this feature help with?"></textarea>
            </div>
            
            <div class="form-group">
                <label for="how-you-imagine">How Do You Imagine It Working?</label>
                <textarea id="how-you-imagine" name="how-you-imagine" rows="4" placeholder="Walk me through how you think this feature should work. Where would you find it? How would you use it?"></textarea>
            </div>
            
            <div class="form-group">
                <label for="similar-examples">Similar Examples</label>
                <textarea id="similar-examples" name="similar-examples" rows="3" placeholder="Have you seen something like this in other apps? How did they do it?"></textarea>
            </div>
            
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Suggest Feature</button>
                <button type="button" class="btn btn-secondary" onclick="hideForm()">Cancel</button>
            </div>
        </form>
    `;
}

function createBetaAgreementForm() {
    return `
        <div class="form-header">
            <h3>📝 Beta Tester Agreement</h3>
            <p>Join our beta testing program and help shape the future of Inertia Planner!</p>
        </div>
        
        <form class="beta-form" data-form-type="agreement" action="https://formspree.io/f/mgvlpbwz" method="POST">
            <!-- Section 1: Contact Information -->
            <div class="form-section">
                <h4>Contact Information</h4>
                <div class="form-group">
                    <label for="full-name">Full Name *</label>
                    <input type="text" id="full-name" name="full-name" required>
                </div>
                
                <div class="form-group">
                    <label for="email-address">Email Address *</label>
                    <input type="email" id="email-address" name="email-address" required>
                </div>
                
            </div>

            <!-- Section 2: Technical Details -->
            <div class="form-section">
                <h4>Technical Details</h4>
                <div class="form-group">
                    <label for="device-type">Device Type *</label>
                    <select id="device-type" name="device-type" required>
                        <option value="">Select device type</option>
                        <option value="ios">iOS (iPhone/iPad)</option>
                        <option value="android">Android</option>
                        <option value="both">Both iOS and Android</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="device-model">Device Model *</label>
                    <input type="text" id="device-model" name="device-model" placeholder="e.g., iPhone 14 Pro, Samsung Galaxy S23" required>
                </div>
                
                <div class="form-group">
                    <label for="os-version">Operating System Version *</label>
                    <input type="text" id="os-version" name="os-version" placeholder="e.g., iOS 17.2, Android 14" required>
                </div>
                
                <div class="form-group">
                    <label for="tech-comfort">Technical Comfort Level *</label>
                    <select id="tech-comfort" name="tech-comfort" required>
                        <option value="">How comfortable are you with technology?</option>
                        <option value="1">1 - Not very comfortable</option>
                        <option value="2">2 - Somewhat comfortable</option>
                        <option value="3">3 - Moderately comfortable</option>
                        <option value="4">4 - Very comfortable</option>
                        <option value="5">5 - Extremely comfortable</option>
                    </select>
                </div>
            </div>

            <!-- Section 3: Beta Participation -->
            <div class="form-section">
                <h4>Beta Participation</h4>
                <div class="form-group">
                    <label for="beta-experience">Previous Beta Testing Experience</label>
                    <textarea id="beta-experience" name="beta-experience" rows="3" placeholder="Have you beta tested apps before? What was your experience like?"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="feedback-willingness">Willingness to Provide Feedback *</label>
                    <select id="feedback-willingness" name="feedback-willingness" required>
                        <option value="">How likely are you to provide feedback?</option>
                        <option value="very-likely">Very likely - I love giving feedback!</option>
                        <option value="likely">Likely - I'll provide feedback when needed</option>
                        <option value="maybe">Maybe - depends on my experience</option>
                        <option value="unlikely">Unlikely - just want to try the app</option>
                    </select>
                </div>
            </div>

            <!-- Section 4: App-Specific Interest -->
            <div class="form-section">
                <h4>App-Specific Interest</h4>
                <div class="form-group">
                    <label for="primary-mode">Primary Mode of Interest *</label>
                    <select id="primary-mode" name="primary-mode" required>
                        <option value="">Which mode interests you most?</option>
                        <option value="student">Student Mode - Academic planning</option>
                        <option value="work">Work Mode - Professional planning</option>
                        <option value="life">Life Mode - Personal goal management</option>
                        <option value="all">All modes - Complete life management</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="current-planning">Current Planning Method</label>
                    <textarea id="current-planning" name="current-planning" rows="2" placeholder="How do you currently organize your life/work? (calendar apps, paper planners, etc.)"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="planning-challenge">Biggest Planning Challenge</label>
                    <textarea id="planning-challenge" name="planning-challenge" rows="2" placeholder="What's the biggest challenge you face with staying organized?"></textarea>
                </div>
                
                <div class="form-group">
                    <label for="anticipated-feature">Most Anticipated Feature</label>
                    <textarea id="anticipated-feature" name="anticipated-feature" rows="2" placeholder="Based on what you've read, what feature are you most excited about?"></textarea>
                </div>
            </div>

            <!-- Section 5: Agreements & Consents -->
            <div class="form-section">
                <h4>Agreements & Consents</h4>
                <div class="checkbox-group">
                    <div class="checkbox-item">
                        <input type="checkbox" id="beta-agreement" name="beta-agreement" required>
                        <label for="beta-agreement">I understand this is pre-release software and may contain bugs or incomplete features *</label>
                    </div>
                    
                    <div class="checkbox-item">
                        <input type="checkbox" id="privacy-consent" name="privacy-consent" required>
                        <label for="privacy-consent">I consent to data collection for app improvement and crash reporting *</label>
                    </div>
                    
                    <div class="checkbox-item">
                        <input type="checkbox" id="feedback-rights" name="feedback-rights" required>
                        <label for="feedback-rights">I agree that feedback I provide can be used to improve the app *</label>
                    </div>
                    
                    <div class="checkbox-item">
                        <input type="checkbox" id="nda-agreement" name="nda-agreement" required>
                        <label for="nda-agreement">I agree not to publicly discuss or review beta features until public release *</label>
                    </div>
                    
                    <div class="checkbox-item">
                        <input type="checkbox" id="no-replication" name="no-replication" required>
                        <label for="no-replication">I agree not to attempt to duplicate, reverse engineer, or replicate the app or its code *</label>
                    </div>
                    
                    <div class="checkbox-item">
                        <input type="checkbox" id="crash-reporting" name="crash-reporting" required>
                        <label for="crash-reporting">I consent to automated crash and bug reporting to help improve app stability *</label>
                    </div>
                </div>
            </div>

            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Submit Agreement & Get Beta Access</button>
                <button type="button" class="btn btn-secondary" onclick="hideAgreementForm()">Cancel</button>
            </div>
        </form>
    `;
}

function hideForm() {
    const formsSection = document.getElementById('formsSection');
    formsSection.style.display = 'none';
}

function hideAgreementForm() {
    const agreementFormSection = document.getElementById('agreementFormSection');
    agreementFormSection.style.display = 'none';
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formType = form.dataset.formType;
    const formData = new FormData(form);
    
    // Add form type to the submission
    formData.append('form-type', formType);
    formData.append('timestamp', new Date().toISOString());
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Submit to Formspree
    fetch('https://formspree.io/f/myzdbnab', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showThankYouMessage(formType);
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

function handleAgreementFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Add form type and timestamp
    formData.append('form-type', 'beta-agreement');
    formData.append('timestamp', new Date().toISOString());
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Submit to Formspree
    fetch('https://formspree.io/f/mgvlpbwz', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showAgreementThankYouMessage();
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showAgreementErrorMessage();
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

function showErrorMessage() {
    const formsSection = document.getElementById('formsSection');
    const formContainer = formsSection.querySelector('.form-container');
    
    formContainer.innerHTML = `
        <div class="error-message">
            <div class="error-icon">😅</div>
            <h3>Oops, something went wrong!</h3>
            <p>The form didn't submit properly. No worries though - you can just email me directly instead!</p>
            <a href="mailto:useinertia@gmail.com" class="btn btn-primary">Send Email</a>
            <button class="btn btn-secondary" onclick="hideForm()">Try Again</button>
        </div>
    `;
}

function showAgreementErrorMessage() {
    const agreementFormSection = document.getElementById('agreementFormSection');
    const formContainer = agreementFormSection.querySelector('.form-container');
    
    formContainer.innerHTML = `
        <div class="error-message">
            <div class="error-icon">😅</div>
            <h3>Oops, something went wrong!</h3>
            <p>The agreement form didn't submit properly. No worries though - you can just email me directly instead!</p>
            <a href="mailto:useinertia@gmail.com" class="btn btn-primary">Send Email</a>
            <button class="btn btn-secondary" onclick="hideAgreementForm()">Try Again</button>
        </div>
    `;
}

function showAgreementThankYouMessage() {
    const agreementFormSection = document.getElementById('agreementFormSection');
    const formContainer = agreementFormSection.querySelector('.form-container');
    
    formContainer.innerHTML = `
        <div class="thank-you-message">
            <div class="thank-you-icon">🎉 Welcome to the Beta Program!</div>
            <h3>Agreement Submitted Successfully!</h3>
            <p>Thank you for joining the Inertia Planner beta testing program! You'll receive an email with your beta access codes within a few minutes.</p>
            <p><strong>What happens next:</strong></p>
            <ul style="text-align: left; max-width: 400px; margin: 1rem auto;">
                <li>Check your email for beta access codes</li>
                <li>Download TestFlight (iOS) or use Play Console (Android)</li>
                <li>Start testing and exploring the app</li>
                <li>Share your feedback using the forms below</li>
            </ul>
            <p>We're excited to have you on board and can't wait to hear your thoughts!</p>
            <p style="margin-top: 1.5rem; color: #6b7280; font-size: 0.9rem;">
                <em>You can close this message by refreshing the page, or leave it open as a reference.</em>
            </p>
        </div>
    `;
    
    // Scroll to the thank you message
    setTimeout(() => {
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function showThankYouMessage(formType) {
    const formsSection = document.getElementById('formsSection');
    const formContainer = formsSection.querySelector('.form-container');
    
    let message = '';
    switch (formType) {
        case 'general':
            message = '💬 Thanks for the feedback!';
            break;
        case 'bug':
            message = '🐛 Bug report received!';
            break;
        case 'feature':
            message = '💡 Feature idea submitted!';
            break;
    }
    
    formContainer.innerHTML = `
        <div class="thank-you-message">
            <div class="thank-you-icon">${message}</div>
            <h3>Got it!</h3>
            <p>Thanks for taking the time to share that with me. I read every single submission and really appreciate your help making this app better.</p>
            <p>I'll get back to you if I have any questions or updates!</p>
            <button class="btn btn-primary" onclick="hideForm()">Done</button>
        </div>
    `;
}

// Add some basic form styling
const style = document.createElement('style');
style.textContent = `
    .beta-agreement-section {
        padding: 6rem 0;
        background: white;
    }
    
    .agreement-card {
        max-width: 600px;
        margin: 3rem auto 0;
        background: var(--bg-light);
        border-radius: 12px;
        padding: 3rem 2rem;
        text-align: center;
        border: 2px solid transparent;
        transition: all 0.3s ease;
    }
    
    .agreement-card:hover {
        border-color: var(--primary-color);
        background: white;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
    
    .agreement-icon {
        font-size: 3rem;
        margin-bottom: 1.5rem;
        display: block;
    }
    
    .agreement-header h3 {
        color: var(--text-dark);
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
    }
    
    .agreement-header p {
        color: var(--text-muted);
        line-height: 1.6;
        margin-bottom: 2rem;
    }
    
    .agreement-form-section {
        padding: 4rem 0;
        background: var(--bg-light);
        border-top: 1px solid var(--border-color);
    }
    
    .form-section {
        margin-bottom: 3rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--border-color);
    }
    
    .form-section:last-of-type {
        border-bottom: none;
        margin-bottom: 2rem;
    }
    
    .form-section h4 {
        color: var(--text-dark);
        margin-bottom: 2rem;
        font-size: 1.3rem;
        font-weight: 600;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--primary-color);
        display: inline-block;
    }
    
    .checkbox-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .checkbox-item {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
    }
    
    .checkbox-item input[type="checkbox"] {
        width: auto;
        margin: 0;
        margin-top: 0.2rem;
        flex-shrink: 0;
    }
    
    .checkbox-item label {
        margin: 0;
        cursor: pointer;
        line-height: 1.5;
        color: var(--text-muted);
    }
    
    .thank-you-message ul {
        color: var(--text-muted);
        line-height: 1.6;
    }
    
    .thank-you-message li {
        margin-bottom: 0.5rem;
    }
    
    .form-header {
        text-align: center;
        margin-bottom: 2rem;
    }
    
    .form-header h3 {
        color: var(--text-dark);
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    
    .form-header p {
        color: var(--text-muted);
        line-height: 1.6;
    }
    
    .beta-form .form-group {
        margin-bottom: 1.5rem;
    }
    
    .beta-form label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-dark);
        font-weight: 500;
    }
    
    .beta-form input,
    .beta-form select,
    .beta-form textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }
    
    .beta-form input:focus,
    .beta-form select:focus,
    .beta-form textarea:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
    
    .beta-form textarea {
        resize: vertical;
        min-height: 100px;
    }
    
    .form-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        margin-top: 2rem;
    }
    
    .thank-you-message {
        text-align: center;
        padding: 3rem 2rem;
    }
    
    .thank-you-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .thank-you-message h3 {
        color: var(--text-dark);
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    
    .thank-you-message p {
        color: var(--text-muted);
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    
    @media (max-width: 768px) {
        .form-actions {
            flex-direction: column;
        }
        
        .form-actions button {
            width: 100%;
        }
    }
`;
document.head.appendChild(style);