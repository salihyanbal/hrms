import React from "react";
import { Menu } from "semantic-ui-react";

export default function AdminManagementMenu() {
  let activeItem = "job-postings";

  return (
    <div>
      <Menu vertical>
        <Menu.Item header>ADMIN</Menu.Item>
        <Menu.Item name="jobPostings" active={activeItem === "job-postings"}>
          İş ilanları
        </Menu.Item>
        <Menu.Item name="employers" active={activeItem === "employers"}>
          Şirketler
        </Menu.Item>
      </Menu>
    </div>
  );
}
