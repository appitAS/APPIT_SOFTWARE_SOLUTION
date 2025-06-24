import React from "react";
import Image from "next/image";
import Section from "./section-box";
import Container from "./container";
import ImageWithText from "./imgae-with-text";
import { cn } from "../../lib/utils";

const ImageWithTextSection = ({
  sectionsData,
  heading,
  backgroundImages = [],
  className,
  contentClassName,
  mediaClassName,
  sameWidth = false,
}) => {
  return (
    <Section className={className}>
      {/* Optional background images */}
      {backgroundImages.map((img, index) => (
        <Image
          key={index}
          src={img.src}
          alt={img.alt}
          width={500}
          height={500}
          className={cn(img.className)}
          priority
        />
      ))}

      <Container className="space-y-6 xl:space-y-10">
        {/* Optional Heading */}
        {heading && (
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#252525]">
              {heading.title.split(heading.highlightText).map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index === 0 && (
                    <span className="text-[#EC1C26]">
                      {" "}
                      {heading.highlightText}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </h2>
          </div>
        )}

        {sectionsData.map((section, idx) => (
          <ImageWithText
            key={idx}
            {...section}
            bulletPoints={section.bulletPoints} 
            contentClassName={contentClassName}
            mediaClassName={mediaClassName}
            sameWidth={sameWidth}
          />
        ))}
      </Container>
    </Section>
  );
};

export default ImageWithTextSection;
