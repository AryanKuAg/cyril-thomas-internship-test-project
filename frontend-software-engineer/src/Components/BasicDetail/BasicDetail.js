import { useState } from "react";
import "./BasicDetail.css";

function BasicDetail(props) {
  const [basicDetail, setBasicDetail] = useState({
    jobTitle: "",
    location: "",
    minExp: "",
    maxExp: "",
    des: "",
  });

  return (
    <div className="basicDetail">
      <h3>Post Job</h3>
      <h1 className="basicDetail__h1">Basic Details</h1>
      <form>
        <div className="basicDetail__form__div">
          <label>Job Title*</label>
          <br />
          <input
            value={basicDetail.jobTitle}
            onChange={(e) =>
              setBasicDetail((pre) => ({ ...pre, jobTitle: e.target.value }))
            }
            placeholder="Write a title that appropriately describes this job"
            type="text"
            name="jobTitle"
            required
          />
        </div>
        <div className="basicDetail__form__div">
          <label>Location*</label>
          <br />
          <input
            value={basicDetail.location}
            onChange={(e) =>
              setBasicDetail((pre) => ({ ...pre, location: e.target.value }))
            }
            placeholder="+ Add location"
            type="text"
            name="location"
            required
          />
        </div>
        <div className="basicDetail__form__div">
          <label>Years of experience*</label>
          <br />
          <div id="experience__div">
            <select
              value={basicDetail.minExp}
              onChange={(e) =>
                setBasicDetail((pre) => ({ ...pre, minExp: e.target.value }))
              }
              required
            >
              <option name="0">0</option>
              <option name="1">1</option>
            </select>
            <select
              value={basicDetail.maxExp}
              onChange={(e) =>
                setBasicDetail((pre) => ({ ...pre, maxExp: e.target.value }))
              }
              required
            >
              <option name="0">0</option>
              <option name="1">1</option>
            </select>
          </div>
        </div>
        <div className="basicDetail__form__div">
          <label>Job Description*</label>
          <br />
          <textarea
            value={basicDetail.des}
            onChange={(e) =>
              setBasicDetail((pre) => ({ ...pre, des: e.target.value }))
            }
            placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"
            type="text"
            name="des"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default BasicDetail;
