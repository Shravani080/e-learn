import React from "react";
import Table from "../Table/Table";
import './Dashboard.css';

const admins = [
  { id: 1, name: "user", email: "userone@gmail.com" },
  { id: 2, name: "user2", email: "usertwo@gmail.com" },
]
const data = [
  { id: 1, name: "Arjun", email: "userone@gmail.com", isAdmin: true },
  { id: 2, name: "Sita", email: "usertwo@gmail.com", isAdmin: false },
  { id: 3, name: "Bheem", email: "userthree@gmail.com", isAdmin: false }];

const Dashboard = () => {
  return (
    <div className="dash-bg">
      <Table data={data} admins={admins} />
    </div>
  );
};
export default Dashboard;