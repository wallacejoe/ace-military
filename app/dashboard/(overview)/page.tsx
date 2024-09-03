import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Page() {
  return (
    <main>
      <div className="flex flex-col items-center gap-5 my-20">
        <section className="w-10/12 border-2 border-black text-center bg-gray-500 text-white px-5 py-5">
          <h2>New Orders</h2>
          <p>Header and link to full message</p>
        </section>
        <section className="w-10/12 border-2 border-black text-center bg-gray-500 text-white px-5 py-5">
          <h2>High Priority Message</h2>
          <p>Header and link to full message</p>
        </section>
        <section className="w-10/12 border-2 border-black text-center bg-gray-500 text-white px-5 py-5">
          <h2>High Priority Message</h2>
          <p>Header and link to full message</p>
        </section>
      </div>
    </main>
  );
}
