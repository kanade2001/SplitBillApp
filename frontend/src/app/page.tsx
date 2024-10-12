import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h2>Links to other pages</h2>
        <ul>
          <li>
            <Link href="/trip/123">/trip/123</Link>
          </li>
          <li>
            <Link href="/user">/user</Link>
          </li>
          <li>
            <Link href="/user/login">/user/login</Link>
          </li>
          <li>
            <Link href="/user/signup">/user/signup</Link>
          </li>
          <li>
            <Link href="/debug">/debug</Link>
          </li>
        </ul>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/kanade2001/SplitBillApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
      </footer>
    </div>
  );
}
