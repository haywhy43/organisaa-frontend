import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import UserModel from "../models/UserModel";
import passport from "passport";
import { connect } from "./database";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/oauth2/redirect/google",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: {
        id: string;
        displayName: string;
        emails: { value: string }[];
        provider: string;
      },
      cb: (arg0: null, arg1: any) => any
    ) => {
      try {
        await connect();
        const user = await UserModel.find({ identifier: profile.id });
        if (user.length) {
          return cb(null, user[0]);
        } else {
          // create a new user if user with email was not found
          const newUser = new UserModel({
            identifier: profile.id,
            full_name: profile.displayName,
            email: profile.emails[0].value,
            issuer: profile.provider,
          });

          await newUser.save().then((response: any) => {
            console.log(response);
            return cb(null, response);
          });
        }
      } catch (e: any) {
        throw new Error(e);
      }
    }
  )
);

passport.serializeUser(function (
  user: { id: string; email: string; full_name: string },
  cb: (
    arg0: null,
    arg1: { id: string; email: string; full_name: string }
  ) => void
) {
  process.nextTick(function () {
    cb(null, { id: user.id, email: user.email, full_name: user.full_name });
  });
});

passport.deserializeUser(function (
  user: any,
  cb: (arg0: null, arg1: any) => any
) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

export default passport;
