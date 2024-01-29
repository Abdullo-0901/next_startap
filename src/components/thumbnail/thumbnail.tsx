import React from "react";
import { ThumbnailProps } from "./thumbnail.props";
import Image from "next/image";
import { image_base } from "@/helpers/constants";

const Thumbnail = ({ movie }: ThumbnailProps): JSX.Element => {
  return (
    <div className="relative md:h-[440px] h-[330px] md:min-w-[292px] transition duration-200 cursor-pointer ease-out  min-w-[292px] md:hover:scale-110">
      <Image
        src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie?.title}
        fill
        className="object-cover md:rounded rounded-sm "
      />
    </div>
  );
};

export default Thumbnail;
