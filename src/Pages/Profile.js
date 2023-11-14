import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/icofont.min.css';
import '../Assets/css/demo.css';
import ErrorPage from '../Components/ErrorPage';
import Loader from '../Components/Loader';
import ProfileHeader from '../Components/Profile/ProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../Redux/user';
import ProfileUpdatePhone from '../Components/Profile/ProfileUpdatePhone';
import ProfileAddress from '../Components/Profile/ProfileAddress';
import ProfileHelp from '../Components/Profile/ProfileHelp';
import { fetchOrderByUser } from '../Redux/orders';
import ProfileOrder from '../Components/Profile/ProfileOrder';
import AppVersion from '../Components/Common/AppVersion';
import ProfileFooter from '../Components/Profile/ProfileFooter';
function Profile() {
   const handleReload = () => window.location.reload(false);

   const dispatch = useDispatch();
   const users = useSelector(state => state.users);
   const orders = useSelector(state => state.orders);
   const uid = useSelector(state => state.users).data.id;
   useEffect(() => {
      dispatch(fetchOrderByUser(uid));
   }, [dispatch, uid])
   useEffect(() => {
      dispatch(fetchUser(uid));
   }, [dispatch, uid])


   if (users.status === "loading") {
      return (<Loader />)
   }
   if (users.status === null) {
      return (<Loader />)
   }
   if (orders.status === null) {
      return (<Loader />)
   }
   if (orders.status === "idle") {
      return (<Loader />)
   }
   if (orders.status === "loading") {
      return (<Loader></Loader>)
   }
   if (users.status === "failed") {
      <ErrorPage message={users.message} onRetry={handleReload} />
   }
   if (orders.status === "failed") {
      <ErrorPage message={orders.message} onRetry={handleReload} />
   }


   return (
      <div className="bg-light">
         <div className="profile d-flex flex-column vh-100">

            <ProfileHeader />

            <div className="vh-100 my-auto overflow-auto p-3">
               <div className="mb-4 rounded-3 shadow-sm overflow-hidden">
                  <ProfileUpdatePhone />
                  <ProfileAddress />
                  <ProfileHelp />
               </div>
               <ProfileOrder />
               {/* <div className="bg-white rounded-3 shadow-sm mb-3">
                  <div className="d-flex align-items-start justify-content-between border-bottom p-3">
                     <div>
                        <h6 className="fw-bold text-black osahan-mb-1">Osahan</h6>
                        <p className="text-muted small mb-2">Model Town</p>
                        <a href="#" className="text-muted">$70.00<i className="icofont-rounded-right ms-1"></i></a>
                     </div>
                     <p className="bg-danger bg-opacity-10 text-danger rounded small px-2 py-1">Cancelled<i className="icofont-close-circled ms-1"></i></p>
                  </div>
                  <div className="p-3">
                     <p className="mb-1">Uncle Chiips Spicy Treat x 1, Bingo Tedhe Medhe Masala Tadka x 1, Verka
                        Standardised Milk Green x 1
                     </p>
                     <p className="text-muted small text-info m-0"><i className="icofont-clock-time"></i> 04 Jan 2023, 12:25 PM</p>
                  </div>
               </div> */}

            </div>
            <ProfileFooter />
            <AppVersion />

         </div>
      </div>

   )
}

export default Profile
