import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

export default function EmployeeProfileMenu() {
  let activeItem = "account";

  return (
    <div>
      <Menu secondary vertical>
        <Menu.Item name="Hesap" active={activeItem === "account"} />
      </Menu>
    </div>
  );
}
