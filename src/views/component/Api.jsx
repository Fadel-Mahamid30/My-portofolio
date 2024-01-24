import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("/data_content/data.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
};

export default fetchData;
