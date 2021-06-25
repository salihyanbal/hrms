import React, { useEffect, useState } from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import CandidateEducationService from "../../../services/candidateEducationService";
import EducationAddModal from "./modals/EducationAddModal";
import EducationUpdateModal from "./modals/EducationUpdateModal";

export default function EducationsCard({ candidate }) {
  const [candidateEducations, setCandidateEducations] = useState([]);
  useEffect(() => {
    let candidateEducationService = new CandidateEducationService();
    candidateEducationService
      .getAllByCandidateIdAndOrderByDate(2) // TODO: fakeid sorun düzeltilecek
      .then((result) => setCandidateEducations(result.data.data));
  }, []);

  return (
    <div className="width-100-percent margin-bottom-3rem">
      <Card className="width-100-percent text-align-left">
        <Card.Content>
          <Card.Header style={{ display: "inline-block", padding: ".5rem" }}>
            Eğitim
          </Card.Header>
          <EducationAddModal
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
          {candidateEducations.map((candidateEducation, index) => {
            return (
              <Card key={index} className="width-100-percent text-align-left">
                <Card.Content>
                  <Card.Header style={{ display: "inline-block" }}>
                    {candidateEducation.schoolName}
                  </Card.Header>

                  <EducationUpdateModal
                    trigger={
                      <Button
                        icon
                        floated="right"
                        style={{ width: "5%", backgroundColor: "white" }}
                      >
                        <Icon name="pencil" />
                      </Button>
                    }
                    candidateEducation={candidateEducation}
                  />
                  <Card.Meta>
                    {candidateEducation.startYear} {" - "}
                    {candidateEducation.graduationYear}
                  </Card.Meta>
                </Card.Content>

                <Card.Content>{candidateEducation.departmentName}</Card.Content>
              </Card>
            );
          })}
        </Card.Content>
      </Card>
    </div>
  );
}
