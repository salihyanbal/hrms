import React, { useState } from "react";
import { Button, Input, Message, Modal } from "semantic-ui-react";
import CandidateSkillService from "../../../../services/candidateSkillService";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function SkillAddModal({ trigger, candidateId }) {
  const [open, setOpen] = useState(false);
  let candidateSkillService = new CandidateSkillService();
  const linkAddSchema = Yup.object().shape({
    name: Yup.string().required("Yetenek adı boş bırakılamaz"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: linkAddSchema,
    onSubmit: (values) => {
      values.candidate = { id: candidateId };
      candidateSkillService.save(values).then((result) => {
        if (result.data.success) {
          window.location.reload(); // TODO: daha iyisini bulana kadar bunu kullanıyorum
        }
      });
    },
  });
  const handleFormErrorMessages = () => {
    let errorMessages = Object.values(formik.errors).map((error, i) => {
      return error;
    });
    return errorMessages;
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      size="tiny"
    >
      <Modal.Header>Bağlantı Ekle</Modal.Header>
      <Modal.Content>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Description>
            <div style={{ marginBottom: "1rem" }}>
              {handleFormErrorMessages().length > 0 && (
                <Message
                  error
                  header="Aşağıdaki uyarıları dikkate alınız!"
                  list={handleFormErrorMessages()}
                />
              )}
            </div>
            <div
              style={{ marginBottom: "1rem" }}
              className="display-inline-block width-100-percent"
            >
              <Input
                className="width-100-percent"
                name="name"
                error={formik.errors.name ? true : false}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleFormErrorMessages();
                }}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                placeholder="Yetenek adı"
              />
            </div>
            <div
              style={{
                float: "right",
                padding: "1rem",
                borderTop: "1px solid #EBEBEBEB",
              }}
              className="width-100-percent"
            >
              <div style={{ float: "right" }}>
                <Button
                  content="Ekle"
                  labelPosition="right"
                  icon="add"
                  positive
                  type="submit"
                />
              </div>
            </div>
          </Modal.Description>
        </form>
      </Modal.Content>
    </Modal>
  );
}
