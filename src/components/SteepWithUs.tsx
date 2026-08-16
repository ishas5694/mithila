"use client";

import Image from "next/image";
import { asset } from "@/lib/asset";

const socials = [
  { name: "Facebook", src: "/media/social-fb.svg", href: "#" },
  { name: "Instagram", src: "/media/social-ig.svg", href: "#" },
  { name: "LinkedIn", src: "/media/social-in.svg", href: "#" },
];

export default function SteepWithUs() {
  return (
    <section id="contact" className="relative bg-cream-soft/60">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="font-serif font-black text-[36px] md:text-[54px] uppercase text-ink leading-none tracking-[0.005em]">
            Steep with us
          </h2>
          <p className="mt-6 text-[14px] md:text-[15px] text-ink-70 max-w-[420px]">
            Get news stories, brewing tips, and special offers straight to your
            inbox.
          </p>
          <form
            className="mt-6 flex items-center gap-3 max-w-[420px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="name@email.com"
              className="flex-1 h-11 px-4 rounded-full bg-cream text-[13px] text-ink placeholder:text-ink-40 border border-ink-10 focus:outline-none focus:border-bronze"
            />
            <button
              type="submit"
              className="h-11 px-6 rounded-full bg-bronze text-cream text-[12px] tracking-[0.16em] uppercase hover:bg-bronze-deep transition"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex md:justify-end items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              className="w-11 h-11 rounded-full border border-ink flex items-center justify-center hover:bg-ink transition group"
            >
              <Image
                src={asset(s.src)}
                alt=""
                width={20}
                height={20}
                className="w-[18px] h-[18px] group-hover:invert transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
