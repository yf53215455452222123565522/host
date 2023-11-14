import Cart from "./Pages/Cart";
import Home from "./Pages/home";
import Listing from "./Pages/Listing";
import OrderDetails from "./Pages/OrderDetails";
import OrderReceived from "./Pages/OrderReceived";
import PaymentDetails from "./Pages/PaymentDetails";
import PaymentOption from "./Pages/PaymentOption";
import ProductDetails from "./Pages/ProductDetails";
import Profile from "./Pages/Profile";
import TrackDeliveryBoy from "./Pages/TrackDeliveryBoy";
import TrackOrder from "./Pages/TrackOrder";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from "./Pages/LoginForm";
import PrivateRoute from "./configuration/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Preference from "./Pages/Preference";
import AdminRoute from "./configuration/AdminRoute";
import Dashboard from "./Pages/Admin/Dashboard";
import Categories from "./Pages/Admin/Categories";
import Orders from "./Pages/Admin/Orders";
import Products from "./Pages/Admin/Products";
import Users from "./Pages/Admin/Users";
import UserOrders from "./Pages/Admin/UserOrders";
import PreparateurCommandRoute from "./configuration/PreparateurCommandRoute";
import LivreurRoute from "./configuration/LivreurRoute";
import LivreurDashboard from "./Pages/Livreur/LivreurDashboard";
import PreparateurDashboard from "./Pages/PreparateurCommande/PreparateurDashboard";
import Commandes from "./Pages/PreparateurCommande/Commandes";
import Historique from "./Pages/PreparateurCommande/Historique";
import Payments from "./Pages/Admin/Payments";
import UserPayments from "./Pages/Admin/UserPayments";
import LivreurHistorique from "./Pages/Livreur/LivreurHistorique";

function App() {

  return (
    <Router>
      <Routes>

        <Route path="/LoginForm" element={<LoginForm />}>

        </Route>

        <Route element={<PrivateRoute />}>
          <Route exact path="/*" element={<Home />}>

          </Route>

          <Route path="/home" element={<Home />}>

          </Route>


          <Route path="/cart" element={<Cart />}>

          </Route>

          <Route path="/listing" element={<Listing />}>

          </Route>
          <Route path="/listing/:id" element={<Listing />}>

          </Route>
          <Route path="/OrderDetails" element={<OrderDetails />}>

          </Route>
          <Route path="/OrderDetails/:id" element={<OrderDetails />}>

          </Route>
          <Route path="/OrderReceived/:order" element={<OrderReceived />}>

          </Route>
          <Route path="/paymentDetails" element={<PaymentDetails />}>

          </Route>
          <Route path="/paymentOption" element={<PaymentOption />}>

          </Route>
          <Route path="/productDetails" element={<ProductDetails />}>

          </Route>
          <Route path="/productDetails/:id" element={<ProductDetails />}>

          </Route>
          <Route path="/profile" element={<Profile />}>

          </Route>
          <Route path="/trackDeliveryBoy/:id" element={<TrackDeliveryBoy />}>

          </Route>
          <Route path="/trackOrder" element={<TrackOrder />}>

          </Route>
          <Route path="/preferenceProducts" element={<Preference />}>

          </Route>
        </Route>
        <Route element={<PreparateurCommandRoute/>}>
          {/* <Route path="/preparator" element={<PreparateurDashboard/>}/> */}
          <Route path="/*" element={<Commandes/>}/>
          <Route path="/commandes" element={<Commandes/>}/>
          <Route path="/historique" element={<Historique/>}/>

        </Route>
        <Route element={<LivreurRoute/>}>
          <Route path="/livreur" element={<LivreurDashboard/>}/>
          <Route path="/*" element={<LivreurDashboard/>}/>
          <Route path="/historiqueLivreur" element={<LivreurHistorique/>}/>


        </Route>
        <Route element={<AdminRoute/>}>
          <Route path="/admin" element={<Dashboard/>}></Route>
           <Route path="/*" element={<Dashboard/>}></Route>
          <Route path="/categories" element={<Categories/>}></Route>
          <Route path="/orders" element={<Orders/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/userOrders/:id" element={<UserOrders />}></Route>
          <Route path="/userPayments/:id" element={<UserPayments />}></Route>

          <Route path="/users" element={<Users/>}></Route>

          <Route path="/payments" element={<Payments/>}></Route>

        </Route>

      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;