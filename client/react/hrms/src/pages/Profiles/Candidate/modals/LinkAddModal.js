import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Dropdown, Input, Message, Modal } from "semantic-ui-react";
import * as Yup from "yup";
import CandidateLinkService from "../../../../services/candidateLinkService";
import LinkTypeService from "../../../../services/linkTypeService";

export default function LinkAddModal({ trigger, candidateId }) {
  const [open, setOpen] = useState(false);
  const [linkTypes, setLinkTypes] = useState([]);

  let candidateLinkService = new CandidateLinkService();

  useEffect(() => {
    fetchLinkTypes();
  }, []);

  const fetchLinkTypes = () => {
    let linkTypeService = new LinkTypeService();
    linkTypeService.getAll().then((result) => setLinkTypes(result.data.data));
  };

  const linkTypesOptions = linkTypes.map((linkType, index) => ({
    key: index,
    text: linkType.name,
    value: linkType.id,
  }));

  const linkAddSchema = Yup.object().shape({
    linkType: Yup.object({
      id: Yup.number().required("Bağlantı tipi seçmeniz gerekiyor"),
    }),
    link: Yup.string().required("Url boş bırakılamaz"),
  });

  const formik = useFormik({
    initialValues: {
      linkType: {
        id: "",
      },
      link: "",
    },
    validationSchema: linkAddSchema,
    onSubmit: (values) => {
      values.candidate = { id: candidateId };
      candidateLinkService.save(values).then((result) => {
        if (result.data.success) {
          window.location.reload(); // TODO: daha iyisini bulana kadar bunu kullanıyorum
        }
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
            <div style={{ marginBottom: "1rem" }}>
              <Dropdown
                className="width-100-percent"
                item
                placeholder="Bağlantı tipi seçin"
                search
                selection
                clearable
                error={formik.errors.linkType?.id ? true : false}
                onChange={(event, data) => {
                  handleChangeSemantic(data.value, "linkType.id");
                  handleFormErrorMessages();
                }}
                onBlur={formik.onBlur}
                id="linkType.id"
                value={formik.values.linkType.id}
                options={linkTypesOptions}
              />
            </div>
            <div
              style={{ marginBottom: "1rem" }}
              className="display-inline-block width-100-percent"
            >
              <Input
                className="width-100-percent"
                name="link"
                error={formik.errors.link ? true : false}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleFormErrorMessages();
                }}
                value={formik.values.link}
                onBlur={formik.handleBlur}
                placeholder="Link url"
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
