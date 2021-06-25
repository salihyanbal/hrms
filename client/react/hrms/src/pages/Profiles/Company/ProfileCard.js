import React, { useEffect, useState } from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import EmployerService from "../../../services/employerService";

export default function ProfileCard() {
  const [employer, setEmployer] = useState([]);
  useEffect(() => {
    let jobPostingService = new EmployerService();
    jobPostingService
      .getById(1) //fakeid
      .then((result) => setEmployer(result.data.data));
  }, []);
  return (
    <div>
      <Card className="width-100-percent">
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" //fake foto
          />
          <Card.Header>{employer.companyName}</Card.Header>
          <Card.Meta>{employer.webAddress}</Card.Meta>
          <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div style={{ float: "right" }}>
            <Button icon>
              <Icon name="edit" />
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
