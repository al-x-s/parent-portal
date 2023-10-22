"use client";
import React from "react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { useRouter } from "next/navigation";
import FormChildDetails from "./FormChildDetails";
import FormInstrument from "./FormInstrument";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  school: "",
  grade: "",
  instrument: "",
  hirePurchaseOptions: "",
};

const EnrolChildForm = ({ email }) => {
  const { push } = useRouter();
  const [data, setData] = React.useState({
    ...INITIAL_DATA,
    email,
  });

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <FormChildDetails {...data} updateFields={updateFields} />,
      <FormInstrument {...data} updateFields={updateFields} />,
    ]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();

    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Registration was successful, handle success here
        console.log("Student enrolled!");
        push("/dashboard");
      } else {
        // Registration failed, handle errors here
        console.error("Enrolment failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className="shadow relative border border-grey p-5 m-1 w-full rounded">
      <form onSubmit={handleSubmit}>
        <div className="absolute top-2 right-2">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="flex gap-3 justify-end mt-3">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
};

export default EnrolChildForm;
