import React from "react";
import { useState } from "react";
import "./Targeting.css";
import validator from "validator";

function Targeting() {
  const [targeting, setTargeting] = useState({
    category: "",
    fArea: "",
    minGradYr: "",
    maxGradYr: "",
    tags: "",
  });

  const [validation, setValidation] = useState({ category: true, fArea: true });
  const red = { backgroundColor: "red" };
  const white = { backgroundColor: "white" };

  return (
    <div className="targeting">
      <h1 className="targeting__h1">Targeting</h1>
      <form>
        <div className="targeting__form__div__one">
          <div>
            <label>Category*</label>
            
            <div>
              <select
                style={validation.category ? white : red}
                value={targeting.category}
                onChange={(e) => {
                  setValidation((pre) => {
                    if (e.target.value !== "Select") {
                      return { ...pre, category: true };
                    }

                    return { ...pre, category: false };
                  });

                  setTargeting((pre) => ({ ...pre, category: e.target.value }));
                }}
                required
              >
                <option name="">Select</option>
                <option name="1">Software Dev</option>
                <option name="2">Marketing</option>
                <option name="3">Administrator</option>
                <option name="4">Secretary</option>
                <option name="5">Receptionist</option>
                <option name="6">Web Editor</option>
                <option name="7">Game Designer</option>
                <option name="8">Network Manager</option>
                <option name="9">Ethical Hacker</option>
              </select>
            </div>
          </div>
          <div>
            <label>Functional Area*</label>
            
            <select
              value={targeting.fArea}
              style={validation.fArea ? white : red}
              onChange={(e) =>{
                setValidation((pre) => {
                  if (e.target.value !== "Select") {
                    return { ...pre, fArea: true };
                  }

                  return { ...pre, fArea: false };
                });


                setTargeting((pre) => ({ ...pre, fArea: e.target.value }))
              }
              }
              required
            >
              <option name="">Select</option>
                <option name="1">React JS</option>
                <option name="2">React Native</option>
                <option name="3">Flutter</option>
                <option name="4">MERN Stack</option>
                <option name="5">Blockchain</option>
                <option name="6">Video Editor</option>
                <option name="7">Unity</option>
                <option name="8">Adobe Photoshop</option>
                <option name="9">Kali Linux</option>
            </select>
          </div>
        </div>
        <div className="targeting__form__div__gradYear">
          <label>Graduating Year</label>
          <br />
          <div id="gradYear__div">
            <select
              value={targeting.minGradYr}
              onChange={(e) =>
                setTargeting((pre) => ({ ...pre, minGradYr: e.target.value }))
              }
              required
            >
              <option name="0">0</option>
              <option name="1">1</option>
            </select>
            <select
              value={targeting.maxGradYr}
              onChange={(e) =>
                setTargeting((pre) => ({ ...pre, maxGradYr: e.target.value }))
              }
              required
            >
              <option name="0">0</option>
              <option name="1">1</option>
            </select>
          </div>
        </div>
        <div className="targeting__form__div__tag">
          <label>Tags</label>
          <br />
          <input
            value={targeting.tags}
            onChange={(e) =>
              setTargeting((pre) => ({ ...pre, tags: e.target.value }))
            }
            placeholder="+ Add job tag"
            type="text"
            name="tags"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Targeting;
