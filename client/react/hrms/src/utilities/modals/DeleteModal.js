import React, { useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

export default function DeleteModal({
  header,
  message,
  trigger,
  onAcceptMethod,
  methodParams,
}) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  return (
    <Modal
      basic
      onClose={() => setDeleteModalOpen(false)}
      onOpen={() => setDeleteModalOpen(true)}
      open={deleteModalOpen}
      size="small"
      trigger={trigger}
    >
      <Header icon>
        <Icon name="archive" />
        {header}
      </Header>
      <Modal.Content>
        <p>{message}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          basic
          color="red"
          inverted
          onClick={() => setDeleteModalOpen(false)}
        >
          <Icon name="remove" /> Hayır
        </Button>
        <Button
          color="green"
          inverted
          onClick={() => {
            setDeleteModalOpen(false);
            onAcceptMethod(methodParams);
          }}
        >
          <Icon name="checkmark" /> Evet
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
