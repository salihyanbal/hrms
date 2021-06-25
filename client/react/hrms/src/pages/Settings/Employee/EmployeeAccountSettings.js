import React from "react";
import EmployeeUpdateModal from "./EmployeeUpdateModal";

export default function EmployeeAccountSettings() {
  return (
    <div>
      <div
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.15)",
          textAlign: "left",
          padding: "1rem",
        }}
      >
        <div style={{ fontSize: "15px" }}>
          <b>Profil bilgileri</b>
        </div>
        <div>Profilinizle ilgili temel bilgiler</div>
      </div>
      <EmployeeUpdateModal
        trigger={
          <div
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.15)",
              textAlign: "left",
              padding: "2rem",
            }}
            className="hover-cursor-pointer"
          >
            <div style={{ fontSize: "15px" }}>
              <b>Profil bilgilerinizi düzenleyin</b>
            </div>
          </div>
        }
      />
    </div>
  );
}
