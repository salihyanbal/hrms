import "./css/JobSalary.css";

import React from "react";

export default function JobSalary({ jobPost }) {
  return (
    <div
      style={{
        borderTop: "2px solid #EBEBEB",
        border: "1px solid #EBEBEB",
        borderRadius: "8px",
        marginTop: "10px",
      }}
    >
      {jobPost.minSalary && jobPost.maxSalary ? (
        <div className="salary">
          <h2>Ödeme aralığı</h2>
          <p>
            {jobPost.minSalary ? (
              <span>
                En düşük <strong>{jobPost.minSalary} ₺</strong>{" "}
              </span>
            ) : (
              ""
            )}
            {jobPost.minSalary && jobPost.maxSalary ? <span>ila</span> : ""}
            {jobPost.maxSalary ? (
              <span>
                {" "}
                en yüksek <strong>{jobPost.maxSalary} ₺</strong>
              </span>
            ) : (
              ""
            )}
            {jobPost.minSalary && jobPost.maxSalary ? (
              <span> arasında</span>
            ) : (
              ""
            )}
            <span> maaş vaat etmektedir.</span>
          </p>
        </div>
      ) : (
        <div className="salary">
          <h2>Ödeme aralığı mevcut değil</h2>
          <p>Şu an için maaş bilgileri mevcut değil</p>
        </div>
      )}
    </div>
  );
}
