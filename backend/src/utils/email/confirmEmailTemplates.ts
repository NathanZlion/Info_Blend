export const confirmEmailTemplate = (verificationCode: string) => `
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f5f5f5;
                margin: 0;
                padding: 0;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .logo {
                display: block;
                margin: 0 auto;
                max-width: 200px;
            }

            h1 {
                text-align: center;
                color: #333;
            }

            p {
                color: #777;
            }

            .code {
                text-align: center;
                font-size: 24px;
                font-weight: bold;
                color: #333;
                margin: 20px 0;
            }

            .footer {
                text-align: center;
                margin-top: 20px;
                color: #777;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <img class="logo" src="https://i.ibb.co/KxXpDCK/infoblender-logo.png" alt="infoblender-logo">

            <h1>Confirm your email address</h1>
            <p>Thank you for registering with us.</p>

            <p>Use the following code to confirm your email address:</p>
            <h2 class="code">${verificationCode}</h2>

            <p class="footer">Infoblender</p>
        </div>
    </body>
    </html>
`;