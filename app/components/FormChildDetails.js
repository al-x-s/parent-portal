"use client";
import React from "react";
import { FormWrapper } from "./FormWrapper";

const FormChildDetails = ({
  firstName,
  lastName,
  school,
  grade,
  updateFields,
}) => {
  return (
    <FormWrapper title="Child Details">
      <label htmlFor="firstName">First Name</label>
      <input
        required
        className="border shadow p-1"
        id="firstName"
        name="firstName"
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        autoFocus
      ></input>
      <label htmlFor="lastName">Last Name</label>
      <input
        required
        className="border shadow p-1"
        id="lastName"
        name="lastName"
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      ></input>
      <label htmlFor="school">School</label>
      <select
        value={school}
        required
        className="border shadow p-1"
        name="school"
        id="school"
        onChange={(e) => updateFields({ school: e.target.value })}
      >
        <option value="">Please Select</option>
        <option value="OLQP">OLQP</option>
        <option value="Arcadia">Arcadia</option>
      </select>
      <label htmlFor="grade">Grade</label>
      <select
        value={grade}
        required
        className="border shadow p-1"
        name="grade"
        id="grade"
        onChange={(e) => updateFields({ grade: e.target.value })}
      >
        <option value="">Please Select</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
    </FormWrapper>
  );
};

export default FormChildDetails;
