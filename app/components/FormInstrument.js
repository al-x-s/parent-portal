"use client";
import React from "react";
import { FormWrapper } from "./FormWrapper";

const FormInstrument = ({ instrument, hirePurchaseOptions, updateFields }) => {
  return (
    <FormWrapper title="Instrument">
      <label htmlFor="instrument">Choose an instrument</label>
      <select
        value={instrument}
        name="instrument"
        className="border shadow p-1"
        required
        onChange={(e) => updateFields({ instrument: e.target.value })}
        autoFocus
      >
        <option value="">Please Select</option>
        <option value="flute">Flute</option>
        <option value="clarinet">Clarinet</option>
        <option value="piano">Piano</option>
      </select>
      <label htmlFor="hirePurchaseOptions">Hire or Purchasing Options</label>
      <select
        value={hirePurchaseOptions}
        name="hirePurchaseOptions"
        className="border shadow p-1"
        required
        onChange={(e) => updateFields({ hirePurchaseOptions: e.target.value })}
      >
        <option value="">Please Select</option>
        <option value="hire">Hire a new instrument</option>
        <option value="buy">Buy a new instrument</option>
        <option value="organise-own">I will organise my own instrument</option>
      </select>
    </FormWrapper>
  );
};

export default FormInstrument;
