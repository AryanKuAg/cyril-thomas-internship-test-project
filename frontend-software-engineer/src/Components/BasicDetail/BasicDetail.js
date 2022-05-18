import { useState } from "react";
import "./BasicDetail.css";
import validator from "validator";

function BasicDetail(props) {
  const [basicDetail, setBasicDetail] = useState({
    jobTitle: "",
    location: "",
    minExp: "",
    maxExp: "",
    des: "",
  });

  const red = { backgroundColor: "red" };
  const white = { backgroundColor: "white" };

  const [validation, setValidation] = useState({
    jobTitle: true,
    location: true,
    minExp: true,
    maxExp: true,
    des: true,
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
            onChange={(e) => {
              setValidation((pre) => {
                if (validator.isAscii(e.target.value.trim())) {
                  return { ...pre, jobTitle: true };
                }
                return { ...pre, jobTitle: false };
              });

              // console.log('jobtitle', e.target.value.trim());
              setBasicDetail((pre) => ({ ...pre, jobTitle: e.target.value }));
            }}
            style={validation.jobTitle ? white : red}
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
            onChange={(e) => {
              setValidation((pre) => {
                if (
                  validator.isAscii(e.target.value.trim()) &&
                  e.target.value.trim().length > 2
                ) {
                  return { ...pre, location: true };
                }
                return { ...pre, location: false };
              });

              setBasicDetail((pre) => ({ ...pre, location: e.target.value }));
            }}
            placeholder="+ Add location (seperate with comma)"
            type="text"
            style={validation.location ? white : red}
            name="location"
            required
          />
        </div>
        <div className="basicDetail__form__div">
          <label>Years of experience*</label>
          <br />
          <div id="experience__div">
            <select
             style={validation.minExp ? white : red}
              value={basicDetail.minExp}
              onChange={(e) =>{
                setValidation((pre) => {
                  if (
                    e.target.value !== "Select Min"
                  ) {
                    
                    return { ...pre, minExp: true };
                  }
               
                  return { ...pre, minExp: false };
                });

                setBasicDetail((pre) => ({ ...pre, minExp: e.target.value }))
              }
              }
              required
            >
              <option name="">Select Min</option>
              <option name="1">1</option>
              <option name="2">2</option>

              <option name="3">3</option>

              <option name="4">4</option>

              <option name="5">5</option>

              <option name="6">6</option>

              <option name="7">7</option>

              <option name="8">8</option>

              <option name="9">9</option>
              <option name="10">10</option>
            </select>
            <select
            style={validation.maxExp ? white : red}
              value={basicDetail.maxExp}
              onChange={(e) =>{

                setValidation((pre) => {
                  if (
                    e.target.value !== "Select Max"
                  ) {
                    
                    return { ...pre, maxExp: true };
                  }
               
                  return { ...pre, maxExp: false };
                });

                setBasicDetail((pre) => ({ ...pre, maxExp: e.target.value }))
              }
              }
              required
            >
              <option name="">Select Max</option>
              <option name="1">1</option>
              <option name="2">2</option>

              <option name="3">3</option>

              <option name="4">4</option>

              <option name="5">5</option>

              <option name="6">6</option>

              <option name="7">7</option>

              <option name="8">8</option>

              <option name="9">9</option>
              <option name="10">10</option>
            </select>
          </div>
        </div>
        <div className="basicDetail__form__div">
          <label>Job Description*</label>
          <br />
          <textarea
            value={basicDetail.des}
            onChange={(e) =>{
              setValidation((pre) => {
                if (
                  validator.isAscii(e.target.value.trim()) &&
                  e.target.value.trim().length > 0
                ) {
                  return { ...pre, des: true };
                }
                return { ...pre, des: false };
              });

              setBasicDetail((pre) => ({ ...pre, des: e.target.value }))
            }
            }
            placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"
            type="text"
            name="des"
            style={validation.des ? white : red}

            required
          />
        </div>
      </form>
    </div>
  );
}

export default BasicDetail;
