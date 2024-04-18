import React, { useState } from 'react';
import './style.css';

const Personal = () => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    gender: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('personalData', JSON.stringify(formData));
    // Optionally, reset the form after submission
    // setFormData({
    //   name: '',
    //   class: '',
    //   gender: '',
    //   phone: ''
    // });
  
    // Show alert
    alert('Data saved successfully');
  };
  

  return (
    <div className="personal-form-container">
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit} className="personal-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Class:</label>
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Phone No:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Personal;
