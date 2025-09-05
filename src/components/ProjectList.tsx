import { sanityFetch } from '@/sanity/lib/live';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { ProjectCard } from './ProjectCard';

export default async function ProjectList() {
  const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });

  if (!projects || projects.length === 0) return null;

  return (
    <div className='mt-10 grid grid-cols-1 gap-2 md:grid-cols-2'>
      {projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </div>
  );
}
