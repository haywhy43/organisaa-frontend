import { setCookies } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import passport from "../../../../lib/passport-google-auth";

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
    setCookies("user", JSON.stringify(req.user), { req, res });
    setCookies("authenticated", req.isAuthenticated(), { req, res });
    res.redirect("/dashboard");
  }
);
