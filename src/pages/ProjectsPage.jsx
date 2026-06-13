import Projects from '../components/Projects.jsx';
import PageNav from '../components/PageNav.jsx';

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <PageNav current="/projects" />
    </>
  );
}
