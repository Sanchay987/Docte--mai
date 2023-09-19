import React from "react";
import AdminApplications from "../components/adminApplications/AdminApplications";
import AdminAppointments from "../components/adminAppointment/AdminAppointment";
import AdminDoctors from "../components/adminDoctor/AdminDoctor";
import Sidebar from "../components/sidebar/Sidebar";
import Users from "../components/users/Users";

const Dashboard = (props) => {
  const { type } = props;
  return (
    <>
      <section className="layout-section">
        <div className="layout-container">
          <Sidebar />
          {type === "users" ? (
            <Users />
          ) : type === "doctors" ? (
            <AdminDoctors />
          ) : type === "applications" ? (
            <AdminApplications />
          ) : type === "appointments" ? (
            <AdminAppointments />
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};

export default Dashboard;