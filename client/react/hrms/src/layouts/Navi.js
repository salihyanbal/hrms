import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { Menu, Button, Container, Input, Icon } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu size="small" inverted fixed="top">
        <Container>
          <Menu.Item>
            <Button icon labelPosition="left">
              <Icon name="home" />
              Ana Sayfa
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button icon labelPosition="left">
              <Icon name="list" />
              İş İlanları
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Input
              className="icon"
              icon="search"
              placeholder="Ara..."
              style={{ minWidth: "20em" }}
              size="large"
            />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button icon labelPosition="left" as={NavLink} to="/admin">
                <Icon name="briefcase" />
                Site Yönetimi
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                icon
                labelPosition="left"
                as={NavLink}
                to="/companymanagement"
              >
                <Icon name="building outline" />
                Şirket Yönetimi
              </Button>
            </Menu.Item>
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
