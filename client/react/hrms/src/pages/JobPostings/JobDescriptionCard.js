import "./css/JobDescriptionCard.css";

import React from "react";
import { Card } from "semantic-ui-react";

export default function JobDescriptionCard({ jobPost }) {
  return (
    <div>
      <Card className="job-description-card">
        <Card.Content>
          <Card.Description>{jobPost.jobDescription}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}
