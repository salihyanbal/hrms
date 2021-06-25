import React, { useState, useEffect } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import JobPostingService from "../../../services/jobPostingService";
import JobPostingStatusService from "../../../services/jobPostingStatusService";
import AddJobPostingModal from "./AddJobPostingModal";
import JobPostingStatus from "./JobPostingStatus";

export default function CompanyJobPostList() {
  const [jobPostings, setJobPostings] = useState([]);
  const [fakeCompanyId, setFakeCompanyId] = useState(1);
  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getAllByEmployerIdAndDeletedFalse(fakeCompanyId)
      .then((result) => setJobPostings(result.data.data));
  }, []);

  const getJobPostingStatus = (jobPostingId) => {
    let jobPostingStatusService = new JobPostingStatusService();
    return jobPostingStatusService.getLastByJobPostingId(jobPostingId);
  };

  return (
    <section className="scroll-bar overflow-scroll scroll-height">
      <Table celled selectable>
        <Table.Header align="center">
          <Table.Row>
            <Table.HeaderCell rowSpan="2">
              <AddJobPostingModal
                triggerButton={
                  <Button primary icon labelPosition="left">
                    <Icon name="add" />
                    Ekle
                  </Button>
                }
              />
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Durum</Table.HeaderCell>
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
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPosting, i) => (
            <Table.Row key={i}>
              <Table.Cell textAlign="center">
                <Button color="red" icon>
                  <Icon name="trash" />
                </Button>
              </Table.Cell>
              <Table.Cell>
                <JobPostingStatus jobPostingId={jobPosting.id} />
              </Table.Cell>
              <Table.Cell>{jobPosting.jobPosition.name}</Table.Cell>
              <Table.Cell>{jobPosting.city.name}</Table.Cell>
              <Table.Cell>
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
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}
