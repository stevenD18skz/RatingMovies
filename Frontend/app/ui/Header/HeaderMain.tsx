"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeaderMain() {
  return (
    <header className="       backdrop-blur-md backdrop-saturate-150 items-center justify-center flex py-3">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={36}
          height={36}
          className="object-contain rounded-full"
        />

        <span className="text-2xl font-bold text-white tracking-tight">
          ONE<span className="text-[var(--red-light)]">Review</span>
        </span>
      </Link>
    </header>
  );
}
