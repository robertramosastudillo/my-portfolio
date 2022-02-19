import { Navbar } from "../Navbar/Navbar";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

export default Layout;
