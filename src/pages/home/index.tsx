import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { CustomPagination } from "@/components/custom-pagination";
import { FILTER } from "@/constants";
import Loading from "@/components/loading";
import NewsCard from "@/components/news-card";
import { getNews } from "@/services/api";
import { useQuery } from "@/lib/useQuery";

const Home = () => {
  const query = useQuery();
  const page =
    query.get("page") === null ? 1 : parseInt(query.get("page") as string);
  const [filter, setFilter] = useState<string>("Technologies");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState({
    articles: [],
    totalResults: 0,
  });
  const [dataPopular, setDataPopular] = useState({
    articles: [],
    totalResults: 0,
  });

  const getData = async (params: string) => {
    try {
      setLoading(true);
      const response = await getNews(params, "", page, 10);
      setData(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getDataPopular = async (params: string) => {
    try {
      setLoading(true);
      const response = await getNews(params, "popularity", 1, 4);
      setDataPopular(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(filter);
  }, [filter, page]);

  useEffect(() => {
    getDataPopular(filter);
  }, [filter]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-3">
        {FILTER.map((item) => (
          <Button
            key={item}
            variant="ghost"
            size={"sm"}
            className={`border ${
              item === filter ? "border-matrix text-matrix" : "border-black"
            }  hover:bg-transparent `}
            onClick={() => setFilter(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-row gap-10">
          <div className="flex flex-col w-1/4 gap-16">
            {dataPopular.articles.map((item) => (
              <NewsCard key={item} data={item} journalis={true} />
            ))}
          </div>
          <div className="flex flex-col flex-1 gap-16 items-center">
            {data.articles.map((item) => (
              <NewsCard key={item} data={item} />
            ))}
            <CustomPagination totalPage={10} />
          </div>
          <div className="flex flex-col w-1/4">
            <div className="flex flex-col bg-matrix rounded-sm p-5 gap-1">
              <label className="text-white">Total {filter} News</label>
              <div className="text-white text-3xl">{data.totalResults}</div>
              <label className="text-white text-sm">
                Experience the Epic Compilation of Riveting News Stories: Your
                Gateway to an Unforgettable Journey of Excitement!
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
