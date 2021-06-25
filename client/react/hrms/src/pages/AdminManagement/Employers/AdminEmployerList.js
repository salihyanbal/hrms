import React, { useState, useEffect } from "react";
import { Icon, Table } from "semantic-ui-react";
import EmployerService from "../../../services/employerService";

import JobPostingService from "../../../services/jobPostingService";
import StatusTypeService from "../../../services/statusTypeService";
import StatusDropdown from "./StatusDropdown";

export default function AdminEmployerList() {
  const [employers, setEmployers] = useState([]);
  const [statusTypes, setStatusTypes] = useState([]);

  useEffect(() => {
    fetchEmployers();
    fetchStatusTypes();
  }, []);

  const fetchEmployers = () => {
    let employerService = new EmployerService();
    employerService.getAll().then((result) => {
      setEmployers(result.data.data);
    });
  };

  const fetchStatusTypes = () => {
    let statusTypeService = new StatusTypeService();
    statusTypeService.getAll().then((result) => {
      setStatusTypes(result.data.data);
    });
  };

  const statusTypeOptions = statusTypes.map((statusType, index) => ({
    key: index,
    text: statusType.name,
    value: statusType.id,
  }));

  return (
    <section className="scroll-bar overflow-scroll scroll-height">
      <Table selectable celled>
        <Table.Header align="center">
          <Table.Row>
            <Table.HeaderCell rowSpan="2">Durum</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Web Sitesi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Telefon Numarası</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                <StatusDropdown
                  statusTypeOptions={statusTypeOptions}
                  employerId={employer.id}
                />
              </Table.Cell>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.webAddress}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}
