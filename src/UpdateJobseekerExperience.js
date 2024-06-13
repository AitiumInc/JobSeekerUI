import React, { useState, useEffect } from 'react';

var options = {  
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Headers': "*"
    },
    mode: 'cors',
    crossorigin: true
  }

  

  function UpdateJobseekerExperiences(newData) {
    const data = newData.newData;
    const [isLoading, setIsLoading] = useState(false);
    const [editedData, setEditedData] = useState(data);
    useEffect(() => {
      setEditedData(data);
    }, [data]);
  
    const handleChange = (key, value) => {
      setEditedData(prevData => ({
        ...prevData,
        [key]: value
      }));
    };
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:8080/UpdateJobseekerExperiences', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedData),
        });
        if (response.ok) {
          console.log('Data successfully submitted');
        } else {
          throw new Error('Failed to submit data');
        }
      } catch (error) {
        console.error('Error submitting data:', error);
      }
      setIsLoading(false);
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4>Edit Experience</h4>
              <div className="row">
                <form onSubmit={onSubmit}>
                  <div className="col-md-12">
                      <div className="input_field">
                        <label>Experience: </label>
                        <input type="text" placeholder="Experience"
                          onfocus="this.placeholder = ''" required
                          value={editedData.ExperiencesRoleName || ''}
                          onChange={(e) => handleChange("ExperiencesRoleName", e.target.value)}
                          class="single-input"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input_field">
                        <label>Role Description: </label>
                        <input type="text" placeholder="Description"
                          onfocus="this.placeholder = ''" required
                          value={editedData.ExperiencesRoleDescription || ''}
                          onChange={(e) => handleChange("ExperiencesRoleDescription", e.target.value)}
                          class="single-input"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input_field">
                        <label>Starting Date: </label>
                        <input type="text" placeholder="2000"
                          onfocus="this.placeholder = ''" required
                          value={editedData.ExperiencesStartDate.substring(0,10) || ''}
                          onChange={(e) => handleChange("ExperiencesStartDate", e.target.value)}
                          class="single-input"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input_field">
                        <label>End Date: </label>
                        <input type="text" placeholder="2000"
                          onfocus="this.placeholder = ''" required
                          value={editedData.ExperiencesEndDate.substring(0,10) || ''}
                          onChange={(e) => handleChange("ExperiencesEndDate", e.target.value)}
                          class="single-input"
                        />
                      </div>
                    </div>
                    <div className="submit_btn">
                      <button className="boxed-btn3 w-100" type="submit">
                        Save
                      </button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
  );
}
  
  
  export default UpdateJobseekerExperiences;