import customAxios from "../util/http";
/**
 * Get Student Data
 * @returns 
 */
export const getData = () => {
  return customAxios.get("/api/products");
};

/**
 * Post Student Data
 * @param {Object} body 
 * @returns 
 */
export const postData = (body) => {
  return customAxios.post("/postData",body);
};


