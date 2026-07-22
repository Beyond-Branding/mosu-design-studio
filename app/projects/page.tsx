import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProjectsHeader from "@/components/projects/ProjectsHeader";
import FilterBar from "@/components/projects/FilterBar";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <ProjectsHeader />
      <FilterBar />
      <ProjectsGrid />
      <Footer />
    </>
  );
}