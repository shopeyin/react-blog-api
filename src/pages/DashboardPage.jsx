import React from "react";
import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard page</h1>
      <Link to="/posts" className="button">
        View Posts
      </Link>
    </div>
  );
}

export default DashboardPage;
