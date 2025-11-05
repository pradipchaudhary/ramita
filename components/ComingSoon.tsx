"use client";

import Image from "next/image";

export default function ComingSoon() {
  return (
    <main className="flex-center flex-col min-h-screen text-center px-6">
      {/* Logo */}
      <div className="mb-6 fade-in">
        <Image
          src="/logo.png"
          alt="Ramita Beauty Parlor Logo"
          width={230}
          height={100}
          className="mx-auto"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-elegant text-[var(--color-primary)] mb-3 fade-in">
        Coming Soon
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-xl mx-auto leading-relaxed fade-in">
        Ramita Beauty Parlor — A premier beauty and wellness center dedicated to
        enhancing your natural elegance. Stay tuned for our beautifully designed
        online experience.
      </p>

      {/* Footer */}
      <div className="footer">
        © {new Date().getFullYear()} Ramita Beauty Parlor. All Rights Reserved.
      </div>
    </main>
  );
}
