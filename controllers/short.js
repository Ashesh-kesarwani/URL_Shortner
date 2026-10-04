import {nanoid} from 'nanoid';
import { URLSchema } from '../model/model.js';


export const Short = async (req, res) => {
    const originalUrl = req.body.original;
//validating user url
    try {
        new URL(originalUrl);
    }
    catch (e) {
        return res.status(400).json({error: "Invalid URL"});
    }
    try {
        const uid = nanoid(7);  //genrate random string of 7 characters

        await URLSchema.create({original: originalUrl, short: uid});
        
        return res.status(200).json({msg:"url generated", url:uid})
    }
    catch (e) {
        return res.status(500).json({error: "Internal server error"});
    }    
}