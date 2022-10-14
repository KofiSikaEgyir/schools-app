import db from "../../../lib/dbConnect";
import User from "../../../models/user"
import bcrypt from "bcryptjs"

export default async function handler(req, res) {
    // if (req.method === "POST") {
    //     res.status(405).json({ error: "Only POST method is allowed"});
    //     return;
    // }
    if(req.method === "POST"){
    const {firstName, lastName, email, password} = req.body;

    await db.connect();

    const emailExists = await User.findOne({email});
    if (emailExists) {
        res.status(409).json({error: "Email already in use"})
        await db.disconnect();
        return;
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
    })
    await db.disconnect();
    res.status(201).json({ user });

}
    // const {firstName, lastName, email, password} = req.body;

    // await db.connect();

    // const emailExists = await User.findOne({email});
    // if (emailExists) {
    //     res.status(409).json({error: "Email already in use"})
    //     await db.disconnect();
    //     return;
    // }

    // const hashPassword = await bcrypt.hash(password, 12);
    // const user = await User.create({
    //     firstName,
    //     lastName,
    //     email,
    //     password: hashPassword,
    // })

    // res.status(201).json({ user });
};
