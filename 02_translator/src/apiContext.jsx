import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/aiproducts/translathor/translate/project_name",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGY2ZjExZjgtOTQ3NC00MGRmLWJkZTUtZjUwYzc4NzZlNmQ0IiwidHlwZSI6ImFwaV90b2tlbiJ9.UOZXIuj_GCiLoJdLJwkQGJMO5VWMWdQrDMquZpinl28",
        },
        data: {
          text: "string",
          source_language: "string",
          target_language: "string",
        },
      };

      const { data } = axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });

      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);
  return <APIContext.Provider value={{ data }}>{children}</APIContext.Provider>;
};

export const useAPI = () => {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("useAPI must be used within APIContextProvider");
  }
  return context;
};
