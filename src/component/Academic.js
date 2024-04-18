import React, { useState } from 'react';

const Academic = () => {
  // State variables to hold the academic data
  const [academicData, setAcademicData] = useState({
    tenth: {
      schoolName: '',
      marks: ''
    },
    twelfth: {
      collegeName: '',
      marks: ''
    },
    graduation: {
      collegeName: '',
      universityName: '',
      graduationYear: ''
    }
  });

  // Function to handle form field changes
  const handleChange = (e, field, subField) => {
    const { value } = e.target;
    setAcademicData({
      ...academicData,
      [field]: {
        ...academicData[field],
        [subField]: value
      }
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store academic data in local storage
    localStorage.setItem('academicData', JSON.stringify(academicData));
    // Optionally, you can reset the form after submission
    // setAcademicData({
    //   tenth: {
    //     schoolName: '',
    //     marks: ''
    //   },
    //   twelfth: {
    //     collegeName: '',
    //     marks: ''
    //   },
    //   graduation: {
    //     collegeName: '',
    //     universityName: '',
    //     graduationYear: ''
    //   }
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
            value={academicData.tenth.schoolName}
            onChange={(e) => handleChange(e, 'tenth', 'schoolName')}
            className="form-control"
          />
          <input
            type="text"
            placeholder="Marks"
            value={academicData.tenth.marks}
            onChange={(e) => handleChange(e, 'tenth', 'marks')}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>12th Details:</label>
          <input
            type="text"
            placeholder="College Name"
            value={academicData.twelfth.collegeName}
            onChange={(e) => handleChange(e, 'twelfth', 'collegeName')}
            className="form-control"
          />
          <input
            type="text"
            placeholder="Marks"
            value={academicData.twelfth.marks}
            onChange={(e) => handleChange(e, 'twelfth', 'marks')}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Graduation Details:</label>
          <input
            type="text"
            placeholder="College Name"
            value={academicData.graduation.collegeName}
            onChange={(e) => handleChange(e, 'graduation', 'collegeName')}
            className="form-control"
          />
          <input
            type="text"
            placeholder="University Name"
            value={academicData.graduation.universityName}
            onChange={(e) => handleChange(e, 'graduation', 'universityName')}
            className="form-control"
          />
          <input
            type="text"
            placeholder="Graduation Year"
            value={academicData.graduation.graduationYear}
            onChange={(e) => handleChange(e, 'graduation', 'graduationYear')}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Academic;
