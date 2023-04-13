import { readJSONFile } from "../../utils/utils";

export default function opt(req, res) {
    return res.status(200).json(readJSONFile('otp.json'));
}