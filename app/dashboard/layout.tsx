import Header from "@/app/components/header/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // applies to all pages in dashboard directory
    <div>
      <div className="">
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
}
