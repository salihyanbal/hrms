import "./css/ProfileCard.css";
import React, { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";

export default function ProfileCard({ candidate }) {
  return (
    <div
      className="bg-color-white"
      style={{ border: "1px solid rgba(0,0,0,0.2)", height: "200%" }}
    >
      <div>
        <Image
          src="https://res.cloudinary.com/cloudlucifer/image/upload/v1624549142/bg-for-profiles_myiskh.jpg"
          fluid
          style={{ height: "200px" }}
        />
      </div>
      <div>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          size="small"
          circular
          className="profile-image"
        />
      </div>
      <div
        style={{
          fontSize: "20px",
          float: "left",
          padding: "1rem",
          marginLeft: "3rem",
          marginTop: "5rem",
          height: "100px",
        }}
      >
        <b>
          {candidate.firstName} {candidate.lastName}
        </b>
      </div>
    </div>
  );
}
