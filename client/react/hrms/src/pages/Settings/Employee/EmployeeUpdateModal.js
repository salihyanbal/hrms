import React, { useEffect, useState } from "react";
import { Button, Input, Message, Modal } from "semantic-ui-react";
import EmployeeService from "../../../services/employeeService";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function EmployeeUpdateModal({ trigger }) {
  const [open, setOpen] = useState(false);
  const [employee, setEmployer] = useState([]);
  let employeeService = new EmployeeService();

  useEffect(() => {
    fetchEmployer();
  }, []);

  const fetchEmployer = () => {
    employeeService
      .getById(3) //fake id
      .then((result) => setEmployer(result.data.data));
  };

  const updateEmployerSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(30, "Ad en fazla 30 karakter olabilir")
      .required("Ad boş bırakılamaz"),
    lastName: Yup.string()
      .max(30, "Soyad en fazla 30 karakter olabilir")
      .required("Soyad boş bırakılamaz"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: employee.firstName,
      lastName: employee.lastName,
    },
    validationSchema: updateEmployerSchema,
    onSubmit: (values) => {
      employee.firstName = values.firstName;
      employee.lastName = values.lastName;
      employeeService.save(employee).then((result) => console.log(result));
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
                  <div>Ad</div>
                  <Input
                    className="width-100-percent"
                    placeholder="Ad"
                    error={formik.errors.firstName ? true : false}
                    value={formik.values.firstName}
                    name="firstName"
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
                  <div>Soyad</div>
                  <Input
                    className="width-100-percent"
                    placeholder="Soyad"
                    error={formik.errors.lastName ? true : false}
                    value={formik.values.lastName}
                    name="lastName"
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
