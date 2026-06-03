export interface WeddingEvent {
  id: string;
  title: string;
  time: string;
  date: string;
  venueName: string;
  address: string;
  mapUrl: string;
  description: string;
  colorTheme: {
    bg: string;
    border: string;
    text: string;
    accent: string;
    cardBg: string;
  };
}

export interface RSVPResponse {
  id: string;
  fullName: string;
  attendingEvents: string[]; // ids of events: haldi, wedding, reception
  guestCount: number;
  dietaryPreference: 'veg' | 'non-veg' | 'any';
  phone: string;
  wishes: string;
  submittedAt: string;
}

export interface GuestWish {
  id: string;
  senderName: string;
  relationship: string;
  message: string;
  timestamp: string;
}
