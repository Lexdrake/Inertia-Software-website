const { google } = require('googleapis');

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:8080/auth/callback';

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { code } = req.query;
    
    if (!code) {
      // Step 1: Generate authorization URL
      const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/gmail.send'],
        prompt: 'consent' // Forces refresh token to be returned
      });
      
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Gmail OAuth Setup - Inertia Beta System</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; }
            .container { background: #f5f5f5; padding: 2rem; border-radius: 8px; }
            .step { background: white; padding: 1.5rem; margin: 1rem 0; border-radius: 6px; border-left: 4px solid #6366f1; }
            .code-box { background: #f1f5f9; padding: 1rem; border-radius: 4px; font-family: monospace; word-break: break-all; margin: 1rem 0; }
            .warning { background: #fef3c7; border: 1px solid #f59e0b; padding: 1rem; border-radius: 4px; margin: 1rem 0; }
            .btn { display: inline-block; background: #6366f1; color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 6px; margin: 1rem 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>🔐 Gmail OAuth Setup for Inertia Beta System</h1>
            <p>This is a <strong>one-time setup</strong> to authorize the beta email automation system.</p>
            
            <div class="warning">
              <strong>⚠️ Security Note:</strong> Only you (the owner of useinertia@gmail.com) should complete this authorization. This grants permission to send emails on behalf of your Gmail account.
            </div>
            
            <div class="step">
              <h3>Step 1: Authorize Gmail Access</h3>
              <p>Click the button below to authorize Gmail API access:</p>
              <a href="${authUrl}" class="btn" target="_blank">Authorize Gmail API</a>
            </div>
            
            <div class="step">
              <h3>Step 2: Get Authorization Code</h3>
              <p>After authorizing, you'll be redirected to a page that shows an authorization code. Copy the entire code.</p>
            </div>
            
            <div class="step">
              <h3>Step 3: Exchange Code for Tokens</h3>
              <p>Paste the authorization code here and click "Get Refresh Token":</p>
              <form action="/api/auth" method="get">
                <input type="text" name="code" placeholder="Paste authorization code here" style="width: 300px; padding: 0.5rem; margin-right: 1rem;">
                <input type="submit" value="Get Refresh Token" class="btn" style="background: #10b981; border: none; cursor: pointer;">
              </form>
            </div>
            
            <div class="step">
              <h3>What This Does</h3>
              <ul>
                <li>Generates a refresh token for automated email sending</li>
                <li>Allows the system to send beta welcome emails automatically</li>
                <li>Enables 1-week follow-up reminder emails</li>
                <li>Does NOT give access to read your existing emails</li>
              </ul>
            </div>
          </div>
        </body>
        </html>
      `);
    } else {
      // Step 2: Exchange code for tokens
      try {
        const { tokens } = await oauth2Client.getToken(code);
        
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>OAuth Success - Inertia Beta System</title>
            <style>
              body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; }
              .container { background: #f0fdf4; padding: 2rem; border-radius: 8px; border: 1px solid #10b981; }
              .success { background: white; padding: 1.5rem; margin: 1rem 0; border-radius: 6px; border-left: 4px solid #10b981; }
              .code-box { background: #f1f5f9; padding: 1rem; border-radius: 4px; font-family: monospace; word-break: break-all; margin: 1rem 0; user-select: all; }
              .next-steps { background: #dbeafe; padding: 1.5rem; border-radius: 6px; margin: 1rem 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>✅ OAuth Setup Complete!</h1>
              
              <div class="success">
                <h3>Refresh Token Generated Successfully</h3>
                <p>Copy this refresh token and add it to your Vercel environment variables:</p>
                <div class="code-box">${tokens.refresh_token}</div>
              </div>
              
              <div class="next-steps">
                <h3>📋 Next Steps:</h3>
                <ol>
                  <li>Go to your <strong>Vercel project settings</strong></li>
                  <li>Navigate to <strong>Environment Variables</strong></li>
                  <li>Add a new variable: <code>GMAIL_REFRESH_TOKEN</code></li>
                  <li>Paste the refresh token above as the value</li>
                  <li>Save and redeploy your project</li>
                </ol>
                <p><strong>After adding the refresh token, your email automation system will be ready!</strong></p>
              </div>
              
              <div style="background: #fff3cd; padding: 1rem; border-radius: 4px; margin: 1rem 0;">
                <strong>🔒 Security:</strong> Keep this refresh token secure. Store it only in Vercel environment variables, never in your code repository.
              </div>
            </div>
          </body>
          </html>
        `);
      } catch (error) {
        res.status(400).json({ 
          error: 'Failed to exchange code for tokens', 
          details: error.message,
          instructions: 'Please go back and try the authorization process again.'
        });
      }
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}