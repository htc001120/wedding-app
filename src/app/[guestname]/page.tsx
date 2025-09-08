import { HomeView } from '@/sections';
import { notFound } from 'next/navigation';

interface GuestPageParams {
  params: {
    guestname: string;
  };
}

const guestData: Record<string, string> = {
  'john-doe': 'John and Jane',
  'sarah-smith': 'Sarah and Michael',
};

export default function GuestPage({ params }: GuestPageParams) {
  const { guestname } = params;

  // You would typically use this guestname to fetch data from a database
  // For this example, we'll use a hardcoded map

  const displayName = guestData[guestname];

  // If the guestname isn't in your data, show a 404 page
  if (!displayName) {
    notFound();
  }

  return <HomeView guest={displayName} />;
}
