import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
import db from "../../../lib/dbConnect";
import User from "../../../models/user"


export default NextAuth({
    providers: [
        CredentialsProvider({
            type:"credentials",
            async authorize(credentials) {
                await db.connect();

                //find user
                const user = await User.findOne({ email: credentials.email });

                // disconnect database
                await db.disconnect();

                //check for user's password
                if (user && bcrypt.compareSync(credentials.password, user.password)){
                    return{
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                    }
                }
                    throw new Error("invalid credentials"); 
            }
        }),
    ],
    pages: {
        signIn: "/login",
        error: "/",
    }
})

