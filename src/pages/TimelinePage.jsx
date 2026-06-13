import Timeline from '../components/Timeline.jsx';
import PageNav from '../components/PageNav.jsx';

export default function TimelinePage() {
  return (
    <>
      <Timeline />
      <PageNav current="/timeline" />
    </>
  );
}
