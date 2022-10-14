import Schools from "../../../models/user"
import db from "../../../lib/dbConnect";

export default async function handler(req, res) {
    if (req.method ==! "GET" || req.method==! "POST") {
        res.status(405).json({
            error: "Only POST and GET method are allowed"
        });
    }
    console.log(req.body);

    if (req.method == "GET") {
        await db.connect();

        const schools = await Schools.find({});

        await db.disconnect();

        res.status(200).json({
            schools
        });
        return;
    } else if (req.method == "POST") {
        await db.connect();

        const {} = req.body;

        const schools = await postMessage.create({
            title,
            body,
    });

        await db.disconnect();

        res.status(201).json({
            schools
        });
    }
}