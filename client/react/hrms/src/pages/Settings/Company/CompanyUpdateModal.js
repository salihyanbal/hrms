import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  Header,
  Input,
  Label,
  Message,
  Modal,
} from "semantic-ui-react";
import * as Yup from "yup";
import EmployerService from "../../../services/employerService";

export default function CompanyUpdateModal({ trigger }) {
  const [open, setOpen] = useState(false);
  const [employer, setEmployer] = useState([]);
  let employerService = new EmployerService();

  useEffect(() => {
    fetchEmployer();
  }, []);

  const fetchEmployer = () => {
    employerService
      .getById(1) //fake id
      .then((result) => setEmployer(result.data.data));
  };

  const updateEmployerSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .max(15, "Telefon numarası 15 haneden fazla olamaz")
      .required("Telefon numarası boş bırakılamaz"),
    webAddress: Yup.string().required("Web adresi boş bırakılamaz"),
    companyName: Yup.string().required("Şirket adı boş bırakılamaz"),
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: employer.phoneNumber,
      webAddress: employer.webAddress,
      companyName: employer.companyName,
    },
    validationSchema: updateEmployerSchema,
    onSubmit: (values) => {
      employer.webAddress = values.webAddress;
      employer.phoneNumber = values.phoneNumber;
      employer.companyName = values.companyName;
      employerService.update(employer).then((result) => console.log(result));
    },
  });
  const handleFormErrorMessages = () => {
    let errorMessages = Object.values(formik.errors).map((error, i) => {
      return error;
    });
    return errorMessages;
  };

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={trigger}
        size="mini"
      >
        <Modal.Header>Profili Düzenle</Modal.Header>
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
                <div
                  className="width-100-percent"
                  style={{ marginRight: "5rem" }}
                >
                  <div>Şirket Adı</div>
                  <Input
                    className="width-100-percent"
                    placeholder="Şirket adı"
                    error={formik.errors.companyName ? true : false}
                    value={formik.values.companyName}
                    name="companyName"
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleFormErrorMessages();
                    }}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <div
                  className="width-100-percent"
                  style={{ marginRight: "5rem" }}
                >
                  <div>Website</div>
                  <Input
                    className="width-100-percent"
                    label="http://www."
                    placeholder="Website"
                    error={formik.errors.webAddress ? true : false}
                    value={formik.values.webAddress}
                    name="webAddress"
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleFormErrorMessages();
                    }}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <div
                  style={{ marginRight: "5rem" }}
                  className="width-100-percent"
                >
                  <div>Telefon numarası</div>
                  <Input
                    labelPosition="left"
                    placeholder="Telefon numarası"
                    type="number"
                    error={formik.errors.phoneNumber ? true : false}
                    value={formik.values.phoneNumber}
                    name="phoneNumber"
                    className="width-100-percent"
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
    </div>
  );
}
