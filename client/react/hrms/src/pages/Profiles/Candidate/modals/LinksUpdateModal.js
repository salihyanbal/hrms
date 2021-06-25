import React from "react";
import { Button, Card, Icon, Modal } from "semantic-ui-react";
import CandidateLinkService from "../../../../services/candidateLinkService";
import DeleteModal from "../../../../utilities/modals/DeleteModal";

export default function LinksUpdateModal({ trigger, candidateLinks }) {
  const [open, setOpen] = React.useState(false);
  let candidateLinkService = new CandidateLinkService();
  const deleteLink = (candidateLink) => {
    candidateLinkService
      .delete(candidateLink)
      .then((result) => console.log(result));
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      size="small"
    >
      <Modal.Header>Bağlantıları Düzenle</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {candidateLinks.map((candidateLink, index) => {
            return (
              <Card key={index} className="width-100-percent text-align-left">
                <Card.Content>
                  <span>
                    <strong>{candidateLink.linkType.name}</strong>
                  </span>
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
                    message={
                      candidateLink.linkType.name +
                      " bağlantınızı silmek istiyor musunuz?"
                    }
                    header="Bağlantı sil"
                    onAcceptMethod={deleteLink}
                    methodParams={candidateLink}
                  />
                </Card.Content>

                <Card.Content>{candidateLink.link}</Card.Content>
              </Card>
            );
          })}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
