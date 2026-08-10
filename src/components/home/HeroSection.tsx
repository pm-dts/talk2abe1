import Image from "next/image";
import Container from "@/components/common/Container";
import SearchInput from "@/components/common/SearchInput";
import Button from "@/components/common/Button";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <Container className="grid min-h-[500px] items-center gap-6 py-8 sm:py-10 lg:grid-cols-[54%_46%] lg:gap-0 lg:py-0">
        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-[2.75rem] font-bold leading-[1.05] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]">
            <span className="block">Got a mortgage</span>
            <span className="block">question?</span>
            <span className="block text-brand">Talk2Abe.</span>
          </h1>

          <p className="mt-4 max-w-[520px] text-base leading-7 text-navy/80 sm:text-lg">
            Get straightforward answers from Abe,
            <span className="block">your mortgage expert.</span>
          </p>

          {/* Question Search */}
          <form
            action="/ask-abe"
            method="get"
            role="search"
            className="mt-7 flex w-full max-w-2xl items-center rounded-lg border border-slate-300 bg-white p-3 shadow-sm transition-shadow focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/10"
          >
            <input
              name="q"
              placeholder="Type your mortgage question here..."
              aria-label="Search mortgage questions"
              className="min-w-0 flex-1 border-0 bg-transparent px-2 text-sm shadow-none outline-none focus:border-0 focus:ring-0 sm:text-base"
            />

            <Button
              type="submit"
              size="md"
              className="shrink-0 rounded-md px-8 py-2.5 text-sm"
            >
              Ask Abe
            </Button>
          </form>
        </div>

        {/* Abe Image */}
        <div className="relative flex h-full min-h-[300px] items-end justify-center lg:min-h-[430px] lg:justify-end">
          <Image
            src="/images/abe/abe-hero.jpg"
            alt="Abe, Talk2Abe mortgage expert"
            width={800}
            height={600}
            priority
            className="h-full max-h-[430px] w-full object-contain object-bottom lg:max-w-[620px]"
          />
        </div>
      </Container>
    </section>
  );
}
