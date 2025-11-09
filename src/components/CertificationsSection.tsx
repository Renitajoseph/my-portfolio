'use client';

import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const certifications = [
  {
    name: 'Oracle Cloud Infrastructure Associate',
    description:
      'Proficiency in designing and managing cloud infrastructure on Oracle Cloud, covering compute, storage, networking, and IAM.',
  },
  {
    name: 'Full Stack Development Bootcamp',
    description:
      'Hands-on training covering React.js, Node.js, Express, MongoDB, RESTful APIs, Git, and live project deployment.',
    issuer: 'Error Makes Clever',
  },
  {
    name: 'Python Certification',
    description:
      'Mastered core concepts like data structures, OOPs, file handling, and standard libraries.',
    issuer: 'GeeksforGeeks',
  },
  {
    name: 'Java Certification',
    description:
      'Completed a 3-month intensive training in Java, Spring Boot, and Data Structures & Algorithms.',
    issuer: 'Revamp Academy',
  },
];

const itemVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-24 sm:py-32">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Certifications
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Validation of my skills and knowledge.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {certifications.map((cert, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div className="p-1" variants={itemVariants}>
                    <Card className="h-full border-none">
                      <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                        <BadgeCheck className="h-12 w-12 text-primary" />
                        <h3 className="text-lg font-semibold">{cert.name}</h3>
                        {cert.issuer && <p className="text-sm font-medium text-primary">{cert.issuer}</p>}
                        <p className="text-sm text-foreground/60">{cert.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
