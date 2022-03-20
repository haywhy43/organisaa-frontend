// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import passport from "../../lib/passport-google-auth";
import nextConnect from "next-connect";

export default nextConnect()
  .use(passport.initialize())
  .get(
    passport.authenticate("google", {
      scope: ["profile", "email", "openid"],
    })
  );
