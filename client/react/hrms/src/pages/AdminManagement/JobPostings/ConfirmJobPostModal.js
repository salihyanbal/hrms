import React, { useState } from "react";
import { Button, Header, Modal, Icon } from "semantic-ui-react";
import JobPostingConfirmationService from "../../../services/jobPostingConfirmationService";

export default function ConfirmJobPostModal({ triggerButton, jobPosting }) {
  const [fakeEmployeeId, setFakeEmployeeId] = useState(4);

  const confirmJobPost = () => {
    let jobPostingConfirmationService = new JobPostingConfirmationService();
    jobPostingConfirmationService.add({
      jobPosting: {
        id: jobPosting.id,
      },
      employee: {
        id: fakeEmployeeId,
      },
      confirmed: true,
      confirmationDate: new Date(Date.now()),
    });
  };
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
        trigger={triggerButton}
      >
        <Header icon>
          <Icon name="checkmark" />
          İş İlanını Onayla
        </Header>
        <Modal.Content>
          <p>İş ilanını onaylamak istediğine emin misin?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={() => setOpen(false)}>
            <Icon name="remove" /> Hayır
          </Button>
          <Button
            color="green"
            inverted
            onClick={() => {
              setOpen(false);
              confirmJobPost();
            }}
          >
            <Icon name="checkmark" /> Evet
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
