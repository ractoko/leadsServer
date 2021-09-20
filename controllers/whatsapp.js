const qrcode =  require("qrcode");
const { Client } = require('whatsapp-web.js');

function whats(req, res){
    const client = new Client();

    client.on('qr', qr => {
        console.log(qr);
        qrcode.toDataURL(qr, (err, src) => {
            if (err) res.send("Error occured");          
            // Let us return the QR code image as our response and set it to be the source used in the webpage
            res.status(200).send({"scan": src });
        });
    });

    client.on('ready', () => {
        console.log('Client is ready!');
    });

    client.initialize();
}

module.exports = {
    whats
  };