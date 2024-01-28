import { HeaderPage, HeroPage } from "@/components";
import { IMovie } from "@/interfaces/app.interface";
import { API_REQUEST } from "@/services/api.services";

const HomePage = async (props: any) => {
  const response = await fetch(API_REQUEST.trending, {
    cache: "no-cache",
  });
  const data: IMovie = await response.json();

  return (
    <div className="h-[200vh] relative">
      <HeaderPage />
      <main className="relative pl-4 lg:space-y-24 lg:pl-16 ">
        <HeroPage trending={data} />
      </main>
    </div>
  );
};
export default HomePage;
