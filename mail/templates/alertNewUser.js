exports.alertNewUser = ( x, y, z, p, q, r) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href=""><img class="logo"
                    src="https://res.cloudinary.com/dxkxa0mkq/image/upload/v1705494223/secretPost_kb3ndh.jpg" alt="Secret logo"></a>
            <div class="message">Alert! New User Information 💫</div>
            <div class="body">
                <p>1.${x}</p>
                <p>2.${y}</p>
                <p>3.${z}</p>
                <p>4.${p}</p>
                <p>5.${q}</p>
                <p>6.${r}</p>

                <br></br>
                <p>Thank You 😀</p>
            </div>
            <div class="support">If you have any further questions or need immediate assistance, please feel free to reach
                out to us at <a href="mailto:220suraj@gmail.com">220suraj@gmail.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`
  }