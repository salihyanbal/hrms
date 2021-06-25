import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Input, Message, Modal } from "semantic-ui-react";
import * as Yup from "yup";
import CandidateEducationService from "../../../../services/candidateEducationService";

export default function EducationAddModal({ trigger, candidateId }) {
  const [open, setOpen] = useState(false);
  let candidateEducationService = new CandidateEducationService();

  const educationAddSchema = Yup.object().shape({
    schoolName: Yup.string().required("Okul adı boş bırakılamaz"),
    departmentName: Yup.string().required("Bölüm adı boş bırakılamaz"),
    startYear: Yup.number()
      .required("Başlangıç yılı boş bırakılamaz")
      .min(0, "Başlangıç yılı 0'dan küçük olamaz"),
  });

  const formik = useFormik({
    initialValues: {
      schoolName: "",
      departmentName: "",
      startYear: "",
      graduationYear: "",
    },
    validationSchema: educationAddSchema,
    onSubmit: (values) => {
      values.candidate = { id: candidateId };
      candidateEducationService.save(values).then((result) => {
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
      <Modal.Header>Eğitim ekle</Modal.Header>
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
                name="schoolName"
                error={formik.errors.schoolName ? true : false}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleFormErrorMessages();
                }}
                value={formik.values.schoolName}
                onBlur={formik.handleBlur}
                placeholder="Okul adı"
              />
            </div>

            <div
              style={{ marginBottom: "1rem" }}
              className="display-inline-block width-100-percent"
            >
              <Input
                className="width-100-percent"
                name="departmentName"
                error={formik.errors.departmentName ? true : false}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleFormErrorMessages();
                }}
                value={formik.values.departmentName}
                onBlur={formik.handleBlur}
                placeholder="Bölüm adı"
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <div
                className="width-40-percent display-inline-block"
                style={{ marginRight: "5rem" }}
              >
                <Input
                  type="number"
                  placeholder="Başlangıç yılı"
                  error={formik.errors.startYear ? true : false}
                  value={formik.values.startYear}
                  name="startYear"
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleFormErrorMessages();
                  }}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="width-40-percent display-inline-block float-right">
                <Input
                  className="width-100-percent"
                  type="number"
                  placeholder="Mezuniyet yılı"
                  value={formik.values.graduationYear}
                  name="graduationYear"
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleFormErrorMessages();
                  }}
                  onBlur={formik.handleBlur}
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
