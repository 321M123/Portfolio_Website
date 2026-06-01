'use client';

import Link from 'next/link';
import TextMorphAnimation from '@/components/TextMorphAnimation';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TechBadge } from '@/components/ui/tech-badge';
import { Badge } from '@/components/ui/badge';
import { FileCode, FileType2, Atom, Rocket, Layout, Code2, Coffee, Shield } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AnimatedBorder } from '@/components/ui/AnimatedBorder';
import { FeaturedProjectsSection } from './featuredProject';
import Image from 'next/image';

// Technology color mapping
const techColors: { [key: string]: { bg: string; text: string } } = {
  TypeScript: { bg: 'bg-blue-900/90', text: 'text-blue-100' },
  JavaScript: { bg: 'bg-yellow-900/90', text: 'text-yellow-100' },
  React: { bg: 'bg-cyan-900/90', text: 'text-cyan-100' },
  Astro: { bg: 'bg-purple-900/90', text: 'text-purple-100' },
  'HTML/CSS': { bg: 'bg-orange-900/90', text: 'text-orange-100' },
  Tailwind: { bg: 'bg-teal-900/90', text: 'text-teal-100' },
  'C++': { bg: 'bg-blue-800/90', text: 'text-blue-100' },
  Java: { bg: 'bg-red-900/90', text: 'text-red-100' },
  Python: { bg: 'bg-green-900/90', text: 'text-green-100' },
  Solidity: { bg: 'bg-gray-900/90', text: 'text-gray-100' },
  AI: { bg: 'bg-indigo-900/90', text: 'text-indigo-100' },
  Authentication: { bg: 'bg-pink-900/90', text: 'text-pink-100' },
  APIs: { bg: 'bg-rose-900/90', text: 'text-rose-100' },
  JWT: { bg: 'bg-violet-900/90', text: 'text-violet-100' },
  OAuth: { bg: 'bg-fuchsia-900/90', text: 'text-fuchsia-100' },
  StripeJS: { bg: 'bg-sky-900/90', text: 'text-sky-100' },
  MERN: { bg: 'bg-emerald-900/90', text: 'text-emerald-100' },
  WebRTC: { bg: 'bg-amber-900/90', text: 'text-amber-100' },
  WebSockets: { bg: 'bg-lime-900/90', text: 'text-lime-100' },
  DEX: { bg: 'bg-blue-950/90', text: 'text-blue-100' },
  Web3: { bg: 'bg-indigo-950/90', text: 'text-indigo-100' },
  Swift: { bg: 'bg-orange-800/90', text: 'text-orange-100' },
  iOS: { bg: 'bg-gray-800/90', text: 'text-gray-100' },
  Algorithms: { bg: 'bg-purple-800/90', text: 'text-purple-100' },
  Finance: { bg: 'bg-emerald-900/90', text: 'text-emerald-100' },
  Macro: { bg: 'bg-sky-900/90', text: 'text-sky-100' },
  Markets: { bg: 'bg-indigo-900/90', text: 'text-indigo-100' },
};

export default function Home() {
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
  const [privateLinkMessageId, setPrivateLinkMessageId] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Productivity App for Developers',
      description: 'Tailor made prompts for AI IDEs using a comprehensive onboarding process',
      tags: ['TypeScript', 'Astro', 'AI', 'Authentication'],
      year: '2025',
      image: '/devibe.png',
      links: {
        github: ['#', '#'],
      },
    },
    {
      id: 3,
      title: 'Voice and Chat App',
      description: 'Voice and chat app with random room matchmaking system (Omegle-like)',
      tags: ['MERN', 'WebRTC', 'WebSockets', 'APIs'],
      year: '2024',
      image: '/fluxe.png',
      links: {
        github: ['https://github.com/321M123/Fluxe', 'https://github.com/321M123/Fluxe-Server'],
      },
    },
    {
      id: 4,
      title: 'Arbitrage Algorithm for Decentralized Exchanges',
      description:
        'Arbitrage algorithm and profitability analysis between decentralized exchanges using flash loans from Aave',
      tags: ['DEX', 'Web3', 'Solidity', 'JavaScript'],
      year: '2023',
      image: '/flashLoanArb.png',
      links: {
        github: ['https://github.com/321M123/FlashLoanArbitrage-bot'],
      },
    },
    {
      id: 5,
      title: 'AI Model for Digital Detection',
      description: 'Artificial intelligence model for digital detection without libraries based on the MNIST dataset',
      tags: ['Python', 'AI'],
      year: '2023',
      image: '/AI_SR.png',
      links: {
        github: ['https://github.com/321M123/AI_SR'],
      },
    },
    {
      id: 6,
      title: 'ShortMap - Route Optimization App',
      description:
        'iOS-based route optimization app that solves the traveling salesman problem for efficient navigation',
      tags: ['Swift', 'iOS', 'Algorithms', 'APIs'],
      year: '2025',
      image: '/shortMap_1.png',
      images: ['/shortMap_1.png', '/shortMap_2.png'],
      links: {
        github: ['#'],
        appstore: 'https://apps.apple.com/ca/app/shortmap/id6747984266',
      },
    },
    {
      id: 7,
      title: 'Polymarket Macro Trading',
      description:
        'A hobby of mine, I have been on the platform for a while observing markets and how it has evolved, taking thesis-driven positions on macro, political and economic events that mirror the same convictions behind my stock portfolio.',
      tags: ['Finance', 'Macro', 'Markets', 'Crypto'],
      year: '2024',
      links: {
        github: [],
        polymarket: 'https://polymarket.com/profile/0x5874B7978187A776E3977b1541A0db4c28d1421D',
      },
    },
  ];

  const educationRef = useRef(null);
  const educationInView = useInView(educationRef, { once: true, amount: 0.3 });
  const hobbiesRef = useRef(null);
  const hobbiesInView = useInView(hobbiesRef, { once: true, amount: 0.3 });
  const languagesRef = useRef(null);
  const languagesInView = useInView(languagesRef, { once: true, amount: 0.3 });

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-[300px] md:h-[400px] mb-8">
              <TextMorphAnimation />
            </div>
            <p className="text-2xl text-blue-700 dark:text-blue-300 mb-8 font-medium">Fintech Developer</p>
            <div className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
              <Link href="https://github.com/321M123" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </Link>
              <span className="text-blue-300">|</span>
              <a
                href="mailto:mk@mikaelkortbaoui.dev"
                className="underline hover:text-blue-200 transition"
                style={{ textDecoration: 'none' }}>
                mk@mikaelkortbaoui.dev
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative bg-black">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="space-y-16">
            {/* Education */}
            <div ref={educationRef} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-full md:w-auto md:min-w-[180px] text-center">
                <AnimatedBorder>
                  <h3 className="text-white text-2xl font-bold">Education</h3>
                </AnimatedBorder>
              </div>
              <div className="relative w-full">
                <motion.div
                  className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-blue-500 transform -translate-y-1/2"
                  initial={{ scaleX: 0 }}
                  animate={educationInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  style={{ transformOrigin: 'left' }}
                />
                <AnimatedBorder delay={0.8}>
                  <p className="text-gray-200">
                    <span className="font-bold">Bois-de-Boulogne</span>
                    <br />
                    Science, Computer Science and Mathematics (In progress)
                  </p>
                </AnimatedBorder>
              </div>
            </div>
            {/* Hobbies */}
            <div ref={hobbiesRef} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-full md:w-auto md:min-w-[180px] text-center">
                <AnimatedBorder>
                  <h3 className="text-white text-2xl font-bold">Interests</h3>
                </AnimatedBorder>
              </div>
              <div className="relative w-full">
                <motion.div
                  className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-blue-500 transform -translate-y-1/2"
                  initial={{ scaleX: 0 }}
                  animate={hobbiesInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  style={{ transformOrigin: 'left' }}
                />
                <AnimatedBorder delay={0.8}>
                  <div className="flex">
                    <ul className="w-1/2 list-disc list-inside text-gray-300 space-y-2">
                      <li>Programming & Robotics</li>
                      <li>Finance</li>
                      <li>Reading</li>
                    </ul>
                    <ul className="w-1/2 list-disc list-inside text-gray-300 space-y-2">
                      <li>Swimming</li>
                      <li>Running</li>
                      <li>Gym</li>
                    </ul>
                  </div>
                </AnimatedBorder>
              </div>
            </div>
            {/* Languages */}
            <div ref={languagesRef} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-full md:w-auto md:min-w-[180px] text-center">
                <AnimatedBorder>
                  <h3 className="text-white text-2xl font-bold">Languages</h3>
                </AnimatedBorder>
              </div>
              <div className="relative w-full">
                <motion.div
                  className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-blue-500 transform -translate-y-1/2"
                  style={{ transformOrigin: 'left' }}
                  initial={{ scaleX: 0 }}
                  animate={languagesInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
                <AnimatedBorder delay={0.8}>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>French (Read, written, spoken)</li>
                    <li>English (Read, written, spoken)</li>
                    <li>Spanish (Read, written, spoken)</li>
                  </ul>
                </AnimatedBorder>
              </div>
            </div>
          </div>
          {/* Programming Languages Card (unchanged) */}
          <Card className="bg-neutral-900/80 border-neutral-800 backdrop-blur-md py-6 px-4 md:px-8 mt-32 mb-12 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-bold">Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5 mt-4">
                <TechBadge
                  icon={<FileCode className="text-yellow-400" />}
                  name="JavaScript (JS)"
                  description="Web scraping & APIs"
                />
                <TechBadge
                  icon={<FileType2 className="text-blue-400" />}
                  name="TypeScript (TS)"
                  description="Frontend/Backend dev & APIs (New projects)"
                />
                <TechBadge icon={<Atom className="text-cyan-400" />} name="React" description="Web apps" />
                <TechBadge
                  icon={<Rocket className="text-orange-400" />}
                  name="Astro"
                  description="Web apps (New projects)"
                />
                <TechBadge
                  icon={<Layout className="text-orange-400" />}
                  name="HTML/CSS & Tailwind"
                  description="Web layout & styling"
                />
                <TechBadge
                  icon={<Code2 className="text-blue-500" />}
                  name="C++"
                  description="Low level coding & Robotics"
                />
                <TechBadge icon={<Coffee className="text-red-400" />} name="Java" description="Academic projects" />
                <TechBadge
                  icon={
                    <span role="img" aria-label="Python">
                      🐍
                    </span>
                  }
                  name="Python"
                  description="Data science & Ai"
                />
                <TechBadge icon={<Shield className="text-gray-400" />} name="Solidity" description="ETH dev" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjectsSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 relative bg-black">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Other Projects</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full max-w-xs h-[440px] rounded-lg cursor-pointer group"
                style={{ perspective: 1000 }}
                onClick={() => setFlippedCardId(flippedCardId === project.id ? null : project.id)}>
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  initial={false}
                  animate={{ rotateY: flippedCardId === project.id ? 180 : 0 }}
                  transition={{ duration: 0.6 }}>
                  {/* FRONT */}
                  <div
                    className="absolute w-full h-full bg-[#141414] border border-[#222222] rounded-lg shadow-lg overflow-hidden flex flex-col"
                    style={{ backfaceVisibility: 'hidden' }}>
                    <div className="h-48 bg-[#141414] relative shrink-0">
                      {project.images && project.images.length > 5 ? (
                        <>
                          <div className="w-full h-full flex">
                            <div className="w-1/2 h-full relative">
                              <Image
                                src={project.images[0]}
                                alt={`${project.title} - Image 1`}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                              />
                            </div>
                            <div className="w-1/2 h-full relative">
                              <Image
                                src={project.images[1]}
                                alt={`${project.title} - Image 2`}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                              />
                            </div>
                            <div className="w-1/2 h-full relative">
                              <Image
                                src={project.images[2]}
                                alt={`${project.title} - Image 3`}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                              />
                            </div>
                          </div>
                        </>
                      ) : project.image ? (
                        <div className="w-full h-full relative">
                          <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-[#1452F0] via-[#0b1f4d] to-[#141414]">
                          <span className="text-white text-2xl font-bold tracking-tight">Polymarket</span>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.18),transparent_55%)]" />
                        </div>
                      )}
                      <span className="absolute top-3 left-3 bg-neutral-900/70 text-gray-200 text-xs font-semibold px-2.5 py-1.5 rounded-lg">
                        {project.year}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                      </div>
                      <div className="mt-auto pt-2">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => {
                            const colors = techColors[tag] || { bg: 'bg-gray-900/90', text: 'text-gray-100' };
                            return (
                              <Badge key={index} variant="secondary" className={`${colors.bg} ${colors.text}`}>
                                {tag}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* BACK */}
                  <div
                    className="absolute w-full h-full bg-[#141414] border border-[#222222] rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center justify-center text-center"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                    <div className="flex flex-col gap-4 w-full max-w-[200px]">
                      {project.links.github.map((link, index) => {
                        const buttonId = `${project.id}-${index}`;
                        const isPrivate = link === '#';

                        if (privateLinkMessageId === buttonId) {
                          return (
                            <Badge
                              key={buttonId}
                              className="inline-flex items-center justify-center bg-yellow-900/90 text-yellow-100 font-semibold py-3 px-2 rounded-lg w-full text-center text-xs"
                              onClick={(e) => e.stopPropagation()}>
                              <FontAwesomeIcon icon={faLock} className="w-5 h-5 mr-1.5 shrink-0" />
                              <span>Sorry, this repository is still private</span>
                            </Badge>
                          );
                        }

                        const buttonContent = (
                          <>
                            {isPrivate ? (
                              <FontAwesomeIcon icon={faLock} className="w-5 h-5 mr-2" />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 mr-2">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            )}
                            GitHub {project.links.github.length > 1 ? (index === 0 ? '(Frontend)' : '(Backend)') : ''}
                          </>
                        );

                        if (isPrivate) {
                          return (
                            <button
                              key={buttonId}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPrivateLinkMessageId(buttonId);
                                setTimeout(() => setPrivateLinkMessageId(null), 2000);
                              }}
                              className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full">
                              {buttonContent}
                            </button>
                          );
                        } else {
                          return (
                            <a
                              key={buttonId}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full">
                              {buttonContent}
                            </a>
                          );
                        }
                      })}
                      {project.links.appstore && (
                        <a
                          href={project.links.appstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 mr-2">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          App Store
                        </a>
                      )}
                      {project.links.polymarket && (
                        <a
                          href={project.links.polymarket}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center bg-[#1452F0] hover:bg-[#1146cc] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 mr-2">
                            <path d="M4 20V10h3v10H4zm6.5 0V4h3v16h-3zM17 20v-7h3v7h-3z" />
                          </svg>
                          View on Polymarket
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
