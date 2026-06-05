import { WeddingEvent, GuestWish } from './types';

export const COUPLE = {
  groom: {
    firstName: 'मोहित',
    fullName: 'मोहित हिवाळे',
    parents: 'श्री. आणि श्रीमती हिवाळे',
    bio: 'करुणा, शहाणपण आणि परस्पर सहकार्यावर आधारित सुसंवादी जीवन घडवण्यावर विश्वास ठेवणाऱ्या एका महत्त्वाकांक्षी आणि समर्पित व्यक्तीला, कोमलच्या रूपात आपला योग्य जीवनसाथी सापडला आहे.'
  },
  text: 'मोहित आणि कोमल',
  bride: {
    firstName: 'कोमल',
    fullName: 'कोमल राऊत',
    parents: 'श्री. आणि श्रीमती राऊत',
    bio: 'सजगता, ज्ञान आणि प्रेमळ कृपेने परिपूर्ण, एक महत्त्वाकांक्षी आणि शांत आत्मा. ती मोहितसोबत धम्म, प्रेम आणि विकासाच्या या सुंदर आयुष्यभराच्या प्रवासाला सुरुवात करण्यास उत्सुक आहे.'
  },
  weddingDate: '2026-06-19T19:11:00', // Set to June 19, 2026 at 7:11 PM as requested
  locationText: 'महाराज लॉन्स, जाफ्राबाद, जालना',
};

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'haldi',
    title: 'हळद समारंभ',
    date: 'गुरुवार, १८ जून, २०२६',
    time: 'सकाळी १०:०० पासून पुढे',
    venueName: 'विश्वास नगर',
    address: 'चिखली रोड, बुलडाणा, महाराष्ट्र',
    mapUrl: 'https://maps.google.com/?q=Vishwas+Nagar+Chikhali+road+Buldana',
    description: 'चला, चैतन्यमय पिवळा रंग आणि आनंदी हास्यांची उधळण करूया! सुवासिक हळदीचा लेप, जलरंग आणि मनमोहक आशीर्वादांनी वधू-वरांना न्हाऊ घालण्यासाठी आमच्यात सामील व्हा. पेहराव: हळदी पिवळा / प्रसन्न सणाचा.',
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
    title: 'पवित्र बौद्ध विवाह आणि वंदना',
    date: 'शुक्रवार, १९ जून, २०२६',
    time: 'सायंकाळी ०७:११',
    venueName: 'महाराजा लॉन्स',
    address: 'जाफराबाद, जालना, महाराष्ट्र',
    mapUrl: 'https://maps.google.com/?q=Maharaja+Lawns+Jafrabad+Jalna',
    description: 'मंगल सुत्ताच्या दिव्य पठणाखाली आणि त्रिरत्नांच्या (बुद्ध, धम्म, संघ) पवित्र आशीर्वादाने, आम्ही आमच्या आजीवन व्रतांची शपथ घेऊ आणि आमच्या शुभ मिलनाचा सोहळा साजरा करू. त्यानंतर भव्य शाही भोजनाचा कार्यक्रम होईल. पेहराव: पारंपरिक शाही पोशाख / शेरवानी आणि साड्या.',
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
    title: 'भव्य स्वागत समारंभ',
    date: 'शनिवार, २० जून, २०२६',
    time: 'दुपारी ०४:०० पासून पुढे',
    venueName: 'रामजी लॉन्स',
    address: 'चिखली रोड, बुलडाणा, महाराष्ट्र',
    mapUrl: 'https://maps.google.com/?q=Ramaji+Lawns+Chikhali+road+Buldana',
    description: 'आनंद आणि कृतज्ञतेची संध्या! पती-पत्नी म्हणून आपली पहिली संध्याकाळ दिव्य संगीत, कौटुंबिक शुभेच्छा आणि भव्य मेजवानीसह साजरी करा. पेहराव: इंडो-वेस्टर्न / फॉर्मल्स.',
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
