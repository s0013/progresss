import React, { useState } from 'react';

const Submission = () => {
  const [previewData, setPreviewData] = useState(null); // State to store the data for preview
  const [editMode, setEditMode] = useState(false); // State to track edit mode

  // Function to retrieve data from local storage
  const fetchStoredData = () => {
    const storedPersonalData = localStorage.getItem('personalData');
    const storedAcademicData = localStorage.getItem('academicData');
    const storedAddressData = localStorage.getItem('addressData');

    if (storedPersonalData && storedAcademicData && storedAddressData) {
      const personalData = JSON.parse(storedPersonalData);
      const academicData = JSON.parse(storedAcademicData);
      const addressData = JSON.parse(storedAddressData);

      // Combine personal, academic, and address data
      const combinedData = { ...personalData, ...academicData, ...addressData };

      setPreviewData(combinedData); // Set the combined data in state
    } else {
      alert('No data found in local storage');
    }
  };

  // Function to handle edit mode toggle
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Function to save changes
  const saveChanges = () => {
    // Save the updated data back to local storage
    localStorage.setItem('personalData', JSON.stringify(previewData));
    // Disable edit mode after saving changes
    setEditMode(false);
    alert('Changes saved successfully!');
  };

  // Function to handle input change in edit mode
  const handleInputChange = (key, value) => {
    setPreviewData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Submission</h2>
      <button
        onClick={fetchStoredData}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Preview
      </button>
      {previewData && (
        <div>
          <h3 style={{ textAlign: 'center' }}>Preview Data</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
            <tbody>
              {/* Display passport photo */}
              <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Personal Details</label>
              {previewData.passportPhoto && (
                <tr>
                  <td style={{ padding: '10px' }}>Passport Photo</td>
                  <td style={{ padding: '10px' }}>
                    <img src={previewData.passportPhoto} alt="passport" style={{ maxWidth: '200px' }} />
                  </td>
                </tr>
              )}
              {/* Display personal data */}
              {Object.entries(previewData).map(([key, value]) => (
                // Exclude keys related to address data
                !['passportPhoto', 'city', 'state', 'country', 'permanentAddress', 'correspondenceAddress'].includes(key) && (
                  <tr key={key}>
                    <td style={{ padding: '10px' }}>{key}</td>
                    <td style={{ padding: '10px' }}>
                      {editMode ? (
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleInputChange(key, e.target.value)}
                        />
                      ) : (
                        value
                      )}
                    </td>
                  </tr>
                )
              ))}
              {/* Display address data */}
<label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Address Details</label>

<tr>
  <td style={{ padding: '10px' }}>City</td> 
  <td style={{ padding: '10px' }}>
    {editMode ? (
      <input
        type="text"
        value={previewData.city}
        onChange={(e) => handleInputChange('city', e.target.value)}
      />
    ) : (
      previewData.city
    )}
  </td>
</tr>
<tr>
  <td style={{ padding: '10px' }}>State</td>
 
  <td style={{ padding: '10px' }}>
    {editMode ? (
      <input
        type="text"
        value={previewData.state}
        onChange={(e) => handleInputChange('state', e.target.value)}
      />
    ) : (
      previewData.state
    )}
  </td>
</tr>
<tr>
  <td style={{ padding: '10px' }}>Country</td>
 
  <td style={{ padding: '10px' }}>
    {editMode ? (
      <input
        type="text"
        value={previewData.country}
        onChange={(e) => handleInputChange('country', e.target.value)}
      />
    ) : (
      previewData.country
    )}
  </td>
</tr>
<tr>
  <td style={{ padding: '10px' }}>Permanent Address</td>
  
  <td style={{ padding: '10px' }}>
    {editMode ? (
      <input
        type="text"
        value={previewData.permanentAddress}
        onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
      />
    ) : (
      previewData.permanentAddress
    )}
  </td>
</tr>
<tr>
  <td style={{ padding: '10px' }}>Correspondence Address</td>
  
  <td style={{ padding: '10px' }}>
    {editMode ? (
      <input
        type="text"
        value={previewData.correspondenceAddress}
        onChange={(e) => handleInputChange('correspondenceAddress', e.target.value)}
      />
    ) : (
      previewData.correspondenceAddress
    )}
  </td>
</tr>

              
              {/* Display academic data */}
              <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Academic Details</label>
              <tr>
                <td style={{ padding: '10px' }}>10th School Name</td>
                <td style={{ padding: '10px' }}>
                  {editMode ? (
                    <input
                      type="text"
                      value={previewData.tenthSchoolName}
                      onChange={(e) => handleInputChange('tenthSchoolName', e.target.value)}
                    />
                  ) : (
                    previewData.tenthSchoolName
                  )}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>10th Marks</td>
                <td style={{ padding: '10px' }}>
                  {editMode ? (
                    <input
                      type="text"
                      value={previewData.tenthMarks}
                      onChange={(e) => handleInputChange('tenthMarks', e.target.value)}
                    />
                  ) : (
                    previewData.tenthMarks
                  )}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>12th College Name</td>
                <td style={{ padding: '10px' }}>
                  {editMode ? (
                    <input
                      type="text"
                      value={previewData.twelfthCollegeName}
                      onChange={(e) => handleInputChange('twelfthCollegeName', e.target.value)}
                    />
                  ) : (
                    previewData.twelfthCollegeName
                  )}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>12th Marks</td>
                <td style={{ padding: '10px' }}>
                  {editMode ? (
                    <input
                      type="text"
                      value={previewData.twelfthMarks}
                      onChange={(e) => handleInputChange('twelfthMarks', e.target.value)}
                    />
                  ) : (
                    previewData.twelfthMarks
                  )}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Graduation College Name</td>
                <td style={{ padding: '10px' }}>
                  {editMode ? (
                    <input
                      type="text"
                      value={previewData.graduationCollegeName}
                      onChange={(e) => handleInputChange('graduationCollegeName', e.target.value)}
                    />
                  ) : (
                    previewData.graduationCollegeName
                  )}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Graduation University Name</td>
                <td style={{ padding: '10px' }}>
                  {editMode ? (
                    <input
                      type="text"
                      value={previewData.graduationUniversityName}
                      onChange={(e) => handleInputChange('graduationUniversityName', e.target.value)}
                    />
                  ) : (
                    previewData.graduationUniversityName
                  )}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Graduation Year</td>
                <td style={{ padding: '10px' }}>
                  {editMode ? (
                    <input
                      type="text"
                      value={previewData.graduationYear}
                      onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                    />
                  ) : (
                    previewData.graduationYear
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              onClick={toggleEditMode}
              style={{
                padding: '10px 20px',
                backgroundColor: editMode ? '#dc3545' : '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              {editMode ? 'Cancel' : 'Edit'}
            </button>
            {editMode && (
              <button
                onClick={saveChanges}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Submission;
