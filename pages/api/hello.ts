// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { connect } from "../../lib/database";

// type Data = {
//   name: string;
// };

export default nextConnect().get(
  (req: NextApiRequest, res: NextApiResponse) => {
    res.send({
      session: req.cookies,
      // auth: req.isAuthenticated(),
    });
  }
);
