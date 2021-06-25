import React, { useState } from "react";
import { Button, Header, Modal, Icon } from "semantic-ui-react";
import EmployerStatusService from "../../../services/employerStatusService";
import JobPostingStatusService from "../../../services/jobPostingStatusService";

export default function EmployerStatusChangeModal({
  employerId,
  open,
  setModalState,
  status,
  newStatus,
}) {
  const [fakeEmployeeId, setFakeEmployeeId] = useState(3);

  const setOpen = (value) => {
    setModalState(value);
  };
  const confirmNewStatus = () => {
    let employerStatusService = new EmployerStatusService();
    employerStatusService
      .add({
        employer: {
          id: employerId,
        },
        employee: {
          id: fakeEmployeeId,
        },
        statusType: {
          id: newStatus.value,
        },
        created_at: new Date(Date.now()),
      })
      .then((result) => console.log(result));
  };

  return (
    <div>
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
      >
        <Header icon>
          <Icon name="checkmark" />
          Şirket durumunu değiştir
        </Header>
        <Modal.Content>
          <p>
            {status?.statusType.name} durumundaki şirketi {newStatus.text}{" "}
            olarak değiştirmek istediğinize emin misiniz?{" "}
          </p>
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
              confirmNewStatus();
            }}
          >
            <Icon name="checkmark" /> Evet
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
