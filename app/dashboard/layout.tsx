import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import Sidenav from "@/app/components/sidenav/sidenav";

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
