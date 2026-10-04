import { URLSchema } from "../model/model.js";
import { redis } from "../model/redis.js";

export const Redirect = async (req, res) => {
    const param = req.params.route;

    if (!param){
        return res.status(400).json({msg: "provide params"})
    }

    try {

        const key = `redirect:${param}`

        //try on redis
        const cache = await redis.get(key);
        if (cache){
            console.log("cache hit")
            return res.status(300).redirect(cache)
        }
        const url = await URLSchema.findOne({short: param})
        if (!url){
            return res.status(404).json({msg: "url not found"})
        }

        const original = url.original

        return res.status(300).redirect(original)
    }catch(e){
        return res.status(500).json({msg:"somthing went wrong"})
    }

}