import React, { useEffect, useState } from "react";
import CandidateLanguageService from "../../../../services/candidateLanguageService";
import LanguageService from "../../../../services/languageService";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Dropdown, Message, Modal } from "semantic-ui-react";

export default function LanguageAddModal({ trigger, candidateId }) {
  const [open, setOpen] = useState(false);
  const [languages, setLanguages] = useState([]);
  let candidateLanguageService = new CandidateLanguageService();

  useEffect(() => {
    fetchLanguages();
  }, []);

  const fetchLanguages = () => {
    let languageService = new LanguageService();
    languageService.getAll().then((result) => setLanguages(result.data.data));
  };

  const languagesOptions = languages.map((language, index) => ({
    key: index,
    text: language.name,
    value: language.id,
  }));

  const levelOptions = [
    { key: 1, text: "Başlangıç", value: 1 },
    { key: 2, text: "Temel", value: 2 },
    { key: 3, text: "Orta", value: 3 },
    { key: 4, text: "İyi", value: 4 },
    { key: 5, text: "İleri", value: 5 },
  ];

  const educationUpdateSchema = Yup.object().shape({
    language: Yup.object({
      id: Yup.number().required("Dil seçilmesi gerekiyor"),
    }),
    level: Yup.number().required("Seviye seçilmesi gerekiyor"),
  });

  const formik = useFormik({
    initialValues: {
      language: {
        id: "",
      },
      level: "",
    },
    validationSchema: educationUpdateSchema,
    onSubmit: (values) => {
      values.candidate = { id: candidateId };
      candidateLanguageService.save(values).then((result) => {
        //TODO: SAYFA YENILEME
      });
    },
  });

  const handleFormErrorMessages = () => {
    let errorMessages = Object.values(formik.errors).map((error, i) => {
      if (error.id) {
        return error.id;
      }
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
      <Modal.Header>Dil düzenle</Modal.Header>
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
              <Dropdown
                className="width-100-percent"
                item
                placeholder="Dil seçin"
                search
                selection
                clearable
                error={formik.errors.language?.id ? true : false}
                onChange={(event, data) => {
                  handleChangeSemantic(data.value, "language.id");
                  handleFormErrorMessages();
                }}
                onBlur={formik.onBlur}
                id="language.id"
                value={formik.values.language.id}
                options={languagesOptions}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <Dropdown
                className="width-100-percent"
                item
                placeholder="Seviye seçin"
                search
                selection
                clearable
                error={formik.errors.level ? true : false}
                onChange={(event, data) => {
                  handleChangeSemantic(data.value, "level");
                  handleFormErrorMessages();
                }}
                onBlur={formik.onBlur}
                id="level"
                value={formik.values.level}
                options={levelOptions}
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
