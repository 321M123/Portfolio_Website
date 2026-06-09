'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeInOnScroll from '@/components/FadeInOnScroll';
import { AnimatedBorder } from '@/components/ui/AnimatedBorder';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 hover:border-neutral-500 text-gray-400 hover:text-white text-sm rounded-full transition-all duration-300 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to portfolio
        </Link>

        <FadeInOnScroll>
          <AnimatedBorder>
            <header className="text-center border-b border-neutral-800 pb-6">
              <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-gray-400">
                Last updated:{' '}
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </header>
          </AnimatedBorder>
        </FadeInOnScroll>

        <section className="space-y-6 mt-8">
          <FadeInOnScroll delay={0}>
            <div className="bg-neutral-900/80 border border-blue-500/20 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/esotericVocabularyLogo.png"
                  alt="Esoteric Vocabulary"
                  width={56}
                  height={56}
                  className="rounded-xl"
                />
                <h2 className="text-2xl font-semibold text-white">Esoteric Vocabulary</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Esoteric Vocabulary does not require account creation of any kind. As a result,{' '}
                <span className="text-white font-medium">absolutely no data is collected, stored, or transmitted</span>{' '}
                when using this app.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.05}>
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                This Privacy Policy describes how I, Mikael Kortbaoui, collect, use, and protect your information when you use my mobile applications. I am committed to protecting your privacy and ensuring you understand how your information is handled.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.05}>
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">Information I Collect</h2>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Information You Provide</h3>
                <p className="text-gray-300 leading-relaxed">I may collect information that you voluntarily provide to me, such as:</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  <li>Account information (username, email address)</li>
                  <li>Profile information and preferences</li>
                  <li>Content you create or share within the app</li>
                  <li>Communications with me (support requests, feedback)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Automatically Collected Information</h3>
                <p className="text-gray-300 leading-relaxed">When you use my apps, I may automatically collect:</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  <li>Device information (model, operating system, unique identifiers)</li>
                  <li>Usage data (features used, session duration, crash reports)</li>
                  <li>Performance data (app launch time, response times)</li>
                  <li>Location data (if permission is granted and required for app functionality)</li>
                </ul>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">How I Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">I use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><span className="text-white font-medium">App Functionality:</span> To provide and maintain app features and services</li>
                <li><span className="text-white font-medium">User Experience:</span> To personalize and improve your app experience</li>
                <li><span className="text-white font-medium">Customer Support:</span> To respond to your requests and provide technical support</li>
                <li><span className="text-white font-medium">Analytics:</span> To understand app usage patterns and improve performance</li>
                <li><span className="text-white font-medium">Security:</span> To detect and prevent fraud, security issues, and technical problems</li>
                <li><span className="text-white font-medium">Legal Compliance:</span> To comply with applicable laws and regulations</li>
              </ul>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-300 leading-relaxed mb-4">I do not sell, rent, or trade your personal information. I may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><span className="text-white font-medium">Service Providers:</span> With third-party services that help me operate my apps (analytics, crash reporting, cloud storage)</li>
                <li><span className="text-white font-medium">Legal Requirements:</span> When required by law or to protect my rights and safety</li>
                <li><span className="text-white font-medium">Business Transfers:</span> In connection with a merger, sale, or transfer of assets</li>
                <li><span className="text-white font-medium">Consent:</span> With your explicit consent for specific purposes</li>
              </ul>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">My apps may use third-party services for analytics, crash reporting, and other functionality. These services have their own privacy policies:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Apple Analytics (for iOS apps)</li>
                <li>Firebase Analytics and Crashlytics (Google)</li>
                <li>Other services as specified in individual app descriptions</li>
              </ul>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                I implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                I retain your information only for as long as necessary to provide my services and fulfill the purposes outlined in this policy. When information is no longer needed, I securely delete or anonymize it.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights and Choices</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">To exercise these rights, please contact me using the information provided below.</p>
            </div>
          </FadeInOnScroll>


          <FadeInOnScroll delay={0.1}>
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.15}>
            <div className="bg-neutral-900/80 border border-blue-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Me</h2>
              <p className="text-gray-300 leading-relaxed mb-4">If you have any questions about this Privacy Policy or my privacy practices, please contact me:</p>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-white font-medium">Email:</span> mk@mikaelkortbaoui.dev</p>
                <p><span className="text-white font-medium">Developer:</span> Mikael Kortbaoui</p>
                <p><span className="text-white font-medium">Location:</span> Montreal, Canada</p>
                <p><span className="text-white font-medium">Response Time:</span> I aim to respond to all inquiries within 48 hours</p>
              </div>
            </div>
          </FadeInOnScroll>
        </section>
      </div>
    </main>
  );
}
