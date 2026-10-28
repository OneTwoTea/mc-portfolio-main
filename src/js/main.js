/**
 * ═══════════════════════════════════════════════════════════
 *  MAIN.JS — JavaScript phía trình duyệt
 *  Hiệu ứng, menu mobile, gallery, slider, lightbox, video, form
 * ═══════════════════════════════════════════════════════════
 */

(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ─── KHÓA CUỘN TRANG (menu, lightbox, video) ───────────
  let lockCount = 0;
  function lockScroll() {
    if (lockCount++ === 0) document.documentElement.style.overflow = "hidden";
  }
  function unlockScroll() {
    if (lockCount > 0 && --lockCount === 0) document.documentElement.style.overflow = "";
  }

  // ─── SCROLL REVEAL ─────────────────────────────────────
  function initScrollReveal() {
    const els = document.querySelectorAll(".reveal");
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
  }

  // ─── MOBILE MENU ──────────────────────────────────────
  function initMobileMenu() {
    const btn = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");
    if (!btn || !menu) return;

    const bars = btn.querySelectorAll("span");
    let isOpen = false;

    function setOpen(open) {
      if (open === isOpen) return;
      isOpen = open;
      menu.classList.toggle("opacity-0", !open);
      menu.classList.toggle("invisible", !open);
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
      // Hamburger → dấu X
      bars[0]?.classList.toggle("translate-y-[8px]", open);
      bars[0]?.classList.toggle("rotate-45", open);
      bars[1]?.classList.toggle("opacity-0", open);
      bars[2]?.classList.toggle("-translate-y-[8px]", open);
      bars[2]?.classList.toggle("-rotate-45", open);
      if (open) {
        lockScroll();
        menu.querySelector("a")?.focus();
      } else {
        unlockScroll();
      }
    }

    btn.addEventListener("click", () => setOpen(!isOpen));

    // Đóng khi chọn một mục, hoặc bấm vào vùng trống ngoài các link
    menu.addEventListener("click", (e) => {
      setOpen(false);
      if (!e.target.closest("a")) btn.focus();
    });

    // Đóng khi bấm Esc
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) {
        setOpen(false);
        btn.focus();
      }
    });

    // Lên màn hình lớn thì đóng menu
    window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => {
      if (e.matches) setOpen(false);
    });
  }

  // ─── HEADER ĐỔI NỀN KHI CUỘN ──────────────────────────
  function initHeaderScroll() {
    const header = document.getElementById("site-header");
    if (!header) return;

    const update = () => {
      const scrolled = window.scrollY > 60;
      header.classList.toggle("bg-primary/95", scrolled);
      header.classList.toggle("md:backdrop-blur-md", scrolled);
      header.classList.toggle("shadow-lg", scrolled);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  // ─── GALLERY FILTER ───────────────────────────────────
  function initGalleryFilter() {
    const filterBtns = document.querySelectorAll("[data-filter]");
    const items = document.querySelectorAll("[data-category]");
    if (!filterBtns.length || !items.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        filterBtns.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));

        items.forEach((item) => {
          const show = filter === "*" || item.dataset.category === filter;
          item.hidden = !show;
          if (show) item.classList.add("revealed");
        });
      });
    });
  }

  // ─── LIGHTBOX (vuốt trái/phải trên điện thoại) ────────
  function initLightbox() {
    const overlay = document.getElementById("lightbox");
    if (!overlay) return;

    const img = overlay.querySelector("img");
    const caption = overlay.querySelector("[data-caption]");
    const closeBtn = overlay.querySelector("[data-close]");
    const allItems = Array.from(document.querySelectorAll("[data-lightbox]"));
    let visible = [];
    let current = 0;
    let opener = null;
    let touchStartX = 0;

    function show(index) {
      if (!visible.length) return;
      current = (index + visible.length) % visible.length;
      const item = visible[current];
      img.src = item.dataset.lightbox;
      img.alt = item.dataset.alt || "";
      caption.textContent = item.dataset.alt || "";
    }

    function open(item) {
      // Chỉ duyệt các ảnh đang hiển thị theo bộ lọc
      visible = allItems.filter((el) => !el.closest("[data-category]")?.hidden);
      opener = item;
      show(visible.indexOf(item));
      overlay.classList.add("active");
      lockScroll();
      closeBtn?.focus();
    }

    function close() {
      if (!overlay.classList.contains("active")) return;
      overlay.classList.remove("active");
      unlockScroll();
      opener?.focus();
    }

    allItems.forEach((item) => item.addEventListener("click", () => open(item)));
    closeBtn?.addEventListener("click", close);
    overlay.querySelector("[data-prev]")?.addEventListener("click", () => show(current - 1));
    overlay.querySelector("[data-next]")?.addEventListener("click", () => show(current + 1));

    // Ảnh chưa có → hiện nền thay thế thay vì icon ảnh lỗi
    const fallbackCls = ["bg-surface-light", "w-[min(80vw,48rem)]", "aspect-[4/3]"];
    img.addEventListener("error", () => img.classList.add(...fallbackCls));
    img.addEventListener("load", () => img.classList.remove(...fallbackCls));

    document.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("active")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });

    // Bấm ra vùng tối xung quanh để đóng
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay || e.target.tagName === "FIGURE") close();
    });

    overlay.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    overlay.addEventListener("touchend", (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) show(current + (diff > 0 ? 1 : -1));
    }, { passive: true });
  }

  // ─── TESTIMONIALS SLIDER (có vuốt) ────────────────────
  function initTestimonialSlider() {
    const track = document.getElementById("testimonial-track");
    if (!track) return;

    const slides = Array.from(track.children);
    const dots = document.querySelectorAll("[data-testimonial-dot]");
    let current = 0;
    let touchStartX = 0;
    let timer = null;

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      slides.forEach((s, i) => s.setAttribute("aria-hidden", String(i !== current)));
      dots.forEach((dot, i) => dot.setAttribute("aria-current", String(i === current)));
    }

    function start() {
      if (prefersReduced) return;
      stop();
      timer = setInterval(() => goTo(current + 1), 6000);
    }
    function stop() {
      clearInterval(timer);
    }
    function userGo(index) {
      goTo(index);
      start();
    }

    document.querySelector("[data-testimonial-prev]")?.addEventListener("click", () => userGo(current - 1));
    document.querySelector("[data-testimonial-next]")?.addEventListener("click", () => userGo(current + 1));
    dots.forEach((dot, i) => dot.addEventListener("click", () => userGo(i)));

    track.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].clientX;
      stop();
    }, { passive: true });
    track.addEventListener("touchend", (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
      start();
    }, { passive: true });

    // Tạm dừng khi rê chuột / focus vào slider
    const root = track.closest("[aria-roledescription='carousel']");
    root?.addEventListener("mouseenter", stop);
    root?.addEventListener("mouseleave", start);
    root?.addEventListener("focusin", stop);
    root?.addEventListener("focusout", start);

    goTo(0);
    start();
  }

  // ─── VIDEO PLAYER (chỉ tải khi bấm) ───────────────────
  function toEmbed(url) {
    try {
      const u = new URL(url, location.href);
      let id = "";
      if (u.hostname.includes("youtu.be")) id = u.pathname.slice(1);
      else if (u.hostname.includes("youtube")) id = u.searchParams.get("v") || u.pathname.split("/").pop();
      if (id) return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    } catch (_) {
      /* bỏ qua */
    }
    return url;
  }

  function initVideoPlayer() {
    const modal = document.getElementById("video-modal");
    if (!modal) return;
    const player = modal.querySelector("[data-player]");
    const closeBtn = modal.querySelector("[data-close]");
    let opener = null;

    function open(el) {
      const url = el.dataset.video;
      opener = el;
      player.innerHTML = "";
      if (/\.(mp4|webm)(\?|$)/i.test(url)) {
        // Video tự host trong public/videos/
        const video = document.createElement("video");
        video.src = url;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;
        video.className = "w-full h-full";
        player.appendChild(video);
      } else {
        const iframe = document.createElement("iframe");
        iframe.src = toEmbed(url);
        iframe.title = el.getAttribute("aria-label") || "Video";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        iframe.className = "w-full h-full";
        player.appendChild(iframe);
      }
      modal.classList.add("active");
      lockScroll();
      closeBtn?.focus();
    }

    function close() {
      if (!modal.classList.contains("active")) return;
      modal.classList.remove("active");
      player.innerHTML = ""; // dừng phát
      unlockScroll();
      opener?.focus();
    }

    document.querySelectorAll("[data-video]").forEach((el) => el.addEventListener("click", () => open(el)));
    // Video chưa có link → chuyển tới phần liên hệ
    document.querySelectorAll("[data-video-missing]").forEach((el) =>
      el.addEventListener("click", () => document.getElementById("contact")?.scrollIntoView())
    );

    closeBtn?.addEventListener("click", close);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  // ─── BACK TO TOP + THANH LIÊN HỆ MOBILE ───────────────
  function initScrollWidgets() {
    const topBtn = document.getElementById("back-to-top");
    const bar = document.getElementById("mobile-bottom-bar");

    const update = () => {
      const y = window.scrollY;
      if (topBtn) {
        const show = y > 600;
        topBtn.classList.toggle("opacity-0", !show);
        topBtn.classList.toggle("invisible", !show);
        topBtn.classList.toggle("translate-y-4", !show);
      }
      if (bar) bar.classList.toggle("translate-y-full", y < 200);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();

    topBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
    });
  }

  // ─── FORM LIÊN HỆ (mở ứng dụng email, không cần máy chủ) ─
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const status = form.querySelector("[data-form-status]");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const phone = String(data.get("phone") || "").trim();

      if (!name || !form.elements.phone.checkValidity() || !phone) {
        status.textContent = "Vui lòng nhập họ tên và số điện thoại hợp lệ.";
        (name ? form.elements.phone : form.elements.name).focus();
        return;
      }

      const email = form.dataset.email;
      if (!email) {
        status.textContent = "Kênh email đang được cập nhật — vui lòng gọi điện hoặc nhắn Zalo giúp mình nhé!";
        return;
      }

      const body = [
        `Họ tên: ${name}`,
        `Điện thoại: ${phone}`,
        `Loại sự kiện: ${data.get("eventType") || ""}`,
        `Ngày dự kiến: ${data.get("date") || ""}`,
        "",
        String(data.get("message") || ""),
      ].join("\n");
      const subject = `Yêu cầu báo giá MC — ${name}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = "Đang mở ứng dụng email của bạn...";
    });
  }

  // ─── INIT ─────────────────────────────────────────────
  initScrollReveal();
  initMobileMenu();
  initHeaderScroll();
  initGalleryFilter();
  initLightbox();
  initTestimonialSlider();
  initVideoPlayer();
  initScrollWidgets();
  initContactForm();
})();
