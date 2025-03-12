import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-gray-950 h-screen">
      <div className="flex justify-center w-full h-full">
        <Image
          src="/landingLarge.png"
          alt="Landing Page Image"
          width={150}
          height={150}
          priority
          className="relative max-w-fit w-full max-h-fit"
        />
        <Link
          href="/dashboard"
          className="relative right-1/3 top-16 w-fit h-fit rounded-lg bg-black bg-opacity-45 px-6 py-3 text-white transition-colors hover:bg-black hover:bg-opacity-90 md:text-base"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
