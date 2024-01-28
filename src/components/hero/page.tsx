"use client";

import React, { useEffect, useState } from "react";
import { HeroProps } from "./hero.props";
import { IMovie, IResult } from "@/interfaces/app.interface";
import Image from "next/image";
import { image_base } from "@/helpers/constants";
import { TbPlayerPlay } from "react-icons/tb";
import ReactStars from "react-stars";

const HeroPage = ({ trending }: HeroProps): JSX.Element => {
  const [movie, setMovie] = useState<IResult>({} as IResult);
  console.log(trending.results);

  useEffect(() => {
    const rundomMovie =
      trending.results[Math.floor(Math.random() * trending.results.length)];

    setMovie(rundomMovie);
  }, [trending]);
  console.log(movie);

  return (
    <div className="flex flex-col space-y-2   py-20  md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-center">
      <div className="absolute top-0 -z-10 left-0 h-[95vh] w-full">
        <Image
          src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title}
          fill
          className="object-cover "
        />
      </div>
      <div>
        <div className="py-4 px-8 text-center rounded-[0px_15px] w-[150px]  bg-[#1d1d1d]/50 inline-block">
          {movie.media_type}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <ReactStars
          edit={false}
          count={10}
          value={movie.vote_average}
          color2={"#fffff"}
        />
        <p>({movie.vote_count})</p>
      </div>
      <h1 className="text-2xl font-bold mt-40 md:text-4xl  lg:text-7xl ">
        {movie?.title || movie.original_title}
      </h1>
      <p className="max-w-sm md:max-w-lg text-shadow  lg:max-w-2xl text-sm md:text-lg lg:text-2xl">
        {movie.overview?.slice(0, 150)}...
      </p>
      <div>
        <button className="bg-white/40 flex justify-center items-center gap-3 text-black font-bold  border-solid border-2 py-4 px-8 rounded-full w-[200px] h-[56px] ">
          <TbPlayerPlay className="h-5 w-5 md:h-8 md:w-8" /> Watch now
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
