import Header from "@/app/components/header/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // applies to all pages in dashboard directory
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
