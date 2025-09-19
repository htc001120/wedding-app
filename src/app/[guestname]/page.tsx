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
  chung213: 'Mr & Mrs Lee',
  tree: 'Mr & Mrs Sun',
  lun: 'Mr & Mrs Kang',
  '7kan': 'Marc',
  kim815: 'Kim',
  matthew: 'Matthew',
  felixhui1108: 'Mr & Mrs Hui',
  richel1212: 'Helena & Ric',
  marksiu: 'Mark',
  reeve416: 'Reeve',
  jaslynn813: 'Jaslynn',
  pie920: 'Pie',
  karene927: 'Karene',
  mumdad: 'Mum & Dad',
  twinkie: 'Twinkie Lau',
  dicky: 'Dicky Tang',
  iris: 'Iris Chan',
  kaitlyn: 'Kaitlyn Tam',
  gigi: 'Gigi Lam',
  chesley: 'Chesley Yip',
  alan: 'Alan Cho',
  kayee: 'Kayee Tam',
  sharpay: 'Sharpay So',
  niki: 'Niki Chung',
  winky: 'Winky Chan',
  eunice: 'Eunice Siu',
  yuki: 'Yuki Fung',
  sina: 'Sina Fong',
  elaine: 'Elaine Li',
  cheche: 'Che Che',
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
