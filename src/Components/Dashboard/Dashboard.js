import React from "react";
import Header from "../Header/Header";
import Table from "../Table/Table";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dash-bg">
      <Header />
      <Table />
    </div>
  );
};
export default Dashboard;