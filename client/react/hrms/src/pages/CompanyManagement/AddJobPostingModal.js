import "./css/AddJobPosting.css";

import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Label,
  Message,
  Modal,
  TextArea,
} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import JobPostingService from "../../services/jobPostingService";
import EmploymentTypeService from "../../services/employmentTypeService";

export default function AddJobPostingModal({ triggerButton }) {
  let jobPostingService = new JobPostingService();

  const [jobPositions, setJobPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [employmentTypes, setEmploymentTypes] = useState([]);

  useEffect(() => {
    fetchJobPositions();
    fetchCities();
    fetchEmploymentTypes();
  }, []);

  const fetchEmploymentTypes = () => {
    let employmentTypeService = new EmploymentTypeService();
    employmentTypeService
      .getAll()
      .then((result) => setEmploymentTypes(result.data.data));
  };

  const fetchJobPositions = () => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getAll()
      .then((result) => setJobPositions(result.data.data));
  };

  const fetchCities = () => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));
  };

  const jobPositionsOptions = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.name,
    value: jobPosition.id,
  }));
  const citiesOptions = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));

  const employmentTypeOptions = employmentTypes.map(
    (employmentType, index) => ({
      key: index,
      text: employmentType.name,
      value: employmentType.id,
    })
  );

  const addJobPostingSchema = Yup.object().shape({
    jobPositionId: Yup.number().required("İş pozisyonu seçilmesi gerekiyor!"),
    cityId: Yup.number().required("Şehir seçilmesi gerekiyor!"),
    employmentTypeId: Yup.number().required(
      "İstihdam türü seçilmesi gerekiyor!"
    ),
    minSalary: Yup.number().min(0, "En az maaş 0'dan küçük olamaz!"),
    maxSalary: Yup.number().min(0, "En çok maaş 0'dan küçük olamaz!"),
    openPositionCount: Yup.number()
      .min(0, "Açık pozisyon sayısı 0'dan küçük olamaz!")
      .required("Açık pozisyon sayısı boş bırakılamaz!"),
    applicationDeadline: Yup.date()
      .nullable()
      .required("Son başvuru tarihi seçilmesi gerekiyor!"),
    jobDescription: Yup.string().required("İş açıklaması boş bırakılamaz!"),
  });

  const formik = useFormik({
    initialValues: {
      jobPositionId: "",
      cityId: "",
      employmentTypeId: "",
      minSalary: "",
      maxSalary: "",
      openPositionCount: "",
      applicationDeadline: "",
      jobDescription: "",
      isRemote: false,
    },
    validationSchema: addJobPostingSchema,
    onSubmit: (values) => {
      let jobPosting = {
        jobPosition: {
          id: values.jobPositionId,
        },
        city: {
          id: values.cityId,
        },
        employmentType: {
          id: values.employmentTypeId,
        },
        employer: {
          id: 1, // fakeid
        },
        minSalary: values.minSalary,
        maxSalary: values.maxSalary,
        openPositionCount: values.openPositionCount,
        applicationDeadline: values.applicationDeadline,
        jobDescription: values.jobDescription,
        isRemote: values.isRemote,
      };
      jobPostingService.add(jobPosting).then((result) => console.log(result));
    },
  });

  const handleFormErrorMessages = () => {
    let errorMessages = Object.keys(formik.errors).map((key, i) => {
      return formik.errors[key];
    });
    return errorMessages;
  };

  const [open, setOpen] = useState(false);

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={triggerButton}
        size="tiny"
        closeIcon
      >
        <Modal.Header>İş ilanı ekle</Modal.Header>
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
                  placeholder="Pozisyon seçin"
                  search
                  selection
                  clearable
                  error={formik.errors.jobPositionId ? true : false}
                  onChange={(event, data) => {
                    handleChangeSemantic(data.value, "jobPositionId");
                    handleFormErrorMessages();
                  }}
                  onBlur={formik.onBlur}
                  id="jobPositionId"
                  value={formik.values.jobPositionId}
                  options={jobPositionsOptions}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <Dropdown
                  className="width-100-percent"
                  item
                  placeholder="Şehir seçin"
                  search
                  selection
                  clearable
                  error={formik.errors.cityId ? true : false}
                  onChange={(event, data) => {
                    handleChangeSemantic(data.value, "cityId");
                    handleFormErrorMessages();
                  }}
                  onBlur={formik.onBlur}
                  id="cityId"
                  value={formik.values.cityId}
                  options={citiesOptions}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <Dropdown
                  className="width-100-percent"
                  item
                  placeholder="İstihdam türü seçin"
                  search
                  selection
                  clearable
                  error={formik.errors.employmentTypeId ? true : false}
                  onChange={(event, data) => {
                    handleChangeSemantic(data.value, "employmentTypeId");
                    handleFormErrorMessages();
                  }}
                  onBlur={formik.onBlur}
                  id="employmentTypeId"
                  value={formik.values.employmentTypeId}
                  options={employmentTypeOptions}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <div
                  className="width-40-percent display-inline-block"
                  style={{ marginRight: "5rem" }}
                >
                  <Input
                    labelPosition="right"
                    type="number"
                    placeholder="En az maaş"
                    error={formik.errors.minSalary ? true : false}
                    value={formik.values.minSalary}
                    name="minSalary"
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleFormErrorMessages();
                    }}
                    onBlur={formik.handleBlur}
                  >
                    <input />
                    <Label>₺</Label>
                  </Input>
                </div>
                <div className="width-40-percent display-inline-block">
                  <Input
                    labelPosition="right"
                    type="number"
                    placeholder="En fazla maaş"
                    error={formik.errors.maxSalary ? true : false}
                    value={formik.values.maxSalary}
                    name="maxSalary"
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleFormErrorMessages();
                    }}
                    onBlur={formik.handleBlur}
                  >
                    <input />
                    <Label>₺</Label>
                  </Input>
                </div>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <div
                  className="display-inline-block"
                  style={{ width: "43%", marginRight: "3rem" }}
                >
                  <Input
                    className="width-100-percent"
                    name="openPositionCount"
                    error={formik.errors.openPositionCount ? true : false}
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleFormErrorMessages();
                    }}
                    value={formik.values.openPositionCount}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Açık pozisyon sayısı"
                  />
                </div>
                <div className="display-inline-block" style={{ width: "46%" }}>
                  <SemanticDatepicker
                    error={formik.errors.applicationDeadline ? true : false}
                    onChange={(event, data) => {
                      handleChangeSemantic(data.value, "applicationDeadline");
                      handleFormErrorMessages();
                    }}
                    value={formik.values.applicationDeadline}
                    onBlur={formik.handleBlur}
                    name="applicationDeadline"
                    placeholder="Son başvuru tarihi"
                  />
                </div>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextArea
                  placeholder="İş açıklaması (tüm detaylarıyla)"
                  className="width-100-percent"
                  style={{ minHeight: 100 }}
                  value={formik.values.jobDescription}
                  name="jobDescription"
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleFormErrorMessages();
                  }}
                  onBlur={formik.handleBlur}
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
                  <Checkbox
                    toggle
                    name="isRemote"
                    onChange={(event, data) => {
                      handleChangeSemantic(data.checked, "isRemote");
                    }}
                    onBlur={formik.handleBlur}
                    label="Uzaktan"
                  />
                  <Button
                    content="Ekle"
                    labelPosition="right"
                    icon="add"
                    positive
                    type="submit"
                    style={{ marginLeft: "20px" }}
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
