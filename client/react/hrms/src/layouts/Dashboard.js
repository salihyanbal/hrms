import React from "react";
import { Route } from "react-router";
import AdminManagement from "./AdminManagement";
import CompanyManagement from "./CompanyManagement";
import JobPostings from "./JobPostings";

export default function Dashboard() {
  return (
    <div>
      <Route exact path="/" component={JobPostings} />
      <Route exact path="/jobpostings" component={JobPostings} />
      <Route path="/companymanagement" component={CompanyManagement} />
      <Route path="/admin" component={AdminManagement} />
    </div>
  );
}
