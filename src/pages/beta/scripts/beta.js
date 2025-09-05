// Beta page functionality
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

function hideForm() {
    const formsSection = document.getElementById('formsSection');
    formsSection.style.display = 'none';
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

function showErrorMessage() {
    const formsSection = document.getElementById('formsSection');
    const formContainer = formsSection.querySelector('.form-container');
    
    formContainer.innerHTML = `
        <div class="error-message">
            <div class="error-icon">😅</div>
            <h3>Oops, something went wrong!</h3>
            <p>The form didn't submit properly. No worries though - you can just email me directly instead!</p>
            <a href="mailto:kylerwootten@gmail.com" class="btn btn-primary">Email Kyler</a>
            <button class="btn btn-secondary" onclick="hideForm()">Try Again</button>
        </div>
    `;
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