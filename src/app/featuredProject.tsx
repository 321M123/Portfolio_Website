'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import Shuffle from '@/components/ui/shadcn-io/shuffle';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const oneSheetProject = {
  title: 'OneSheet',
  leadLine: {
    emphasis: 'Data-Driven Investment Copilot',
    tail: 'Stop switching between spreadsheets and brokerage apps.',
  },
  description:
    'Onesheet combines institutional-grade fundamental research with automated portfolio tracking, giving our users an all-in-one terminal for investing.',
  tech: ['TypeScript', 'React', 'Next.js', 'APIs & Scraping', 'VISX', 'Authentication', 'Payments'],
  stats: [
    { value: '25+', label: 'Broker Integrations' },
    { value: '1,000+', label: 'Stocks Covered' },
    { value: '$12', label: 'Per Month' },
  ],
  images: [
    {
      id: 1,
      label: 'Onesheet PRO – Portfolio',
      image: '/onesheetImageA.png',
    },
    {
      id: 2,
      label: 'Onesheet PRO – KPIs & Research',
      image: '/onesheetImageB.png',
    },
    {
      id: 3,
      label: 'Onesheet PRO – Radar & Watchlist',
      image: '/onesheetImageC.png',
    },
  ],
  links: {
    primary: 'https://onesheet.pro',
    trial: 'https://app.onesheet.pro/signup',
    kpi: 'https://onesheet.pro/kpi',
  },
};

export function FeaturedProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [displayText, setDisplayText] = useState('Visit onesheet.pro');
  const [shinePosition, setShinePosition] = useState({ x: 50, y: 50 });
  const originalText = 'Visit onesheet.pro';
  const cardRef = useRef<HTMLDivElement>(null);

  const totalSlides = oneSheetProject.images.length;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);

    setShinePosition({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseLeave = () => {
    animate(x, 0, { duration: 0.3, type: 'spring', stiffness: 400, damping: 30 });
    animate(y, 0, { duration: 0.3, type: 'spring', stiffness: 400, damping: 30 });
    setShinePosition({ x: 50, y: 50 });
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const goToSlide = (index: number) => setCurrentSlide(index);

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(originalText);
      return;
    }

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let frameCount = 0;
    const maxFrames = 60;
    const revealDelay = 3;

    const interval = setInterval(() => {
      const textArray = originalText.split('');
      let charIndex = 0;

      setDisplayText(
        textArray
          .map((char) => {
            if (char === ' ' || char === '.') return char;
            const lockFrame = charIndex * revealDelay;
            charIndex++;
            if (frameCount < lockFrame) {
              return characters[Math.floor(Math.random() * characters.length)];
            }
            return char;
          })
          .join(''),
      );

      frameCount++;
      if (frameCount >= maxFrames) {
        clearInterval(interval);
        setDisplayText(originalText);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isHovering, originalText]);

  return (
    <section id="onesheet" className="scroll-mt-14 py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16">
          <div className="text-center space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Featured Project
            </motion.p>
            <Shuffle
              text="OneSheet"
              shuffleDirection="right"
              duration={0.5}
              animationMode="evenodd"
              shuffleTimes={2}
              ease="power3.out"
              stagger={0.05}
              threshold={0.1}
              triggerOnce={false}
              triggerOnHover={true}
              respectReducedMotion={true}
              className="text-ink"
              style={{
                fontSize: 'clamp(2.5rem, 9vw, 5rem)',
                fontFamily: 'inherit',
                display: 'block',
              }}
            />
            <div className="text-muted text-lg md:text-xl max-w-5xl mx-auto leading-relaxed space-y-4">
              <p className="text-base sm:text-lg md:text-xl md:whitespace-nowrap">
                <span className="text-ink font-medium">{oneSheetProject.leadLine.emphasis}</span>
                <span className="text-muted"> — </span>
                {oneSheetProject.leadLine.tail}
              </p>
              <div className="border-t border-rule pt-4">
                <p>
                  Onesheet combines institutional-grade fundamental research with automated portfolio tracking, giving
                  our users an <span className="text-ink font-semibold">all-in-one terminal for investing.</span>
                </p>
              </div>
            </div>
          </div>

          <div
            ref={cardRef}
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              handleMouseLeave();
            }}
            onMouseMove={handleMouseMove}
            style={{ perspective: '1000px' }}>
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <div className="relative w-full h-full overflow-hidden rounded-sm flex items-center justify-center bg-field border border-rule">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ transform: 'translateZ(50px)' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <motion.img
                        src={oneSheetProject.images[currentSlide].image}
                        alt={oneSheetProject.images[currentSlide].label}
                        className="max-w-full max-h-full object-contain object-center rounded-sm"
                        style={{
                          transform: 'translateZ(100px)',
                          filter: 'drop-shadow(0 12px 24px rgba(17, 17, 17, 0.12))',
                        }}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                style={{ transform: 'translateZ(60px) translateX(-50%)' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentSlide}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted bg-field border border-rule px-3 py-1">
                    {oneSheetProject.images[currentSlide].label}
                  </motion.span>
                </AnimatePresence>
              </div>

              <motion.div
                className="absolute inset-0 rounded-sm pointer-events-none overflow-hidden"
                style={{
                  transform: 'translateZ(1px)',
                  background: `radial-gradient(600px circle at ${shinePosition.x}% ${shinePosition.y}%, rgba(58, 90, 122, 0.1), transparent 40%)`,
                  transition: 'background 0.1s ease-out',
                }}
              />
            </motion.div>

            <button
              onClick={goToPrevious}
              onMouseEnter={handleMouseLeave}
              onMouseMove={(e) => {
                e.stopPropagation();
                handleMouseLeave();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-field text-ink border border-rule hover:border-accent hover:text-accent p-3 transition-colors"
              aria-label="Previous slide">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              onMouseEnter={handleMouseLeave}
              onMouseMove={(e) => {
                e.stopPropagation();
                handleMouseLeave();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-field text-ink border border-rule hover:border-accent hover:text-accent p-3 transition-colors"
              aria-label="Next slide">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3"
              onMouseEnter={handleMouseLeave}
              onMouseMove={(e) => {
                e.stopPropagation();
                handleMouseLeave();
              }}>
              {oneSheetProject.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 transition-all duration-300 ${
                    index === currentSlide ? 'bg-ink w-8' : 'bg-rule hover:bg-accent w-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8">
            <div className="flex flex-wrap justify-center gap-6">
              {oneSheetProject.stats.map((stat) => (
                <div key={stat.label} className="min-w-[120px]">
                  <div className="text-2xl font-bold tracking-tight text-accent">{stat.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {oneSheetProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-field border border-rule font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={oneSheetProject.links.primary}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={cn(buttonVariants({ variant: 'primary' }), 'gap-3')}>
                <span className="min-w-[170px] text-center">{displayText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={oneSheetProject.links.trial}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: 'outline' })}>
                Start free trial
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
