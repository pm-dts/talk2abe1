"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import Container from "@/components/common/Container";
import ScheduleCallButton from "@/components/common/ScheduleCallButton";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full min-w-0 overflow-hidden bg-surface pt-0">
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
          md:grid-cols-[22%_78%]
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
            alt={t("home.hero.imageAlt")}
            width={800}
            height={600}
            priority
            className="
              block
              h-auto
              w-full
              mt-3
              max-w-[340px]
              object-contain
              object-bottom
              lg:absolute
              lg:-bottom-15
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
            py-2
            lg:order-2
            lg:min-h-[430px]
            lg:py-16
          "
        >
          <div className="max-w-2xl">
            <h1
              className="
                text-[1.5rem]
                font-bold
                leading-[1.08]
                tracking-[-0.03em]
                text-navy
                sm:text-md
                md:text-[1.5rem]
                lg:text-[3.5rem]
              "
            >
              <span className="block">{t("home.hero.titleLine1")}</span>
              <span className="block">{t("home.hero.titleLine2")}</span>
              <span className="block text-brand">{t("home.hero.titleLine3")}</span>
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
              {t("home.hero.description")}
            </p>

            {/* Hero Actions */}
            <div
              className="
                mt-4
                grid
                grid-cols-1
                gap-1.5
                sm:mt-5
                sm:grid-cols-2
                sm:gap-2
                lg:mt-7
                md:w-[75%]
                lg:w-[80%]
              "
            >
              <ScheduleCallButton
                variant="outline"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
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
                {t("home.hero.scheduleCall")}
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
                {t("home.hero.getStarted")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
