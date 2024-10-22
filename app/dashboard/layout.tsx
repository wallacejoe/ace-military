import Header from "@/app/components/header/page";
import Footer from "@/app/components/footer/page";
import Sidenav from "@/app/components/sidenav/page";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="flex w-full">
        <Sidenav />
        <div className="w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
