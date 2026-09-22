import LeftSidebar from "@/components/organisms/LeftSidebar";
import ProfileSection from "@/components/organisms/ProfileSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";
import EducationSection from "@/components/organisms/EducationSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import SocialSidebar from "@/components/organisms/SocialSidebar";
import Footer from "@/components/organisms/Footer";

export default function PortfolioLayout() {
  return (
    <div className="min-h-screen bg-gray-50 lg:h-screen lg:overflow-hidden">
      <div className="mx-auto grid min-h-screen max-w-[1600px] lg:h-screen lg:grid-cols-[280px_minmax(0,1fr)_80px]">
        {/* Menú izquierdo */}
        <aside className="border-b border-gray-200 lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r">
          <LeftSidebar />
        </aside>

        {/* Contenido central */}
        <main className="min-w-0 lg:h-screen lg:overflow-y-auto">
          <div className="px-6 py-8 md:px-10 lg:px-12">
            <div className="mx-auto max-w-5xl space-y-12">
              <ProfileSection />
              <KnowledgeSection />
              <EducationSection />
              <PortfolioSection />
              <Footer />
            </div>
          </div>
        </main>

        {/* Redes sociales */}
        <aside className="hidden border-l border-gray-200 lg:flex lg:h-screen lg:items-start lg:justify-center lg:pt-10">
          <div className="sticky top-10">
            <SocialSidebar />
          </div>
        </aside>
      </div>

      {/* Redes sociales en dispositivos pequeños */}
      <div className="border-t border-gray-200 bg-white p-4 lg:hidden">
        <SocialSidebar />
      </div>
    </div>
  );
}