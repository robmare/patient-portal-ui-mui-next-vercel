const fs = require('fs');

export function writeOtp(updates) {
    fs.readFile('/tmp/otp.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        let json = JSON.parse(data);

        for (let key in updates) {
            json[key] = updates[key];
        }

        fs.writeFile('/tmp/otp.json', JSON.stringify(json, null, 2), 'utf8', function (err) {
            if (err) {
                console.error(err);
            }
        });

    });
}