import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import passport from "../../../../lib/passport-google-auth";

// interface IncomingMessage {

// }

const validate = (
  method: string,
  options: any,
  req: NextApiRequest,
  res: NextApiResponse
) =>
  new Promise((resolve, reject) => {
    passport.authenticate(
      method,
      { session: false, ...options },
      (error: any, token: unknown) => {
        if (error) {
          reject(error);
        } else {
          resolve(token);
        }
      }
    )(req, res);
  });

export default nextConnect().get(
  passport.authenticate("google"),
  (
    req: NextApiRequest & {
      session: any;
      user: any;
      isAuthenticated: () => boolean;
    },
    res: NextApiResponse
  ) => {
    res.redirect("/dashboard");
  }
);
