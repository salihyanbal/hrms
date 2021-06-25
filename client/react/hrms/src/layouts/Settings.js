import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import CompanyProfileMenu from "../pages/Settings/Company/CompanyProfileMenu";
import CompanyAccountSettings from "../pages/Settings/Company/CompanyAccountSettings";
import SettingsMenuCard from "../pages/Settings/SettingsMenuCard";
import EmployeeProfileMenu from "../pages/Settings/Employee/EmployeeProfileMenu";
import EmployeeAccountSettings from "../pages/Settings/Employee/EmployeeAccountSettings";

export default function Settings() {
  const [settings, setSettings] = useState([<EmployeeAccountSettings />]);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <EmployeeProfileMenu />
          </Grid.Column>
          <Grid.Column width={10}>
            <SettingsMenuCard children={settings} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
