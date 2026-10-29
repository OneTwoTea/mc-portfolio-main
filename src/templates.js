/**
 * ═══════════════════════════════════════════════════════════
 *  TEMPLATES.JS — Bộ render: config → HTML
 *  Chuyển đổi dữ liệu từ site.config.js thành HTML hoàn chỉnh
 * ═══════════════════════════════════════════════════════════
 */

// ─── ICONS (SVG inline) ─────────────────────────────────
const ICONS = {
  wedding: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  corporate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/></svg>`,
  event: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  ceremony: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
  award: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  bilingual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  zalo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor"><path d="M12.5 6C9.46 6 7 8.46 7 11.5v25C7 39.54 9.46 42 12.5 42h23c3.04 0 5.5-2.46 5.5-5.5v-25C41 8.46 38.54 6 35.5 6h-23zm2.14 11h18.72c.87 0 1.34 1.01.78 1.67L22.97 31.5h8.87c.74 0 1.16.83.71 1.39-.15.18-.37.29-.61.29H13.36c-.87 0-1.34-1.01-.78-1.67L23.75 18.7h-9.1a.82.82 0 0 1-.72-.43.81.81 0 0 1 .71-1.27z"/></svg>`,
  play: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  arrowUp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
  location: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  quote: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" opacity="0.15"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/></svg>`,
};

// ─── TIỆN ÍCH ──────────────────────────────────────────

/** Escape HTML để chống XSS */
export function esc(str) {
  if (typeof str !== "string") return String(str ?? "");
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Kiểm tra giá trị có phải placeholder [IN_HOA] không */
export function isPlaceholder(val) {
  if (typeof val !== "string") return false;
  return /\[[A-Z0-9_]+\]/.test(val);
}

/** Trả SVG icon inline (trang trí → aria-hidden) */
export function icon(name, cls = "") {
  const svg = ICONS[name];
  if (!svg) return `<!-- icon "${name}" không tìm thấy -->`;
  const clsAttr = cls ? ` class="${esc(cls)}"` : "";
  return svg.replace("<svg ", `<svg${clsAttr} aria-hidden="true" focusable="false" `);
}

/**
 * Tạo thẻ ảnh: <picture> khi có ảnh mobile riêng, lazy-load, width/height, alt.
 * Ảnh lỗi/chưa có sẽ tự ẩn (onerror) để lộ khung thay thế .img-placeholder ngay sau nó.
 */
export function media({ src, alt = "", cls = "", width, height, lazy = true, priority = false, mobileSrc, mobileWidth, mobileHeight }) {
  const loadAttr = priority ? ` fetchpriority="high"` : lazy ? ` loading="lazy"` : "";
  const imgCls = cls ? ` class="${esc(cls)}"` : "";
  const size = (w, h) => `${w ? ` width="${w}"` : ""}${h ? ` height="${h}"` : ""}`;
  const img = `<img src="${esc(src)}" alt="${esc(alt)}"${imgCls}${size(width, height)}${loadAttr} decoding="async" onerror="this.hidden=true">`;

  if (!mobileSrc) return img;
  return `<picture class="contents">
  <source media="(max-width: 767px)" srcset="${esc(mobileSrc)}"${size(mobileWidth, mobileHeight)}>
  ${img}
</picture>`;
}

/** Khung thay thế hiển thị khi ảnh chưa có (CSS bật lên khi ảnh phía trước bị ẩn) */
function placeholder(label, cls = "absolute inset-0") {
  return `<span class="img-placeholder ${cls}" aria-hidden="true">${esc(label)}</span>`;
}

/** Thuộc tính href (+ target/rel nếu là link ngoài) */
function linkAttrs(href) {
  const external = /^https?:\/\//.test(href);
  return `href="${esc(href)}"${external ? ` target="_blank" rel="noopener noreferrer"` : ""}`;
}

/** Xuống dòng \n trong config → <br> */
function lines(text) {
  return esc(text || "").replace(/\n/g, "<br>");
}

// ─── HELPERS ────────────────────────────────────────────

/** Tạo các link tel/zalo/mailto/mạng xã hội — nếu còn placeholder thì trỏ về #contact */
export function createHelpers(config) {
  const c = config.contact || {};

  function safeLink(value, prefix = "") {
    if (!value || isPlaceholder(value)) return "#contact";
    if (prefix === "tel:") return `tel:${value.replace(/[^\d+]/g, "")}`;
    if (prefix === "mailto:") return `mailto:${value}`;
    if (prefix === "zalo:") return /^https?:\/\//.test(value) ? value : `https://zalo.me/${value.replace(/[^\d]/g, "")}`;
    return value;
  }

  const hasPhone = c.phone && !isPlaceholder(c.phone);
  const hasEmail = c.email && !isPlaceholder(c.email);

  return {
    phoneLink: safeLink(c.phone, "tel:"),
    phoneDisplay: hasPhone ? c.phone : "Đang cập nhật",
    zaloLink: safeLink(c.zalo, "zalo:"),
    emailLink: safeLink(c.email, "mailto:"),
    emailDisplay: hasEmail ? c.email : "Đang cập nhật",
    emailRaw: hasEmail ? c.email : "",
    facebookLink: safeLink(c.facebook),
    youtubeLink: safeLink(c.youtube),
    ctaLink: safeLink(config.header?.ctaButton?.href || c.zalo, "zalo:"),
    heroCtaLink: safeLink(config.hero?.ctaPrimary?.href || c.zalo, "zalo:"),
    floatingLink: safeLink(config.floatingButton?.href || c.zalo, "zalo:"),
  };
}

// ─── RENDERERS ──────────────────────────────────────────

export function createRenderers(config) {
  const h = createHelpers(config);

  /** Phần tiêu đề chung của mỗi section */
  function sectionHead(sec, fallbackLabel) {
    return `<div class="text-center mb-10 md:mb-16 reveal">
          <span class="section-label justify-center">${esc(sec.sectionLabel || fallbackLabel)}</span>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 text-balance">${lines(sec.heading)}</h2>
          ${sec.subheading ? `<p class="text-text-muted max-w-2xl mx-auto">${esc(sec.subheading)}</p>` : ""}
        </div>`;
  }

  return {
    // ─── SEO HEAD ─────────────────────────────────────
    seoHead() {
      const seo = config.seo || {};
      const siteUrl = seo.url && !isPlaceholder(seo.url) ? seo.url.replace(/\/?$/, "/") : "";
      // og:image cần URL tuyệt đối — chỉ ghép được khi đã có seo.url
      const ogImage = siteUrl ? siteUrl + (seo.ogImage || "") : seo.ogImage || "";
      return `<title>${esc(seo.title || "MC Portfolio")}</title>
    <meta name="description" content="${esc(seo.description || "")}">
    <meta name="keywords" content="${esc(seo.keywords || "")}">
    ${siteUrl ? `<link rel="canonical" href="${esc(siteUrl)}">\n    <meta property="og:url" content="${esc(siteUrl)}">` : ""}
    <meta property="og:type" content="website">
    <meta property="og:locale" content="${esc(seo.locale || "vi_VN")}">
    <meta property="og:site_name" content="${esc(config.brand?.name || "")}">
    <meta property="og:title" content="${esc(seo.title || "")}">
    <meta property="og:description" content="${esc(seo.description || "")}">
    <meta property="og:image" content="${esc(ogImage)}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${esc(seo.ogImageAlt || "")}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(seo.title || "")}">
    <meta name="twitter:description" content="${esc(seo.description || "")}">
    <meta name="twitter:image" content="${esc(ogImage)}">
    <meta name="theme-color" content="${esc(seo.themeColor || "#3A0D1E")}">
    <link rel="icon" type="image/svg+xml" href="public/icons/favicon.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="public/icons/favicon-32.png">
    <link rel="apple-touch-icon" sizes="180x180" href="public/icons/apple-touch-icon.png">`;
    },

    // ─── CTA HEADER (thuộc tính href đã xử lý placeholder) ─
    ctaAttrs() {
      return linkAttrs(h.ctaLink);
    },

    // ─── HEADER NAV ITEMS ─────────────────────────────
    headerNav() {
      const items = config.header?.menuItems || [];
      return items
        .map(
          (item) =>
            `<a href="${esc(item.href)}" class="relative py-2 text-sm xl:text-base font-medium text-text-muted transition-colors duration-300 hover:text-text after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">${esc(item.label)}</a>`
        )
        .join("\n        ");
    },

    // ─── MOBILE NAV ITEMS ─────────────────────────────
    mobileNav() {
      const items = config.header?.menuItems || [];
      return items
        .map(
          (item) =>
            `<a href="${esc(item.href)}" class="block w-full text-center text-2xl font-heading font-semibold text-text py-3 transition-colors duration-300 hover:text-accent">${esc(item.label)}</a>`
        )
        .join("\n      ");
    },

    // ─── HERO ─────────────────────────────────────────
    heroSection() {
      const hero = config.hero || {};
      return `<section id="hero" class="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <!-- Ảnh nền toàn màn hình (nền gradient + mảng trang trí hiện ra khi chưa có ảnh) -->
      <div class="absolute inset-0 z-0">
        <!-- Mảng hình trang trí (phong cách ảnh mẫu) — nằm dưới ảnh, ảnh có thì che đi -->
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div class="absolute -left-10 top-[30%] w-48 h-48 md:w-72 md:h-72 rounded-3xl bg-gradient-to-br from-rose/70 to-primary-light/20 opacity-60"></div>
          <div class="absolute -left-24 bottom-[-6rem] w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full border-[2.5rem] md:border-[3.5rem] border-rose/25"></div>
          <div class="absolute -right-10 top-[42%] w-40 h-14 md:w-64 md:h-20 rounded-full bg-gradient-to-r from-primary-light to-rose/80 opacity-80"></div>
        </div>
        ${media({
          src: hero.backgroundDesktop || "",
          mobileSrc: hero.backgroundMobile || "",
          alt: hero.backgroundAlt || "",
          cls: "absolute inset-0 w-full h-full object-cover",
          width: 1920,
          height: 1080,
          mobileWidth: 750,
          mobileHeight: 1334,
          lazy: false,
          priority: true,
        })}
        <!-- Lớp phủ nhẹ: chỉ tối vùng giữa để chữ dễ đọc + chuyển sang nền ở đáy, giữ nguyên màu ảnh gốc -->
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_center,rgba(0,0,0,0.35),transparent_75%)]"></div>
        <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-primary/70"></div>
      </div>

      <!-- Nội dung (căn giữa màn hình) -->
      <div class="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-24 md:py-28 text-center text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.5)]">
        <h1 class="text-cream font-heading text-[clamp(2.25rem,8vw,4.75rem)] font-semibold leading-[1.05] text-balance break-words mb-6 animate-slide-up">
          ${lines(hero.heading)}
        </h1>
        <p class="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:0.2s]">
          ${esc(hero.subheading || "")}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:0.4s]">
          <a ${linkAttrs(h.heroCtaLink)} class="btn-primary text-base px-8 py-4 w-full sm:w-auto">
            ${icon("zalo", "w-5 h-5")} ${esc(hero.ctaPrimary?.label || "Đặt Lịch")}
          </a>
          <a href="${esc(hero.ctaSecondary?.href || "#videos")}" class="btn-secondary text-base px-8 py-4 w-full sm:w-auto">
            ${icon("play", "w-5 h-5")} ${esc(hero.ctaSecondary?.label || "Xem Video")}
          </a>
        </div>
      </div>

      ${hero.scrollIndicator ? `<!-- Cuộn xuống -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block" aria-hidden="true">
        <div class="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center pt-2">
          <div class="w-1.5 h-3 bg-accent rounded-full"></div>
        </div>
      </div>` : ""}
    </section>`;
    },

    // ─── ABOUT (GIỚI THIỆU) ──────────────────────────
    aboutSection() {
      const about = config.about || {};
      const paragraphs = (about.story || "")
        .split(/\n\s*\n/)
        .map((p) => `<p class="text-text-muted leading-relaxed mb-4">${lines(p.trim())}</p>`)
        .join("\n            ");

      const statsHtml = (about.stats || [])
        .map(
          (s) => `<div class="text-center min-w-0">
              <div class="${isPlaceholder(s.number) ? "text-base break-all" : "text-3xl sm:text-4xl"} font-heading font-bold text-accent">${esc(s.number)}</div>
              <div class="text-sm text-text-muted mt-1">${esc(s.label)}</div>
            </div>`
        )
        .join("\n            ");

      return `<section id="about" class="py-16 md:py-24 lg:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Ảnh chân dung -->
          <div class="reveal">
            <div class="relative max-w-md mx-auto lg:mx-0">
              <!-- Khung trang trí -->
              <div class="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-lg hidden lg:block" aria-hidden="true"></div>
              <div class="relative aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden bg-surface">
                ${media({
                  src: about.portrait || "",
                  mobileSrc: about.portraitMobile || "",
                  alt: about.portraitAlt || "Ảnh chân dung",
                  cls: "absolute inset-0 w-full h-full object-cover",
                  width: 600,
                  height: 800,
                  mobileWidth: 400,
                  mobileHeight: 500,
                })}
                ${placeholder("Ảnh chân dung")}
              </div>
            </div>
          </div>

          <!-- Nội dung -->
          <div class="reveal min-w-0">
            <span class="section-label">${esc(about.sectionLabel || "Về Tôi")}</span>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              ${lines(about.heading)}
            </h2>
            ${paragraphs}

            <!-- Số liệu -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-border">
              ${statsHtml}
            </div>
          </div>
        </div>
      </div>
    </section>`;
    },

    // ─── SERVICES (DỊCH VỤ) ──────────────────────────
    servicesSection() {
      const svc = config.services || {};

      const cardsHtml = (svc.items || [])
        .map(
          (item) => `<article class="reveal group bg-surface rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div class="relative aspect-[3/2] overflow-hidden bg-surface-light">
              ${media({
                src: item.image || "",
                alt: item.imageAlt || item.title || "",
                cls: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                width: 600,
                height: 400,
              })}
              ${placeholder(item.title)}
            </div>
            <div class="p-5 sm:p-6">
              <div class="w-10 h-10 mb-4 text-accent">
                ${icon(item.icon || "event", "w-full h-full")}
              </div>
              <h3 class="text-xl font-heading font-semibold mb-2">${esc(item.title)}</h3>
              <p class="text-text-muted leading-relaxed">${esc(item.description)}</p>
            </div>
          </article>`
        )
        .join("\n          ");

      return `<section id="services" class="py-16 md:py-24 lg:py-32 bg-primary-light/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        ${sectionHead(svc, "Dịch Vụ")}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          ${cardsHtml}
        </div>
      </div>
    </section>`;
    },

    // ─── VIDEOS ───────────────────────────────────────
    videosSection() {
      const vid = config.videos || {};
      const featured = vid.featured || {};

      // Video chưa có link → nút dẫn về #contact thay vì mở modal rỗng
      const videoAttr = (url) => (url && !isPlaceholder(url) ? `data-video="${esc(url)}"` : `data-video-missing`);

      const smallVideos = (vid.items || [])
        .map(
          (v) => `<div class="reveal">
            <button type="button" ${videoAttr(v.videoUrl)} class="group relative block w-full aspect-video rounded-lg overflow-hidden bg-surface text-left" aria-label="Phát video: ${esc(v.title)}">
              ${media({ src: v.thumbnail || "", alt: "", cls: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105", width: 640, height: 360 })}
              ${placeholder("")}
              <span class="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/40">
                <span class="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  ${icon("play", "w-5 h-5 text-primary ml-0.5")}
                </span>
              </span>
              ${v.duration ? `<span class="absolute bottom-2 right-2 bg-black/75 px-2 py-0.5 rounded text-xs text-text">${esc(v.duration)}</span>` : ""}
            </button>
            <h3 class="mt-3 text-base font-body font-medium">${esc(v.title)}</h3>
          </div>`
        )
        .join("\n          ");

      return `<section id="videos" class="py-16 md:py-24 lg:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        ${sectionHead(vid, "Video")}

        <!-- Video nổi bật (chỉ tải khi bấm — hiện poster trước) -->
        <div class="reveal mb-8 md:mb-12">
          <button type="button" ${videoAttr(featured.videoUrl)} class="group relative block w-full aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden bg-surface text-left" aria-label="Phát video: ${esc(featured.title || "Showreel")}">
            ${media({ src: featured.thumbnail || "", alt: "", cls: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105", width: 1280, height: 720 })}
            ${placeholder("")}
            <span class="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/30">
              <span class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                ${icon("play", "w-8 h-8 md:w-10 md:h-10 text-primary ml-1")}
              </span>
            </span>
            <span class="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between gap-3">
              <span class="text-lg md:text-xl font-heading font-semibold">${esc(featured.title || "")}</span>
              ${featured.duration ? `<span class="bg-black/75 px-3 py-1 rounded text-sm text-text flex-shrink-0">${esc(featured.duration)}</span>` : ""}
            </span>
          </button>
        </div>

        <!-- Video nhỏ -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${smallVideos}
        </div>
      </div>

      <!-- Video Modal -->
      <div id="video-modal" class="lightbox-overlay px-4" role="dialog" aria-modal="true" aria-label="Trình phát video">
        <div class="relative w-full max-w-5xl">
          <button type="button" data-close class="absolute -top-14 right-0 w-11 h-11 flex items-center justify-center text-text-muted hover:text-text transition-colors" aria-label="Đóng video">
            ${icon("close", "w-7 h-7")}
          </button>
          <div data-player class="aspect-video w-full bg-black rounded-lg overflow-hidden"></div>
        </div>
      </div>
    </section>`;
    },

    // ─── GALLERY ──────────────────────────────────────
    gallerySection() {
      const gal = config.gallery || {};
      const categories = gal.categories || [];

      const filterBtns = categories
        .map(
          (cat, i) =>
            `<button type="button" data-filter="${i === 0 ? "*" : esc(cat)}" aria-pressed="${i === 0}" class="px-5 py-2 rounded-full text-sm sm:text-base font-medium border border-border transition-colors duration-300 min-h-[44px] aria-pressed:bg-accent aria-pressed:text-primary aria-pressed:border-accent text-text-muted hover:text-text">${esc(cat)}</button>`
        )
        .join("\n          ");

      const galleryItems = (gal.items || [])
        .map(
          (item) => `<div class="reveal" data-category="${esc(item.category || "")}">
            <button type="button" data-lightbox="${esc(item.src || "")}" data-alt="${esc(item.alt || "")}" class="group relative block w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface" aria-label="Phóng to ảnh: ${esc(item.alt || "")}">
              ${media({ src: item.src || "", alt: item.alt || "", cls: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110", width: 800, height: 600 })}
              ${placeholder(item.category || "Ảnh")}
              <span class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-left text-sm text-text">${esc(item.alt || "")}</span>
            </button>
          </div>`
        )
        .join("\n          ");

      return `<section id="gallery" class="py-16 md:py-24 lg:py-32 bg-primary-light/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        ${sectionHead(gal, "Hình Ảnh")}

        <!-- Bộ lọc -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-12 reveal" role="group" aria-label="Lọc ảnh theo danh mục">
          ${filterBtns}
        </div>

        <!-- Lưới ảnh -->
        <div class="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          ${galleryItems}
        </div>
      </div>

      <!-- Lightbox -->
      <div id="lightbox" class="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Xem ảnh">
        <button type="button" data-close class="absolute top-[max(1rem,env(safe-area-inset-top))] right-4 w-12 h-12 flex items-center justify-center text-text-muted hover:text-text transition-colors z-10" aria-label="Đóng">
          ${icon("close", "w-8 h-8")}
        </button>
        <button type="button" data-prev class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-text-muted hover:text-text transition-colors z-10" aria-label="Ảnh trước">
          ${icon("arrowLeft", "w-7 h-7")}
        </button>
        <button type="button" data-next class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-text-muted hover:text-text transition-colors z-10" aria-label="Ảnh sau">
          ${icon("arrowRight", "w-7 h-7")}
        </button>
        <figure class="max-w-5xl w-full px-4">
          <img alt="" class="max-w-full max-h-[80svh] object-contain mx-auto rounded-lg">
          <figcaption data-caption class="text-center text-text-muted text-sm mt-4"></figcaption>
        </figure>
      </div>
    </section>`;
    },

    // ─── PARTNERS (ĐỐI TÁC) ──────────────────────────
    partnersSection() {
      const par = config.partners || {};

      const logos = (par.items || [])
        .map(
          (p) => `<li class="reveal relative flex items-center justify-center h-20 px-4 rounded-lg bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
            ${media({ src: p.logo || "", alt: p.name || "Đối tác", cls: "h-12 md:h-14 w-auto max-w-full object-contain", width: 200, height: 80 })}
            ${placeholder(p.name, "absolute inset-0 rounded-lg border border-border text-sm text-text-muted")}
          </li>`
        )
        .join("\n          ");

      return `<section id="partners" class="py-12 md:py-16 border-y border-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 reveal">
          <span class="section-label justify-center">${esc(par.sectionLabel || "Đối Tác")}</span>
          <h2 class="text-2xl sm:text-3xl font-heading font-bold">${esc(par.heading || "Tin Tưởng Bởi")}</h2>
        </div>
        <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center">
          ${logos}
        </ul>
      </div>
    </section>`;
    },

    // ─── TESTIMONIALS (CẢM NHẬN) ─────────────────────
    testimonialsSection() {
      const test = config.testimonials || {};
      const items = test.items || [];

      const slides = items
        .map((t, i) => {
          const rating = Math.max(0, Math.min(5, t.rating || 5));
          const stars = Array.from({ length: rating }, () => icon("star", "w-4 h-4 text-accent inline-block")).join("");
          const initial = (t.name || "?").trim().split(/\s+/).pop().charAt(0);

          return `<figure class="w-full flex-shrink-0 px-1 sm:px-8" role="group" aria-roledescription="slide" aria-label="${i + 1} / ${items.length}">
              <div class="max-w-3xl mx-auto text-center">
                <div class="mb-6">
                  ${icon("quote", "w-14 h-14 mx-auto text-accent")}
                </div>
                <blockquote class="text-lg sm:text-xl md:text-2xl text-text leading-relaxed mb-8 italic">
                  “${esc(t.content || "")}”
                </blockquote>
                <figcaption class="flex items-center justify-center gap-4">
                  <span class="relative w-14 h-14 rounded-full overflow-hidden bg-surface-light flex-shrink-0">
                    ${media({ src: t.avatar || "", alt: t.name || "", cls: "w-full h-full object-cover", width: 100, height: 100 })}
                    ${placeholder(initial, "absolute inset-0 text-lg font-heading text-accent")}
                  </span>
                  <span class="text-left">
                    <span class="block font-semibold">${esc(t.name || "")}</span>
                    <span class="block text-sm text-text-muted">${esc(t.role || "")}</span>
                    <span class="block mt-1" role="img" aria-label="${rating} trên 5 sao">${stars}</span>
                  </span>
                </figcaption>
              </div>
            </figure>`;
        })
        .join("\n            ");

      const dots = items
        .map(
          (_, i) =>
            `<button type="button" data-testimonial-dot aria-current="${i === 0}" class="group w-11 h-11 flex items-center justify-center" aria-label="Xem đánh giá ${i + 1}"><span class="block h-2.5 rounded-full transition-all duration-300 w-2.5 bg-text-dim group-aria-[current=true]:w-6 group-aria-[current=true]:bg-accent"></span></button>`
        )
        .join("\n            ");

      return `<section id="testimonials" class="py-16 md:py-24 lg:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        ${sectionHead(test, "Cảm Nhận")}

        <div class="relative reveal" aria-roledescription="carousel" aria-label="Cảm nhận khách hàng">
          <!-- Track (vuốt ngang trên điện thoại) -->
          <div class="overflow-hidden touch-pan-y">
            <div id="testimonial-track" class="flex transition-transform duration-500 ease-smooth">
              ${slides}
            </div>
          </div>

          <!-- Điều hướng -->
          <div class="flex items-center justify-center gap-3 sm:gap-4 mt-8">
            <button type="button" data-testimonial-prev class="hidden sm:flex w-12 h-12 rounded-full border border-border-light items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors" aria-label="Đánh giá trước">
              ${icon("arrowLeft", "w-5 h-5")}
            </button>
            <div class="flex items-center gap-2">
            ${dots}
            </div>
            <button type="button" data-testimonial-next class="hidden sm:flex w-12 h-12 rounded-full border border-border-light items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors" aria-label="Đánh giá sau">
              ${icon("arrowRight", "w-5 h-5")}
            </button>
          </div>
        </div>
      </div>
    </section>`;
    },

    // ─── CONTACT (LIÊN HỆ) ───────────────────────────
    contactSection() {
      const c = config.contact || {};
      const form = c.form || {};

      const card = (href, iconName, label, value, extraCls = "") => {
        const inner = `<span class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
              ${icon(iconName, "w-5 h-5 text-accent")}
            </span>
            <span class="min-w-0">
              <span class="block text-sm text-text-muted">${esc(label)}</span>
              <span class="block font-semibold break-words ${extraCls}">${esc(value)}</span>
            </span>`;
        return href
          ? `<a ${linkAttrs(href)} class="reveal group flex items-center gap-4 p-5 bg-surface rounded-lg transition-colors duration-300 hover:bg-surface-light min-h-[44px]">
            ${inner}
          </a>`
          : `<div class="reveal group flex items-center gap-4 p-5 bg-surface rounded-lg">
            ${inner}
          </div>`;
      };

      const eventOptions = (form.eventTypes || [])
        .map((t) => `<option value="${esc(t)}">${esc(t)}</option>`)
        .join("");

      const field = "w-full min-h-[48px] rounded-md bg-primary border border-border-light px-4 py-3 text-base text-text placeholder:text-text-dim focus:border-accent focus:outline-none transition-colors";

      return `<section id="contact" class="py-16 md:py-24 lg:py-32 bg-primary-light/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        ${sectionHead(c, "Liên Hệ")}

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          <!-- Kênh liên hệ -->
          <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 content-start">
            ${card(h.phoneLink, "phone", "Điện thoại", h.phoneDisplay)}
            ${card(h.zaloLink, "zalo", "Zalo", "Chat Zalo")}
            ${card(h.emailLink, "email", "Email", h.emailDisplay)}
            ${card(h.facebookLink, "facebook", "Facebook", "Theo dõi Fanpage")}
            ${card(h.youtubeLink, "youtube", "YouTube", "Xem kênh")}
            ${c.address && !isPlaceholder(c.address) ? card(null, "location", "Khu vực", c.address) : ""}
            ${card(null, "clock", "Giờ làm việc", c.workingHours || "")}
          </div>

          <!-- Form yêu cầu báo giá (gửi qua email, không cần máy chủ) -->
          <form id="contact-form" data-email="${esc(h.emailRaw)}" class="reveal lg:col-span-3 bg-surface rounded-lg p-5 sm:p-8" novalidate>
            <h3 class="text-2xl font-heading font-semibold mb-2">${esc(form.heading || "Gửi Yêu Cầu Báo Giá")}</h3>
            <p class="text-text-muted mb-6">${esc(form.note || "")}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="cf-name" class="block text-sm font-medium mb-2">Họ và tên *</label>
                <input id="cf-name" name="name" type="text" autocomplete="name" required class="${field}" placeholder="Nguyễn Văn A">
              </div>
              <div>
                <label for="cf-phone" class="block text-sm font-medium mb-2">Số điện thoại *</label>
                <input id="cf-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required pattern="[0-9+ .]{9,15}" class="${field}" placeholder="0901 234 567">
              </div>
              <div>
                <label for="cf-type" class="block text-sm font-medium mb-2">Loại sự kiện</label>
                <select id="cf-type" name="eventType" class="${field}">${eventOptions}</select>
              </div>
              <div>
                <label for="cf-date" class="block text-sm font-medium mb-2">Ngày dự kiến</label>
                <input id="cf-date" name="date" type="date" class="${field} [color-scheme:dark]">
              </div>
              <div class="sm:col-span-2">
                <label for="cf-message" class="block text-sm font-medium mb-2">Nội dung</label>
                <textarea id="cf-message" name="message" rows="4" class="${field}" placeholder="Địa điểm, số lượng khách, mong muốn của bạn..."></textarea>
              </div>
            </div>
            <button type="submit" class="btn-primary w-full sm:w-auto mt-6 text-base px-8 py-4">
              ${icon("send", "w-5 h-5")} ${esc(form.submitLabel || "Gửi Yêu Cầu")}
            </button>
            <p data-form-status role="status" class="mt-4 text-base text-accent-light min-h-[1.5rem]"></p>
          </form>
        </div>
      </div>
    </section>`;
    },

    // ─── FOOTER ───────────────────────────────────────
    footerSection() {
      const f = config.footer || {};
      return `<footer class="pt-8 pb-28 md:pb-8 border-t border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p class="text-sm text-text-muted">${esc(f.copyright || "")}</p>
        <p class="text-sm text-text-muted">${esc(f.madeWith || "")}</p>
      </div>
    </div>
  </footer>`;
    },

    // ─── FLOATING BUTTON (desktop/tablet — mobile đã có thanh đáy) ──
    floatingButton() {
      const fb = config.floatingButton || {};
      if (fb.enabled === false) return "";
      return `<a ${linkAttrs(h.floatingLink)}
     class="hidden md:flex fixed bottom-8 right-8 z-40 w-14 h-14 bg-accent rounded-full items-center justify-center shadow-lg shadow-accent/30 transition-transform duration-300 hover:scale-110"
     aria-label="${esc(fb.label || "Chat Zalo")}">
    ${icon("zalo", "w-7 h-7 text-primary")}
  </a>`;
    },

    // ─── BACK TO TOP ──────────────────────────────────
    backToTop() {
      if (!config.footer?.backToTop) return "";
      return `<button type="button" id="back-to-top"
     class="fixed right-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] md:bottom-8 md:right-26 z-40 w-12 h-12 bg-surface-light rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 invisible translate-y-4"
     aria-label="Cuộn lên đầu trang">
    ${icon("arrowUp", "w-5 h-5 text-accent")}
  </button>`;
    },

    // ─── MOBILE BOTTOM BAR ────────────────────────────
    mobileBottomBar() {
      const item = (href, iconName, label) => `<a ${linkAttrs(href)} class="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 min-h-[56px] text-text-muted hover:text-accent transition-colors">
        ${icon(iconName, "w-5 h-5")}
        <span class="text-xs font-medium">${label}</span>
      </a>`;
      return `<nav id="mobile-bottom-bar" class="fixed bottom-0 inset-x-0 z-40 md:hidden translate-y-full transition-transform duration-300 bg-surface border-t border-border safe-bottom" aria-label="Liên hệ nhanh">
    <div class="flex gap-2 px-2">
      ${item(h.phoneLink, "phone", "Gọi ngay")}
      ${item(h.zaloLink, "zalo", "Zalo")}
      ${item(h.emailLink, "email", "Email")}
      ${item("#contact", "send", "Báo giá")}
    </div>
  </nav>`;
    },
  };
}

// ─── RENDER PAGE ────────────────────────────────────────

/**
 * Ghép template + config → HTML hoàn chỉnh
 * @param {string} template — Nội dung index.html (file khung)
 * @param {object} config — SITE_CONFIG
 * @returns {{ html: string, missing: string[] }}
 */
export function renderPage(template, config) {
  const renderers = createRenderers(config);
  const missing = [];

  // Xóa comment hướng dẫn ở đầu file
  let html = template.replace(/<!--\s*ĐÂY LÀ FILE KHUNG[\s\S]*?-->\s*\n?/, "");

  // 1) Thay thế renderer blocks: {{{ @tenRenderer }}}
  html = html.replace(/\{\{\{\s*@(\w+)\s*\}\}\}/g, (match, name) => {
    if (typeof renderers[name] === "function") {
      return renderers[name]();
    }
    missing.push(`@${name}`);
    return "";
  });

  // 2) Thay thế giá trị: {{ duong.dan }}
  html = html.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (match, path) => {
    const val = path.split(".").reduce((obj, key) => (obj == null ? undefined : obj[key]), config);
    if (val === undefined || val === null || typeof val === "object") {
      missing.push(path);
      return "";
    }
    return esc(String(val));
  });

  return { html, missing };
}
