const projects = [
  {
    id: "0001",
    name: "UNCOMN",
    subtitle: "Website Refresh",
    desc: "Conversion-focused redesign with cleaner hierarchy, stronger CTAs, and faster UX paths.",
    thumb: "assets/thumbs/uncomn.png",
    hero: "assets/me-hero.png", // keep you as hero, projects switch the preview
    preview: "assets/previews/uncomn.mp4",
    href: "projects/uncomn-refresh.html"
  },
  {
    id: "0002",
    name: "ONDER LAW",
    subtitle: "Brand + Web Mockup",
    desc: "Premium, confident layout + typography system for a modern legal brand.",
    thumb: "assets/thumbs/onder.png",
    preview: "assets/previews/onder.mp4",
    href: "projects/onder-law.html"
  },
  {
    id: "0003",
    name: "FAITHFLOW",
    subtitle: "Launch System",
    desc: "Playful yet polished brand identity + launch assets with product-led storytelling.",
    thumb: "assets/thumbs/faithflow.png",
    preview: "assets/previews/faithflow.mp4",
    href: "projects/faithflow.html"
  },
  {
    id: "0004",
    name: "CRO PACK",
    subtitle: "Audit + Experiments",
    desc: "A repeatable CRO system: prioritized tests, UX fixes, and measurable learnings.",
    thumb: "assets/thumbs/cro.png",
    preview: "assets/previews/cro.mp4",
    href: "projects/cro-audit.html"
  }
];

const thumbsNav = document.querySelector(".thumbs");
const previewVid = document.getElementById("previewVid");
const previewSrc = previewVid?.querySelector("source");
const previewLink = document.getElementById("previewLink");
const desc = document.getElementById("desc");
const titleEl = document.querySelector(".title");

function renderThumbs() {
  thumbsNav.innerHTML = "";
  projects.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.className = "thumb" + (i === 0 ? " active" : "");
    btn.type = "button";
    btn.innerHTML = `
      <img src="${p.thumb}" alt="${p.name} thumbnail">
      <span class="thumb-label">
        <span class="thumb-name">${p.name}</span>
        <span class="thumb-sub">${p.subtitle}</span>
      </span>
    `;
    btn.addEventListener("click", () => setProject(i));
    thumbsNav.appendChild(btn);
  });
}

function setProject(i) {
  const p = projects[i];
  document.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".thumb")[i].classList.add("active");

  // Update left text (lore)
  desc.textContent = p.desc;

  // Update right preview and link
  if (previewSrc) previewSrc.src = p.preview;
  if (previewVid) {
    previewVid.load();
    previewVid.play().catch(()=>{});
  }
  if (previewLink) previewLink.href = p.href;

  // Optional: show selected name big like "KIM"
  if (titleEl) {
    const big = p.name;
    titleEl.textContent = big;
    titleEl.setAttribute("data-text", big);
  }
}

renderThumbs();
setProject(0);

// tiny mouse parallax
const parallax = document.getElementById("parallax");
window.addEventListener("mousemove", (e) => {
  if (!parallax) return;
  const r = parallax.getBoundingClientRect();
  const x = (e.clientX - (r.left + r.width/2)) / r.width;
  const y = (e.clientY - (r.top + r.height/2)) / r.height;
  parallax.style.transform = `translate3d(${x * 6}px, ${y * 6}px, 0)`;
});
