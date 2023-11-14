import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, logoutWithCredentials, refreshToken } from "../../Redux/user";
import AdminHeader from "../../Components/Headers/AdminHeader";
import ProductsCard from "../../Components/Admin/Dashboard/ProductsCard";
import ClientCard from "../../Components/Admin/Dashboard/ClientCard";
import CategoriesCard from "../../Components/Admin/Dashboard/CategoriesCard";
import OrdersCard from "../../Components/Admin/Dashboard/OrdersCard";

export default function Dashboard() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <>
      <AdminHeader />
      <main className="content">
        <div className="container-fluid p-0">
          <h1 className="h3 mb-3">
            <strong>Analytics</strong> Dashboard
          </h1>

          <div className="row">
            <div className="col-xl-6 col-xxl-5 d-flex">
              <div className="w-100">
                <div className="row">
                  <div className="col-sm-6">
                    <ProductsCard />
                    <CategoriesCard />
                  </div>

                  <div className="col-sm-6">
                    <ClientCard />
                    <OrdersCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      
      
    </>
  );
}