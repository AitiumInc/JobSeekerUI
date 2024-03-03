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
  function JobSeekerProfile() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:8080/GetAllJobSeekers', options)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
  
    return (

     <div>

<section class="post-area section-gap">
				<div class="container">
					<div class="row justify-content-center d-flex">
                        <div class="col-lg-8 post-list">
                            <div class="single-post d-flex flex-row">
                                    <div class="thumb">
                                        <img src="img/post.png" alt=""></img>
                                        <ul class="tags">
                                            <li>
                                                <a href="#">Art</a>
                                            </li>
                                            <li>
                                                <a href="#">Media</a>
                                            </li>
                                            <li>
                                                <a href="#">Design</a>					
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="details">
                                        <div class="title d-flex flex-row justify-content-between">
                                            <div class="titles">
                                                <a href="#"><h4>{data[0].JobseekerFirstName}    {data[0].JobseekerLastName}
                                                </h4></a>
                                                <h6>Premium Labels Limited</h6>					
                                            </div>
                                            <ul class="btns">
                                                <li><a href="#"><span class="lnr lnr-heart"></span></a></li>
                                                <li><a href="#">Apply</a></li>
                                            </ul>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                                        </p>
                                        <h5>Job Nature: Full time</h5>
                                        <p class="address"><span class="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                                        <p class="address"><span class="lnr lnr-database"></span> 15k - 25k</p>
                                    </div>
                            </div>	

                           
                        </div>
                        <div class="col-lg-4 sidebar">
                            <div class="single-slidebar">
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>


     </div>

    );
  }

  export default JobSeekerProfile;