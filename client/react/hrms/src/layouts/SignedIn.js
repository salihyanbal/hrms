import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Dropdown
          pointing="top left"
          button
          labeled
          className="icon"
          text="Profile"
          icon="user"
        >
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
            <Dropdown.Item
              text="Çıkış yap"
              icon="sign-out"
              onClick={signOut}
            ></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
