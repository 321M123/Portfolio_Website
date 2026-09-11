'use client';

import Link from 'next/link';
import FadeInOnScroll from '@/components/FadeInOnScroll';
import { AnimatedBorder } from '@/components/ui/AnimatedBorder';
import { buttonVariants } from '@/components/ui/button';

export default function Support() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/" className={`${buttonVariants({ variant: 'outline', size: 'sm' })} mb-8`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to portfolio
        </Link>

        <FadeInOnScroll>
          <AnimatedBorder>
            <header className="text-center border-b border-rule pb-6">
              <h1 className="text-4xl font-bold tracking-tight text-ink mb-4">App Support</h1>
              <p className="text-muted">I&apos;m here to help you get the most out of my apps</p>
            </header>
          </AnimatedBorder>
        </FadeInOnScroll>

        <section className="space-y-8 mt-8">
          <FadeInOnScroll delay={0}>
            <div className="bg-field border border-rule rounded-sm p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-ink mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Support
              </h2>
              <p className="text-muted mb-4">Need help? I&apos;m here to assist you with any questions or issues.</p>
              <div className="space-y-3">
                <a href="mailto:mk@mikaelkortbaoui.dev" className={buttonVariants({ variant: 'primary', size: 'full' })}>
                  Email Support
                </a>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted text-center">
                  Response time: Within 48 hours
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <div className="bg-field border border-rule rounded-sm p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-ink mb-4">Developer Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-ink mb-2">Contact Details</h3>
                  <div className="space-y-2 text-muted">
                    <p>
                      <span className="text-ink font-medium">Developer:</span> Mikael Kortbaoui
                    </p>
                    <p>
                      <span className="text-ink font-medium">Email:</span> mk@mikaelkortbaoui.dev
                    </p>
                    <p>
                      <span className="text-ink font-medium">Location:</span> Montreal, Canada
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-ink mb-2">Support Hours</h3>
                  <div className="space-y-2 text-muted">
                    <p>
                      <span className="text-ink font-medium">Response Time:</span> Within 48 hours
                    </p>
                    <p>
                      <span className="text-ink font-medium">Time Zone:</span> Eastern Time (Montreal, UTC−5/UTC−4)
                    </p>
                    <p>
                      <span className="text-ink font-medium">Languages:</span> English, French, Spanish
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </section>
      </div>
    </main>
  );
}
