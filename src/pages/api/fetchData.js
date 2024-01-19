const fetchData = async (content) => {
  try {
    const response = await fetch(
      `/api/contentful-fetch?content_type=${content}`
    );
    const data = await response.json();
    setData(data);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default fetchData;
