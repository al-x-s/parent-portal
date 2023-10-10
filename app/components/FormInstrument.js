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
        <option value="Flute">Flute</option>
        <option value="Oboe">Oboe</option>
        <option value="Clarinet">Clarinet</option>
        <option value="Alto Saxophone">Alto Saxophone</option>
        <option value="Tenor Saxophone">Tenor Saxophone</option>
        <option value="Baritone Saxophone">Baritone Saxophone</option>
        <option value="Trumpet">Trumpet</option>
        <option value="French Horn">French Horn</option>
        <option value="Trombone">Trombone</option>
        <option value="Baritone Horn">Baritone Horn</option>
        <option value="Tuba">Tuba</option>
        <option value="Bass Guitar">Bass Guitar</option>
        <option value="Percussion">Percussion</option>
        <option value="Piano">Piano</option>
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
