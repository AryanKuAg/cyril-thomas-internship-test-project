import React from "react";
import { useState } from "react";
import "./PostJob.css";

function PostJob() {
  const [targeting, setTargeting] = useState({
    category: "",
    fArea: "",
    minGradYr: "",
    maxGradYr: "",
    tags: "",
  });

  return (
    <div className="postJob">
      <h1 className="postJob__h1">Targeting</h1>
      <form>
        <div className="postJob__form__div__one">
          <label>Category*</label>
          <br />
          <div>
              <select
            value={targeting.category}
            onChange={(e) =>
              setTargeting((pre) => ({ ...pre, category: e.target.value }))
            }
            required
          >
            <option name="0">0</option>
            <option name="1">1</option>
          </select>

          <select
            value={targeting.fArea}
            onChange={(e) =>
              setTargeting((pre) => ({ ...pre, fArea: e.target.value }))
            }
            required
          >
            <option name="0">0</option>
            <option name="1">1</option>
          </select>
          </div>
          
        </div>
        <div className="postJob__form__div__gradYear">
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
        <div className="postJob__form__div__tag">
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

export default PostJob;
