import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    customerDOB: "",
    contactInfo: "",
    cphoneNo: "",
    cemail: "",
    spouseName: "",
    spouseDob: "",
    spouseInfo: "",
    spousePhoneNo: "",
    spouseEmail: "",
    beneficiaryName: "",
    relationship: "",
    beneficiaryPhoneNo: "",
    beneficiaryEmail: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
