import { signOut } from "firebase/auth";
import React from "react";
import {
  useAuthState,
  // useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../Loading/Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  if (loading || adminLoading) {
    return <Loading></Loading>;
  }

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;

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

// const [sendEmailVerification, sending, error] =
//   useSendEmailVerification(auth);
// let errorMessage;
