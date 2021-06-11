import "./css/AddJobPosting.css";

import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Label,
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
  const addJobPostingSchema = Yup.object().shape({
    jobPositionId: Yup.number().required("Doldurulması gerekiyor!"),
    cityId: Yup.number("Doldurulması gerekiyor!"),
    employmentTypeId: Yup.number().required("Doldurulması gerekiyor!"),
    minSalary: Yup.number().min(0, "Maaş 0'dan küçük olamaz!"),
    maxSalary: Yup.number().min(0, "Maaş 0'dan küçük olamaz!"),
    openPositionCount: Yup.number()
      .min(0, "Açık pozisyon sayısı 0'dan küçük olamaz!")
      .required("Doldurulması gerekiyor!"),
    applicationDeadline: Yup.date()
      .nullable()
      .required("Doldurulması gerekiyor!"),
    jobDescription: Yup.string().required("Doldurulması gerekiyor!"),
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
      description: "",
      isRemote: false,
    },
    validationSchema: addJobPostingSchema,
    onSubmit: (values) => {
      values.employerId = 3;
      console.log(values);
      jobPostingService.add(values).then((result) => console.log(result));
    },
  });

  ///////////////////////////////
  const [open, setOpen] = useState(false);

  //////////////////////////////

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

  /////
  const [jobPositions, setJobPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [employmentTypes, setEmploymentTypes] = useState([]);

  useEffect(() => {
    fetchJobPositions();
    fetchCities();
    fetchEmploymentTypes();
  }, []);

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
                <Dropdown
                  className="width-100-percent"
                  item
                  placeholder="Pozisyon seçin"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "jobPositionId")
                  }
                  onBlur={formik.onBlur}
                  id="jobPositionId"
                  value={formik.values.jobPositionId}
                  options={jobPositionsOptions}
                />

                {formik.errors.jobPositionId &&
                  formik.touched.jobPositionId && (
                    <p className="font-size-sm font-color-red">
                      {formik.errors.jobPositionId}
                    </p>
                  )}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <Dropdown
                  className="width-100-percent"
                  item
                  placeholder="Şehir seçin"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "cityId")
                  }
                  onBlur={formik.onBlur}
                  id="cityId"
                  value={formik.values.cityId}
                  options={citiesOptions}
                />
                {formik.errors.cityId && formik.touched.cityId && (
                  <p className="font-size-sm font-color-red">
                    {formik.errors.cityId}
                  </p>
                )}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <Dropdown
                  className="width-100-percent"
                  item
                  placeholder="İstihdam türü seçin"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "employmentTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="employmentTypeId"
                  value={formik.values.employmentTypeId}
                  options={employmentTypeOptions}
                />
                {formik.errors.employmentTypeId &&
                  formik.touched.employmentTypeId && (
                    <p className="font-size-sm font-color-red">
                      {formik.errors.employmentTypeId}
                    </p>
                  )}
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
                    error={Boolean(formik.errors.description)}
                    value={formik.values.minSalary}
                    name="minSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <input />
                    <Label>₺</Label>
                  </Input>
                  {formik.errors.minSalary && formik.touched.minSalary && (
                    <p className="font-size-sm font-color-red">
                      {formik.errors.minSalary}
                    </p>
                  )}
                </div>
                <div className="width-40-percent display-inline-block">
                  <Input
                    labelPosition="right"
                    type="number"
                    placeholder="En fazla maaş"
                    error={Boolean(formik.errors.description)}
                    value={formik.values.maxSalary}
                    name="maxSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <input />
                    <Label>₺</Label>
                  </Input>
                  {formik.errors.maxSalary && formik.touched.maxSalary && (
                    <p className="font-size-sm font-color-red">
                      {formik.errors.maxSalary}
                    </p>
                  )}
                </div>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <div
                  className="display-inline-block"
                  style={{ width: "43%", marginRight: "3rem" }}
                >
                  <Input
                    className="width-100-percent"
                    id="openPositionCount"
                    name="openPositionCount"
                    error={Boolean(formik.errors.openPositionCount)}
                    onChange={formik.handleChange}
                    value={formik.values.openPositionCount}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Açık pozisyon sayısı"
                  />
                  {formik.errors.openPositionCount &&
                    formik.touched.openPositionCount && (
                      <p className="font-size-sm font-color-red">
                        {formik.errors.openPositionCount}
                      </p>
                    )}
                </div>
                <div className="display-inline-block" style={{ width: "46%" }}>
                  <SemanticDatepicker
                    error={Boolean(formik.errors.applicationDeadline)}
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "applicationDeadline")
                    }
                    value={formik.values.applicationDeadline}
                    onBlur={formik.handleBlur}
                    name="applicationDeadline"
                    placeholder="Son başvuru tarihi"
                  />
                  {formik.errors.applicationDeadline &&
                    formik.touched.applicationDeadline && (
                      <p className="font-size-sm font-color-red">
                        {formik.errors.applicationDeadline}
                      </p>
                    )}
                </div>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextArea
                  placeholder="İş açıklaması (tüm detaylarıyla)"
                  className="width-100-percent"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.jobDescription).toString()}
                  value={formik.values.jobDescription}
                  name="jobDescription"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.jobDescription &&
                  formik.touched.jobDescription && (
                    <p className="font-size-sm font-color-red">
                      {formik.errors.jobDescription}
                    </p>
                  )}
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

/*  */
/* <DatePicker
                    style={{ width: 180 }}
                    date={values.dueDate}
                    mode="date"
                    format="YYYY-MM-DD"
                    minDate={Date.now.toString()}
                    maxDate="2050-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                    customStyles={{
                      dateInput: {
                        marginLeft: 0,
                        borderColor: "#fff",
                      },
                    }}
                    onDateChange={(date) => setFieldValue("dueDate", date)}
                    onTouch={setFieldTouched}
                  /> */
