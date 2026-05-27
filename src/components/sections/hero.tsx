import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Mail, Phone } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const nameParts = config.author.split(" ");
  const firstLine = nameParts.slice(0, 2).join(" ");
  const secondLine = nameParts.slice(2).join(" ");

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col max-w-3xl">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-medium text-md text-cyan-200/90",
                      "cursor-default font-display sm:text-xl md:text-xl bg-clip-text"
                    )}
                  >
                    Computer Science Engineer • AI & ML Learner
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-none font-thin text-transparent text-left",
                          "font-thin text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default text-edge-outline font-display"
                        )}
                      >
                        {firstLine}
                        <br className="md:block" />
                        {secondLine}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      Portfolio built with Next.js, 3D scroll animation, and modern UI.
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-normal text-md text-slate-300/90",
                      "cursor-default font-sans sm:text-lg md:text-xl bg-clip-text leading-relaxed max-w-2xl"
                    )}
                  >
                    B.Tech Computer Science & Engineering graduate from DNR College of Engineering & Technology, JNTUK. Focused on Python, Machine Learning, Artificial Intelligence, Cloud Computing, Cybersecurity fundamentals, and practical software development. CGPA: 7.74.
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <Link href="#projects" className="flex-1">
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>View Projects</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3 flex-wrap">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={`mailto:${config.email}`}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          <Mail className="mr-2 inline-block" size={18} /> Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Open for fresher software, AI/ML, and data-focused roles.</p>
                    </TooltipContent>
                  </Tooltip>
                  <Link href={`tel:${config.phone.replace(/\s/g, "")}`}>
                    <Button variant={"outline"}>
                      <Phone size={20} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.github}
                    target="_blank"
                    className="cursor-can-hover"
                  >
                    <Button variant={"outline"}>
                      <SiGithub size={24} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                    className="cursor-can-hover"
                  >
                    <Button variant={"outline"}>
                      <SiLinkedin size={24} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
