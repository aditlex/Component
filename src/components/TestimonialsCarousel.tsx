
'use client'
import React, { useRef, useState } from 'react';
import CardTestimoni, { TestimonialItem } from './CardTestimoni';

export interface TestimonialsCarouselProps {
  items?: TestimonialItem[];
 
  speed?: number;
}

export default function TestimonialsCarousel({
  items = [],
  speed = 38,
}: TestimonialsCarouselProps) {
  const defaultTestimonials: TestimonialItem[] = [
    {
      quote:
        "I’d recommend Deepgram to any B2B SaaS company that’s looking for the best-in-breed transcription and customer service and customer success.",
      avatar: '/a pp1.svg',
      name: 'Craig Akal',
      role: 'Co-founder/Director, Elerian AI',
      companyLogo: '/a logo1.svg',
    },
    {
      quote:
        'As we’ve begun to roll out Deepgram to our customers, we’ve noticed the platform’s distinct ability to quickly and accurately transcribe product and company names.',
      avatar: '/a pp2.svg',
      name: 'Scott Hoch',
      role: 'Head of Data, Revenue.io',
      companyLogo: '/a logo2.svg',
    },
    {
      quote: "I have not had such a nice experience working with somebody's API in so long. And Deepgram did that. And then I also realized, like, it's cheap as hell.",
      name: 'Pete Ellis',
      role: 'CPO, Red Box',
      companyLogo: '/a logo3.webp',
    },
      {
      quote: "I have not had such a nice experience working with somebody's API in so long. And Deepgram did that. And then I also realized, like, it's cheap as hell.",
      avatar: '/a pp4.webp',
      name: 'Pete Ellis',
      role: 'CPO, Red Box',
      companyLogo: '/a logo4.webp',
    },
      {
      quote: "I have not had such a nice experience working with somebody's API in so long. And Deepgram did that. And then I also realized, like, it's cheap as hell.",
      avatar: '/a pp5.webp',
      name: 'Pete Ellis',
      role: 'CPO, Red Box',
      companyLogo: '/a logo5.webp',
    },
      {
      quote: "I have not had such a nice experience working with somebody's API in so long. And Deepgram did that. And then I also realized, like, it's cheap as hell.",
      avatar: '/a pp6.webp',
      name: 'Pete Ellis',
      role: 'CPO, Red Box',
      companyLogo: '/a logo6.webp',
    },
  ];

  const data = items && items.length > 0 ? items : defaultTestimonials;
  const doubled = [...data, ...data];

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState<boolean>(false);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);
  const handleFocus = () => setPaused(true);
  const handleBlur = () => setPaused(false);

  return (
    <div className="py-12">
        <h1 className='w-full text-center items-center text-6xl font-semibold text-white py-5'>Trusted by startups and enterprises.</h1>
         <h1 className='w-full text-center items-center text-md text-white py-5'>Discover the power of our product through real stories.</h1>

      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div
          className="relative overflow-hidden"
          aria-label="Testimonials carousel"
          role="region"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <div
            ref={trackRef}
            className="flex gap-6 items-stretch"
            style={{
              animation: paused ? 'none' : `marquee ${speed}s linear infinite`,
            }}
          >
            {doubled.map((it, idx) => (
              <div key={idx} className="flex-shrink-0">
                <CardTestimoni
                  quote={it.quote}
                  avatar={it.avatar}
                  name={it.name}
                  role={it.role}
                  companyLogo={it.companyLogo}
                />
              </div>
            ))}
          </div>

 
         
        </div>
      </div>

  <style jsx global>{`
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .relative.overflow-hidden > .flex {
      animation: none !important;
    }
  }
`}</style>

    </div>
  );
}
