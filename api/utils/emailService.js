const { google } = require('googleapis');

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const BETA_CODES_IOS = process.env.BETA_CODES_IOS;
const BETA_CODES_ANDROID = process.env.BETA_CODES_ANDROID;

// Initialize Gmail API client
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

/**
 * Create email message in RFC 2822 format
 */
function createEmailMessage(to, subject, htmlContent) {
  const message = [
    'Content-Type: text/html; charset="UTF-8"',
    'MIME-Version: 1.0',
    `To: ${to}`,
    `From: "Inertia Software" <useinertia@gmail.com>`,
    `Subject: ${subject}`,
    '',
    htmlContent
  ].join('\n');

  return Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/**
 * Send welcome email with beta codes
 */
async function sendWelcomeEmail(userInfo) {
  const { name, email, deviceType } = userInfo;
  
  // Determine which codes to show based on device type
  let codesSection = '';
  if (deviceType === 'ios') {
    codesSection = `
      <div style="background: #f0f9ff; padding: 2rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid #3b82f6;">
        <h3 style="color: #1e40af; margin-bottom: 1rem;">📱 Your iOS Beta Code</h3>
        <p style="margin-bottom: 1rem;">Here's your TestFlight beta code:</p>
        <div style="background: white; padding: 1rem; border-radius: 4px; font-family: monospace; font-size: 1.2rem; font-weight: bold; color: #3b82f6; text-align: center; border: 2px dashed #3b82f6;">
          ${BETA_CODES_IOS}
        </div>
        <div style="margin-top: 1rem; font-size: 0.9rem; color: #6b7280;">
          <p><strong>Installation Steps:</strong></p>
          <ol>
            <li>Download TestFlight from the App Store</li>
            <li>Open TestFlight and tap "Redeem"</li>
            <li>Enter the code above</li>
            <li>Install Inertia Planner</li>
          </ol>
        </div>
      </div>
    `;
  } else if (deviceType === 'android') {
    codesSection = `
      <div style="background: #f0fdf4; padding: 2rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid #10b981;">
        <h3 style="color: #047857; margin-bottom: 1rem;">🤖 Your Android Beta Code</h3>
        <p style="margin-bottom: 1rem;">Here's your Play Console beta code:</p>
        <div style="background: white; padding: 1rem; border-radius: 4px; font-family: monospace; font-size: 1.2rem; font-weight: bold; color: #047857; text-align: center; border: 2px dashed #10b981;">
          ${BETA_CODES_ANDROID}
        </div>
        <div style="margin-top: 1rem; font-size: 0.9rem; color: #6b7280;">
          <p><strong>Installation Steps:</strong></p>
          <ol>
            <li>Use the Google Play Console link provided</li>
            <li>Enter the code above</li>
            <li>Install Inertia Planner from the Play Store</li>
          </ol>
        </div>
      </div>
    `;
  } else if (deviceType === 'both') {
    codesSection = `
      <div style="background: #f0f9ff; padding: 2rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid #3b82f6;">
        <h3 style="color: #1e40af; margin-bottom: 1rem;">📱 iOS Beta Code (TestFlight)</h3>
        <div style="background: white; padding: 1rem; border-radius: 4px; font-family: monospace; font-size: 1.2rem; font-weight: bold; color: #3b82f6; text-align: center; border: 2px dashed #3b82f6;">
          ${BETA_CODES_IOS}
        </div>
      </div>
      
      <div style="background: #f0fdf4; padding: 2rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid #10b981;">
        <h3 style="color: #047857; margin-bottom: 1rem;">🤖 Android Beta Code (Play Console)</h3>
        <div style="background: white; padding: 1rem; border-radius: 4px; font-family: monospace; font-size: 1.2rem; font-weight: bold; color: #047857; text-align: center; border: 2px dashed #10b981;">
          ${BETA_CODES_ANDROID}
        </div>
      </div>
    `;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Inertia Planner Beta!</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc;">
      <div style="max-width: 600px; margin: 0 auto; padding: 2rem; background-color: white;">
        
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 2rem;">
          <div style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; padding: 2rem; border-radius: 12px;">
            <h1 style="margin: 0; font-size: 2rem;">🎉 Welcome to the Beta Program!</h1>
            <p style="margin: 1rem 0 0; opacity: 0.9; font-size: 1.1rem;">Thanks for joining us, ${name}!</p>
          </div>
        </div>

        <!-- Beta Codes Section -->
        ${codesSection}

        <!-- What's Next -->
        <div style="background: #fef3c7; padding: 2rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid #f59e0b;">
          <h3 style="color: #92400e; margin-bottom: 1rem;">🚀 What's Next?</h3>
          <ol style="color: #6b7280; line-height: 1.6;">
            <li><strong>Install the app</strong> using your beta code above</li>
            <li><strong>Explore all three modes:</strong> Student, Work, and Life planning</li>
            <li><strong>Try the core features:</strong> Create projects, set habits, use the batch scheduler</li>
            <li><strong>Share your feedback</strong> using the forms on the beta website</li>
          </ol>
        </div>

        <!-- Getting Started Resources -->
        <div style="background: #f1f5f9; padding: 2rem; border-radius: 8px; margin: 2rem 0;">
          <h3 style="color: #1e293b; margin-bottom: 1rem;">📚 Helpful Resources</h3>
          <ul style="color: #6b7280; line-height: 1.8;">
            <li><a href="https://useinertia.com/src/pages/beta/getting-started.html" style="color: #3b82f6;">Getting Started Guide</a> - Step-by-step walkthrough</li>
            <li><a href="https://useinertia.com/src/pages/beta/faq.html" style="color: #3b82f6;">FAQ</a> - Common questions answered</li>
            <li><a href="https://useinertia.com/src/pages/beta/timeline.html" style="color: #3b82f6;">Development Timeline</a> - See what's coming next</li>
          </ul>
        </div>

        <!-- Feedback Reminder -->
        <div style="background: #ecfdf5; padding: 2rem; border-radius: 8px; margin: 2rem 0; text-align: center; border-left: 4px solid #10b981;">
          <h3 style="color: #047857; margin-bottom: 1rem;">💬 Your Feedback Matters</h3>
          <p style="color: #6b7280; line-height: 1.6; margin-bottom: 1.5rem;">
            Every bug report, suggestion, and piece of feedback helps make this app better. 
            Don't hesitate to reach out with anything you notice!
          </p>
          <a href="https://useinertia.com/src/pages/beta/#feedback" 
             style="display: inline-block; background: #10b981; color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 6px; font-weight: 500;">
            Share Feedback
          </a>
        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;">
          <p style="color: #9ca3af; font-size: 0.9rem; margin-bottom: 1rem;">
            Questions? Just reply to this email or visit 
            <a href="https://useinertia.com/src/pages/beta/" style="color: #3b82f6;">the beta website</a>.
          </p>
          <p style="color: #9ca3af; font-size: 0.8rem; margin: 0;">
            Inertia Software LLC | Building thoughtful technology that adapts to human behavior
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  const subject = `🎉 Welcome to Inertia Planner Beta - Your Access Codes Inside!`;
  const rawMessage = createEmailMessage(email, subject, htmlContent);

  try {
    const result = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: rawMessage,
      },
    });

    console.log(`Welcome email sent successfully to ${email}, message ID: ${result.data.id}`);
    return result.data;
  } catch (error) {
    console.error(`Failed to send welcome email to ${email}:`, error);
    throw error;
  }
}

/**
 * Schedule follow-up email (simplified version - stores in a simple queue)
 * In production, you might want to use a proper queue system
 */
async function scheduleFollowUpEmail(userInfo) {
  // For now, we'll use a simple setTimeout approach
  // In production, consider using a proper job queue like Vercel Cron or external service
  
  const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
  
  setTimeout(async () => {
    try {
      await sendFollowUpEmail(userInfo);
    } catch (error) {
      console.error('Failed to send follow-up email:', error);
    }
  }, oneWeek);
  
  console.log(`Follow-up email scheduled for ${userInfo.email} in 1 week`);
}

/**
 * Send follow-up feedback reminder email
 */
async function sendFollowUpEmail(userInfo) {
  const { name, email } = userInfo;
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>How's your Inertia Planner experience?</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc;">
      <div style="max-width: 600px; margin: 0 auto; padding: 2rem; background-color: white;">
        
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 2rem;">
          <div style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; padding: 2rem; border-radius: 12px;">
            <h1 style="margin: 0; font-size: 1.8rem;">👋 Hey ${name}!</h1>
            <p style="margin: 1rem 0 0; opacity: 0.9;">How's your beta testing experience going?</p>
          </div>
        </div>

        <!-- Main Content -->
        <div style="margin: 2rem 0;">
          <p style="color: #4b5563; line-height: 1.6; font-size: 1.1rem;">
            It's been about a week since you joined the Inertia Planner beta program. I hope you've had a chance to explore the app and see how it fits into your planning routine!
          </p>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Your feedback is incredibly valuable in making this app better. Whether you've found bugs, have feature ideas, or just want to share how you're using the app - I'd love to hear from you.
          </p>
        </div>

        <!-- Feedback Options -->
        <div style="background: #f0f9ff; padding: 2rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid #3b82f6;">
          <h3 style="color: #1e40af; margin-bottom: 1.5rem;">💬 Share Your Experience</h3>
          <div style="text-align: center;">
            <a href="https://useinertia.com/src/pages/beta/#feedback" 
               style="display: inline-block; background: #3b82f6; color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 6px; font-weight: 500; margin: 0.5rem;">
              General Feedback
            </a>
            <a href="https://useinertia.com/src/pages/beta/#feedback" 
               style="display: inline-block; background: #dc2626; color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 6px; font-weight: 500; margin: 0.5rem;">
              Report a Bug
            </a>
            <a href="https://useinertia.com/src/pages/beta/#feedback" 
               style="display: inline-block; background: #10b981; color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 6px; font-weight: 500; margin: 0.5rem;">
              Suggest Features
            </a>
          </div>
        </div>

        <!-- Questions -->
        <div style="background: #fef3c7; padding: 2rem; border-radius: 8px; margin: 2rem 0;">
          <h3 style="color: #92400e; margin-bottom: 1rem;">🤔 Some questions to consider:</h3>
          <ul style="color: #6b7280; line-height: 1.8;">
            <li>Which mode (Student/Work/Life) are you using most?</li>
            <li>What's working well for your planning style?</li>
            <li>What feels confusing or frustrating?</li>
            <li>Are there features from other apps you wish were included?</li>
            <li>How does the app fit into your daily routine?</li>
          </ul>
        </div>

        <!-- No Pressure -->
        <div style="background: #f1f5f9; padding: 1.5rem; border-radius: 8px; margin: 2rem 0; text-align: center;">
          <p style="color: #6b7280; margin: 0; font-style: italic;">
            No pressure if you haven't had time to dive in yet - feedback whenever you're ready is always appreciated! 😊
          </p>
        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;">
          <p style="color: #9ca3af; font-size: 0.9rem; margin-bottom: 1rem;">
            Thanks for being part of the beta program!
          </p>
          <p style="color: #9ca3af; font-size: 0.8rem; margin: 0;">
            You can reply directly to this email or use the feedback forms on the website.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  const subject = `📝 Quick check-in: How's your Inertia Planner beta experience?`;
  const rawMessage = createEmailMessage(email, subject, htmlContent);

  try {
    const result = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: rawMessage,
      },
    });

    console.log(`Follow-up email sent successfully to ${email}, message ID: ${result.data.id}`);
    return result.data;
  } catch (error) {
    console.error(`Failed to send follow-up email to ${email}:`, error);
    throw error;
  }
}

module.exports = {
  sendWelcomeEmail,
  scheduleFollowUpEmail,
  sendFollowUpEmail
};