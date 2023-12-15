import MainNavbar from "./MainNavbar";
import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <div className="sticky left-0 right-0 top-0 z-40">
      <MobileNav />
      <MainNavbar />
    </div>
  );
}
