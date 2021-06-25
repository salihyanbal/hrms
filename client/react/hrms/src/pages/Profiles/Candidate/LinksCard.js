import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Icon } from "semantic-ui-react";
import CandidateLinkService from "../../../services/candidateLinkService";
import LinkAddModal from "./modals/LinkAddModal";
import LinksUpdateModal from "./modals/LinksUpdateModal";

export default function LinksCard({ candidate }) {
  const history = useHistory();
  const [candidateLinks, setCandidateLinks] = useState([]);
  useEffect(() => {
    let candidateLinkService = new CandidateLinkService();
    candidateLinkService.getAllByCandidateId(2).then((result) => {
      // TODO: fakeid değiştirilecek saçma bi şekilde undefined geliyo
      setCandidateLinks(result.data.data);
    });
  }, []);
  return (
    <div className="width-100-percent margin-bottom-3rem">
      <Card className="width-100-percent text-align-left">
        <Card.Content>
          <Card.Header style={{ display: "inline-block", padding: ".5rem" }}>
            Bağlantılar
          </Card.Header>
          <LinksUpdateModal
            trigger={
              <Button
                icon
                floated="right"
                style={{ width: "5%", backgroundColor: "white" }}
              >
                <Icon name="pencil" />
              </Button>
            }
            candidateLinks={candidateLinks}
          />
          <LinkAddModal
            trigger={
              <Button
                icon
                floated="right"
                style={{ width: "5%", backgroundColor: "white" }}
              >
                <Icon name="add" />
              </Button>
            }
            candidateId={candidate.id}
          />
        </Card.Content>

        <Card.Content>
          {candidateLinks.map((candidateLink, index) => {
            return (
              <Card
                key={index}
                className="width-100-percent text-align-left"
                onClick={() => history.push(candidateLink.link)}
              >
                <Card.Content
                  header={candidateLink.linkType.name}
                ></Card.Content>

                <Card.Content>{candidateLink.link}</Card.Content>
              </Card>
            );
          })}
        </Card.Content>
      </Card>
    </div>
  );
}
