import React from "react";
import "./PostJob.css";

function PostJob(props) {
  const basicDetails = props.basicDetails;
  const targeting = props.targeting;
  function postSubmit() {
    console.log(basicDetails, targeting);
  }

  return (
    <div className="postJob">
      <button type="button" class="btn btn-success btn-lg" onClick={postSubmit} disabled={false}>
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
