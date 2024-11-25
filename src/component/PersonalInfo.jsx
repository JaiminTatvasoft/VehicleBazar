import React from "react";

const PersonalInfo = ({ formData, handleInputChange }) => {
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    return age;
  };

  return (
    <div>
      <h3 className="text-xl font-poppins font-semibold text-darkGreen mb-4">
        Personal Info
      </h3>
      <div>
        <label
          htmlFor="name"
          className="block text-sm text-darkGreen font-medium"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
          placeholder="Enter your name"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="dob"
          className="block text-sm text-darkGreen font-medium"
        >
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={formData.dob}
          onChange={handleInputChange}
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
        />
      </div>
      {formData.dob && (
        <p className="mt-4 text-sm text-darkGreen">
          Age: {calculateAge(formData.dob)} years
        </p>
      )}
    </div>
  );
};

export default PersonalInfo;
