import customAxios from "../util/http";

export const getData = () => {
  return customAxios.get("https://jsonplaceholder.typicode.com/posts");
};

export const postData = () => {
  return customAxios.post("/postData", {
    name: "Sample",
    contact: "0123456789",
  });
};


