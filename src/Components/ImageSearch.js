import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageSearch = ({ setImageArr }) => {
  const [srchQuerry, setSrchQuerry] = useState("");
  //   const [imageArr, setImageArr] = useState([]);
  //   console.log(srchQuerry);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages(e) {
    if (e) {
      e.preventDefault();
      console.log(e.target.search.value, srchQuerry);
    }
    // console.log("Search comencese");

    try {
      // to-do: removing Authorization access key and hiding it
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          headers: {
            "Accept-Version": "v1",
            "Authorization":
              "Client-ID 4Mz7H4fulolWJbGTkcjg4hUWxqq2yhVs6Jy4QnAC5io",
          },
          params: {
            query: srchQuerry || "random",
          },
        }
      );
      //   console.log(response.data.results);
      setImageArr(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="images__search-section page-section">
      <h1>Searchbox goes here</h1>
      <form onSubmit={fetchImages}>
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
    </section>
  );
};

export default ImageSearch;
