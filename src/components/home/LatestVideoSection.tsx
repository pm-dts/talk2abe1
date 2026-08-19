import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import ScheduleCallButton from "@/components/common/ScheduleCallButton";
import { videos } from "@/data/videos";

const featuredVideo = videos.find((v) => v.featured);

export default function LatestVideoSection() {
  if (!featuredVideo) {
    return null;
  }

  const isRemote = /^https?:\/\//.test(featuredVideo.thumbnail);
  const thumbnailPath = path.join(
    process.cwd(),
    "public",
    featuredVideo.thumbnail,
  );
  const hasThumbnail = isRemote || existsSync(thumbnailPath);

  return (
    <section className="bg-navy py-16 sm:py-20">
      {/* <Container className="grid items-center gap-12 lg:grid-cols-2"> */}
      <Container className="w-full grid text-center items-center justify-center">
        {/* <a
          href={featuredVideo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-video overflow-hidden rounded-lg"
        >
          {hasThumbnail ? (
            <Image
              src={featuredVideo.thumbnail}
              alt={featuredVideo.title}
              fill
              priority
              unoptimized={isRemote}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900" />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1 h-8 w-8"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        </a> */}
        <div>
          <h2 className="mt-3 max-w-md text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a specific question about your situation?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-300">
            Ask Abe directly. We&apos;ll get you the answer and the right
            solution.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row items-center justify-center">
            <Button href="/ask-abe" size="lg">
              Ask Abe a Question
            </Button>
            <ScheduleCallButton
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white/10 hover:!text-white"
            >
              Schedule a Call
            </ScheduleCallButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
