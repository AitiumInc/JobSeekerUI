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

  

  function UpdateJobseekerSkills(newData) {
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
        const response = await fetch('http://localhost:8080/UpdateJobseekerSkills', {
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
                <h4>Edit Skill</h4>
                <div className="row">
                  <form onSubmit={onSubmit}>
                  <div className="col-md-12">
                      <div className="input_field">
                        <label>Skill Name: </label>
                        <input type="text" placeholder="Skill"
                          onfocus="this.placeholder = ''" required
                          value={editedData.SkillsName || ''}
                          onChange={(e) => handleChange("SkillsName", e.target.value)}
                          class="single-input"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input_field">
                        <label>Years of Experience: </label>
                        <input type="number" placeholder="Years"
                          onfocus="this.placeholder = ''" required
                          value={editedData.SkillsNumYearsExperience || ''}
                          onChange={(e) => handleChange("SkillsNumYearsExperience", e.target.value)}
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
  
  export default UpdateJobseekerSkills;