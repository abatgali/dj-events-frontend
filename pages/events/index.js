import EventItem from '@/components/EventItem';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function EventsPage({events}) {
   console.log(events);
  return (
      <Layout>
          <h1>All Events</h1>
          {events.length === 0 && <h3>No events to show</h3>}

          {events.map(evt => (
              <EventItem key={evt.id} evt={evt} />
          )
          )}

      </Layout>
    
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${API_URL}/events/?[populate]=*`);
    const events = await res.json();
    

    return {
      props: {events: events.data}
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { events: [] },
    };
  }
}