import Container from "@/components/layout/container";
import HeadingPara from "@/components/layout/heading";
import Section from "@/components/layout/section-box";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const WhatWeOfferSection = () => {
  const getColor = (color) => {
    switch (color) {
      case "red":
        return "bg-[#C71919] text-white";
      case "orange":
        return "bg-[#C64B13] text-white";
      case "green":
        return "bg-[#6D892D] text-white";
      case "black":
        return "bg-[#121117] text-white";
      case "purple":
        return "bg-[#F41FF4] text-white";
      default:
        return "bg-[#F41F1F] text-white"; // Default color if no match
    }
  };

  const ImagesData = [
    {
      title: `Adobe Commerce (Magento)`,
      para: `Adobe Commerce (Magento) is recognized as one of the most powerful and`,
      src: "/images/ecImage8.png",
      btnColor: "red",
    },
    {
      title: `Magento Open Source`,
      para: `Magento stands out as a premier eCommerce platform, recognized for its adaptability,`,
      src: "/images/ecImage9.png",
      btnColor: "orange",
    },
    {
      title: `BigCommerce`,
      para: `BigCommerce is a robust, adaptable, and scalable Software as a Service`,
      src: "/images/ecImage10.png",
      btnColor: "black",
    },
    {
      title: `Shopify`,
      para: `Shopify stands out as a premier eCommerce platform, recognized for its interface`,
      src: "/images/ecImage11.png",
      btnColor: "green",
    },
  ];
  return (
    <Section className="text-center bg-[#252525]">
      <Container>
        <HeadingPara
          title={`What We Offer`}
          para={`Our Specialized E-Commerce Solutions`}
          highlightText={`Offer`}
          classNamePara="font-semibold text-center text-white"
          classNameHeading="text-white"
          sectionHeading
        />
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-14 py-10">
          {ImagesData.map((image, index) => (
            <div
              className="flex sm:flex-row flex-col items-center sm:items-start justify-start gap-5 bg-[#ffffff] p-10 rounded-2xl"
              key={index}
            >
              <Image
                key={index}
                src={image.src}
                alt={`Image ${index + 1}`}
                width={283}
                height={283}
                className=""
              />
              <div className="flex flex-col justify-start items-center  sm:items-start gap-2">
                <h3 className="text-black text-lg font-semibold mt-4">
                  {image.title}
                </h3>
                <p className="text-black mt-2 text-center sm:text-left">
                  {image.para}
                </p>
                <Button className={`${getColor(image.btnColor)} mt-2 !px-10`}>
                  Know More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default WhatWeOfferSection;
