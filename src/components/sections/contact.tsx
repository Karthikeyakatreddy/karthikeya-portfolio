"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import Link from "next/link";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader
        id="contact"
        className="relative mb-14"
        title={
          <>
            LET&apos;S WORK <br />
            TOGETHER
          </>
        }
        desc="Open for fresher software development, AI/ML, data, cloud, and entry-level technology opportunities."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-[9999] mx-4">
        <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Contact Form</CardTitle>
            <CardDescription>
              Please contact me directly at{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-cyan-200 cursor-can-hover rounded-lg"
              >
                {config.email.replace(/@/g, "(at)")}
              </a>{" "}
              or drop your info here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-0 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">My Details</CardTitle>
            <CardDescription>
              Recruiter contact and academic profile information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm md:text-base text-muted-foreground">
            <p><strong className="text-foreground">Name:</strong> {config.author}</p>
            <p><strong className="text-foreground">Email:</strong> <Link href={`mailto:${config.email}`} className="text-cyan-200">{config.email}</Link></p>
            <p><strong className="text-foreground">Phone:</strong> <Link href={`tel:${config.phone.replace(/\s/g, "")}`} className="text-cyan-200">{config.phone}</Link></p>
            <p><strong className="text-foreground">Education:</strong> {config.education}</p>
            <p><strong className="text-foreground">LinkedIn:</strong> <Link href={config.social.linkedin} target="_blank" className="text-cyan-200">linkedin.com/in/karthikeyakatreddy</Link></p>
            <p><strong className="text-foreground">GitHub:</strong> <Link href={config.social.github} target="_blank" className="text-cyan-200">github.com/Karthikeyakatreddy</Link></p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
