import React, { useEffect, useState } from "react";
import { Button, Card, Icon, Progress } from "semantic-ui-react";
import CandidateLanguageService from "../../../services/candidateLanguageService";
import LanguageAddModal from "./modals/LanguageAddModal";
import LanguageUpdateModal from "./modals/LanguageUpdateModal";

export default function LanguagesCard({ candidate }) {
  const [candidateLanguages, setCandidateLanguages] = useState([]);
  useEffect(() => {
    let candidateLanguageService = new CandidateLanguageService();
    candidateLanguageService
      .getAllByCandidateId(2) // TODO: fakeid sorun düzeltilecek
      .then((result) => setCandidateLanguages(result.data.data));
  }, []);

  return (
    <div className="width-100-percent margin-bottom-3rem">
      <Card className="width-100-percent text-align-left">
        <Card.Content>
          <Card.Header style={{ display: "inline-block", padding: ".5rem" }}>
            Diller
          </Card.Header>
          <LanguageAddModal
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
          {candidateLanguages.map((candidateLanguage, index) => {
            return (
              <Card key={index} className="width-100-percent text-align-left">
                <Card.Content>
                  <Card.Header style={{ display: "inline-block" }}>
                    {candidateLanguage.language.name}
                  </Card.Header>

                  <LanguageUpdateModal
                    trigger={
                      <Button
                        icon
                        floated="right"
                        style={{ width: "5%", backgroundColor: "white" }}
                      >
                        <Icon name="pencil" />
                      </Button>
                    }
                    candidateLanguage={candidateLanguage}
                  />
                </Card.Content>

                <Card.Content>
                  <Card.Header>Seviye</Card.Header>
                  <Progress
                    value={candidateLanguage.level}
                    total="5"
                    progress="ratio"
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
