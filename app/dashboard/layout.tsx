import Header from "@/app/components/header/page";
import Footer from "@/app/components/footer/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // applies to all pages in dashboard directory
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
