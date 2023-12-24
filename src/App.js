import React, {useState} from "react";
import ImageListDisplay from "./Components/ImageListDisplay";
import ImageSearch from "./Components/ImageSearch";

const App = ()=>{
  const [imageArr, setImageArr] = useState([]);

  return (
    <div>
      < ImageSearch imageArr={imageArr} setImageArr={setImageArr}/>
      < ImageListDisplay imageArr={imageArr}/>
    </div>
  );
}

export default App;
