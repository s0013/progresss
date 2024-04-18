import React, { useState } from 'react';

const Academic = () => {
  // State variables to hold the academic data
  const [academicData, setAcademicData] = useState({
    tenthSchoolName: '',
    tenthMarks: '',
    twelfthCollegeName: '',
    twelfthMarks: '',
    graduationCollegeName: '',
    graduationUniversityName: '',
    graduationYear: ''
  });

  // Function to handle form field changes
  const handleChange = (e, field) => {
    const { value } = e.target;
    setAcademicData({
      ...academicData,
      [field]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store academic data in local storage
    localStorage.setItem('academicData', JSON.stringify(academicData));
    // Optionally, you can reset the form after submission
    // setAcademicData({
    //   tenthSchoolName: '',
    //   tenthMarks: '',
    //   twelfthCollegeName: '',
    //   twelfthMarks: '',
    //   graduationCollegeName: '',
    //   graduationUniversityName: '',
    //   graduationYear: ''
    // });
    alert('Data saved successfully');
  };

  return (
    <div className="academic-form-container">
      <h2>Academic Information</h2>
      <form onSubmit={handleSubmit} className="academic-form">
        <div className="form-group">
          <label>10th Details:</label>
          <input
            type="text"
            placeholder="School Name"
            value={academicData.tenthSchoolName}
            onChange={(e) => handleChange(e, 'tenthSchoolName')}
            className="form-control"
          />
          <input
            type="text"
            placeholder="Marks"
            value={academicData.tenthMarks}
            onChange={(e) => handleChange(e, 'tenthMarks')}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>12th Details:</label>
          <input
            type="text"
            placeholder="College Name"
            value={academicData.twelfthCollegeName}
            onChange={(e) => handleChange(e, 'twelfthCollegeName')}
            className="form-control"
          />
          <input
            type="text"
            placeholder="Marks"
            value={academicData.twelfthMarks}
            onChange={(e) => handleChange(e, 'twelfthMarks')}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Graduation Details:</label>
          <input
            type="text"
            placeholder="College Name"
            value={academicData.graduationCollegeName}
            onChange={(e) => handleChange(e, 'graduationCollegeName')}
            className="form-control"
          />
          <input
            type="text"
            placeholder="University Name"
            value={academicData.graduationUniversityName}
            onChange={(e) => handleChange(e, 'graduationUniversityName')}
            className="form-control"
          />
          <input
            type="text"
            placeholder="Graduation Year"
            value={academicData.graduationYear}
            onChange={(e) => handleChange(e, 'graduationYear')}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Academic;
