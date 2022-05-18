import React from 'react'
import "./PostJob.css"

function PostJob() {
  return (
    <div className='postJob'><button type="button" class="btn btn-success btn-lg">Post Job</button><button type="button" class="btn btn-outline-success btn-lg">Post Job and Add Another Job</button><a href="#">cancel</a></div>
  )
}

export default PostJob