import { useRouter } from "next/navigation";
import { useEffect } from "react";


const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        router.replace("/LoginPage/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
