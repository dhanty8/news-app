import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import NewsCard from "@/components/news-card";
import { getNews } from "@/services/api";

const Home = () => {
  const [data, setData] = useState({
    articles: [],
    totalResults: 0,
  });

  const getData = async () => {
    try {
      const response = await getNews("tesla");
      setData(response);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-3">
        <Button
          variant="ghost"
          size={"sm"}
          className="border border-black hover:bg-transparent"
        >
          All
        </Button>
        <Button
          variant="ghost"
          size={"sm"}
          className="border border-black hover:bg-transparent"
        >
          Politics
        </Button>
        <Button
          variant="ghost"
          size={"sm"}
          className="border border-black hover:bg-transparent"
        >
          Bussines
        </Button>
      </div>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col w-1/4">
          {/* <NewsCard journalis={true} /> */}
        </div>
        <div className="flex flex-col flex-1 gap-16">
          {data.articles.map((item) => (
            <NewsCard data={item} />
          ))}
        </div>
        <div className="flex flex-col w-1/4">{/* <NewsCard /> */}</div>
      </div>
    </div>
  );
};

export default Home;
