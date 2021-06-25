import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import EmployerStatusService from "../../../services/employerStatusService";
import EmployerStatusChangeModal from "./EmployerStatusChangeModal";

export default function StatusDropdown({ statusTypeOptions, employerId }) {
  const [status, setStatus] = useState([]);
  const [open, setOpen] = useState(false);
  const [newStatus, setNewStatus] = useState([]);
  const setModalState = (value) => {
    setOpen(value);
  };
  useEffect(() => {
    let employerStatusService = new EmployerStatusService();
    employerStatusService.getLastByEmployerId(employerId).then((result) => {
      setStatus([result.data.data]);
    });
  }, []);

  const dropdownChangeHandler = (data) => {
    setNewStatus(
      statusTypeOptions.filter(
        (statusType) => statusType.value === data.value
      )[0]
    );
    setOpen(true);
  };

  return (
    <div>
      {status?.map((stat, i) => (
        <div key={i}>
          <Dropdown
            placeholder="Durum"
            search
            selection
            defaultValue={stat?.statusType.id}
            options={statusTypeOptions}
            onChange={(event, data) => dropdownChangeHandler(data)}
          />
          <EmployerStatusChangeModal
            open={open}
            setModalState={setModalState}
            status={status[0]}
            newStatus={newStatus}
            employerId={employerId}
          />
        </div>
      ))}
    </div>
  );
}
