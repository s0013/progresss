import React, { useState } from 'react';
import './Submission.css'; // Importing the CSS file for styling
import { jsPDF } from 'jspdf';

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
  const downloadPDF = () => {
    if (!previewData) {
      alert('No data to download');
      return;
    }
  
    const doc = new jsPDF();
    let y = 10;
    const pageWidth = doc.internal.pageSize.width;
  
    // Add passport photo to the right side of the page
    if (previewData.passportPhoto) {
      const imgData = previewData.passportPhoto;
      const imgWidth = 50; // Assuming passport photo width is 50
      const imgHeight = 50; // Assuming passport photo height is 50
      const imgX = pageWidth - imgWidth - 10; // Align to the right with a 10px margin
      doc.addImage(imgData, 'JPEG', imgX, y, imgWidth, imgHeight);
      y += 60;
    }
  
    // Add personal data
    doc.text('Data:', 10, y);
    y += 10;
  
    // Create table headers
    doc.setFont('helvetica', 'bold');
    y += 10;
  
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Set text color to black
  
    const tableWidth = 120; // Increase the table width
    const valueX = 80 + tableWidth / 2; // Center the value column within the increased width
  
    // Loop through previewData and add rows to the table
    Object.entries(previewData).forEach(([key, value]) => {
      if (key !== 'passportPhoto') {
        doc.text(key, 10, y);
        doc.text(value, valueX, y);
        y += 10;
      }
    });
  
    // Save the PDF
    doc.save('submission.pdf');
  };
  
  return (
    <div>
      <h2 className="submission-heading">Submission</h2>
      <button className="preview-button" onClick={fetchStoredData}>Preview</button>
      {previewData && (
        <div>
          <h3 className="preview-heading">Preview Data</h3>
          <table className="preview-table">
            <tbody>
              {/* Display passport photo */}
              <tr>
                <td className="preview-label">Passport Photo</td>
                <td className="preview-data">
                  {previewData.passportPhoto && (
                    <img src={previewData.passportPhoto} alt="passport" className="passport-image" />
                  )}
                </td>
              </tr>
              {/* Display personal data */}
              {Object.entries(previewData).map(([key, value]) => (
                // Exclude keys related to address data
                !['passportPhoto', 'city', 'state', 'country'].includes(key) && (
                  <tr key={key}>
                    <td className="preview-label">{key}</td>
                    <td className="preview-data">
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
              <tr>
                <td className="preview-label">City</td>
                <td className="preview-data">
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
                <td className="preview-label">State</td>
                <td className="preview-data">
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
                <td className="preview-label">Country</td>
                <td className="preview-data">
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
                <td className="preview-label">Permanent Address</td>
                <td className="preview-data">
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
                <td className="preview-label">Correspondence Address</td>
                <td className="preview-data">
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
              {/* More address fields... */}
              {/* Display academic data */}
              {/* More academic fields... */}
            </tbody>
          </table>
          <div className="buttons-container">
            <button className="edit-button" onClick={toggleEditMode}>
              {editMode ? 'Cancel' : 'Edit'}
            </button>
            {editMode && (
              <button className="save-button" onClick={saveChanges}>
                Save Changes
              </button>
            )}
            <button className="download-button" onClick={downloadPDF}>
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Submission;
