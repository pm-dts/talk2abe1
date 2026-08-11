import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { videos } from "@/data/videos";

const featuredVideo = videos.find((v) => v.featured);

export default function LatestVideoSection() {
  if (!featuredVideo) {
    return null;
  }

  const thumbnailPath = path.join(
    process.cwd(),
    "public",
    featuredVideo.thumbnail,
  );
  const hasThumbnail = existsSync(thumbnailPath);

  return (
    <section className="bg-navy py-16 sm:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          {hasThumbnail ? (
            <Image
              src={featuredVideo.thumbnail}
              alt={featuredVideo.title}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900" />
          )}
        </div>
        <div>
          <h2 className="mt-3 max-w-md text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a specific question about your situation?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-300">
            Ask Abe directly. We&apos;ll get you the answer and the right
            solution.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/ask-abe" size="lg">
              Ask Abe a Question
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white/10 hover:!text-white"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
