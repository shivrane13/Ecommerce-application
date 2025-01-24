import axios from "axios";

export async function getAllProduct() {
  try {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products");
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductByCategory(id) {
  try {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllCategories() {
  try {
    const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
