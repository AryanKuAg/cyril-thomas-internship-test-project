import { useState } from "react";
import "./App.css";
import BasicDetail from "./Components/BasicDetail/BasicDetail";
import Targeting from "./Components/Targeting/Targeting.js";
import PostJob from "./Components/PostJob/PostJob";

function App() {
  const [basicDetails, setBasicDetails] = useState({
    jobTitle: "",
    location: "",
    minExp: "",
    maxExp: "",
    des: "",
  });
  const [targeting, setTargeting] = useState({
    category: "",
    fArea: "",
    minGradYr: "",
    maxGradYr: "",
    tags: "",
  });


  function addBasicDetails(title, location, min, max, des) {
    let tempLocation = location.split(",");

    setBasicDetails({
      jobTitle: title,
      location: tempLocation,
      minExp: min,
      maxExp: max,
      des: des,
    });
  }

  function addTargeting(category, fArea, min, max, tags) {
    let tempTags = tags.split(",");

    setTargeting({
      category: category,
      fArea: fArea,
      minGradYr: min,
      maxGradYr: max,
      tags: tempTags,
    });
  }

  return (
    <div className="App">
      {/* Basic Details */}
      <BasicDetail addBasicDetails={addBasicDetails} />
      {/* Targeting */}
      <Targeting addTargeting={addTargeting} />
      {/* post Job */}
      <PostJob basicDetails={basicDetails} targeting={targeting} />
    </div>
  );
}

export default App;
