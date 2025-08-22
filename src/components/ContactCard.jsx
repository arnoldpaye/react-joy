import React from "react";

function ContactCard({ id, name, job, email }) {
  return (
    <div>
      <h1>{name}</h1>
      <h3>Job</h3>
      <h2>{job}</h2>
      <h3>Email</h3>
      <h2>{email}</h2>
    </div>
  );
}

export default ContactCard;
