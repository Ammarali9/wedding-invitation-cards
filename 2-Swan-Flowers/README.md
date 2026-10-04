# Wedding invite kit (no framework, no build)
New client = copy this folder, edit `config.js`, replace files in `assets/`, upload to Netlify / Cloudflare Pages.

Assets (all optional while testing; the page has fallbacks):
- first-frame.jpg  9:16, closed envelope with seal reading TAP TO OPEN (video's first frame)
- open.mp4         Flow video, 8s, no audio, 720px wide (ffmpeg -i in.mp4 -an -vf scale=720:-2 -c:v libx264 -crf 26 -movflags +faststart open.mp4)
- hero.jpg         the video's EXACT last frame (ffmpeg -sseof -0.1 -i in.mp4 -frames:v 1 hero.jpg)
- page-bg.jpg      paper texture with flower borders left/right, centre empty, tiles vertically
- corner.png       optional rose cluster for the footer (transparent)
- music.mp3        background track
Colors: config.js > theme. Fonts: change the Google Fonts link in index.html + --fh/--fb/--fn/--fd/--fa in style.css.
RSVP: whatsapp number (country code, no +) and/or `endpoint` (Google Apps Script / n8n webhook URL).
Test locally with a server (e.g. `python3 -m http.server`), not by double-clicking.
