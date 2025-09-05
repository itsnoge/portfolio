import { SectionHeader } from '@/components/SectionHeader';
import ProjectList from '@/components/ProjectList';

export default function ProjectsPage() {
  return (
    <div>
      <SectionHeader
        title='Selected Work.'
        description='A curated selection of projects that showcase my passion for clean code, modern technologies, and building purposeful digital experiences.'
      />
      <ProjectList />
    </div>
  );
}
