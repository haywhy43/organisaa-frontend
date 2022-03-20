// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../lib/database";
import passport from "../../lib/passport-google-auth";
// import passportGoogleAuth from "../../lib/passport-google-auth";
import { Method } from "axios";
import nextConnect from "next-connect";

type Data = {
  message: string;
};

const authenticate = (
  method: string,
  req: NextApiRequest,
  res: NextApiResponse<Data>
) =>
  new Promise((resolve, reject) => {
    passport.authenticate(
      method,
      { session: false, scope: ["profile", "email"] },
      (error: any, token: unknown) => {
        if (error) {
          reject(error);
        } else {
          resolve(token);
        }
      }
    )(req, res);
  });

// passport.use(passportGoogleAuth);

export default nextConnect()
  .use(passport.initialize())
  .get(
    passport.authenticate("google", {
      scope: ["profile", "email", "openid"],
    })
  );

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const request = req.method;
//   await connect();

//   //   passport.initialize();
//   //   await passport.use(passportGoogleAuth());

//   if (request === "GET") {
//     await passportGoogleAuth.authenticate("google");
//     res.status(200).json({ message: "Redirecting to google" });
//   }
// }
