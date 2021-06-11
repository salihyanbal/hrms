import React, { useState, useEffect } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import JobPostingService from "../../services/jobPostingService";
import AddJobPostingModal from "./AddJobPostingModal";

export default function CompanyJobPostList() {
  const [jobPostings, setJobPostings] = useState([]);
  const [fakeCompanyId, setFakeCompanyId] = useState(3);
  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getAllByEmployerId(fakeCompanyId)
      .then((result) => setJobPostings(result.data.data));
  }, []);

  return (
    <section className="scroll-bar overflow-scroll scroll-height">
      <Table celled selectable structured>
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
            <Table.HeaderCell colSpan="2" textAlign="center">
              Durum
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Aktif</Table.HeaderCell>
            <Table.HeaderCell>Onaylanmış</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPosting, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                <Button.Group>
                  <Button icon>
                    <Icon name="edit" />
                  </Button>

                  <Button color="red" icon>
                    <Icon name="trash" />
                  </Button>
                </Button.Group>
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
              {jobPosting.active ? (
                <Table.Cell textAlign="center">
                  <Icon color="green" name="checkmark" size="large" />
                </Table.Cell>
              ) : (
                <Table.Cell />
              )}
              {jobPosting.jobPostingConfirmation?.confirmed ? (
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
