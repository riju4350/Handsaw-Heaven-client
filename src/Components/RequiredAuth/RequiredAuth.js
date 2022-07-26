import React from "react";
import {
  useAuthState,
  // useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  // const [sendEmailVerification, sending, error] =
  //   useSendEmailVerification(auth);
  // let errorMessage;
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // if (error) {
  //   errorMessage = <p className="text-danger">{error}</p>;
  // }

  // if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
  //   return (
  //     <div className="text-center mt-5">
  //       <h3 className="text-danger">Your Email is not verified!!</h3>
  //       <h5 className="text-success"> Please Verify your email address</h5>
  //       <button
  //         className="cardBtn my-5"
  //         onClick={async () => {
  //           await sendEmailVerification();
  //           toast("Sent email");
  //         }}
  //       >
  //         Send Verification Email
  //       </button>
  //       {errorMessage}
  //       <ToastContainer></ToastContainer>
  //     </div>
  //   );
  // }

  return children;
};

export default RequireAuth;
