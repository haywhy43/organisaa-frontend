import { useRouter } from "next/router";
import { useEffect } from "react";

const Default = ({ children, isAuthenticated }: any) => {
  const router = useRouter();

//   useEffect(() => {
//     if (isAuthenticated) router.push("/dashboard");
//   });

// if(isAuthenticated) return <Redire

  return <>{children}</>;
};

export default Default;
