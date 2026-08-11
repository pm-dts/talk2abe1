import Image from "next/image";
import Link from "next/link";

import Container from "@/components/common/Container";

export default function HeroSection() {
  return (
    <section className="w-full min-w-0 pt-8 overflow-hidden bg-surface">
      <Container
        className="
          grid
          w-full
          min-w-0
          max-w-full
          grid-cols-1
          items-stretch
          gap-0
          lg:grid-cols-[38%_62%]
          lg:py-0
        "
      >
        {/* Abe Image */}
        <div
          className="
            order-2
            relative
            flex
            min-w-0
            w-full
            items-end
            justify-center
            self-end
            overflow-hidden
            sm:min-h-[340px]
            lg:order-1
            lg:h-full
            lg:min-h-[430px]
            lg:justify-start
          "
        >
          <Image
            src="/images/abe/abe-hero.png"
            alt="Abe, Talk2Abe mortgage expert"
            width={800}
            height={600}
            priority
            className="
              block
              h-auto
              w-full
              max-w-[500px]
              object-contain
              object-bottom
              sm:max-w-[540px]
              lg:absolute
              lg:bottom-0
              lg:left-0
              lg:h-full
              lg:w-auto
              lg:max-w-none
              lg:object-contain
              lg:object-bottom
            "
          />
        </div>

        {/* Hero Content */}
        <div
          className="
            order-1
            flex
            min-w-0
            flex-col
            justify-center
            py-12
            sm:py-14
            lg:order-2
            lg:min-h-[430px]
            lg:py-16
          "
        >
          <div className="max-w-2xl">
            <h1
              className="
                text-[2.75rem]
                font-bold
                leading-[1.05]
                tracking-[-0.035em]
                text-navy
                sm:text-5xl
                lg:text-[3.75rem]
                xl:text-[4rem]
              "
            >
              <span className="block">Got a</span>
              <span className="block">mortgage question?</span>
              <span className="block text-brand">Talk2Abe.</span>
            </h1>

            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-navy/80
                sm:text-lg
                sm:leading-8
              "
            >
              Straight answers to your mortgage questions — from an experienced mortgage professional
              {/* Get straightforward answers and real solutions
              <span className="block">for your unique situation.</span> */}
            </p>

            {/* Hero Actions */}
            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              <Link
                href="/ask-abe"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand
                  px-7
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-brand/90
                  focus:outline-none
                  focus:ring-2
                  focus:ring-brand
                  focus:ring-offset-2
                  sm:w-auto
                "
              >
                Ask Abe a Question
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-navy
                  bg-white
                  px-7
                  py-3
                  text-sm
                  font-semibold
                  text-navy
                  transition-colors
                  hover:bg-navy
                  hover:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-brand
                  focus:ring-offset-2
                  sm:w-auto
                "
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
