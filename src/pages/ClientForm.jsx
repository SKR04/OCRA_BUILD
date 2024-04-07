import React, { useState } from "react";
import { Boxes } from "../components/ui/background-boxes";
import CustomButton from "../components/ui/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { generateReqProm, reqPrompt } from "../constants/reqPrompt";
import { useFormContext } from "../context/FormContext";
const ClientForm = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedReqProm = generateReqProm(formData);
    console.log(updatedReqProm);

    // Write updatedReqProm to a local JavaScript file

    // Navigate to PolicyStatus page
    navigate("policyStatus");

    // Log updatedReqProm (optional)
    console.log(updatedReqProm);
  };

  const handleFormFieldChange = (fieldName, e) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };
  return (
    <div>
      <Boxes />
      <div className="flex justify-center items-center min-h-screen mt-50 z-50">
        <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 mt-50 w-[500px]">
          <form
            onSubmit={handleSubmit}
            className="w-full mt-[35px] flex flex-col gap-[30px]"
          >
            <div className="flex flex-wrap gap-[40px] z-50"></div>
            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Your Name
              </span>
              <input
                //required
                value={formData.name}
                type="text"
                step="0.1"
                placeholder="Enter your name"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("name", e)}
              />
            </label>

            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Date Of Birth
              </span>
              <input
                //required
                value={formData.customerDOB}
                type="date"
                step="0.1"
                placeholder="End Date"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("customerDOB", e)}
              />
            </label>

            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Address
              </span>
              <textarea
                //required
                value={formData.contactInfo}
                rows={5}
                placeholder="Please provide your Address"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("contactInfo", e)}
              />
            </label>

            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Phone No
              </span>
              <input
                //required
                value={formData.cphoneNo}
                type="text"
                step="0.1"
                placeholder="Enter your Phone Number"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("cphoneNo", e)}
              />
            </label>

            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Email
              </span>
              <input
                //required
                value={formData.cemail}
                type="text"
                step="0.1"
                placeholder="Enter your mail id"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("cemail", e)}
              />
            </label>

            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Spouse Name
              </span>
              <input
                //required
                value={formData.spouseName}
                type="text"
                step="0.1"
                placeholder="Enter your Spouse's Name"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("spouseName", e)}
              />
            </label>

            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Date Of Birth
              </span>
              <input
                //required
                value={formData.spouseDob}
                type="date"
                step="0.1"
                placeholder="End Date"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("spouseDob", e)}
              />
            </label>

            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Address
              </span>
              <textarea
                //required
                value={formData.spouseInfo}
                rows={5}
                placeholder="Please provide your Address"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("spouseInfo", e)}
              />
            </label>

            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Phone No
              </span>
              <input
                //required
                value={formData.spousePhoneNo}
                type="text"
                step="0.1"
                placeholder="Enter your Spouse's Phone Number"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("spousePhoneNo", e)}
              />
            </label>

            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Spouse's Email Id
              </span>
              <input
                //required
                value={formData.spouseEmail}
                type="text"
                step="0.1"
                placeholder="Enter your Spouse's mail id"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("spouseEmail", e)}
              />
            </label>

            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Beneficiary's Name
              </span>
              <input
                //required
                value={formData.beneficiaryName}
                type="text"
                step="0.1"
                placeholder="Enter your Beneficiary's Name"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("beneficiaryName", e)}
              />
            </label>
            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Beneficiary's Relationship
              </span>
              <input
                //required
                value={formData.relationship}
                type="text"
                step="0.1"
                placeholder="Enter the relationship"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("relationship", e)}
              />
            </label>

            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Beneficiary's Phone No
              </span>
              <input
                //required
                value={formData.beneficiaryPhoneNo}
                type="text"
                step="0.1"
                placeholder="Enter your Beneficiary's Phone Number"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("beneficiaryPhoneNo", e)}
              />
            </label>

            <label className="flex-1 w-full flex flex-col">
              <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
                Beneficiary's Email Id
              </span>
              <input
                //required
                value={formData.beneficiaryEmail}
                type="text"
                step="0.1"
                placeholder="Enter your Beneficiary's mail id"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                onChange={(e) => handleFormFieldChange("beneficiaryEmail", e)}
              />
            </label>
            <CustomButton
              btnType="submit"
              title="Submit Form"
              styles="bg-[#1dc071]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
