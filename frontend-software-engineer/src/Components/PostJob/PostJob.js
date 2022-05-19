import React from "react";
import "./PostJob.css";

function PostJob(props) {
  const basicDetails = props.basicDetails;
  const targeting = props.targeting;
  function postSubmit() {
    console.log(basicDetails, targeting);
  }

  let isCompulsoryFilled = (basicDetails.jobTitle && basicDetails.location && basicDetails.minExp && basicDetails.maxExp && basicDetails.des && targeting.category && targeting.fArea) 

  
  return (
    <div className="postJob">
      <button type="button" class="btn btn-success btn-lg" onClick={postSubmit} disabled={!isCompulsoryFilled}>
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
