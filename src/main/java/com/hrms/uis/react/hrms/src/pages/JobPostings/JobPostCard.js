import React from "react";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
export default function JobPostCard({ jobPost, setCurrentJobPost }) {
  let defaultImage =
    "https://res.cloudinary.com/cloudlucifer/image/upload/v1622506272/iym1dgabn6cil6hhugck.jpg";

  function setJobDetails() {
    setCurrentJobPost(jobPost);
  }
  return (
    <div onClick={() => setJobDetails()}>
      <Card.Group>
        <Card>
          <Card.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Image floated="left" size="mini" src={defaultImage} />
                </Grid.Column>
                <Grid.Column width={12}>
                  <Card.Header>{jobPost.jobPosition.name}</Card.Header>
                  <Card.Meta>{jobPost.employer.companyName}</Card.Meta>
                  <Card.Description>
                    <strong>{jobPost.city.name}</strong>
                  </Card.Description>
                  <Card.Content extra>
                    <Icon name="calendar minus" />
                    {jobPost.applicationDeadline}
                  </Card.Content>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
