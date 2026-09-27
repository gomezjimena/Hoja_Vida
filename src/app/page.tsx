import { cvData } from "@/data/cv-data";
import LeftSidebar from "@/components/organisms/LeftSidebar";
import RightSidebar from "@/components/organisms/RightSidebar";
import ProfileSection from "@/components/organisms/ProfileSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";
import EducationSection from "@/components/organisms/EducationSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  const {
    profile,
    contact,
    languages,
    programmingLanguages,
    extraSkills,
    knowledge,
    education,
    projects,
    socialLinks,
  } = cvData;

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <LeftSidebar
        profile={profile}
        contact={contact}
        languages={languages}
        programmingLanguages={programmingLanguages}
        extraSkills={extraSkills}
      />

      {/* Contenido central: única sección con scroll vertical propio en desktop */}
      <main className="order-3 mx-auto w-full max-w-content flex-1 space-y-16 px-6 py-12 md:order-2 md:overflow-y-auto md:px-10 md:py-16">
        <ProfileSection profile={profile} />
        <KnowledgeSection knowledge={knowledge} />
        <EducationSection education={education} />
        <PortfolioSection projects={projects} />
        <Footer name={profile.name} />
      </main>

      <div className="order-2 md:order-3">
        <RightSidebar socialLinks={socialLinks} />
      </div>
    </div>
  );
}
