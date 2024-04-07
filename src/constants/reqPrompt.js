let reqPrompt = "Hello";
let defaultPrompt = `Your task is to analyze the risk associated with the issuance of policy to the customer: 
1. *Customer Details*:
- Full Name: John Smith
- Date of Birth: January 1, 1960
- Contact Information:
  - Address: 123 wall street,chennai
  - Phone Number: +1234567890
  - Email: john@example.com
- Spouse's Full Name: Jane Smith
- Spouse's Date of Birth: February 15, 1962
- Spouse's Contact Information:
  - Address: 123 Main Street, City, Country
  - Phone Number: +1234567890
  - Email: jane@example.com
- Beneficiary's Full Name: Sarah Smith
- Relationship to Customer: Daughter
- Beneficiary's Contact Information:
  - Phone Number: +9876543210
  - Email: sarah@example.com

2. *Financial Information*:
- Monthly Income: Rs. 10000
- Total Assets: Rs. 1 crore
- Total Liabilities: Rs. 50 lakhs
- Existing Insurance Policies or Annuities: Life insurance policy with a sum assured of Rs. 50 lakhks
3. *Health and Medical Information*:
- Current Health Status: Bad
- Pre-existing Medical Conditions: chronorary heart disease
- Medical History: No significant medical history
4. *Claimed Policy Details*:
- Policy Title: Immediate Annuity Product
- Description: PNB MetLife’s Immediate Annuity Plan provides guaranteed* income for life, ensuring financial security post-retirement.
- Key Benefits:
  - Guaranteed* income for life with a single payment
  - Lifetime income for spouse
  - Return of invested capital upon demise
  - Increasing income to tackle inflation
- Eligibility Criteria:
  - Minimum Age at Entry: 40
  - Maximum Age at Entry: 75
  - Minimum Purchase Price: Rs. 300,000 for Increasing Life Annuity with return of Purchase Price
  - Annuity Payout Modes: Yearly, Half Yearly, Quarterly, Monthly 
5. *Customer's Preference*:
- Preferred Annuity Option: Life Annuity with return of purchase price
- Desired Payout Frequency: Monthly
- Investment Amount or Purchase Price: Rs. 40,00,000
- Risk Tolerance Level: Moderate
  Error Check 1: Check whether you have obtained all the important information from the content.
  
  Error Check 2: Present the output points in this format 
  Output format: [SubTitle1]
                         * Point1
                 [SubTitle2]
                         * Point2
                 [SubTitle3]
                         * Point3
                 [SubTitle4]
                         * Point4
                 [SubTitle5]
                         * Point5
                 [SubTitle6]
                         * Point6
                 [SubTitle7]
                         * Point7
                 [SubTitle8]
                         * Point8
                 [SubTitle9]
                         * Point9
                 [SubTitle10]
                         * Point10     
  
  Final Output:Present the summary in the above format.Only print the summary.No extra text`;
function generateReqProm(formValues) {
  reqPrompt = `Your task is to analyze the risk associated with the issuance of policy to the customer: 
  1. *Customer Details*:
  - Full Name: ${formValues.name}
  - Date of Birth: ${formValues.customerDOB}
  - Contact Information:
    - Address: ${formValues.contactInfo}
    - Phone Number: ${formValues.cphoneNo}
    - Email: ${formValues.cemail}
  - Spouse's Full Name: ${formValues.spouseName}
  - Spouse's Date of Birth: ${formValues.spouseDob}
  - Spouse's Contact Information:
    - Address: ${formValues.spouseInfo}
    - Phone Number: ${formValues.spousePhoneNo}
    - Email: ${formValues.spouseEmail}
  - Beneficiary's Full Name: ${formValues.beneficiaryName}
  - Relationship to Customer: ${formValues.relationship}
  - Beneficiary's Contact Information:
    - Phone Number: ${formValues.beneficiaryPhoneNo}
    - Email: ${formValues.beneficiaryEmail}
  
  2. *Financial Information*:
  - Monthly Income: Rs. 10000
  - Total Assets: Rs. 1 crore
  - Total Liabilities: Rs. 50 lakhs
  - Existing Insurance Policies or Annuities: Life insurance policy with a sum assured of Rs. 50 lakhks
  3. *Health and Medical Information*:
  - Current Health Status: Bad
  - Pre-existing Medical Conditions: chronorary heart disease
  - Medical History: No significant medical history
  4. *Claimed Policy Details*:
  - Policy Title: Immediate Annuity Product
  - Description: PNB MetLife’s Immediate Annuity Plan provides guaranteed* income for life, ensuring financial security post-retirement.
  - Key Benefits:
    - Guaranteed* income for life with a single payment
    - Lifetime income for spouse
    - Return of invested capital upon demise
    - Increasing income to tackle inflation
  - Eligibility Criteria:
    - Minimum Age at Entry: 40
    - Maximum Age at Entry: 75
    - Minimum Purchase Price: Rs. 300,000 for Increasing Life Annuity with return of Purchase Price
    - Annuity Payout Modes: Yearly, Half Yearly, Quarterly, Monthly 
  5. *Customer's Preference*:
  - Preferred Annuity Option: Life Annuity with return of purchase price
  - Desired Payout Frequency: Monthly
  - Investment Amount or Purchase Price: Rs. 40,00,000
  - Risk Tolerance Level: Moderate
    Error Check 1: Check whether you have obtained all the important information from the content.
    
    Error Check 2: Present the output points in this format 
    Output format: [SubTitle1]
                           * Point1
                   [SubTitle2]
                           * Point2
                   [SubTitle3]
                           * Point3
                   [SubTitle4]
                           * Point4
                   [SubTitle5]
                           * Point5
                   [SubTitle6]
                           * Point6
                   [SubTitle7]
                           * Point7
                   [SubTitle8]
                           * Point8
                   [SubTitle9]
                           * Point9
                   [SubTitle10]
                           * Point10     
    
    Final Output:Present the summary in the above format.Only print the summary.No extra text`;
  return reqPrompt;
}

export { generateReqProm, reqPrompt, defaultPrompt };
