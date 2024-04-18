import React, { useState } from 'react';
import './style.css';

const Personal = () => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    gender: '',
    phone: '',
    passportPhoto: null // State to store the Base64-encoded image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFormData({
        ...formData,
        passportPhoto: reader.result // Store the Base64 string in state
      });
    };
    reader.readAsDataURL(file); // Read the file as a data URL
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data in local storage
    localStorage.setItem('personalData', JSON.stringify(formData));

    // Show alert
    alert('Data saved successfully');
  };

  return (
    <div className="personal-form-container">
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit} className="personal-form">
        {/* Your other form fields */}
        <div className="form-group">
          <label>Passport Photo:</label>
          <input
            type="file"
            accept="image/*"
            name="passportPhoto"
            onChange={handleFileChange}
            className="form-control"
          />
        </div>
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
