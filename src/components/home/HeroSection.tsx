import Image from "next/image";
import Link from "next/link";

import Container from "@/components/common/Container";
import ScheduleCallButton from "@/components/common/ScheduleCallButton";

export default function HeroSection() {
  return (
    <section className="w-full min-w-0 overflow-hidden bg-surface pt-4 lg:pt-0">
      <Container
        className="
          grid
          w-full
          md:w-[95%]
          min-w-0
          max-w-full
          grid-cols-[55%_45%]
          items-stretch
          gap-2
          md:grid-cols-[25%_75%]
          lg:grid-cols-[38%_62%]
          lg:py-0
        "
      >
        {/* Abe Image */}
        <div
          className="
            relative
            flex
            min-w-0
            w-full
            items-end
            self-end
            overflow-hidden
            sm:min-h-[300px]
            lg:order-1
            lg:h-full
            lg:min-h-[430px]
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
              mt-6
              max-w-[340px]
              object-contain
              object-bottom
              lg:absolute
              lg:-bottom-20
              lg:right-0
              lg:h-[calc(100%+35px)]
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
            py-4
            lg:order-2
            lg:min-h-[430px]
            lg:py-16
          "
        >
          <div className="max-w-2xl">
            <h1
              className="
                text-[2rem]
                font-bold
                leading-[1.08]
                tracking-[-0.03em]
                text-navy
                sm:text-lg
                md:text-[2rem]
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
                mt-2
                max-w-xl
                text-sm
                leading-6
                text-navy/80
                sm:leading-4
                lg:mt-5
                lg:text-lg
                lg:leading-8
              "
            >
              Straight answers to your mortgage questions — from an experienced
              mortgage professional
            </p>

            {/* Hero Actions */}
            <div
              className="
                mt-5
                grid
                grid-cols-1
                gap-2
                sm:mt-6
                sm:grid-cols-2
                sm:gap-3
                lg:mt-7
                md:w-[75%]
                lg:w-[80%]
              "
            >
              {/* <Link
                href="/questions"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-brand/90
                  focus:outline-none
                  focus:ring-2
                  focus:ring-brand
                  focus:ring-offset-2
                  sm:px-5
                  sm:py-2.5
                  sm:text-sm
                  lg:px-7
                  lg:py-3
                "
              >
                Ask Abe a Question
              </Link> */}

              {/* <Link
                href="/loan-programs"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-navy
                  bg-white
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-navy
                  transition-colors
                  hover:bg-navy
                  hover:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-brand
                  focus:ring-offset-2
                  sm:px-5
                  sm:py-2.5
                  sm:text-sm
                  lg:px-7
                  lg:py-3
                "
              >
                Find my loan options
              </Link> */}

              <ScheduleCallButton
                variant="outline"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand!
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-white!
                  transition-colors
                  !hover:bg-brand/90
                  focus:outline-none
                  focus:ring-2
                  focus:ring-brand
                  focus:ring-offset-2
                  sm:px-5
                  sm:py-2.5
                  sm:text-sm
                  lg:px-7
                  lg:py-3
                  cursor-pointer
                "
              >
                Schedule a Call
              </ScheduleCallButton>

              <Link
                href="/get-started"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-navy
                  bg-white
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-navy
                  transition-colors
                  hover:bg-navy
                  hover:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-brand
                  focus:ring-offset-2
                  sm:px-5
                  sm:py-2.5
                  sm:text-sm
                  lg:px-7
                  lg:py-3
                "
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
