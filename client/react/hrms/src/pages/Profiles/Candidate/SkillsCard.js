import React, { useEffect, useState } from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import CandidateSkillService from "../../../services/candidateSkillService";
import DeleteModal from "../../../utilities/modals/DeleteModal";
import SkillAddModal from "./modals/SkillAddModal";

export default function SkillsCard({ candidate }) {
  const [candidateSkills, setCandidateSkills] = useState([]);
  let candidateSkillService = new CandidateSkillService();
  useEffect(() => {
    candidateSkillService
      .getAllByCandidateId(2) // TODO: fakeid sorun düzeltilecek
      .then((result) => setCandidateSkills(result.data.data));
  }, []);

  const deleteSkill = (candidateSkill) => {
    candidateSkillService
      .delete(candidateSkill)
      .then((result) => console.log(result));
  };
  return (
    <div className="width-100-percent margin-bottom-3rem">
      <Card className="width-100-percent text-align-left">
        <Card.Content>
          <Card.Header style={{ display: "inline-block", padding: ".5rem" }}>
            Yetenekler
          </Card.Header>
          <SkillAddModal
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
          {candidateSkills.map((candidateSkill, index) => {
            return (
              <Card
                key={index}
                className="text-align-left"
                style={{
                  display: "inline-block",
                  float: index % 2 === 0 ? "left" : "right",
                  marginTop: "auto",
                }}
              >
                <Card.Content>
                  <Card.Header style={{ display: "inline-block" }}>
                    {candidateSkill.name}
                  </Card.Header>

                  <DeleteModal
                    trigger={
                      <Button
                        icon
                        floated="right"
                        style={{ width: "5%", backgroundColor: "white" }}
                      >
                        <Icon name="trash" />
                      </Button>
                    }
                    header="Yetenek Silme"
                    message={
                      candidateSkill.name +
                      " adlı yeteneği silmek istiyor musunuz?"
                    }
                    onAcceptMethod={deleteSkill}
                    methodParams={candidateSkill}
                  />
                </Card.Content>
              </Card>
            );
          })}
        </Card.Content>
      </Card>
    </div>
  );
}
