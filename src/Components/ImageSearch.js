import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageSearch = ({ imageArr,setImageArr }) => {
  const [srchQuerry, setSrchQuerry] = useState("");
  const [page, setPage] = useState(1);
  //   const [imageArr, setImageArr] = useState([]);
  //   console.log(srchQuerry);

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(()=>{
    setPage(1)
  }, [srchQuerry])


  async function fetchImages(e, flag) {
    console.log(flag)
    if (e) {
      e.preventDefault();
      // console.log(e.target.search.value, srchQuerry);
    }
    // console.log("Search comencese");

    try {
      // to-do: removing Authorization access key and hiding it
      const response = await axios.get("https://api.unsplash.com/search/photos",
        {
          headers: {
            "Accept-Version": "v1",
            "Authorization": `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
          },
          params: {
            query: srchQuerry || "random",
            per_page: 5,
            page: page
          },
        }
      );
        // console.log(response.data.results);
      if (flag === "submit") {
        setImageArr([...response.data.results]);
        // setPage(1); // as it is async this doesnt work
        // setPage(page + 1);
        
      } else {
        setImageArr([...imageArr,...response.data.results]);
        // setPage(page + 1);
      }
      setPage(page + 1);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="images__search-section page-section">
      <h1>Searchbox goes here</h1>
      <form onSubmit={(e)=>fetchImages(e,"submit")}>
        <input
          type="text"
          id="search"
          name="search"
          onChange={(e) => setSrchQuerry(e.target.value)}
          value={srchQuerry}
          placeholder="Enter a keyword to search"
        />
        <button type="submit">Search</button>
      </form>
      <button onClick={()=>fetchImages()}>Next</button>
    </section>
  );
};

export default ImageSearch;
