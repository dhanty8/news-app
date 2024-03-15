import axios from "axios";

export const getNews = async (
  query: string,
  sortBy?: string,
  page?: number,
  pageSize?: number
) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=${
        sortBy ?? ""
      }&page=${page}&pageSize=${pageSize}&apiKey=39281497d9854594a9f05ba623dd36ab`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
