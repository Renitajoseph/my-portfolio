'use client';

import { Button } from '@/components/ui/button';
import { Eye, Send, Wrench } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center bg-transparent">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Jose Renita K.J
        </h1>
        <p className="max-w-3xl text-lg text-foreground/80 sm:text-xl md:text-2xl">
          Cyber Security Student
        </p>
        <p className="max-w-2xl text-base text-foreground/60 sm:text-lg">
          Passionate about securing digital ecosystems and building scalable web solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">
              <Send className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#skills">
              <Wrench className="mr-2 h-5 w-5" />
              View My Skills
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#projects">
              <Eye className="mr-2 h-5 w-5" />
              View My Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
