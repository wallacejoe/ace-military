import Header from "@/app/components/header/page";
import Footer from "@/app/components/footer/page";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout
