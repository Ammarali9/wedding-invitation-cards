/* ============================================================
   EDIT ONLY THIS FILE to change names, dates, venues, etc.
   Keep the quotes "" and commas , exactly as they are.
   Dates:  "YYYY-MM-DD"   Times: 24-hour "HH:MM" (19:00 = 7:00 PM)
   ============================================================ */
const INVITE = {
  // ---- Couple ----
  groom: { name: "Usman", urdu: "دولہا کا نام", degree: "12 Fail", parents: "Mr. & Mrs. Mukhtar" },
  bride: { name: "Laiba", urdu: "دلہن کا نام", degree: "Fs.c", parents: "Mr. & Mrs. Ijaz" },

  // ---- Main date (used for scratch-reveal + countdown) ----
  weddingDate: "2026-12-18T19:00:00",

  // ---- Text ----
  intro: "Together with their families, we cordially invite you to celebrate the wedding of",
  quote: {
    urdu: "اور اس کی نشانیوں میں سے ہے کہ اس نے تمہارے لیے تمہی میں سے جوڑے بنائے",
    english: "And among His signs is that He created for you mates from among yourselves.",
    source: "Surah Ar-Rum 30:21"
  },

  // ---- Events (add, delete or reorder freely) ----
  events: [
    { title: "Mehndi", urdu: "مہندی", icon: "🌿", date: "2026-12-16", time: "19:00",
      venue: "Venue Name (sample)", address: "Street, Area, City", maps: "https://maps.google.com" },
    { title: "Barat", urdu: "بارات", icon: "🎊", date: "2026-12-18", time: "19:00",
      venue: "Venue Name (sample)", address: "Street, Area, City", maps: "https://maps.google.com" },
    { title: "Walima", urdu: "ولیمہ", icon: "🍽️", date: "2026-12-19", time: "20:00",
      venue: "Venue Name (sample)", address: "Street, Area, City", maps: "https://maps.google.com" }
  ],

  // ---- RSVP: replies open WhatsApp. Number with country code, no + or spaces ----
  rsvp: { whatsapp: "+923006442952", headline: "Will you join our big day?" },

  // ---- "With best compliments from" ----
  compliments: ["Mr. Ali", "Miss. Amreen", "Miss. Samreen"],

  // ---- Music: put an mp3 next to index.html and name it here ("" = no music) ----
  music: "music.mp3",

  // ---- Videos ----
  // intro: Plays completely automatically on "Open" click ("input_1.mp4")
  // hero: Video scrubbed by page scroll ("input_2.mp4", "story.mp4", or "hero.mp4")
  // poster: Image displayed when the scroll video reaches the end ("curtains_closed.png")
  video: {
    intro: "input_1.mp4",
    hero: "story.mp4",
    poster: "last_frame.jpg"
  },

  // ---- Colors ----
  theme: { ivory: "#fbf6ee", parch: "#f2e8d6", wine: "#5a1530", burg: "#7b1e3f", gold: "#b8923a", gold2: "#e2c97e", ink: "#3b1a26" },

  // ---- Footer credit (set to "" to hide) ----
  credit: "M. Ammar Ali"
};
