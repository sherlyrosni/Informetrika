/*
 * RuangData – Laboratorium Informetrika 16 Pertemuan
 * GitHub Pages-compatible static web app. No accounts, no server, no analytics.
 * Learning progress is stored only in this browser and can be exported by the student.
 */
(() => {
  'use strict';
  const SOURCE = window.RUANGDATA_CONTENT;
  if (!SOURCE) {
    document.getElementById('app').textContent = 'Konten tidak dapat dimuat. Pastikan content.js berada satu folder dengan index.html.';
    return;
  }

  const KEY = 'ruangdata-informetrika-2026-v1';
  const NEW_STATE = () => ({ schema: 1, name: 'Mahasiswa', sessions: {}, createdAt: new Date().toISOString() });
  const h = (value) => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const nfmt = n => Number(n).toLocaleString('id-ID', { maximumFractionDigits: 2 });
  const iconPaths = {
    home:'<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-6h6v6"/>',
    book:'<path d="M4 19.5V4.8A2 2 0 0 1 6 3h14v17H6a2 2 0 0 0 0 4h14"/><path d="M4 19.5A2 2 0 0 1 6 18h14"/>',
    database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
    chart:'<path d="M3 3v18h18"/><path d="m6 16 5-5 4 3 5-8"/>',
    flask:'<path d="M9 3h6M10 3v7l-6.5 9a2 2 0 0 0 1.6 3h13.8a2 2 0 0 0 1.6-3L14 10V3"/><path d="M7 16h10"/>',
    trophy:'<path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/>',
    info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7h.01"/>',
    arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
    check:'<path d="m4 12 5 5L20 6"/>',
    down:'<path d="m6 9 6 6 6-6"/>',
    download:'<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
    upload:'<path d="M12 21V9M7 14l5-5 5 5M4 3h16v5"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    reset:'<path d="M3 12a9 9 0 1 0 3-7M3 3v6h6"/>',
    clipboard:'<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4h6v-2H9zm-1 7h8m-8 5h6"/>',
    user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'
  };
  const ico = (key, size=18) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[key] || iconPaths.info}</svg>`;
  const byNo = no => SOURCE.sessions.find(s => s.no === Number(no));
  const defaultData = SOURCE.datasets;
  const app = document.getElementById('app');
  let state;
  try {
    const stored = JSON.parse(localStorage.getItem(KEY));
    state = stored && typeof stored === 'object' && stored.schema === 1 && stored.sessions && typeof stored.sessions === 'object' ? stored : NEW_STATE();
  } catch { state = NEW_STATE(); }
  let customDataset = null;
  let datasetId = SOURCE.datasets[0].id;
  let graphGroup = 'tahun', graphNumeric = 'sitasi', graphMethod='count', graphType='bar';
  let formulaTab = 'bradford';
  let formulaParams = { bradford:'15,12,10,8,7,6,6,5,4,4,4,4,3,3,3,3,2,2,2,2', c:'40', exponent:'2', k:'100', citations:'12,8,5,3,1' };
  let retaking = new Set();
  let currentRoute = '';
  let toastTimer = null;
  const storageOK = (() => { try { localStorage.setItem('__rd_test','ok');localStorage.removeItem('__rd_test');return true; } catch {return false;} })();
  const save = () => { if (storageOK) {try { localStorage.setItem(KEY,JSON.stringify(state)); } catch {toast('Penyimpanan lokal penuh; ekspor portofolio untuk cadangan.');}} };
  function wk(no) {
    if (!state.sessions[no] || typeof state.sessions[no] !== 'object') state.sessions[no] = {note:'',checked:{},attempts:[]};
    const x=state.sessions[no];
    if (!Array.isArray(x.attempts)) x.attempts=[];
    if (!x.checked || typeof x.checked !== 'object') x.checked={};
    if (typeof x.note !== 'string') x.note='';
    return x;
  }
  const latest = no => wk(no).attempts.at(-1);
  const done = no => wk(no).attempts.length>0;
  const doneCount = () => SOURCE.sessions.filter(s=>done(s.no)).length;
  const meanScore = () => {
    const scored=SOURCE.sessions.map(s=>latest(s.no)).filter(Boolean);
    return scored.length ? Math.round(scored.reduce((a,x)=>a+x.score,0)/scored.length) : null;
  };
  const pct = () => Math.round(100*doneCount()/16);
  function toast(msg) {
    document.querySelectorAll('.toast').forEach(t=>t.remove());
    const el=document.createElement('div');el.className='toast';el.role='status';el.textContent=msg;document.body.append(el);
    clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.remove(),3400);
  }
  function navigate(route) {
    const hash='#/'+route.replace(/^\/+|\/+$/g,'');
    if(location.hash===hash) render(); else location.hash=hash;
  }
  function current() {
    let part=decodeURIComponent(location.hash.replace(/^#\/?/,'')).trim();
    if (!part) part='dashboard';
    if(!/^(dashboard|pertemuan|laboratorium|portofolio|panduan|pertemuan\/\d+|kalkulator(?:\/(?:bradford|lotka|zipf|citation))?)$/.test(part)) part='dashboard';
    return part;
  }
  const navItems = [
    ['dashboard','Ringkasan','home'],['pertemuan','16 Pertemuan','book'],['laboratorium','Laboratorium Data','chart'],
    ['kalkulator','Kalkulator Rumus','flask'],['portofolio','Portofolio Belajar','trophy'],['panduan','Panduan & GitHub','info']
  ];
  function shell(inner, title) {
    let selected=currentRoute.split('/')[0];
    const side=navItems.map(([route,label,icon])=>`<button class="nav-link ${selected===route?'active':''}" data-nav="${route}" aria-current="${selected===route?'page':'false'}">${ico(icon)}<span>${h(label)}</span></button>`).join('');
    return `<aside class="sidebar" id="sidebar">
        <a class="brand" href="#/dashboard"><span class="brand-logo">R<span>.</span></span><span><b>RuangData</b><small>Laboratorium Informetrika</small></span></a>
        <div class="side-label">Ruang kerja</div><nav class="side-nav" aria-label="Navigasi utama">${side}</nav>
        <hr class="side-rule"><div class="side-label">KELAS AKTIF</div>
        <div class="side-course"><span class="tag">SEMESTER 16 PERTEMUAN</span><strong>Informetrika · Ilmu Perpustakaan</strong><p>${doneCount()} dari 16 asesmen diselesaikan</p><div class="tiny-progress"><span style="width:${pct()}%"></span></div></div>
        <div class="sidebar-bottom">Data latihan ilustratif · Progres disimpan hanya di browser ini.</div>
      </aside><div class="main-area"><header class="topbar">
        <div class="crumb"><button class="mobile-toggle" id="mobileMenu" aria-label="Buka menu">${ico('menu',21)}</button><span>RuangData</span><i>/</i><span>${h(title)}</span></div>
        <div class="top-actions"><span class="top-chip">Tahun Ajaran 2026/2027</span><button class="user-chip" id="editName" title="Atur nama panggilan">${h((state.name||'M').trim().charAt(0).toUpperCase())}</button></div>
      </header><main id="maincontent" class="content">${inner}</main><footer class="footer"><span>RuangData · Praktikum Informetrika 16 Pertemuan</span><span>Latihan mandiri · Tidak terhubung ke server penilaian</span></footer></div>`;
  }
  const heading=(k,title,desc,actions='')=>`<div class="page-heading"><div><div class="eyebrow">${h(k)}</div><h1>${h(title)}</h1><p>${h(desc)}</p></div>${actions}</div>`;
  const badge=(text,style='')=>`<span class="pill ${style}">${h(text)}</span>`;
  function heroSVG() {
    return `<svg viewBox="0 0 500 290" class="hero-art" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
       <g fill="none" stroke="#7c9c86" stroke-width="1.3" opacity=".38"><path d="M30 200 120 60 225 140 355 75 480 180 370 260 225 140 130 245 30 200"/><path d="M120 60 355 75 370 260 130 245 480 180M70 125 225 140 305 20 355 75 415 120"/></g>
       <g fill="#d0ae6d"><circle cx="120" cy="60" r="7"/><circle cx="355" cy="75" r="5"/><circle cx="480" cy="180" r="6"/><circle cx="130" cy="245" r="6"/></g>
       <g fill="#b8dfc4"><circle cx="30" cy="200" r="4"/><circle cx="225" cy="140" r="7"/><circle cx="370" cy="260" r="4"/><circle cx="305" cy="20" r="4"/><circle cx="415" cy="120" r="3"/></g></svg>`;
  }
  function dash() {
    const next = SOURCE.sessions.find(s=>!done(s.no)) || SOURCE.sessions[15];
    const latestList=SOURCE.sessions.filter(s=>done(s.no)).slice(-4).reverse();
    return `<div class="hero"><div class="herotxt"><div class="hero-kicker">LABORATORIUM DATA · INFORMETRIKA</div><h1>Dari data menjadi pemahaman yang bermakna.</h1><p>Belajar membaca pola publikasi, memilih visualisasi, menghitung indikator, dan menyusun kesimpulan berbasis bukti — bertahap selama 16 pertemuan.</p><div class="btn-row"><button class="btn primary" data-nav="pertemuan/${next.no}">Lanjut Pertemuan ${next.no} ${ico('arrow')}</button><button class="btn" data-nav="laboratorium">Jelajahi Dataset</button></div></div>${heroSVG()}</div>
      <div class="stat-grid"><div class="card stat-card"><span class="stat-label">Pertemuan tersedia</span><div class="stat-number">16 <small style="font-size:14px;color:#9aa99b">minggu</small></div><span class="stat-meta">Termasuk UTS dan UAS</span></div>
      <div class="card stat-card"><span class="stat-label">Asesmen dikerjakan</span><div class="stat-number">${doneCount()} <small style="font-size:14px;color:#9aa99b">/ 16</small></div><span class="stat-meta">Disimpan di perangkat ini</span></div>
      <div class="card stat-card"><span class="stat-label">Rerata kuis terakhir</span><div class="stat-number">${meanScore()===null?'—':meanScore()}<small style="font-size:14px;color:#9aa99b">${meanScore()===null?'':' / 100'}</small></div><span class="stat-meta">Bukan nilai resmi kuliah</span></div>
      <div class="card stat-card"><span class="stat-label">Dataset contoh</span><div class="stat-number">${defaultData.length}</div><span class="stat-meta">Semua merupakan data latihan</span></div></div>
      <div class="grid-two"><section class="card pad"><div class="section-header"><div><h2>Rencana belajar satu semester</h2><p>Belajar secara bertahap, dari korpus hingga proyek informetrika</p></div><button class="btn mini" data-nav="pertemuan">Lihat semua ${ico('arrow')}</button></div>
      <div class="week-list">${SOURCE.sessions.slice(0,7).map(s=>weekRow(s)).join('')}</div></section>
      <section class="card pad"><div class="section-header"><div><h2>Progres belajarmu</h2><p>${h(state.name)}, lanjutkan dari sesi yang terakhir</p></div>${badge(pct()+'%')}</div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct()}%"></div></div>
      <p class="help" style="margin:11px 0 24px">${doneCount()} dari 16 asesmen telah dikerjakan di perangkat ini.</p>
      <div class="section-header"><h3 style="margin:0">Lanjutan yang disarankan</h3></div>
      ${weekRow(next)}
      <div class="notice"><strong>Seluruh dataset adalah contoh pembelajaran.</strong><p>Skor awal, grafik, dan riwayat tidak menggambarkan hasil mahasiswa asli. Nilai baru muncul setelah kamu benar-benar mengerjakan kuis.</p></div>
      <div class="section-header"><h3 style="margin:0">Aktivitas tersimpan</h3></div>
      ${latestList.length ? latestList.map(s=>`<div style="border-bottom:1px solid var(--stroke);padding:12px 0"><strong style="font-size:12px">Pertemuan ${s.no} · ${h(s.title)}</strong><div class="help">Skor terakhir ${latest(s.no).score}/100 · ${new Date(latest(s.no).at).toLocaleDateString('id-ID')}</div></div>`).join('') : '<p class="help">Belum ada aktivitas. Mulailah Pertemuan 1.</p>'}
      </section></div>
      <div class="grid-two"><section class="card pad"><div class="section-header"><h2>Alat praktik tersedia</h2></div><div class="tool-grid"><button class="dataset-card" data-nav="laboratorium"><span class="dataset-icon">${ico('chart')}</span><strong>Eksplorasi Visual</strong><small>Dataset, filter, grafik, dan ekspor CSV</small></button><button class="dataset-card" data-nav="kalkulator"><span class="dataset-icon">${ico('flask')}</span><strong>Rumus Informetrika</strong><small>Bradford, Lotka, Zipf, dan h-index</small></button></div></section>
      <section class="card pad"><div class="section-header"><h2>Cara mengumpulkan tugas</h2></div><p style="color:#6d7f70;font-size:12.5px;line-height:1.9">Kerjakan aktivitas, simpan catatan belajar, lalu ekspor portofolio dalam format JSON/CSV. Unggah berkas dan laporan praktik ke SIPEJAR sesuai arahan dosen.</p><button class="btn light" data-nav="portofolio">Buka portofolio ${ico('arrow')}</button></section></div>`;
  }
  function weekRow(s) {
    const result=latest(s.no);
    return `<button class="week-row" data-nav="pertemuan/${s.no}"><span class="week-num">${String(s.no).padStart(2,'0')}</span><span><strong>${h(s.title)}</strong><small>${h(s.tag)} · ${s.quiz.length} soal</small></span><span class="right">${result?badge(result.score+'/100'):ico('arrow')}</span></button>`;
  }
  function listWeeks() {
    return `${heading('Rencana pembelajaran','16 Pertemuan Informetrika','Urutan praktik terstruktur untuk kelas Ilmu Perpustakaan. Setiap pertemuan memuat materi, langkah latihan, kuis, dan ruang refleksi.',`<button class="btn primary" data-nav="laboratorium">${ico('chart')} Buka Laboratorium</button>`)}
    <div class="notice"><strong>Penggunaan di kelas:</strong> Pertemuan 8 adalah UTS, pertemuan 16 adalah UAS. Kuis di situs ini merupakan latihan mandiri; dosen tetap menentukan instrumen dan penilaian resmi.</div>
    <div class="program-grid">${SOURCE.sessions.map(s=>`<article class="card program-card ${s.exam?'exam':''}"><span class="number">PERTEMUAN ${String(s.no).padStart(2,'0')}</span><h3>${h(s.title)}</h3><p>${h(s.description)}</p><footer><span>${done(s.no)?badge('Selesai'):badge(s.tag,s.exam?'gold':'gray')}</span><button class="btn mini" data-nav="pertemuan/${s.no}">${done(s.no)?'Tinjau':'Mulai'} ${ico('arrow')}</button></footer></article>`).join('')}</div>`;
  }
  function sessionPage(no) {
    const s=byNo(no); if(!s) return listWeeks();
    const w=wk(no), att=latest(no), showResult=!!att && !retaking.has(no);
    const obj=s.objectives.map(x=>`<li>${h(x)}</li>`).join('');
    const textSections=s.sections.map((x,i)=>`<div class="lesson-section"><h3>${String(i+1).padStart(2,'0')} · ${h(x.title)}</h3><p>${h(x.body)}</p></div>`).join('');
    const checklist=s.steps.map((txt,i)=>`<label class="step ${w.checked[i]?'checked':''}"><input type="checkbox" data-step="${i}" data-week="${s.no}" ${w.checked[i]?'checked':''}><span class="step-text">${h(txt)}</span></label>`).join('');
    const quizForm=s.quiz.map((q,qi)=>{
      const selected=showResult ? att.answers[qi] : -1;
      return `<div class="quiz-question"><h3>${qi+1}. ${h(q.question)}</h3><div class="quiz-choices">${q.options.map((op,oi)=>`<label class="quiz-choice ${showResult?(oi===q.correct?'correct':(selected===oi&&oi!==q.correct?'wrong':'')):''}"><input type="radio" name="q-${qi}" value="${oi}" ${showResult?'disabled':''} ${selected===oi?'checked':''}><span>${h(op)}</span></label>`).join('')}</div>${showResult?`<div class="quiz-feedback"><b>${selected===q.correct?'Tepat.':'Pembahasan:'}</b> ${h(q.explanation)}</div>`:''}</div>`;
    }).join('');
    const prev=no>1?`<button class="btn ghost" data-nav="pertemuan/${no-1}">← Pertemuan sebelumnya</button>`:'';
    const next=no<16?`<button class="btn light" data-nav="pertemuan/${no+1}">Pertemuan berikutnya ${ico('arrow')}</button>`:`<button class="btn light" data-nav="portofolio">Lihat portofolio ${ico('arrow')}</button>`;
    return `${heading('Modul / Pertemuan '+String(no).padStart(2,'0'),s.title,s.description,`<button class="btn" data-nav="pertemuan">${ico('book')} Daftar pertemuan</button>`)}
      <div class="btn-row" style="margin-bottom:17px">${badge(s.tag,s.exam?'gold':'')} ${badge(s.quiz.length+' soal kuis','gray')} ${att?badge('Skor terakhir '+att.score+'/100',''):badge('Belum dinilai','gray')}</div>
      <div class="cols-two"><div>
        <section class="card pad" style="margin-bottom:18px"><div class="section-header"><h2>Materi inti</h2></div><div class="lesson-sections">${textSections}</div></section>
        <section class="card pad" style="margin-bottom:18px"><div class="section-header"><h2>Langkah praktik</h2>${badge(Object.values(w.checked).filter(Boolean).length+'/'+s.steps.length+' langkah')}</div><div class="steps">${checklist}</div><div style="margin-top:16px"><button class="btn mini" data-nav="${s.tool==='explorer'?'laboratorium':'kalkulator/'+s.tool}">${ico('flask')} ${s.tool==='explorer'?'Buka Laboratorium Data':'Buka kalkulator terkait'}</button></div></section>
        <section class="card pad" id="quizSection"><div class="section-header"><div><h2>${s.exam?'Asesmen '+(s.no===8?'UTS':'UAS'):'Kuis formatif'}</h2><p>${s.quiz.length} pertanyaan · Pilih satu jawaban setiap pertanyaan</p></div></div>
          ${showResult?`<div class="quiz-result"><b>${att.score} / 100</b><p>Benar ${att.correct} dari ${s.quiz.length} · Dikerjakan ${new Date(att.at).toLocaleString('id-ID')} · Percobaan ke-${w.attempts.length}</p><button class="btn mini" data-retake="${no}">${ico('reset')} Kerjakan ulang</button></div>`:'<div class="notice gold">Jawaban baru dinilai setelah tombol <strong>Periksa jawaban</strong> ditekan. Pembahasan muncul setelahnya.</div>'}
          <div id="quizQuestions" data-quiz-week="${no}">${quizForm}</div>
          ${!showResult?`<button class="btn primary" data-submit-quiz="${no}">${ico('check')} Periksa jawaban</button>`:''}</section>
      </div><div>
        <section class="card pad" style="margin-bottom:18px"><div class="section-header"><h2>Tujuan pembelajaran</h2></div><ol class="objective-list">${obj}</ol></section>
        <section class="card pad" style="margin-bottom:18px"><div class="section-header"><h2>Tugas dan luaran</h2></div><div class="assignment"><strong>Latihan utama</strong><p>${h(s.assignment)}</p><strong>Yang dikumpulkan</strong><p>${h(s.deliverable)}</p></div><h3 style="margin-top:18px">Kriteria penilaian</h3><ul class="simple-list">${s.criteria.map(x=>`<li>${h(x)}</li>`).join('')}</ul>${s.reference?`<div class="notice"><b>Contoh acuan:</b> ${h(s.reference)}</div>`:''}</section>
        <section class="card pad"><div class="section-header"><h2>Catatan & refleksi</h2></div><label class="field-label" for="reflection">Apa yang kamu pahami dan masih perlu dipelajari?</label><textarea id="reflection" data-note="${no}" placeholder="Tulis hasil praktik, temuan, pertanyaan, atau tautan tugasmu (tanpa data pribadi sensitif).">${h(w.note)}</textarea><p class="help">Tersimpan di browser setelah teks diubah. Ekspor portofolio sebelum menghapus data browser.</p></section>
      </div></div><div class="btn-row" style="margin-top:20px;justify-content:space-between">${prev}${next}</div>`;
  }

  function allDatasets() {return customDataset ? [...defaultData,customDataset] : defaultData;}
  function activeDataset(){return allDatasets().find(d=>d.id===datasetId) || defaultData[0];}
  function isNumericField(rows, key) { const vals=rows.map(r=>r[key]).filter(x=>String(x??'').trim()!=='').slice(0,20);return vals.length>0 && vals.every(v=>Number.isFinite(Number(String(v).trim().replace(/\s/g,'')))); }
  function chartInfo(d) {
    const rows=d.rows || [];
    const fields=Object.keys(rows[0]||{});
    const numericFields=fields.filter(f=>isNumericField(rows,f));
    const groupFields=fields.filter(f=>new Set(rows.slice(0,100).map(r=>String(r[f]??''))).size>1);
    if(!groupFields.includes(graphGroup)) graphGroup=groupFields.find(f=>!numericFields.includes(f)) || fields[0] || '';
    if(!numericFields.includes(graphNumeric)) graphNumeric=numericFields[0] || '';
    const grouped=new Map();
    for (const row of rows) {
      const group=String(row[graphGroup]??'—').trim() || '(Kosong)';
      if (!grouped.has(group)) grouped.set(group,[]);
      grouped.get(group).push(row);
    }
    let entries=[...grouped.entries()].map(([label,items])=>{
      let vals=items.map(x=>Number(String(x[graphNumeric]??'').trim())).filter(Number.isFinite);
      const value=graphMethod==='count'?items.length:graphMethod==='mean'?(vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:0):vals.reduce((a,b)=>a+b,0);
      return {label,value,count:items.length};
    });
    const timeLabels=['jan','feb','mar','apr','mei','jun','jul','agu','sep','okt','nov','des'];
    if(['tahun','year'].includes(graphGroup.toLowerCase())) entries.sort((a,b)=>Number(a.label)-Number(b.label));
    else if(graphGroup.toLowerCase()==='bulan') entries.sort((a,b)=>timeLabels.indexOf(a.label.toLowerCase().slice(0,3))-timeLabels.indexOf(b.label.toLowerCase().slice(0,3)));
    else entries.sort((a,b)=>b.value-a.value);
    entries=entries.slice(0,12);
    return {fields,numericFields,groupFields,entries,rows};
  }
  function graphSVG(entries,mode) {
    if(!entries.length) return '<div class="notice gold">Tidak ada nilai untuk divisualisasikan pada pilihan ini.</div>';
    const max=Math.max(1,...entries.map(x=>x.value));
    const L=53,R=715,T=24,B=221,span=R-L;
    const grid=[0,.25,.5,.75,1].map(f=>{
      const yy=B-(B-T)*f;
      return `<line x1="${L}" y1="${yy.toFixed(1)}" x2="${R}" y2="${yy.toFixed(1)}" stroke="#e7eee6"/><text x="${L-8}" y="${(yy+4).toFixed(1)}" font-size="10" fill="#87998b" text-anchor="end">${h(nfmt(max*f))}</text>`;
    }).join('');
    const n=entries.length; const width=span/Math.max(n,1);
    let shapes='';
    if(mode==='line') {
      const pts=entries.map((item,i)=>({x:L+width*(i+.5),y:B-(B-T)*item.value/max}));
      shapes+=`<polyline fill="none" stroke="#386c51" stroke-width="3.1" stroke-linejoin="round" points="${pts.map(p=>`${p.x},${p.y}`).join(' ')}"/>`;
      shapes+=pts.map((p,i)=>`<circle cx="${p.x}" cy="${p.y}" r="5" fill="#386c51" stroke="#fff" stroke-width="2"><title>${h(entries[i].label)}: ${h(nfmt(entries[i].value))}</title></circle>`).join('');
    } else {
      shapes+=entries.map((item,i)=>{
        const bw=Math.min(45,width*.61), x=L+width*(i+.5)-bw/2;
        const ht=Math.max(item.value===0?0:2,(B-T)*item.value/max),y=B-ht;
        return `<rect x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${bw.toFixed(2)}" height="${ht.toFixed(2)}" rx="4" fill="${i%3===0?'#32654b':'#8eae92'}"><title>${h(item.label)}: ${h(nfmt(item.value))}</title></rect>`;
      }).join('');
    }
    const labels=entries.map((v,i)=>`<text x="${(L+width*(i+.5)).toFixed(2)}" y="245" text-anchor="middle" font-size="${n>8?9:10}" fill="#667c6e">${h(v.label.length>11?v.label.slice(0,10)+'…':v.label)}</text>`).join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 263" role="img" aria-label="Grafik ${mode==='line'?'garis':'batang'} dari dataset terpilih"><g>${grid}${shapes}${labels}</g></svg>`;
  }
  function lab() {
    const d=activeDataset(), info=chartInfo(d), cols=info.fields;
    const options=allDatasets().map(x=>`<button class="dataset-card ${x.id===datasetId?'active':''}" data-dataset="${h(x.id)}" aria-pressed="${x.id===datasetId}"><span class="dataset-icon">${ico('database')}</span><strong>${h(x.name)}</strong><small>${h(x.description)}</small><small>${x.rows.length} baris · ${Object.keys(x.rows[0]||{}).length} kolom</small></button>`).join('');
    const select=(items,current)=>items.map(k=>`<option value="${h(k)}" ${k===current?'selected':''}>${h(k)}</option>`).join('');
    let missing=info.rows.reduce((a,r)=>a+cols.filter(f=>r[f]===undefined||String(r[f]??'').trim()==='').length,0);
    const table=info.rows.slice(0,10).map(row=>`<tr>${cols.map(f=>`<td>${h(row[f]??'')}</td>`).join('')}</tr>`).join('');
    return `${heading('Laboratorium data','Eksplorasi Visual','Gunakan dataset contoh untuk mempraktikkan tabel, ringkasan statistik, grafik, dan ekspor CSV. Kamu juga dapat membuka berkas CSV sendiri di browser.')}
    <div class="notice"><b>Data dan privasi:</b> seluruh dataset bawaan merupakan data sintetis untuk latihan. Berkas CSV yang dipilih diproses langsung di browser, <b>tidak dikirim ke server</b>, dan hilang saat halaman di-refresh.</div>
    <div class="grid-two" style="align-items:start"><section class="card pad"><div class="section-header"><div><h2>Koleksi data</h2><p>Pilih dataset yang ingin dipelajari</p></div><button class="btn mini" id="importCsv">${ico('upload')} Impor CSV lokal</button></div><div class="dataset-grid">${options}</div></section>
    <section class="card pad"><div class="section-header"><div><h2>Ringkasan dataset</h2><p>${h(d.name)}</p></div>${badge(d.id==='custom'?'Data lokal':'Data latihan')}</div>
    <div class="stat-inline"><span><b>${info.rows.length}</b> baris</span><span><b>${cols.length}</b> kolom</span><span><b>${info.numericFields.length}</b> variabel numerik</span><span><b>${missing}</b> nilai kosong</span></div>
    <p style="font-size:12.3px;color:var(--muted);line-height:1.9;margin:20px 0">${h(d.description)}</p><button class="btn light" id="downloadData">${ico('download')} Unduh CSV dataset</button></section></div>
    <section class="card pad" style="margin-top:19px"><div class="section-header"><div><h2>Atur visualisasi</h2><p>Grafik dihitung dari data yang sedang dipilih</p></div>${badge(graphMethod==='count'?'Frekuensi':graphMethod==='sum'?'Penjumlahan':'Rerata')}</div>
    <div class="lab-toolbar"><div class="control"><label for="graphGroup">Kelompokkan menurut</label><select id="graphGroup">${select(info.groupFields,graphGroup)}</select></div>
    <div class="control"><label for="graphMethod">Ukuran ringkasan</label><select id="graphMethod"><option value="count" ${graphMethod==='count'?'selected':''}>Jumlah rekaman</option><option value="sum" ${graphMethod==='sum'?'selected':''}>Jumlah nilai</option><option value="mean" ${graphMethod==='mean'?'selected':''}>Rata-rata nilai</option></select></div>
    <div class="control"><label for="graphNumeric">Kolom numerik</label><select id="graphNumeric">${select(info.numericFields,graphNumeric)}</select></div>
    <div class="control"><label for="graphType">Bentuk grafik</label><select id="graphType"><option value="bar" ${graphType==='bar'?'selected':''}>Batang</option><option value="line" ${graphType==='line'?'selected':''}>Garis</option></select></div></div>
    <div style="margin:17px 0"><button class="btn primary" id="applyGraph">${ico('chart')} Terapkan visualisasi</button></div>
    <div class="graph-frame">${graphSVG(info.entries,graphType)}</div><p class="footnote">Menampilkan maksimal 12 kategori. Gunakan grafik garis terutama untuk data berurutan (misalnya tahun/bulan). Grafik tidak membuktikan hubungan sebab-akibat.</p>
    <div class="stat-inline">${info.entries.slice(0,6).map(x=>`<span>${h(x.label)}: <b>${h(nfmt(x.value))}</b></span>`).join('')}</div></section>
    <section class="card pad" style="margin-top:19px"><div class="section-header"><div><h2>Pratinjau data</h2><p>10 baris pertama, sesuai urutan tabel sumber</p></div></div><div class="data-table-wrap"><table><thead><tr>${cols.map(x=>`<th>${h(x)}</th>`).join('')}</tr></thead><tbody>${table}</tbody></table></div></section>`;
  }
  const parseNumbers=(text,positiveOnly=false)=>{
    const parsed=String(text).split(/[;,\s]+/).map(x=>x.trim()).filter(Boolean).map(Number);
    if(!parsed.length || parsed.some(x=>!Number.isFinite(x)||x<0||(positiveOnly&&x<=0))) throw Error('Gunakan angka valid, dipisahkan dengan koma atau spasi.');
    return parsed;
  };
  function getFormulaOutput() {
    try {
      if(formulaTab==='bradford') {
        const counts=parseNumbers(formulaParams.bradford,true).sort((a,b)=>b-a);
        if(counts.length<3) throw Error('Masukkan minimal tiga jumlah artikel jurnal.');
        const total=counts.reduce((a,b)=>a+b,0);
        let start=0,remaining=total;const zones=[];
        for(let zi=0;zi<2;zi++) {
          const goal=remaining/(3-zi);let sum=0,chosen=start+1;
          const maxend=counts.length-(2-zi);
          let best=Infinity,bestSum=-Infinity;
          for(let k=start;k<maxend;k++){
            sum+=counts[k];const diff=Math.abs(sum-goal);
            if(diff<best-1e-9 || (Math.abs(diff-best)<1e-9 && sum>bestSum)){best=diff;bestSum=sum;chosen=k+1;}
          }
          const subset=counts.slice(start,chosen);
          const articles=subset.reduce((a,b)=>a+b,0);
          zones.push({zone:zi+1,journals:subset.length,articles});
          start=chosen;remaining-=articles;
        }
        const last=counts.slice(start);zones.push({zone:3,journals:last.length,articles:last.reduce((a,b)=>a+b,0)});
        return `<p><span class="formula-big">${total}</span> artikel · ${counts.length} jurnal</p><p>Target teoritis per zona ≈ <b>${nfmt(total/3)} artikel</b>.</p><div class="data-table-wrap"><table><thead><tr><th>Zona</th><th>Jumlah jurnal</th><th>Jumlah artikel</th></tr></thead><tbody>${zones.map(z=>`<tr><td>${z.zone}</td><td>${z.journals}</td><td>${z.articles}</td></tr>`).join('')}</tbody></table></div><p class="help">Pembagian menggunakan batas kumulatif terdekat dan menjaga minimal satu jurnal di setiap zona. Ini pendekatan latihan; hasil bisa berbeda bila metode batas zona diubah.</p>`;
      }
      if(formulaTab==='lotka') {
        const C=Number(formulaParams.c),exponent=Number(formulaParams.exponent);
        if(!Number.isFinite(C)||C<=0||!Number.isFinite(exponent)||exponent<=0||exponent>10) throw Error('C dan eksponen harus berupa angka positif yang wajar.');
        const rows=Array.from({length:8},(_,i)=>{const n=i+1;return `<tr><td>${n}</td><td>${nfmt(C/Math.pow(n,exponent))}</td></tr>`}).join('');
        return `<p class="formula-big">f(n) = C / n<sup>${h(exponent)}</sup></p><p>Contoh prediksi jumlah penulis berdasarkan C = ${nfmt(C)}. Hasil prediksi dapat berupa desimal; data nyata adalah bilangan bulat.</p><div class="data-table-wrap"><table><thead><tr><th>Jumlah artikel (n)</th><th>Prediksi jumlah penulis</th></tr></thead><tbody>${rows}</tbody></table></div>`;
      }
      if(formulaTab==='zipf') {
        const K=Number(formulaParams.k);if(!Number.isFinite(K)||K<=0) throw Error('Frekuensi peringkat pertama harus positif.');
        const rows=Array.from({length:10},(_,i)=>`<tr><td>${i+1}</td><td>${nfmt(K/(i+1))}</td><td>${nfmt(K)}</td></tr>`).join('');
        return `<p class="formula-big">f(r) ≈ K / r</p><p>Simulasi frekuensi menurut rank; K adalah frekuensi kata peringkat satu.</p><div class="data-table-wrap"><table><thead><tr><th>Rank (r)</th><th>Prediksi f(r)</th><th>r × f(r)</th></tr></thead><tbody>${rows}</tbody></table></div>`;
      }
      const citations=parseNumbers(formulaParams.citations).sort((a,b)=>b-a);
      const hv=citations.filter((x,i)=>x>=i+1).length;
      return `<p><span class="formula-big">h-index = ${hv}</span></p><p>Ditemukan ${citations.length} artikel dengan urutan sitasi: <b>${citations.join(', ')}</b>.</p><div class="data-table-wrap"><table><thead><tr><th>Peringkat artikel</th><th>Sitasi</th><th>Memenuhi sitasi ≥ peringkat?</th></tr></thead><tbody>${citations.slice(0,18).map((x,i)=>`<tr><td>${i+1}</td><td>${x}</td><td>${x>=i+1?'Ya':'Tidak'}</td></tr>`).join('')}</tbody></table></div><p class="help">h-index mengukur gabungan jumlah publikasi dan sitasi; bukan bukti mutu individual tanpa konteks.</p>`;
    }catch(err){return `<div class="notice gold">${h(err.message)}</div>`;}
  }
  function calc() {
    const names=[['bradford','Hukum Bradford'],['lotka','Hukum Lotka'],['zipf','Hukum Zipf'],['citation','h-index Sitasi']];
    const field= formulaTab==='bradford'?`<label class="field-label" for="paramBradford">Jumlah artikel per jurnal (boleh belum urut)</label><textarea id="paramBradford" rows="3" style="min-height:76px">${h(formulaParams.bradford)}</textarea>`:
      formulaTab==='lotka'?`<div class="lab-toolbar"><div class="control"><label for="paramC">C (jumlah penulis satu artikel)</label><input type="number" id="paramC" value="${h(formulaParams.c)}" min="0" step="1"></div><div class="control"><label for="paramExp">Eksponen</label><input type="number" id="paramExp" value="${h(formulaParams.exponent)}" min="0.1" max="10" step="0.1"></div></div>`:
      formulaTab==='zipf'?`<label class="field-label" for="paramK">Frekuensi kata peringkat pertama (K)</label><input id="paramK" type="number" min="1" value="${h(formulaParams.k)}">`:
      `<label class="field-label" for="paramCitations">Sitasi tiap artikel (boleh belum urut)</label><textarea id="paramCitations" rows="3" style="min-height:76px">${h(formulaParams.citations)}</textarea>`;
    return `${heading('Laboratorium rumus','Kalkulator Informetrika','Latihan penghitungan langsung yang dapat diubah parameternya. Data contoh, bukan hasil penelitian nyata.')}
      <div class="card pad"><div class="formula-grid">${names.map(([id,title])=>`<button class="formula-tab ${formulaTab===id?'active':''}" data-formula="${id}">${h(title)}</button>`).join('')}</div>
      <div style="margin-top:23px">${field}</div><p class="help">Gunakan bilangan bulat untuk data hitungan; pada Lotka kamu dapat mengganti eksponen. Gunakan koma atau spasi sebagai pemisah daftar.</p>
      <button class="btn primary" id="computeFormula">${ico('flask')} Hitung & tampilkan hasil</button><div class="formula-output" id="formulaOutput">${getFormulaOutput()}</div></div>
      <div class="notice"><b>Untuk laporan:</b> tuliskan rumus, sumber data, keputusan pembersihan, dan batasan interpretasi. Contoh kalkulator tidak menggantikan analisis empiris.</div>`;
  }
  function portfolio() {
    const records=SOURCE.sessions.map(s=>({s,w:wk(s.no),last:latest(s.no)}));
    return `${heading('Portofolio mahasiswa','Ringkasan Kemajuan Belajar','Hasil kuis dan catatan berasal dari aktivitasmu sendiri di browser ini. Ekspor portofolio untuk cadangan atau pengumpulan tugas.',`<button class="btn" id="editNameTop">${ico('user')} Atur nama panggilan</button>`)}
      <div class="notice"><b>Privasi dan penilaian:</b> website statis ini tidak memiliki akun, database, atau dashboard dosen pusat. Skor latihan belum otomatis terkirim ke SIPEJAR. Gunakan nama panggilan/kode peserta, bukan NIM, dan ekspor berkas saat diperlukan.</div>
      <div class="stat-grid"><div class="card stat-card"><span class="stat-label">Asesmen selesai</span><div class="stat-number">${doneCount()} / 16</div><span class="stat-meta">Berdasarkan percobaan tersimpan</span></div><div class="card stat-card"><span class="stat-label">Rerata terakhir</span><div class="stat-number">${meanScore()??'—'}</div><span class="stat-meta">Skor latihan / 100</span></div><div class="card stat-card"><span class="stat-label">Refleksi tertulis</span><div class="stat-number">${records.filter(x=>x.w.note.trim()).length}</div><span class="stat-meta">Dari 16 pertemuan</span></div><div class="card stat-card"><span class="stat-label">Ketercapaian</span><div class="stat-number">${pct()}%</div><div class="progress-track"><div class="progress-fill" style="width:${pct()}%"></div></div></div></div>
      <div class="card pad"><div class="section-header"><div><h2>Rekap pertemuan</h2><p>Tiap pertemuan memuat kuis, catatan, dan checklist</p></div></div>
      <div class="data-table-wrap"><table class="progress-table"><thead><tr><th>No.</th><th>Materi</th><th>Status</th><th>Skor terakhir</th><th>Percobaan</th><th>Catatan</th></tr></thead><tbody>${records.map(x=>`<tr><td>${x.s.no}</td><td>${h(x.s.title)}</td><td>${x.last?'Selesai':'Belum'}</td><td>${x.last?x.last.score+'/100':'—'}</td><td>${x.w.attempts.length}</td><td>${x.w.note.trim()?'Ada':'—'}</td></tr>`).join('')}</tbody></table></div>
      <div class="btn-row" style="margin-top:18px"><button class="btn primary" id="exportJSON">${ico('download')} Ekspor portofolio JSON</button><button class="btn light" id="exportCSV">${ico('download')} Ekspor ringkasan CSV</button><button class="btn" id="printPortfolio">Cetak ringkasan</button><button class="btn warn" id="resetAll">Hapus progres di browser</button></div>
      <p class="help">Simpan file JSON sebagai bukti proses belajar. CSV berisi daftar skor; untuk tugas tertulis, unggah laporan analisismu secara terpisah.</p></div>`;
  }
  function guide() {
    return `${heading('Informasi penggunaan','Panduan Pengajar & GitHub','Cara memanfaatkan RuangData sebagai pendamping 16 pertemuan Informetrika dan menerbitkannya melalui GitHub Pages.')}
    <div class="grid-two"><section class="card pad"><h2>Alur penggunaan mahasiswa</h2><ol class="objective-list"><li>Buka Pertemuan 1, baca materi dan tujuan pembelajaran.</li><li>Ikuti langkah praktik menggunakan Laboratorium Data atau Kalkulator Rumus.</li><li>Isi checklist dan tulis catatan/refleksi yang relevan.</li><li>Kerjakan kuis, lalu pelajari pembahasan.</li><li>Ekspor portofolio dari halaman Portofolio Belajar sebelum pengumpulan.</li></ol></section>
    <section class="card pad"><h2>Panduan dosen</h2><p style="color:var(--muted);font-size:12.5px">RuangData digunakan sebagai pendamping praktikum. Penugasan, presensi, nilai resmi, dan umpan balik dosen tetap dikelola melalui SIPEJAR. Sesuaikan rubrik dan data sumber dengan RPS.</p><div class="notice gold"><b>Hal penting:</b> belum ada akun, pencatatan terpusat, pengacakan soal, atau pencegahan mahasiswa saling berbagi jawaban. Website ini adalah laboratorium latihan, bukan sistem ujian berpengawasan.</div></section></div>
    <div class="grid-two"><section class="card pad"><h2>Unggah ke GitHub Pages</h2><ol class="objective-list"><li>Buat repositori baru, misalnya <b>ruangdata-informetrika</b>.</li><li>Unggah <b>index.html, style.css, content.js, app.js</b> beserta folder <b>assets</b> dan <b>data</b> ke akar repositori.</li><li>Buka <b>Settings → Pages</b>, pilih <b>Deploy from a branch</b>, branch <b>main</b>, folder <b>/(root)</b>.</li><li>Buka alamat yang ditampilkan GitHub Pages setelah publikasi selesai.</li><li>Untuk menyesuaikan materi dan soal, edit <b>content.js</b> lalu commit perubahan.</li></ol><p class="help">Berkas preview.html dapat dibuka tanpa koneksi internet sebelum publikasi. Tidak diperlukan hosting PHP/MySQL.</p></section>
    <section class="card pad"><h2>Perlindungan data & penelitian</h2><ul class="simple-list"><li>Dataset bawaan adalah <b>data sintetis</b>, bukan pengukuran asli mahasiswa.</li><li>File CSV lokal diproses hanya dalam browser, tanpa unggah server.</li><li>Progres tersimpan pada <b>localStorage</b>; mengganti perangkat atau menghapus cache bisa menghapus data.</li><li>Untuk penelitian efektivitas pembelajaran, siapkan instrumen, persetujuan partisipan, dan prosedur evaluasi yang terpisah.</li><li>Tampilan ini tidak menjamin validitas, reliabilitas, atau mutu nilai yang diperoleh tanpa evaluasi tambahan.</li></ul></section></div>`;
  }
  function render(){
    currentRoute=current();
    let title='Ringkasan',inner='';
    if(currentRoute==='dashboard'){ title='Ringkasan';inner=dash(); }
    else if(currentRoute==='pertemuan'){title='16 Pertemuan';inner=listWeeks();}
    else if(currentRoute.startsWith('pertemuan/')){const no=Number(currentRoute.split('/')[1]);title='Pertemuan '+no;inner=sessionPage(no);}
    else if(currentRoute==='laboratorium'){title='Laboratorium Data';inner=lab();}
    else if(currentRoute.startsWith('kalkulator')){
      const f=currentRoute.split('/')[1]; if(['bradford','lotka','zipf','citation'].includes(f)) formulaTab=f;
      title='Kalkulator Rumus';inner=calc();
    }
    else if(currentRoute==='portofolio'){title='Portofolio Belajar';inner=portfolio();}
    else if(currentRoute==='panduan'){title='Panduan';inner=guide();}
    app.innerHTML=shell(inner,title);
    document.title=`${title} | RuangData Informetrika`;
    window.scrollTo({top:0,behavior:'instant'});
  }
  function csvCell(v) {
    let t=String(v??'');
    // Avoid accidental spreadsheet formulas when exporting strings from untrusted CSV.
    if (/^[\s]*[=+@]/.test(t) || (/^[\s]*-/.test(t) && !/^\s*-\d+(\.\d+)?$/.test(t))) t="'"+t;
    return '"'+t.replace(/"/g,'""')+'"';
  }
  function downloadFile(name,text,type) {
    const blob=new Blob([text],{type:type||'text/plain;charset=utf-8'});
    const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  function exportRows(rows) {
    if(!rows.length)return '';
    const fields=Object.keys(rows[0]);
    return '\ufeff'+[fields.map(csvCell).join(','),...rows.map(r=>fields.map(f=>csvCell(r[f])).join(','))].join('\r\n');
  }
  function importCSV(text) {
    text=String(text).replace(/^\ufeff/,'');
    const rows=[];let current=[],field='',inQuote=false;
    for(let i=0;i<text.length;i++){
      const ch=text[i];
      if(ch==='"'){if(inQuote && text[i+1]==='"'){field+='"';i++;}else inQuote=!inQuote;}
      else if(ch===','&&!inQuote){current.push(field);field='';}
      else if((ch==='\n'||ch==='\r')&&!inQuote){if(ch==='\r'&&text[i+1]==='\n')i++;current.push(field);field='';if(current.some(v=>v.trim()))rows.push(current);current=[];}
      else field+=ch;
    }
    if(inQuote)throw Error('CSV memiliki tanda kutip yang belum ditutup.');
    current.push(field);if(current.some(v=>v.trim()))rows.push(current);
    if(rows.length<2)throw Error('CSV minimal memuat baris header dan satu baris data.');
    const rawHeaders=rows.shift();
    if(rawHeaders.length>25)throw Error('Maksimal 25 kolom untuk latihan.');
    const headers=rawHeaders.map((x,i)=>x.trim()||'kolom_'+(i+1));
    if(new Set(headers).size!==headers.length)throw Error('Header CSV tidak boleh memiliki nama kolom yang sama.');
    const records=rows.slice(0,500).map(cells=>Object.fromEntries(headers.map((name,i)=>[name,String(cells[i]??'').trim()])));
    if(!records.length)throw Error('CSV tidak memiliki baris yang dapat dibaca.');
    return records;
  }
  function openNameDialog(){
    const backdrop=document.createElement('div');backdrop.className='modal-shade';
    backdrop.innerHTML=`<div class="modal" role="dialog" aria-modal="true" aria-labelledby="nameDialogTitle"><h2 id="nameDialogTitle">Nama panggilan</h2><p>Nama ini hanya untuk tampilan dan ekspor portofolio lokal. Gunakan kode peserta; jangan memasukkan NIM atau data pribadi sensitif.</p><label class="field-label" for="nameInput">Nama / kode</label><input style="width:100%" type="text" id="nameInput" maxlength="50" value="${h(state.name)}"><div class="btn-row" style="margin-top:18px"><button class="btn primary" id="saveName">Simpan</button><button class="btn ghost" id="closeModal">Batal</button></div></div>`;
    document.body.append(backdrop);document.getElementById('nameInput').focus();
  }
  function persistParameters(){
    const v=id=>document.getElementById(id)?.value;
    if(formulaTab==='bradford')formulaParams.bradford=v('paramBradford')??formulaParams.bradford;
    if(formulaTab==='lotka'){formulaParams.c=v('paramC')??formulaParams.c; formulaParams.exponent=v('paramExp')??formulaParams.exponent;}
    if(formulaTab==='zipf')formulaParams.k=v('paramK')??formulaParams.k;
    if(formulaTab==='citation')formulaParams.citations=v('paramCitations')??formulaParams.citations;
  }
  function onQuiz(no){
    const s=byNo(no),answers=[];
    for(let i=0;i<s.quiz.length;i++){
      const chosen=document.querySelector(`input[name="q-${i}"]:checked`);
      if(!chosen){ toast('Isi seluruh '+s.quiz.length+' jawaban terlebih dahulu.');return; }
      answers.push(Number(chosen.value));
    }
    const correct=answers.filter((ans,i)=>ans===s.quiz[i].correct).length;
    const score=Math.round(100*correct/s.quiz.length);
    wk(no).attempts.push({at:new Date().toISOString(),answers,correct,score});
    retaking.delete(no);save();render();
    document.getElementById('quizSection')?.scrollIntoView({behavior:'smooth',block:'start'});
    toast(`Asesmen Pertemuan ${no} tersimpan. Skor ${score}/100.`);
  }
  document.addEventListener('click',async e=>{
    const route=e.target.closest('[data-nav]'); if(route){navigate(route.dataset.nav);return;}
    const ds=e.target.closest('[data-dataset]');if(ds){datasetId=ds.dataset.dataset;render();return;}
    const fo=e.target.closest('[data-formula]');if(fo){persistParameters();formulaTab=fo.dataset.formula;navigate('kalkulator/'+formulaTab);return;}
    const retake=e.target.closest('[data-retake]');if(retake){retaking.add(Number(retake.dataset.retake));render();return;}
    const quiz=e.target.closest('[data-submit-quiz]');if(quiz){onQuiz(Number(quiz.dataset.submitQuiz));return;}
    const menu=e.target.closest('#mobileMenu');if(menu){document.getElementById('sidebar')?.classList.toggle('show');return;}
    if(e.target.closest('#editName')||e.target.closest('#editNameTop')){openNameDialog();return;}
    if(e.target.closest('#closeModal')){document.querySelector('.modal-shade')?.remove();return;}
    if(e.target.closest('#saveName')){const val=document.getElementById('nameInput').value.trim();if(!val){toast('Isi nama panggilan terlebih dahulu.');return;}state.name=val.slice(0,50);save();document.querySelector('.modal-shade')?.remove();render();return;}
    if(e.target.closest('#applyGraph')){graphGroup=document.getElementById('graphGroup')?.value||graphGroup;graphMethod=document.getElementById('graphMethod')?.value||graphMethod;graphNumeric=document.getElementById('graphNumeric')?.value||graphNumeric;graphType=document.getElementById('graphType')?.value||graphType;render();toast('Grafik diperbarui menggunakan dataset aktif.');return;}
    if(e.target.closest('#computeFormula')){persistParameters();const el=document.getElementById('formulaOutput');if(el)el.innerHTML=getFormulaOutput();return;}
    if(e.target.closest('#downloadData')){const d=activeDataset();downloadFile(`${d.id}_ruangdata.csv`,exportRows(d.rows),'text/csv;charset=utf-8');toast('CSV dataset diunduh.');return;}
    if(e.target.closest('#importCsv')){
      const input=document.createElement('input');input.type='file';input.accept='.csv,text/csv';
      input.addEventListener('change',async()=>{
        const file=input.files?.[0];if(!file)return;
        if(file.size>1024*1024){toast('Maksimal 1 MB untuk CSV latihan.');return;}
        try {const rows=importCSV(await file.text());customDataset={id:'custom',name:file.name,description:`Data lokal (${rows.length} baris). Tidak diunggah ke server dan tidak disimpan permanen.`,category:'Impor lokal',rows};datasetId='custom';graphGroup='';graphNumeric='';graphMethod='count';render();toast('CSV berhasil dibaca secara lokal.');}
        catch(err){toast('CSV tidak terbaca: '+err.message);}
      });input.click();return;
    }
    if(e.target.closest('#exportJSON')){
      const data={exportType:'RuangData Informetrika',exportedAt:new Date().toISOString(),course:SOURCE.course, ...state};
      downloadFile('ruangdata-portofolio-'+new Date().toISOString().slice(0,10)+'.json',JSON.stringify(data,null,2),'application/json;charset=utf-8');toast('Portofolio JSON siap disimpan.');return;
    }
    if(e.target.closest('#exportCSV')){
      const records=SOURCE.sessions.map(s=>({pertemuan:s.no,materi:s.title,status:done(s.no)?'Selesai':'Belum',skor_terakhir:latest(s.no)?.score??'',percobaan:wk(s.no).attempts.length,catatan:wk(s.no).note.trim()}));
      downloadFile('ruangdata-ringkasan-skor.csv',exportRows(records),'text/csv;charset=utf-8');toast('Rekap CSV diunduh.');return;
    }
    if(e.target.closest('#printPortfolio')){window.print();return;}
    if(e.target.closest('#resetAll')){
      if(confirm('Hapus seluruh nilai kuis, catatan, dan checklist di browser ini? Ekspor portofolio dulu jika ingin menyimpan cadangan.')){
        state=NEW_STATE();save();render();toast('Progres lokal dikosongkan.');
      }
      return;
    }
  });
  document.addEventListener('change',e=>{
    const el=e.target;
    if(el.matches('[data-step]')) {
      const no=Number(el.dataset.week),i=Number(el.dataset.step);
      wk(no).checked[i]=el.checked;save();
      const label=el.closest('.step');label?.classList.toggle('checked',el.checked);
      const section=el.closest('.card');const pill=section?.querySelector('.pill');
      if(pill)pill.textContent=Object.values(wk(no).checked).filter(Boolean).length+'/'+byNo(no).steps.length+' langkah';
    }
    if(el.matches('[data-note]')){
      const no=Number(el.dataset.note);wk(no).note=el.value.slice(0,10000);save();toast('Catatan pertemuan tersimpan di browser.');
    }
  });
  window.addEventListener('hashchange',render);
  // initial route
  if(!location.hash) location.hash='#/dashboard';
  render();
})();
