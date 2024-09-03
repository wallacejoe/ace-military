import Header from "@/app/components/header/page";
import Footer from "@/app/components/footer/page";
import Sidenav from "@/app/components/sidenav/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // applies to all pages in dashboard directory
    <div>
      <Header />
      <div className="flex w-full">
        <Sidenav />
        <div className="w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
