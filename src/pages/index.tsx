import { type NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

import { Image } from "components/Image";
import { ProjectsGrid } from "components/ProjectsGrid";
import { Button } from "components/Button";
import { Layout } from "layouts/Layout";

import { projects } from "data/projects";
import { Section } from "components/Section";

const Home: NextPage = () => {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="pt-24">
          <h1
            className="text-center font-bold uppercase text-stone-400 underline-offset-2"
            style={{ letterSpacing: 2 }}
          >
            zephyr valley
          </h1>
          <h2 className="text-center text-6xl font-bold text-stone-700">
            hand-crafted code and designs
          </h2>

          <Section>
            <p className="text-center text-3xl leading-10 text-stone-700">
              We build clean and robust apps and websites powered by the best in
              open-source software.
            </p>
          </Section>
        </div>

        <div className="flex flex-col items-center">
          <Link
            href={`https://cal.com/carl-barrdahl/30min`}
            target="_blank"
            className="transition-[colors, transitions] duration-200 hover:translate-y-0.5"
          >
            <Button>Schedule a call</Button>
          </Link>
        </div>
      </motion.div>

      <Section heading="Projects">
        <ProjectsGrid />
      </Section>

      <Section heading="Hackathons">
        <div className="grid gap-12 sm:grid-cols-3">
          {projects
            .filter((p) => p.tags.includes("hackathon"))
            .map((hackathon, i) => (
              <div
                key={i}
                className="group cursor-pointer text-xl text-stone-500 sm:text-xl "
              >
                <div className="relative mb-4 flex aspect-video overflow-hidden rounded-xl border-4 bg-stone-200 transition-colors group-hover:border-emerald-500">
                  <Image
                    className="object-cover object-top"
                    src={hackathon.images[0] as string}
                    width={640}
                    height={200}
                    alt={hackathon.title}
                  />
                </div>
                <span className="font-bold text-stone-900">
                  {hackathon.title}.
                </span>{" "}
                {hackathon.tagline}
              </div>
            ))}
        </div>
      </Section>
      <div className="flex items-center justify-between bg-stone-900 p-10 text-stone-400">
        <div className="">
          <Link
            href="#"
            className="text-xs font-bold uppercase hover:text-stone-50"
          >
            🌲 zephyr valley ab
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
