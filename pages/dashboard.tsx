import type { NextPage } from "next";
import { IPageServerSideProps } from "../interfaces/pages";

const Dashboard: NextPage = () => {
  return <>hello</>;
};

export const getServerSideProps = ({ req }: any): IPageServerSideProps => {
  return {
    props: {
      isAuthenticated: JSON.parse(req.cookies.authenticated),
      layout: "Authenticated",
    },
  };
};

export default Dashboard;
