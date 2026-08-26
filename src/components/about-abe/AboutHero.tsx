"use client";

import Image from "next/image";
// import { useTranslation } from "react-i18next";

import Container from "@/components/common/Container";
import { aboutAbe } from "@/data/about-abe";

export default function AboutHero() {
  // const { t } = useTranslation();

  return (
    <section className="w-full overflow-hidden bg-surface">
      <Container className="py-10 pb-0 sm:py-14 lg:py-0">
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            lg:grid-cols-[55%_45%]
            lg:gap-10
            lg:min-h-[500px]
          "
        >
          {/* Content */}
          <div className="order-1 py-2 lg:py-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                Meet Your AI Mortgage Assistant
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                <span className="block">Meet Abe, Your</span>
                <span className="block">AI Mortgage</span>
                <span className="block">Expert</span>
              </h1>

              <div className="mt-6 space-y-5">
                <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                  Abe is a seasoned mortgage loan officer with decades of experience. He's designed to help you navigate the mortgage process with expert guidance and personalized recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Abe Image */}
          <div
            className="
              order-2
              flex
              w-full
              items-center
              justify-center
              lg:h-[500px]
            "
          >
            <Image
              src="/images/abe/abe-about.png"
              alt="Abe Hakawati"
              width={600}
              height={500}
              priority
              className="
                h-auto
                w-auto
                max-h-[320px]
                max-w-full
                object-contain
                sm:max-h-[400px]
                lg:max-h-[500px]
              "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
