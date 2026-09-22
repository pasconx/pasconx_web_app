import { Navbar } from "@/components/navbar/navbar";
import { HireWithUs } from "@/components/employers/HireWithUs";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function HirePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="hire-page">
        <HireWithUs />
        <SiteFooter />
      </main>
    </>
  );
}
