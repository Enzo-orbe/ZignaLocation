import axios from "axios";

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

const accessToken =
  "pk.eyJ1IjoiZ2Vibzk2IiwiYSI6ImNsMWY0NzczZzByZnQzcXFpanBpczBjcXQifQ.0w75NzO1o2vxGyuauC-vRA";

export const getDataMap = async (searchText) => {
  return axios
    .get(`${url}${searchText}.json?access_token=${accessToken}`)
    .then((response) => response?.data)
    .catch((error) => {
      throw new Error("Error retrieving the countries information", error);
    });
};
