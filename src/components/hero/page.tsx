"use client";

import React, { useEffect, useState } from "react";
import { HeroProps } from "./hero.props";
import { IMovie, IResult } from "@/interfaces/app.interface";
import Image from "next/image";
import { image_base } from "@/helpers/constants";

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
    <div className="flex flex-col space-y-2  py-16 md:space-y-4 lg:h-[64vh] lg:pb-12 lg:justify-end">
      <div className="absolute top-0 -z-10 left-0 h-[95vh] w-full">
        <Image
          src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title}
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl  lg:text-7xl ">
        {movie?.title || movie.original_title}
      </h1>
      <p className="max-w-sm md:max-w-lg  lg:max-w-2xl text-sm md:text-lg lg:text-2xl">
        {movie.overview}
      </p>
    </div>
  );
};

export default HeroPage;
