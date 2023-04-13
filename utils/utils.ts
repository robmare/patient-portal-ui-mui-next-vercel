const fs = require('fs');
const fsp = require('fs/promises');

export function updateJSONFile(filePath, updates) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        let json = JSON.parse(data);

        for (let key in updates) {
            json[key] = updates[key];
        }

        fs.writeFile(filePath, JSON.stringify(json, null, 2), 'utf8', function (err) {
            if (err) {
                console.error(err);
            }
        });
    });
}

export function readJSONFile(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}