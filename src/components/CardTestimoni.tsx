// components/CardTestimoni.tsx
'use client'
import React from 'react';

export interface TestimonialItem {
  quote?: string;
  avatar?: string;
  name?: string;
  role?: string;
  companyLogo?: string;
}

export default function CardTestimoni({
  quote = 'This is a sample testimonial. Replace this text with your real testimonial.',
  avatar = '/placeholder-avatar.jpg',
  name = 'Someone Name',
  role = 'Job Title, Company',
  companyLogo = '/placeholder-logo.svg',
}: TestimonialItem) {
  return (
    <article className="w-[320px] min-w-[320px] md:w-[360px] md:min-w-[360px] bg-transparent border border-gray-800 rounded-2xl p-6 flex flex-col justify-between transition hover:bg-[rgba(255,255,255,0.02)] hover:border-gray-700">
      <div>
        <p className="text-gray-200 text-base leading-relaxed mb-6">{quote}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-4">
       {avatar ? (
  <img
    src={avatar}
    alt={name}
    className="w-16 h-16 rounded-full mb-4 object-cover"
  />
) : null}


          <div>
            <div className="text-white font-semibold text-sm">{name}</div>
            <div className="text-gray-400 text-xs">{role}</div>
          </div>
        </div>

        <div className="ml-4">
          <img src={companyLogo} alt="company logo" className="w-20 h-auto object-contain" />
        </div>
      </div>
    </article>
  );
}
