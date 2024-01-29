import { HeaderPage, HeroPage, RowPage } from "@/components";

import { IMovie } from "@/interfaces/app.interface";
import { API_REQUEST } from "@/services/api.services";

const HomePage = async (props: any) => {
  // const response = await fetch(API_REQUEST.trending, {
  //   cache: "no-cache",
  // });
  // const data: IMovie = await response.json();

  // const movies = await fetch(API_REQUEST.top_rated, {
  //   cache: "no-cache",
  // });
  // const moviesResult: IMovie = await movies.json();

  // const tvShows = await fetch(API_REQUEST.tv_top_rated, {
  //   cache: "no-cache",
  // });
  // const tvShowsResult: IMovie = await tvShows.json();

  const fetchData = async (url: string): Promise<IMovie> => {
    const response = await fetch(url, {
      cache: "no-cache",
    });
    return response.json();
  };

  const [
    trendingData,
    documentary,
    comedy,
    family,
    fantasty,
    popular,
    topRatedData,
    tvTopRatedData,
  ] = await Promise.all([
    fetchData(API_REQUEST.trending),
    fetchData(API_REQUEST.top_rated),
    fetchData(API_REQUEST.tv_top_rated),
    fetchData(API_REQUEST.popular_movie),
    fetchData(API_REQUEST.documentary),
    fetchData(API_REQUEST.comedy),
    fetchData(API_REQUEST.family),
    fetchData(API_REQUEST.fantasty),
  ]);

  return (
    <div className=" relative">
      <HeaderPage />
      <main className="relative p-[70px] h-screen pl-4 lg:space-y-24 lg:pl-16 ">
        <HeroPage trending={trendingData} />
        <RowPage movies={topRatedData} title="Top Rated" />
        <RowPage movies={tvTopRatedData} isBig={true} title="Tv shows" />
        <RowPage movies={popular} title="Popular" />
        <RowPage movies={documentary} isBig={true} title="Documentary" />
        <RowPage movies={comedy} title="Comedy" />
        <RowPage movies={family} isBig={true} title="Family" />
        <RowPage movies={fantasty} title="Fantasty" />
      </main>
    </div>
  );
};
export default HomePage;
