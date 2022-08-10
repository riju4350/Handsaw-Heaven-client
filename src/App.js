import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navber from "./Components/Navber/Navber";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Pages/DashBoard/DashBoard";
import Myprofile from "./Pages/Myprofile/Myprofile";
import Allproducts from "./Pages/Allproducts/Allproducts";
import RequireAuth from "./Components/RequiredAuth/RequiredAuth";
import BuyNow from "./Components/BuyNow/BuyNow";
import Blogs from "./Components/Blogs/Blogs";
import AddReviews from "./Pages/AddReviews/AddReviews";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import MyOrders from "./Components/MyOrders/MyOrders";
import MyProfile from "./Pages/Myprofile/Myprofile";
import Users from "./Components/Users/Users";
import { ToastContainer } from "react-toastify";
import RequireAdmin from "./Components/RequiredAdmin/RequiredAdmin";
import AddProduct from "./Components/AddProduct/AddProduct";
import RemoveProduct from "./Components/RemoveProduct/RemoveProduct";

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="purchase" element={<Allproducts></Allproducts>}></Route>
        <Route
          path="product/:id"
          element={
            <RequireAuth>
              <BuyNow></BuyNow>
            </RequireAuth>
          }
        ></Route>
        <Route path="myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route path="addreview" element={<AddReviews></AddReviews>}></Route>
          <Route path="myprofile" element={<Myprofile></Myprofile>}></Route>

          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="manageProduct"
            element={<RemoveProduct></RemoveProduct>}
          ></Route>
        </Route>

        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;

// git add .
// git commit -m "first commit"
// git push
