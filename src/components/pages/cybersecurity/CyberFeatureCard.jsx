import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CyberFeatureCard({
  title,
  reverse = false,
  description,
  image,
  video,
  textContainer,
  lineByLine = [],
  alt = "Cyber Security GRC Solutions",
}) {
  const showImage = !!image && !video;
  const showVideo = !!video && !image;
  return (
    <div
      className={`
    flex items-center lg:items-start justify-between bg-white 
    py-4 lg:px-12 md:px-6 px-4 mx-4 
    flex-col lg:flex-nowrap w-full gap-4 lg:gap-[124px] max-w-6xl rounded-[32px]
    ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
  `}
    >
      <div
        className={cn(
          "text-black lg:text-left text-center max-w-xl md:m-auto",
          textContainer
        )}
      >
        <h1 className="text-[27px] font-jost font-semibold mb-2">{title}</h1>
        {lineByLine.length > 0 ? (
          <ul className="text-black text-[21px] font-jost list-none leading-tight">
            {lineByLine.map((item, index) => (
              <li key={index} className="">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        {!lineByLine.length && (
          <p className="text-black text-[21px] font-jost">{description}</p>
        )}
      </div>
      <div className="">
        {showVideo && (
          <video
            src={video}
            className="w-full h-auto xl:min-h-[293px] lg:max-w-[462px] lg:min-w-[462px] object-cover rounded-4xl"
            playsInline
            muted
            autoPlay
            loop
          />
        )}
        {showImage && !video && (
          <Image
            src={image}
            alt={alt}
            width={500}
            height={500}
            className="w-full h-auto xl:min-h-[293px] lg:max-w-[462px] lg:min-w-[462px] object-cover rounded-4xl"
          />
        )}
      </div>
    </div>
  );
}
