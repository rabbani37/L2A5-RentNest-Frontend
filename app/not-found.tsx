"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-gray-950 px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-xl font-extrabold tracking-widest text-white md:text-9xl">
          404
        </h1>

        <div className="mt-4 h-1 w-24 rounded-full bg-green-800 mx-auto" />

        <h2 className="mt-8 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="p-2 inline-flex items-center justify-center gap-2 rounded-xl bg-green-800  font-semibold text-white transition hover:bg-green-800"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex p-2 items-center justify-center gap-2 rounded-xl border w border-slate-700  font-semibold text-gray-300 transition hover:border-slate-500 hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}