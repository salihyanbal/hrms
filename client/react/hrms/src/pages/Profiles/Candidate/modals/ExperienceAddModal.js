import { useFormik } from "formik";
import React, { useState } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Button, Input, Message, Modal } from "semantic-ui-react";
import * as Yup from "yup";
import CandidateExperienceService from "../../../../services/candidateExperienceService";

export default function ExperienceAddModal({ trigger, candidateId }) {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  let candidateExperienceService = new CandidateExperienceService();
  const educationUpdateSchema = Yup.object().shape({
    workplaceName: Yup.string().required("Şirket adı boş bırakılamaz"),
    position: Yup.string().required("Pozisyon boş bırakılamaz"),
    startDate: Yup.date()
      .required("Başlangıç tarihi boş bırakılamaz")
      .min(0, "Başlangıç tarihi 0'dan küçük olamaz"),
    leaveDate: Yup.date()
      .nullable()
      .min(startDate, "Ayrılma tarihi başlangıç tarihinden erken olamaz."),
  });

  const formik = useFormik({
    initialValues: {
      workplaceName: "",
      position: "",
      startDate: "",
      leaveDate: "",
    },
    validationSchema: educationUpdateSchema,
    onSubmit: (values) => {
      values.candidate = { id: candidateId };
      candidateExperienceService.save(values).then((result) => {
        if (result.data.success) {
          // TODO: sayfa yenileme
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
  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      size="tiny"
    >
      <Modal.Header>Deneyim ekle</Modal.Header>
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
            <div style={{ marginBottom: "1rem" }}>
              <Input
                className="width-100-percent"
                name="workplaceName"
                error={formik.errors.workplaceName ? true : false}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleFormErrorMessages();
                }}
                value={formik.values.workplaceName}
                onBlur={formik.handleBlur}
                placeholder="Şirket adı"
              />
            </div>

            <div
              style={{ marginBottom: "1rem" }}
              className="display-inline-block width-100-percent"
            >
              <Input
                className="width-100-percent"
                name="position"
                error={formik.errors.position ? true : false}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleFormErrorMessages();
                }}
                value={formik.values.position}
                onBlur={formik.handleBlur}
                placeholder="Pozisyon"
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <div
                className="width-40-percent display-inline-block"
                style={{ marginRight: "5rem" }}
              >
                <SemanticDatepicker
                  error={formik.errors.startDate ? true : false}
                  onChange={(event, data) => {
                    handleChangeSemantic(data.value, "startDate");
                    handleFormErrorMessages();
                    setStartDate(data.value);
                  }}
                  value={formik.values.startDate}
                  onBlur={formik.handleBlur}
                  name="startDate"
                  placeholder="Başlangıç tarihi"
                />
              </div>
              <div className="width-40-percent display-inline-block float-right">
                <SemanticDatepicker
                  error={formik.errors.leaveDate ? true : false}
                  onChange={(event, data) => {
                    handleChangeSemantic(data.value, "leaveDate");
                    handleFormErrorMessages();
                  }}
                  value={formik.values.leaveDate}
                  onBlur={formik.handleBlur}
                  name="leaveDate"
                  placeholder="Ayrılma tarihi"
                />
              </div>
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
                  style={{ marginLeft: "15px" }}
                />
              </div>
            </div>
          </Modal.Description>
        </form>
      </Modal.Content>
    </Modal>
  );
}
