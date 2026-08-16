"use client";
import { asset } from "@/lib/asset";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MediaSlot from "@/components/MediaSlot";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-cream min-h-[calc(100vh-142px)] py-12 md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* LEFT: product collage */}
          <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[560px] md:h-[640px]">
            {/* Big tin */}
            <div className="col-span-4 row-span-6 relative">
              <Image
                src={asset("/media/best-4-minty-pudhina-makhana.png")}
                alt="Minty Pudhina Makhana"
                fill
                sizes="(max-width: 768px) 60vw, 40vw"
                className="object-contain animate-float"
              />
            </div>
            {/* Small tin top-right */}
            <div className="col-span-2 row-span-3 relative">
              <Image
                src={asset("/media/best-1-rock-salted-makhana.png")}
                alt="Rock Salted Makhana"
                fill
                sizes="20vw"
                className="object-contain animate-float"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
            {/* Bowl / bag bottom-right */}
            <div className="col-span-2 row-span-3 relative">
              <MediaSlot
                label="Makhana in a bowl"
                variant="transparent"
                aspect=""
                fit="contain"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* RIGHT: login card */}
          <div className="max-w-[420px] mx-auto lg:mx-0 w-full">
            <h1 className="font-serif text-[36px] md:text-[42px] text-center text-ink leading-none">
              Login
            </h1>
            <p className="mt-4 text-center text-[13px] text-ink-70 leading-[1.7]">
              Enter your email to log in to your Mithila account. Your
              subscriptions stay with you.
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-12 px-5 rounded-full bg-cream text-[13px] text-ink placeholder:text-ink-40 border border-ink-20 focus:outline-none focus:border-bronze"
                />
              </label>
              <button
                type="submit"
                className="w-full h-12 rounded-full bg-bronze text-cream text-[12px] tracking-[0.22em] uppercase hover:bg-bronze-deep transition"
              >
                Login
              </button>
              <div className="flex items-center justify-between text-[12px] pt-2">
                <Link
                  href="/"
                  className="text-ink-70 hover:text-ink transition-colors"
                >
                  Cancel
                </Link>
                <Link
                  href="#"
                  className="text-ink-70 hover:text-ink transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="pt-3 text-center">
                <Link
                  href="#"
                  className="text-[12px] text-ink hover:text-script transition-colors"
                >
                  Manage subscriptions
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
