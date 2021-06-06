import "./css/CompanyCard.css";

import { Card, Image, Button, Icon } from "semantic-ui-react";

import React from "react";

export default function CompanyCard({ jobPost }) {
  let defaultImage =
    "https://res.cloudinary.com/cloudlucifer/image/upload/v1622506272/iym1dgabn6cil6hhugck.jpg";

  return (
    <div>
      <Card className="company-card">
        <Card.Content>
          <Image
            className="company-card-image"
            floated="left"
            src={defaultImage}
          />
          <div>
            <Card.Header>
              <h3>
                <strong>{jobPost.employer.companyName}</strong>
              </h3>
            </Card.Header>
            <hr style={{ marginLeft: "150px" }} />
            <Card.Description>
              <h4>{jobPost.jobPosition.name}</h4>
              <div className="bttm-bar">
                <div>
                  <strong>
                    {jobPost.applicationDeadline
                      ? jobPost.applicationDeadline
                      : "?"}
                  </strong>
                </div>
                <div className="salary">
                  <strong>
                    {jobPost.minSalary ? jobPost.minSalary + " ₺" : "?"} -{" "}
                    {jobPost.maxSalary ? jobPost.maxSalary + " ₺" : "?"}
                  </strong>
                </div>
              </div>
            </Card.Description>
            <Card.Meta>
              <span>
                {jobPost.employer.webAddress ? jobPost.employer.webAddress : ""}
              </span>
            </Card.Meta>
          </div>
        </Card.Content>
        <Card.Content extra>
          <div style={{ float: "left", color: "black" }}>
            <strong>{jobPost.city.name}</strong>
          </div>

          <div style={{ float: "right" }}>
            <Button color="grey" icon labelPosition="right" size="medium">
              Şirket websitesi
              <Icon name="linkify" />
            </Button>
            <Button color="green" icon labelPosition="right" size="medium">
              Başvur
              <Icon name="external alternate" />
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
