import React from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import CoverLetterUpdateModal from "./modals/CoverLetterUpdateModal";

export default function CoverLetterCard({ candidate }) {
  return (
    <div className="width-100-percent margin-bottom-3rem">
      <Card className="width-100-percent text-align-left">
        <Card.Content>
          <Card.Header style={{ display: "inline-block", padding: ".5rem" }}>
            Hakkında
          </Card.Header>
          <CoverLetterUpdateModal
            trigger={
              <Button
                icon
                floated="right"
                style={{ width: "5%", backgroundColor: "white" }}
              >
                <Icon name="pencil" />
              </Button>
            }
            candidate={candidate}
          />
        </Card.Content>

        <Card.Content description={candidate.coverLetter} />
      </Card>
    </div>
  );
}
