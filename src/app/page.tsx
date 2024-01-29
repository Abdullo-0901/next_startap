import { HeaderPage, HeroPage, RowPage } from "@/components";
import { IMovie } from "@/interfaces/app.interface";
import { API_REQUEST } from "@/services/api.services";

const HomePage = async (props: any) => {
  const response = await fetch(API_REQUEST.trending, {
    cache: "no-cache",
  });
  const data: IMovie = await response.json();

  const movies = await fetch(API_REQUEST.top_rated, {
    cache: "no-cache",
  });
  const moviesResult: IMovie = await movies.json();

  return (
    <div className="h-[200vh] relative">
      <HeaderPage />
      <main className="relative p-[70px] pl-4 lg:space-y-24 lg:pl-16 ">
        <HeroPage trending={data} />
        <RowPage movies={moviesResult} title="Top Rated" />
      </main>
    </div>
  );
};
export default HomePage;
