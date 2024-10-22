import Search from "@/app/ui/search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personnel",
};

export default async function Page() {
  return (
    <main>
      <div className="flex flex-col items-center gap-5 my-20">
        <div className="w-3/5 border-2 border-black bg-gray-500 text-white px-5 py-2">
          <Search placeholder="Search Products..." />
        </div>
      </div>
    </main>
  );
}
