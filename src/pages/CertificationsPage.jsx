import Certifications from '../components/Certifications.jsx';
import PageNav from '../components/PageNav.jsx';

export default function CertificationsPage() {
  return (
    <>
      <Certifications />
      <PageNav current="/certifications" />
    </>
  );
}
