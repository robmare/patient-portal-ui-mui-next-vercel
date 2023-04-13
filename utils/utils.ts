const fs = require('fs');
const path = require('path');

export function writeOtp(updates) {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'json');
  
    fs.readFile(jsonDirectory + '/otp.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        let json = JSON.parse(data);

        for (let key in updates) {
            json[key] = updates[key];
        }

        fs.writeFile(jsonDirectory + '/otp.json', JSON.stringify(json, null, 2), 'utf8', function (err) {
            if (err) {
                console.error(err);
            }
        });
    });
}