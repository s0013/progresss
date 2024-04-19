import React, { useState } from 'react';

const Address = () => {
  const [addressData, setAddressData] = useState({
    city: '',
    state: '',
    country: '',
    correspondenceAddress: '',
    permanentAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('addressData', JSON.stringify(addressData));
    // Optionally, reset the form after submission
    // setAddressData({
    //   city: '',
    //   state: '',
    //   country: '',
    //   correspondenceAddress: '',
    //   permanentAddress: ''
    // });
    alert('Address saved successfully');
  };

  return (
    <div className="address-form-container">
      <h2>Address Details</h2>
      <form onSubmit={handleSubmit} className="address-form">
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={addressData.city}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={addressData.state}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <select
            name="country"
            value={addressData.country}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Country</option>
            <option value="USA">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Correspondence Address:</label>
          <textarea
            name="correspondenceAddress"
            value={addressData.correspondenceAddress}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Permanent Address:</label>
          <textarea
            name="permanentAddress"
            value={addressData.permanentAddress}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Address;
