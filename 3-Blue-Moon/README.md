# Wedding invite (no framework, no build)
New client = copy this folder, edit `config.js`, replace files in `assets/`, upload to Netlify / Cloudflare Pages / any static host.
Test locally: `python3 -m http.server` (not by double-clicking). The page has fallbacks, so it runs before the art exists.

assets/ (exact names):
- first-frame.jpg  9:16 closed envelope, seal reads TAP TO OPEN (video first frame)
- open.mp4         10s, no audio, 720px wide, H.264
- hero.jpg         the video's EXACT last frame
- page-bg.jpg      paper + side flower borders, empty centre, tiles vertically
- header.png / footer.png  wide floral banners (~768x267), empty centre
- music.mp3        licensed background track
- gallery photos (optional)

RSVP: `rsvp.whatsapp` (digits) and/or `rsvp.endpoint`. Colours: `theme`. Fonts: Google Fonts link in index.html + --fn/--fh/--fb/--fd/--fa in style.css.
