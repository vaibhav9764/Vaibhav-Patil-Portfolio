import Publications from '../components/Publications.jsx';
import PageNav from '../components/PageNav.jsx';

export default function PublicationsPage() {
  return (
    <>
      <Publications />
      <PageNav current="/publications" />
    </>
  );
}
