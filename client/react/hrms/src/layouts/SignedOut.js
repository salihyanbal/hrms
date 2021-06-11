import React from "react";
import { Menu, Button } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Menu.Item>
        <Button.Group>
          <Button size="small">Bize katıl</Button>
          <Button.Or text="&" />
          <Button positive onClick={signIn}>
            Oturum aç
          </Button>
        </Button.Group>
      </Menu.Item>
    </div>
  );
}
