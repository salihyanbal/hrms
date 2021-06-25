import React from "react";
import { NavLink } from "react-router-dom";
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
            <Dropdown.Item
              text="Bilgilerim"
              icon="info"
              to="/profile"
              as={NavLink}
            ></Dropdown.Item>
            <Dropdown.Item
              as={NavLink}
              text="Ayarlar"
              icon="settings"
              to="/settings"
            ></Dropdown.Item>
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
