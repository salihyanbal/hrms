import React from "react";
import { Menu } from "semantic-ui-react";

export default function CompanyManagementMenu() {
  let activeItem = "my-job-postings";

  return (
    <div>
      <Menu vertical>
        <Menu.Item header>CompanyName</Menu.Item>
        <Menu.Item
          name="job-postings"
          active={activeItem === "my-job-postings"}
        >
          İş ilanlarım
        </Menu.Item>
      </Menu>
    </div>
  );
}
