import { WeddingEvent, GuestWish } from './types';

export const COUPLE = {
  groom: {
    firstName: 'Mohit',
    fullName: 'Mohit Hiwale',
    parents: 'Mr. & Mrs. Hiwale',
    bio: 'An aspiring and dedicated mind who believes in building a harmonious life of compassion, wisdom, and mutual support, finding his perfect life partner in Komal.'
  },
  text: 'Mohit & Komal',
  bride: {
    firstName: 'Komal',
    fullName: 'Komal Raut',
    parents: 'Mr. & Mrs. Raut',
    bio: 'An aspiring and serene soul filled with mindfulness, wisdom, and warm-hearted grace. She is looking forward to beginning this beautiful lifetime journey of Dhamma, love, and growth with Mohit.'
  },
  weddingDate: '2026-06-19T19:11:00', // Set to June 19, 2026 at 7:11 PM as requested
  locationText: 'Maharaja Lawns, Jafrabad, Jalna',
};

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'haldi',
    title: 'Haldi Ceremony',
    date: 'Thursday, June 18, 2026',
    time: '10:00 AM onwards',
    venueName: 'Vishwas Nagar',
    address: 'Chikhali road, Buldana, Maharashtra',
    mapUrl: 'https://maps.google.com/?q=Vishwas+Nagar+Chikhali+road+Buldana',
    description: 'Let us splash vibrant yellow and joyful smiles! Join us in bathing the bride and groom under fragrant turmeric paste, water-colors, and lighthearted blessings. Dress code: Haldi Yellow / Sunny Festive.',
    colorTheme: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-800',
      accent: '#EAB308', // yellow-500
      cardBg: 'from-amber-50 to-orange-50'
    }
  },
  {
    id: 'wedding',
    title: 'The Sacred Buddhist Wedding & Vandana',
    date: 'Friday, June 19, 2026',
    time: '07:11 PM onwards',
    venueName: 'Maharaja Lawns',
    address: 'Jafrabad, Jalna, Maharashtra',
    mapUrl: 'https://maps.google.com/?q=Maharaja+Lawns+Jafrabad+Jalna',
    description: 'Conducted under the divine chanting of the Mangala Sutta and holy blessings of the Triple Gem (Buddha, Dhamma, Sangha), we will pledge our lifetime vows and celebrate our auspicious union. Followed by a grand Royal Dinner. Dress code: Traditional Royal Ethnic / Sherwanis and Sarees.',
    colorTheme: {
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      text: 'text-rose-800',
      accent: '#E11D48', // rose-600
      cardBg: 'from-rose-50 to-red-50'
    }
  },
  {
    id: 'reception',
    title: 'Grand Reception & Feast',
    date: 'Saturday, June 20, 2026',
    time: '04:00 PM onwards',
    venueName: 'Ramaji Lawns',
    address: 'Chikhali road, Buldana, Maharashtra',
    mapUrl: 'https://maps.google.com/?q=Ramaji+Lawns+Chikhali+road+Buldana',
    description: 'An evening of joy and gratitude! Celebrate our first evening as husband and wife with divine music, family greetings, and an elaborate festive dinner. Dress code: Indo-Western / formals.',
    colorTheme: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-800',
      accent: '#059669', // emerald-600
      cardBg: 'from-emerald-50 to-teal-50'
    }
  }
];

export const INITIAL_WISHES: GuestWish[] = [
  {
    id: 'w-1',
    senderName: 'Nikhil & Priyanka',
    relationship: 'Close Friends',
    message: 'We are so excited to celebrate your day of love! Wishing Mohit and Komal a lifetime of happiness, peace, and shared laughter. This is going to be incredibly special!',
    timestamp: '2026-06-01T12:00:00Z',
  },
  {
    id: 'w-2',
    senderName: 'Umesh Kaka (Uncle)',
    relationship: 'Family',
    message: 'Blessings on your sacred vows under the light of Dhamma. May Mohit and Komal\'s joint path ahead be filled with peace, compassion (Karuna), and prosperity.',
    timestamp: '2026-06-02T08:30:00Z',
  }
];

export const AUDIO_TRACK_URL = 'https://archive.org/download/shehnai/shehnai.mp3'; // Pure classical wedding Shehnai melody
