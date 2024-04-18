import React, { useState } from 'react';

const Submission = () => {
  const [previewData, setPreviewData] = useState(null); // State to store the data for preview

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
  key !== 'passportPhoto' && key !== 'tenthSchoolName' && key !== 'tenthMarks' &&
  key !== 'twelfthCollegeName' && key !== 'twelfthMarks' && key !== 'graduationCollegeName' &&
  key !== 'graduationUniversityName' && key !== 'graduationYear' &&
  // Exclude keys related to address data
  key !== 'city' && key !== 'state' && key !== 'country' &&
  key !== 'permanentAddress' && key !== 'correspondenceAddress' && (
    <tr key={key}>
      <td style={{ padding: '10px' }}>{key}</td>
      <td style={{ padding: '10px' }}>{value}</td>
    </tr>
  )
))}


              {/* Display address data */}
              <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Address Details</label>
              <tr>
                <td style={{ padding: '10px' }}>City</td>
                <td style={{ padding: '10px' }}>{previewData.city}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>State</td>
                <td style={{ padding: '10px' }}>{previewData.state}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Country</td>
                <td style={{ padding: '10px' }}>{previewData.country}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Permanent Address</td>
                <td style={{ padding: '10px' }}>{previewData.permanentAddress}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Correspondence Address</td>
                <td style={{ padding: '10px' }}>{previewData.correspondenceAddress}</td>
              </tr>
              
              {/* Display academic data */}
              <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Academic Details</label>
              <tr>
                <td style={{ padding: '10px' }}>10th School Name</td>
                <td style={{ padding: '10px' }}>{previewData.tenthSchoolName}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>10th Marks</td>
                <td style={{ padding: '10px' }}>{previewData.tenthMarks}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>12th College Name</td>
                <td style={{ padding: '10px' }}>{previewData.twelfthCollegeName}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>12th Marks</td>
                <td style={{ padding: '10px' }}>{previewData.twelfthMarks}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Graduation College Name</td>
                <td style={{ padding: '10px' }}>{previewData.graduationCollegeName}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Graduation University Name</td>
                <td style={{ padding: '10px' }}>{previewData.graduationUniversityName}</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Graduation Year</td>
                <td style={{ padding: '10px' }}>{previewData.graduationYear}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Submission;
