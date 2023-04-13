import fs from 'fs';

export function writeOtp(updates) {
    let json = JSON.parse('{ "otp": "none" }');
    
    for (let key in updates) {
        json[key] = updates[key];
    }

    fs.writeFile('/tmp/otp.json', JSON.stringify(json, null, 2), 'utf8', function (err) {
        if (err) {
            console.error(err);
        }
    });
}