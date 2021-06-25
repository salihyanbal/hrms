import React, { useState, useEffect } from "react";
import { Icon, Table } from "semantic-ui-react";

import JobPostingService from "../../../services/jobPostingService";
import StatusTypeService from "../../../services/statusTypeService";
import StatusDropdown from "./StatusDropdown";

export default function AdminJobPostList() {
  const [jobPostings, setJobPostings] = useState([]);
  const [statusTypes, setStatusTypes] = useState([]);

  useEffect(() => {
    fetchJobPostings();
    fetchStatusTypes();
  }, []);

  const fetchJobPostings = () => {
    let jobPostingService = new JobPostingService();
    jobPostingService.getAll().then((result) => {
      setJobPostings(result.data.data);
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
            <Table.HeaderCell rowSpan="2">Pozisyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Şehir</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Açıklama</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">
              Açık pozisyon sayısı
            </Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Maaş skalası</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Yayınlanma tarihi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Son başvuru tarihi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">İstihdam türü</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Uzaktan</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Silinmiş</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPosting, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                <StatusDropdown
                  statusTypeOptions={statusTypeOptions}
                  jobPostingId={jobPosting.id}
                />
              </Table.Cell>

              <Table.Cell>{jobPosting.jobPosition.name}</Table.Cell>
              <Table.Cell>{jobPosting.city.name}</Table.Cell>
              <Table.Cell singleLine>
                {jobPosting.jobDescription.substring(0, 20)}
              </Table.Cell>
              <Table.Cell>{jobPosting.openPositionCount}</Table.Cell>
              <Table.Cell>
                {jobPosting.minSalary} ₺ - {jobPosting.maxSalary} ₺
              </Table.Cell>
              <Table.Cell>{jobPosting.publishedAt}</Table.Cell>
              <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobPosting.employmentType?.name}</Table.Cell>
              {jobPosting.isRemote ? (
                <Table.Cell textAlign="center">
                  <Icon color="green" name="checkmark" size="large" />
                </Table.Cell>
              ) : (
                <Table.Cell />
              )}
              {jobPosting.deleted ? (
                <Table.Cell textAlign="center">
                  <Icon color="green" name="checkmark" size="large" />
                </Table.Cell>
              ) : (
                <Table.Cell />
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}
