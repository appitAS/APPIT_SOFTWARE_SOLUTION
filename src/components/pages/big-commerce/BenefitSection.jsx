import Container from '@/components/layout/container'
import Section from '@/components/layout/section-box'
import Image from 'next/image'
import React from 'react'

const BenefitSection = () => {
  return (
    <Section className={"bg-[#74B6D5]"}>
        <Container className="max-w-[1550px] mx-auto py-10">
          <div className="flex items-center lg:items-start justify-evenly lg:flex-row flex-col gap-6">
            <div className="text-white text-[60px] font-semibold md:font-bold">
              Benefits of <span className="lg:block hidden" /> BigCommerce
            </div>
            <div className="max-h-[500px] overflow-y-auto hide-scrollbar">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="bg-[#0066B3] w-[622px] h-auto twext-white py-5 px-14 rounded-[24px] mb-10"
                >
                  <div>
                    <Image
                      src="/images/bcImage2.png"
                      alt="BigCommerce Image"
                      width={64}
                      height={64}
                      className=""
                    />
                  </div>
                  <div className="text-white text-[32px] font-semibold mt-4">
                    Hosted SaaS = no server management
                  </div>
                  <div className="text-white text-[21px] mt-3">
                    BigCommerce offers a fully managed SaaS platform that
                    handles hosting, updates, and security—freeing you from
                    server management so you can focus on growing your business.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
  )
}

export default BenefitSection