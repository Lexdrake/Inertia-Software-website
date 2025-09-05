const { sendWelcomeEmail, scheduleFollowUpEmail } = require('./utils/emailService');

export default async function handler(req, res) {
  // Only accept POST requests from Formspree
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    
    // Verify this is a beta agreement form submission
    if (formData['form-type'] !== 'beta-agreement') {
      return res.status(400).json({ error: 'Invalid form type' });
    }

    // Extract user information
    const userInfo = {
      name: formData['full-name'],
      email: formData['email-address'],
      deviceType: formData['device-type'],
      deviceModel: formData['device-model'],
      osVersion: formData['os-version'],
      techComfort: formData['tech-comfort'],
      primaryMode: formData['primary-mode'],
      timestamp: formData.timestamp || new Date().toISOString()
    };

    // Validate required fields
    if (!userInfo.name || !userInfo.email || !userInfo.deviceType) {
      return res.status(400).json({ error: 'Missing required user information' });
    }

    console.log('Processing beta agreement for:', userInfo.email);

    // Send welcome email with beta codes immediately
    await sendWelcomeEmail(userInfo);

    // Schedule follow-up email for 1 week later
    await scheduleFollowUpEmail(userInfo);

    // Respond to Formspree
    res.status(200).json({ 
      success: true, 
      message: 'Beta agreement processed and welcome email sent',
      user: userInfo.email
    });

  } catch (error) {
    console.error('Webhook processing error:', error);
    
    // Still return success to Formspree so it doesn't retry
    // But log the error for debugging
    res.status(200).json({ 
      success: false, 
      error: 'Internal processing error',
      message: 'Form received but email sending failed'
    });
  }
}