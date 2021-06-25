import { useFormik } from "formik";
import React, { useState } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Button, Input, Message, Modal } from "semantic-ui-react";
import * as Yup from "yup";
import CandidateExperienceService from "../../../../services/candidateExperienceService";
import DeleteModal from "../../../../utilities/modals/DeleteModal";

export default function ExperienceUpdateModal({
  trigger,
  candidateExperience,
}) {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(candidateExperience.startDate);

  let candidateExperienceService = new CandidateExperienceService();

  const deleteExperince = (candidateExperience) => {
    candidateExperienceService
      .delete(candidateExperience)
      .then((result) => console.log(result));
  };

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
      workplaceName: candidateExperience.workplaceName,
      position: candidateExperience.position,
      startDate: new Date(candidateExperience.startDate),
      leaveDate: candidateExperience.leaveDate
        ? new Date(candidateExperience.leaveDate)
        : "",
    },
    validationSchema: educationUpdateSchema,
    onSubmit: (values) => {
      candidateExperience.workplaceName = values.workplaceName;
      candidateExperience.position = values.position;
      candidateExperience.startDate = values.startDate;
      candidateExperience.leaveDate = values.leaveDate;
      candidateExperienceService.save(candidateExperience).then((result) => {
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
      <Modal.Header>Deneyim düzenle</Modal.Header>
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
                <DeleteModal
                  trigger={
                    <Button
                      content="Sil"
                      labelPosition="right"
                      icon="trash"
                      negative
                    />
                  }
                  message={
                    candidateExperience.workplaceName +
                    " adlı şirketteki deneyiminizi silmek istiyor musunuz?"
                  }
                  header="Eğitim sil"
                  onAcceptMethod={deleteExperince}
                  methodParams={candidateExperience}
                />

                <Button
                  content="Güncelle"
                  labelPosition="right"
                  icon="undo"
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
