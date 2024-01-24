import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("something went wrong");
    }
  };

  //searchAPI('pasta') // bad usecase // runs continuously
  useEffect(() => {
    searchAPI("pasta");
  }, []);
  return {searchAPI, results, errorMessage};
};
