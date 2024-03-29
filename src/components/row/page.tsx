"use client";

import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Thumbnail from "../thumbnail/thumbnail";
import { RowProps } from "./row.props";

const RowPage = ({ title, movies, isBig = false }: RowProps): JSX.Element => {
  const [moved, setMoved] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleCklick = (direction: "left" | "right") => {
    setMoved(true);

    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      carouselRef.current?.scrollTo({ left: scrollTo, behavior: "smooth" });
      if (direction == "left" && scrollTo == 0) {
        setMoved(false);
      }
      // if (direction == "right" && scrollLeft >= movies.results.length * 158) {
      //   setMovedRight(false);
      // }
    }
  };

  return (
    <div className=" space-y-1 md:space-y-2 ">
      <h2 className="w-56 cursor-pointer md:text-2xl font-semibold text-[#e5e5e5] hover:text-white transition duration-200 ">
        {title}
      </h2>
      {/* Carusel */}
      <div className="group relative md:ml-2">
        <FaChevronLeft
          onClick={() => handleCklick("left")}
          className={`${
            !moved && "hidden"
          } absolute top-0 bottom-0 left-2 z-40 m-auto h-5 w-5 cursor-pointer opacity-0 group-hover:opacity-100 transition hover:scale-125 duration-75 `}
        />

        <div
          ref={carouselRef}
          className={` ${
            !isBig && "space-x-2 md:space-x-4"
          } flex items-center  overflow-y-hidden  overflow-x-scroll  scrollbar-none  `}
        >
          {movies.results.map((movie) => {
            return <Thumbnail isBig={isBig} key={movie.id} movie={movie} />;
          })}
        </div>
        <FaChevronRight
          onClick={() => handleCklick("right")}
          className={` absolute top-0 bottom-0 right-2 z-40 m-auto h-5 w-5 cursor-pointer opacity-0 group-hover:opacity-100 transition hover:scale-125 duration-75 `}
        />
      </div>
    </div>
  );
};

export default RowPage;
