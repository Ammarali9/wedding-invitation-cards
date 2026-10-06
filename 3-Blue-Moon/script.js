(()=>{
const C=window.INVITE,A=C.assets,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const R=C.reveal,V=C.verse,M=C.rsvp.maxGuests||10,rs=document.documentElement.style;
Object.entries(C.theme).forEach(([k,v])=>rs.setProperty('--'+k,v));
[['poster',A.poster],['hero',A.hero],['page',A.page],['corner',A.corner]].forEach(([k,v])=>rs.setProperty('--img-'+k,`url(${v})`));
const NAMES=C.bride?`${C.groom} & ${C.bride}`:C.groom;
document.title=`${NAMES} — Wedding Invitation`;
const fd=(d,o)=>new Intl.DateTimeFormat('en-GB',{timeZone:C.timezone,...o}).format(new Date(d));
const dateStr=d=>fd(d,{weekday:'long',day:'numeric',month:'long',year:'numeric'}),timeStr=d=>fd(d,{hour:'numeric',minute:'2-digit',hour12:true});
const ev=C.events.map((e,i)=>`<article class="card"><h2>${e.title}</h2>${e.titleAlt?`<p class="alt">${e.titleAlt}</p>`:''}<i class="dia"></i><p class="date">${dateStr(e.start)}</p><p class="time">${timeStr(e.start)}</p><p class="venue">${e.venue}</p><p class="addr">${e.address}</p><a class="btn fill" href="${e.map}" target="_blank" rel="noopener">View location</a><button class="btn line" data-cal="${i}">Add to calendar</button></article>`).join('');
const gal=C.gallery.length?`<section class="sec"><div class="gal">${C.gallery.map((s,i)=>`<img src="${s}" alt="" loading="lazy"${i?'':' class="on"'}>`).join('')}</div></section>`:'';
const info=C.info.map(i=>`<section class="sec"><h2>${i.title}</h2><p>${i.text}</p></section>`).join('');
const WS=C.wishes,wishes=WS&&WS.groups.length?`<section class="sec"><h2>${WS.title}</h2>${WS.groups.map(g=>`<div class="wg"><p class="wl">${g.label}</p>${g.names.map(n=>`<p class="wn">${n}</p>`).join('')}</div>`).join('')}</section>`:'';
const K=C.credit,KN=K&&(K.whatsapp||C.rsvp.whatsapp),thanks=K?`<section class="sec"><h2>${K.title}</h2><p>${K.text}</p><p class="by">${K.name}</p><p class="tg">${K.tagline}</p>${KN?`<button class="btn fill" id="tk" type="button">${K.thanksLabel||'Say thanks'}</button>`:''}${K.link?`<a class="btn line" href="${K.link}" target="_blank" rel="noopener">${K.linkLabel}</a>`:''}</section>`:'';
$('#app').innerHTML=`<header id="hero"><div class="petals"></div><div class="in">${C.bismillah?`<p class="bis" lang="ar">${C.bismillah}</p>`:''}<p class="sub">${C.intro}</p><i class="dia"></i><div class="names"><h1 class="nm">${C.groom}</h1>${C.bride?`<span class="amp">&amp;</span><h1 class="nm">${C.bride}</h1>`:''}</div></div><button class="scroll" type="button" aria-label="Scroll down"><span>Scroll<i></i></span></button></header>
<img class="hdr" src="${A.header||'assets/header.png'}" alt="" onerror="this.remove()">
<div class="paper">
${V&&V.ar?`<section class="sec"><p class="ar" lang="ar" dir="rtl">${V.ar}</p><p class="en">${V.en}</p><p class="ref">${V.ref}</p></section>`:''}
<section class="sec"><h2>${C.welcomeTitle||'Welcome'}</h2><p class="msg">${C.message}</p></section>
<section class="sec" id="reveal"><div class="petals"></div><h2 id="rvT">${R.title}</h2><div class="hw"><div class="heart"><div class="ans"><small>${R.label}</small><b>${dateStr(R.date)}</b><span>${timeStr(R.date)}</span></div><canvas id="sc"></canvas></div></div></section>
${gal}
<section class="sec"><h2>${C.countdown.title}</h2><div class="cd"><div><b>00</b><small>Days</small></div><div><b>00</b><small>Hours</small></div><div><b>00</b><small>Mins</small></div><div><b>00</b><small>Secs</small></div></div></section>
<section class="sec" id="ev"><h2>${C.eventsTitle}</h2>${ev}</section>${info}${wishes}
<section class="sec"><h2>RSVP</h2><form id="rsvp" class="card"><label>Your name<input name="nm" required autocomplete="name" placeholder="Full name"></label>
<label>Will you attend?<select name="att" required><option value="">Select…</option><option value="yes">Yes, I'll be there</option><option value="no">Sorry, I can't make it</option></select></label>
<label id="gw" hidden>Number of guests, including you (max ${M})<input type="number" name="guests" min="1" max="${M}" value="1" inputmode="numeric"></label>
<label>Message<textarea name="msg" rows="3" placeholder="Write your wishes…"></textarea></label><button class="btn fill">Send RSVP</button></form><p id="thx" hidden>${C.rsvp.thanks}</p></section>
${thanks}<footer class="sec end"><p class="cl">${C.closing}</p><p class="nm2">${C.bride?`${C.groom} &amp; ${C.bride}`:C.groom}</p></footer></div>
<img class="ftr" src="${A.footer||'assets/footer.png'}" alt="" loading="lazy" onerror="this.remove()">`;

// petals (hero loop + scratch burst)
function petals(box,n,burst){if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 for(let i=0;i<n;i++){const p=document.createElement('i');p.className='petal';
  p.style.cssText=`left:${Math.random()*100}%;--d:${6+Math.random()*6}s;--s:${8+Math.random()*10}px;--x:${(Math.random()-.5)*90}px;--h:${box.offsetHeight+40}px;animation-delay:${Math.random()*(burst?1:8)}s`;
  box.append(p);if(burst)setTimeout(()=>p.remove(),13000)}}

// intro: tap -> video plays (not skippable) -> hero
const intro=$('#intro'),vid=$('#vid'),aud=new Audio(A.music);aud.loop=true;
vid.src=A.video;vid.poster=A.poster;
const probe=new Image();probe.onerror=()=>intro.classList.add('nofirst');probe.src=A.poster;
let opened=false,fin=false;
const finish=()=>{if(fin)return;fin=true;intro.classList.add('out');document.body.classList.remove('locked');scrollTo(0,0);
 $('#hero').classList.add('show');setTimeout(()=>petals($('#hero .petals'),22),2500);setTimeout(()=>intro.remove(),1400)};
const open=()=>{if(opened)return;opened=true;intro.classList.add('playing');aud.play().catch(()=>{});
 vid.addEventListener('ended',finish);vid.addEventListener('error',()=>setTimeout(finish,1500));
 vid.play().catch(()=>setTimeout(finish,1500));setTimeout(finish,25000)}; // safety net only
intro.addEventListener('click',open);intro.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
const mus=$('#mus');mus.onclick=()=>{aud.muted=!aud.muted;mus.classList.toggle('off',aud.muted)};

// scratch to reveal
const cv=$('#sc'),x=cv.getContext('2d'),W=cv.width=260,H=cv.height=240;let down=false,n=0,done=false;
const g=x.createLinearGradient(0,0,W,H);g.addColorStop(0,'#c4ccd4');g.addColorStop(.5,'#97a3af');g.addColorStop(1,'#dde3e9');x.fillStyle=g;x.fillRect(0,0,W,H);
for(let i=0;i<600;i++){x.fillStyle=`rgba(255,255,255,${Math.random()*.6})`;x.fillRect(Math.random()*W,Math.random()*H,1.6,1.6)}
x.globalCompositeOperation='destination-out';
const check=()=>{const d=x.getImageData(0,0,W,H).data;let c=0,t=0;for(let i=3;i<d.length;i+=64){t++;if(!d[i])c++}
 if(c/t>.4){done=true;cv.classList.add('gone');$('.hw').classList.add('done');$('#rvT').textContent=R.doneTitle;petals($('#reveal .petals'),36,true)}};
const dot=e=>{const r=cv.getBoundingClientRect();x.beginPath();x.arc((e.clientX-r.left)*W/r.width,(e.clientY-r.top)*H/r.height,20,0,7);x.fill();if(!done&&++n%8==0)check()};
cv.onpointerdown=e=>{down=true;cv.setPointerCapture(e.pointerId);dot(e)};cv.onpointermove=e=>down&&dot(e);cv.onpointerup=cv.onpointercancel=()=>down=false;

// calendar (events only): chooser sheet: Google Calendar or Apple/Outlook (.ics)
const z=d=>new Date(d).toISOString().replace(/[-:]/g,'').split('.')[0]+'Z',ua=navigator.userAgent,droid=/Android/.test(ua),ios=/iPhone|iPad|iPod/.test(ua)||(/Macintosh/.test(ua)&&navigator.maxTouchPoints>1);
const addCal=e=>{const end=e.end||new Date(new Date(e.start).getTime()+108e5),title=`${e.title} - ${NAMES}`,loc=`${e.venue}, ${e.address}`,q=encodeURIComponent;
 const g='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+q(title)+'&dates='+z(e.start)+'/'+z(end)+'&location='+q(loc);
 const t=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Invite//EN','BEGIN:VEVENT','UID:'+z(e.start)+'-'+q(e.title)+'@invite','DTSTAMP:'+z(Date.now()),'DTSTART:'+z(e.start),'DTEND:'+z(end),'SUMMARY:'+title,'LOCATION:'+loc,'BEGIN:VALARM','TRIGGER:-P1D','ACTION:DISPLAY','DESCRIPTION:Reminder','END:VALARM','END:VEVENT','END:VCALENDAR'].join('\r\n');
 const m=document.createElement('div');m.className='cal';
 m.innerHTML=`<div class="calbox"><p>Add to calendar</p><a class="btn fill" href="${g}" target="_blank" rel="noopener">Google Calendar</a><a class="btn line" href="data:text/calendar;charset=utf-8,${q(t)}"${ios?'':` download="${e.title}.ics"`}>Apple / Outlook</a><button class="btn line" type="button">Cancel</button></div>`;
 m.onclick=ev=>{if(ev.target===m||ev.target.closest('.btn'))setTimeout(()=>m.remove(),400)};document.body.append(m)};
$$('[data-cal]').forEach(b=>b.onclick=()=>addCal(C.events[b.dataset.cal]));

// countdown + slideshow
const T=new Date(C.countdown.to).getTime(),cb=$$('.cd b');
const tick=()=>{const s=Math.max(0,Math.floor((T-Date.now())/1000));[s/86400,s%86400/3600,s%3600/60,s%60].forEach((v,i)=>cb[i].textContent=String(Math.floor(v)).padStart(2,'0'))};tick();setInterval(tick,1000);
const im=$$('.gal img');if(im.length>1){let k=0;setInterval(()=>{im[k].classList.remove('on');k=(k+1)%im.length;im[k].classList.add('on')},3500)}

// RSVP (guests 1..max)
const f=$('#rsvp');f.att.onchange=()=>$('#gw').hidden=f.att.value!=='yes';
f.guests.oninput=()=>{const v=parseInt(f.guests.value);if(v>M)f.guests.value=M;else if(v<1)f.guests.value=1};
f.onsubmit=e=>{e.preventDefault();const yes=f.att.value==='yes',d={name:f.nm.value.trim(),attending:f.att.value,guests:yes?Math.min(M,Math.max(1,parseInt(f.guests.value)||1)):0,message:f.msg.value.trim(),sent:new Date().toISOString()};
 if(C.rsvp.endpoint)fetch(C.rsvp.endpoint,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain'},body:JSON.stringify(d)}).catch(()=>{});
 if(C.rsvp.whatsapp)window.open(wa(C.rsvp.whatsapp)+'?text='+encodeURIComponent(`RSVP: ${d.name}\n${yes?'Attending, guests: '+d.guests:'Unable to attend'}\n${d.message}`),'_blank');
 f.hidden=true;$('#thx').hidden=false};

// WhatsApp helpers (digits only, so "+92 305..." also works)
const wa=n=>'https://wa.me/'+String(n).replace(/\D/g,'');
const tk=$('#tk');if(tk)tk.onclick=()=>window.open(wa(KN)+'?text='+encodeURIComponent(K.thanksMessage||`Assalamu Alaikum ${K.name}! I saw the wedding invitation of ${NAMES}. It is beautiful, thank you for creating it!`),'_blank');

// scroll-down pill: bobs after the intro, hides once the guest starts scrolling
$('.scroll').onclick=()=>scrollTo({top:$('#hero').offsetHeight,behavior:'smooth'});
addEventListener('scroll',()=>$('#hero').classList.toggle('moved',scrollY>40),{passive:true});

// scroll reveal: each section zooms in only when scrolled to
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
$$('.paper .sec:not(#ev),#ev h2,#ev .card').forEach(el=>{el.classList.add('rv');io.observe(el)});
})();
