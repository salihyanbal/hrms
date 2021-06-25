import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Modal, TextArea } from "semantic-ui-react";
import * as Yup from "yup";
import CandidateService from "../../../../services/candidateService";

export default function CoverLetterUpdateModal({ trigger, candidate }) {
  const [open, setOpen] = useState(false);

  let candidateService = new CandidateService();

  const coverLetterSchema = Yup.object().shape({
    coverLetter: null,
  });
  const formik = useFormik({
    initialValues: {
      coverLetter: candidate.coverLetter,
    },
    validationSchema: coverLetterSchema,
    onSubmit: (values) => {
      candidate.coverLetter = values.coverLetter;
      candidateService.save(candidate).then((result) => console.log(result));
    },
  });

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      size="small"
    >
      <Modal.Header>Özeti Düzenle</Modal.Header>
      <Modal.Content>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Description>
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{ marginRight: "5rem" }}
                className="width-100-percent"
              >
                <div style={{ marginBottom: "1rem" }}>
                  <TextArea
                    placeholder="Hakkında"
                    className="width-100-percent"
                    style={{ minHeight: 200 }}
                    value={formik.values.coverLetter}
                    name="coverLetter"
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
            <div style={{ float: "right", marginBottom: "1rem" }}>
              <Button
                content="Güncelle"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
              />
            </div>
          </Modal.Description>
        </form>
      </Modal.Content>
    </Modal>
  );
}
