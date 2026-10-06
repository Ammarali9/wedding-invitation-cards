# Sikandar card - asset prompts (Moonlit Balcony / Powder Blue & Ivory)
Scene: tap seal -> light bursts from the envelope -> camera glides forward onto a balcony over a coastal bay -> a huge pearl-white moon descends from the sky and comes close, lighting the sea and a palace on the shore.
Generate in this order: 1 end frame -> 2 first frame -> 3 video -> 4 page bg -> 5 header -> 6 footer (use the end frame as style reference for 2-6). Drop files into `assets/` with the exact names shown.

**LOCK (end of every image prompt):** white roses, jasmine, pale blue hydrangea, baby's breath and eucalyptus sprigs, champagne-gold accents, soft powder-blue paper (#dce8f2), soft moonlight and pearl glow, luxury wedding stationery, painterly soft focus, no people, no extra text.

## 1. End frame -> `hero.jpg` (9:16, 1080x1920)
Symmetrical, eye-level view from a carved ivory-stone balcony with arched columns, looking out over a calm coastal bay at twilight. At the far shore, a beautiful ivory palace with domes, slender minarets and glowing golden windows, softly lit. A huge, close, pearl-white moon hangs low over the horizon behind the palace, its glow and long reflection spreading across the sea. Composition: ornate arch frame at the top 12%; the 12-42% zone is a calm, EMPTY, softly luminous powder-blue twilight sky reserved for text (no stars, no clouds, no moon); the moon and palace sit at 45-68%; the sea and reflection 68-85%; the balcony balustrade across the bottom with white roses and jasmine in the bottom corners, nothing in the centre. [LOCK]

## 2. First frame -> `first-frame.jpg` (9:16, 1080x1920)
Straight-on flat view of a closed ivory (#fbf9f3) cotton-paper envelope filling the whole frame edge to edge, no table, no background. Two long V-shaped flap lines meet at the exact centre. Cream-on-cream embossed jasmine and crescent-moon relief at top and bottom. At the exact centre a large dusty steel-blue (#2f4a6b) wax seal with an embossed border, the words "TAP TO OPEN" clearly engraved in champagne-gold capital serif letters inside it. Below it, small engraved "YOU ARE INVITED" between two tiny diamonds. Even soft lighting, subtle paper grain, symmetrical. [LOCK]

## 3. Video -> `open.mp4` (frames to video: first = #2, last = #1; 9:16, 8s, no audio)
Slow cinematic push-in. The wax seal glows with soft warm light rays, then lifts gently away. The envelope flaps fold open, revealing blinding golden-white light with floating sparkles. The light blooms and the camera glides through the opening into a grand arched palace hallway, past nested ivory arches, a polished marble floor and arrangements of white roses and pale blue hydrangea, toward a final arched opening where a huge pearl-white moon descends slowly from the sky, growing larger and closer behind the ivory palace across the coastal bay. Soft ripples shimmer on the sea as the camera settles on the balcony in the final composition. Smooth, elegant, no cuts, no camera shake, no people. The last frame must match the end image exactly.
Negative: text changes, watermark, flicker, extra objects, people, shaky camera, birds, boats.
Generate 4 versions; pick the one whose moon and palace land closest to the end frame, then:
`ffmpeg -i flow.mp4 -an -vf scale=720:-2 -c:v libx264 -crf 26 -movflags +faststart open.mp4`
`ffmpeg -sseof -0.1 -i flow.mp4 -frames:v 1 hero.jpg` (hero.jpg MUST be the video's last frame)

## 4. Page background -> `page-bg.jpg` (tall 1080x3840 or 9:16)
Flat front-facing handmade cotton paper in soft powder blue (#dce8f2) with visible fibres and subtle grain everywhere. A vertical floral border down the LEFT and RIGHT edges only, each about 13% of the width: white roses, jasmine, pale blue hydrangea, baby's breath and eucalyptus, dense at the outer edge fading lighter inward, matching the balcony flowers in the hero. The centre 72% is empty paper: no flowers, lines or shadows. Seamless vertical tiling. [LOCK]

## 5. Header -> `header.png` (4:3, e.g. 1600x1200)
4:3 landscape image of handmade powder-blue (#dce8f2) cotton paper with visible fibres and subtle grain. Lush floral clusters of white roses, jasmine, pale blue hydrangea, baby's breath and eucalyptus sprigs with champagne-gold accents cascade inward from the TOP-LEFT and TOP-RIGHT corners, dense at the corners and thinning toward the centre. The centre 55% of the width and the whole bottom third are empty plain paper, with no flowers, lines, borders or shadows, so the bottom edge fades cleanly into plain paper. Symmetrical left-right. Soft moonlight and pearl glow, luxury wedding stationery, painterly soft focus, no people, no extra text.

## 6. Footer -> `footer.png` = `header.png` flipped vertically (top-to-bottom mirror, not rotated)
No separate prompt. Flipping keeps left and right unchanged, so the flowers rise from the BOTTOM corners and the edge colours still match `page-bg.jpg`. (The gold lines above the header and below the footer are drawn by the site's CSS.)

## 7. Music -> `music.mp3` (under ~3 MB)
60-90s seamless loop: soft piano and strings with a gentle santoor, slow nikah-style instrumental, calm and romantic; optional faint sea-wave ambience. Must be licensed/royalty-free - check the licence.
