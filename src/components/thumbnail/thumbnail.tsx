import React from "react";
import { ThumbnailProps } from "./thumbnail.props";
import Image from "next/image";
import { image_base } from "@/helpers/constants";
import ReactStars from "react-stars";

const Thumbnail = ({ movie, isBig = false }: ThumbnailProps): JSX.Element => {
  return (
    <div
      className={`${
        !isBig
          ? "md:h-[440px] h-[330px] md:min-w-[292px]"
          : "md:h-[420px] h-[330px] md:min-w-[462px]"
      } relative  transition duration-200 cursor-pointer ease-out  min-w-[292px] md:hover:scale-110`}
    >
      <Image
        src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie?.title}
        fill
        className="object-cover md:rounded rounded-sm "
      />
      <div className="absolute left-0 right-0 bottom-0 top-0 w-full h-full bg-black/40" />
      <div className="absolute bottom-6   left-4 right-2">
        <div className="flex items-center space-x-2">
          <ReactStars
            edit={false}
            count={10}
            value={movie.vote_average}
            color2={"#fffff"}
          />
          <p>({movie.vote_count})</p>
        </div>
        <h1 className="text-xl font-bold  md:text-2xl   ">
          {movie?.title || movie.original_title}
        </h1>
      </div>
    </div>
  );
};

export default Thumbnail;
