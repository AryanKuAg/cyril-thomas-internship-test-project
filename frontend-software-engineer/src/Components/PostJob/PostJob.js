import React from "react";
import "./PostJob.css";
import axios from "../../axios.js"




function PostJob(props) {
  const basicDetails = props.basicDetails;
  const targeting = props.targeting;
  const finalData =  {
      Title: basicDetails.jobTitle,
      Locations: basicDetails.location.filter((e) => e.length > 1),
      MustHaveSkills: targeting.fArea,
      YearsOfExperience: null,
      Category: [targeting.category],
      EmploymentType: targeting.tags.filter((e) => {
        if (
          e === "Full Time" ||
          e === "Part Time" ||
          e === "Contract" ||
          e === "Internship" ||
          e === "Volunteer"
        ) {
          return true;
        }else {
          return false;
        }
      }),
    }
    
  async function postSubmit() {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     // mode: "cors",
  //     body: JSON.stringify({hi:'wakandak dakandskf'}),
  //   };
  //   // console.log(requestOptions);
  //   fetch("http://localhost:8001/v1jobs/job", requestOptions)
  //     .then((response) => JSON.parse(JSON.stringify(response)))
  //    .then((data) => console.log(data))
  //     .catch((err) => console.log(err));

      let result = await axios.post("/v1jobs/job", finalData);
    console.log("result", result);
  }

  let isCompulsoryFilled =
    basicDetails.jobTitle &&
    basicDetails.location &&
    basicDetails.minExp &&
    basicDetails.maxExp &&
    basicDetails.des &&
    targeting.category &&
    targeting.fArea;

  return (
    <div className="postJob">
      <button
        type="button"
        class="btn btn-success btn-lg"
        onClick={postSubmit}
        disabled={!isCompulsoryFilled}
      >
        Post Job
      </button>
      <button type="button" class="btn btn-outline-success btn-lg">
        Post Job and Add Another Job
      </button>
      <a href="#">cancel</a>
    </div>
  );
}

export default PostJob;
