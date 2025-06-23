import React from "react";
import Image from "next/image";
import { cn } from "../../lib/utils";
import HeadingPara from "./heading";

const ImageWithText = ({
  title,
  para,
  image,
  video,
  imageAlt = "illustration",
  reverse = false,
  containerClassName,
  contentClassName,
  mediaClassName,
  sameWidth = false,
  highlightText = "",
  highlightTextStyle = "",
  classNameHeading = "",
  sectionHeading = false,
  classNamePara = "text-sm sm:text-base",
  paraHighlightText = "",
  paraHighlightTextStyle = "",
  lineByLine = [],
}) => {
  const showImage = !!image && !video;
  const showVideo = !!video && !image;

  const gridCols = showImage
    ? reverse
      ? "lg:grid-cols-2 xl:grid-cols-[55%_45%]"
      : "lg:grid-cols-2 xl:grid-cols-[45%_55%]"
    : "lg:grid-cols-2";

  const finalGridClass = sameWidth
    ? `${gridCols} grid-cols-1 lg:!grid-cols-2`
    : gridCols;

  const mediaAlignment = reverse ? "justify-end" : "justify-start";

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:gap-8 items-center",
        finalGridClass,
        containerClassName
      )}
    >
      {/* MEDIA (Image or Video) */}
      <div
        className={cn(
          "relative flex items-center w-full h-full rounded-3xl",
          mediaAlignment,
          reverse ? "md:order-last" : "md:order-first",
          mediaClassName
        )}
      >
        {showImage && (
          <Image
            src={image}
            alt={imageAlt}
            width={500}
            height={500}
            className="object-cover w-full xl:w-[95%] h-full rounded-3xl"
          />
        )}

        {showVideo && (
          <video
            src={video}
            className="w-full h-full object-cover rounded-3xl"
            playsInline
            muted
            autoPlay
            loop
          />
        )}
      </div>

      {/* TEXT CONTENT */}
      <div
        className={cn(
          "flex flex-col justify-center h-full",
          reverse ? "items-start" : "items-end",
          contentClassName
        )}
      >
        <HeadingPara
          title={title}
          para={para}
          className="gap-4"
          classNameHeading={classNameHeading}
          classNamePara={classNamePara}
          highlightText={highlightText}
          highlightTextStyle={highlightTextStyle}
          sectionHeading={sectionHeading}
          paraHighlightText={paraHighlightText}
          paraHighlightTextStyle={paraHighlightTextStyle}
          lineByLine={lineByLine}
        />
      </div>
    </div>
  );
};

export default ImageWithText;
