const fs = require('fs');
import { promises as fsp } from 'fs';

export default async function getOtp(req, res) {
  if (fs.existsSync('/tmp/otp.json')) {
    //Read the json data file data.json
    const fileContents = await fsp.readFile('/tmp/otp.json', 'utf8');
    //Return the content of the data file in json format
    res.status(200).json(JSON.parse(fileContents));
  } else {
    res.status(200).json(JSON.parse('{ "error": "File not foud." }'));
  }
}