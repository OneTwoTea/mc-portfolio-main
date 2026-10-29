/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SITE.CONFIG.JS — CẤU HÌNH NỘI DUNG WEBSITE               ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  Toàn bộ nội dung hiển thị trên website được quản lý       ║
 * ║  tại file này. Muốn đổi nội dung, chỉ cần sửa file này    ║
 * ║  rồi chạy `npm.cmd run build`.                                 ║
 * ║                                                             ║
 * ║  HƯỚNG DẪN:                                                 ║
 * ║  - Thay các giá trị [IN_HOA] bằng thông tin thật            ║
 * ║  - Đường dẫn ảnh viết dạng "public/images/..."             ║
 * ║  - Ảnh ưu tiên .webp, tên kebab-case: service-01.webp      ║
 * ║  - Kích thước ảnh khuyến nghị ghi ở comment từng mục       ║
 * ║  - Ảnh chưa có → trang tự hiện khung nền thay thế           ║
 * ║  - Link còn placeholder → nút tự trỏ về mục #contact        ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const SITE_CONFIG = {

  // ─── 1. SEO & META ─────────────────────────────────────────
  seo: {
    title: "MC [TEN_MC] — MC Sự Kiện Chuyên Nghiệp",
    description: "MC dẫn chương trình sự kiện chuyên nghiệp tại TP.HCM và toàn quốc. Hơn [SO_NAM_KINH_NGHIEM] năm kinh nghiệm, [SO_SU_KIEN]+ sự kiện thành công.",
    keywords: "MC sự kiện, MC đám cưới, MC doanh nghiệp, dẫn chương trình, [TEN_MC]",
    ogImage: "public/images/og/og-cover.jpg",        // 1200×630px, JPG (Facebook/Zalo chưa đọc tốt WebP)
    ogImageAlt: "MC [TEN_MC] — Dẫn chương trình sự kiện",
    url: "[WEBSITE_URL]",                            // VD: https://ten-ban.github.io/mc-portfolio/
    locale: "vi_VN",
    themeColor: "#601633",
  },

  // ─── 2. THÔNG TIN CÁ NHÂN / THƯƠNG HIỆU ──────────────────
  brand: {
    name: "[TEN_MC]",
    tagline: "MC Sự Kiện Chuyên Nghiệp",
    logo: "public/icons/favicon.svg",                // SVG logo, 40×40px hiển thị
    logoAlt: "Logo [TEN_MC]",
  },

  // ─── 3. HEADER ─────────────────────────────────────────────
  // Logo bên trái, menu giữa, nút CTA bên phải
  header: {
    menuItems: [
      { label: "Trang chủ", href: "#hero" },
      { label: "Giới thiệu", href: "#about" },
      { label: "Dịch vụ", href: "#services" },
      { label: "Video", href: "#videos" },
      { label: "Cảm nhận", href: "#testimonials" },
      { label: "Liên hệ", href: "#contact" },
    ],
    ctaButton: {
      label: "Đặt Lịch Ngay",
      href: "[ZALO_LINK]",                           // Link Zalo hoặc #contact
    },
  },

  // ─── 4. HERO ───────────────────────────────────────────────
  // Ảnh nền: Desktop 1920×1080px (ngang 16:9), Mobile 750×1334px (dọc 9:16)
  // Nên chọn ảnh có vùng tối ở giữa để chữ trắng dễ đọc
  hero: {
    heading: "Khoảnh Khắc Đáng Nhớ\nBắt Đầu Từ Sân Khấu",
    subheading: "MC dẫn chương trình chuyên nghiệp cho đám cưới, sự kiện doanh nghiệp và các chương trình nghệ thuật trên toàn quốc.",
    backgroundDesktop: "public/images/hero/hero.jpg",   // 1920×1080px
    backgroundMobile: "public/images/hero/hero_minh.jpg",     // 750×1334px
    backgroundAlt: "MC [TEN_MC] dẫn chương trình trên sân khấu",
    ctaPrimary: {
      label: "Đặt Lịch Qua Zalo",
      href: "[ZALO_LINK]",
    },
    ctaSecondary: {
      label: "Xem Showreel",
      href: "#videos",
    },
    scrollIndicator: true,
  },

  // ─── 5. GIỚI THIỆU ────────────────────────────────────────
  // Ảnh chân dung: Desktop 600×800px (3:4), Mobile 400×500px (4:5)
  about: {
    sectionLabel: "Về Tôi",
    heading: "Đồng Hành Cùng\nKhoảnh Khắc Của Bạn",
    portrait: "public/images/about/portrait.webp",        // 600×800px
    portraitMobile: "public/images/about/portrait-mobile.webp", // 400×500px
    portraitAlt: "MC [TEN_MC] trên sân khấu",
    story: "Với hơn [SO_NAM_KINH_NGHIEM] năm kinh nghiệm trong lĩnh vực dẫn chương trình, tôi đã có vinh dự đồng hành cùng hàng trăm sự kiện — từ những đám cưới ấm cúng đến những gala doanh nghiệp quy mô lớn.\n\nTriết lý của tôi: mỗi sự kiện là duy nhất, và người MC phải là cầu nối cảm xúc giữa chương trình và khán giả. Tôi luôn chuẩn bị kỹ lưỡng, lắng nghe mong muốn của khách hàng, và mang đến năng lượng tích cực cho từng khoảnh khắc trên sân khấu.",
    stats: [
      { number: "[SO_NAM_KINH_NGHIEM]+", label: "Năm Kinh Nghiệm" },
      { number: "[SO_SU_KIEN]+", label: "Sự Kiện Thành Công" },
      { number: "50+", label: "Đối Tác Doanh Nghiệp" },
      { number: "100%", label: "Khách Hàng Hài Lòng" },
    ],
  },

  // ─── 6. DỊCH VỤ ───────────────────────────────────────────
  // Ảnh dịch vụ: 600×400px (3:2) — dùng chung desktop & mobile (thẻ co theo màn hình)
  services: {
    sectionLabel: "Dịch Vụ",
    heading: "Dịch Vụ Của Tôi",
    subheading: "Mỗi loại hình sự kiện đều được chuẩn bị kịch bản riêng, phù hợp với phong cách và mong muốn của bạn.",
    items: [
      {
        icon: "wedding",
        title: "MC Đám Cưới",
        description: "Dẫn dắt tiệc cưới ấm cúng, lãng mạn với kịch bản cá nhân hóa cho từng cặp đôi.",
        image: "public/images/services/service-01.webp",  // 600×400px
      },
      {
        icon: "corporate",
        title: "MC Doanh Nghiệp",
        description: "Gala dinner, hội nghị khách hàng, lễ kỷ niệm — chuyên nghiệp và đẳng cấp.",
        image: "public/images/services/service-02.webp",
      },
      {
        icon: "event",
        title: "MC Sự Kiện",
        description: "Festival, concert, gameshow — tạo không khí sôi động và kết nối khán giả.",
        image: "public/images/services/service-03.webp",
      },
      {
        icon: "ceremony",
        title: "MC Lễ Khai Trương",
        description: "Lễ khai trương, động thổ, khánh thành — trang trọng và chuyên nghiệp.",
        image: "public/images/services/service-04.webp",
      },
      {
        icon: "award",
        title: "MC Lễ Trao Giải",
        description: "Vinh danh, trao giải thưởng — tạo cảm xúc và khoảnh khắc đáng nhớ.",
        image: "public/images/services/service-05.webp",
      },
      {
        icon: "bilingual",
        title: "MC Song Ngữ",
        description: "Dẫn chương trình Việt — Anh cho sự kiện quốc tế và đa văn hóa.",
        image: "public/images/services/service-06.webp",
      },
    ],
  },

  // ─── 7. VIDEO ──────────────────────────────────────────────
  // Thumbnail (poster): showreel 1280×720px, video nhỏ 640×360px (16:9) — dùng chung desktop & mobile
  // videoUrl: link YouTube (https://youtu.be/... hoặc https://www.youtube.com/watch?v=...)
  //           hoặc file tự host "public/videos/ten-video.mp4". Video chỉ tải khi người xem bấm.
  videos: {
    sectionLabel: "Video",
    heading: "Khoảnh Khắc Trên Sân Khấu",
    subheading: "Xem những highlight từ các sự kiện tôi đã dẫn chương trình.",
    featured: {
      title: "Showreel 2025",
      thumbnail: "public/images/videos/showreel-thumb.webp",  // 1280×720px
      videoUrl: "[YOUTUBE_SHOWREEL_URL]",
      duration: "3:45",
    },
    items: [
      {
        title: "Highlight Đám Cưới",
        thumbnail: "public/images/videos/video-01.webp",       // 640×360px
        videoUrl: "[YOUTUBE_VIDEO_01]",
        duration: "2:30",
      },
      {
        title: "Gala Doanh Nghiệp ABC",
        thumbnail: "public/images/videos/video-02.webp",
        videoUrl: "[YOUTUBE_VIDEO_02]",
        duration: "4:15",
      },
      {
        title: "Festival Âm Nhạc 2025",
        thumbnail: "public/images/videos/video-03.webp",
        videoUrl: "[YOUTUBE_VIDEO_03]",
        duration: "3:00",
      },
      {
        title: "Lễ Kỷ Niệm 20 Năm Cty XYZ",
        thumbnail: "public/images/videos/video-04.webp",
        videoUrl: "[YOUTUBE_VIDEO_04]",
        duration: "5:20",
      },
    ],
  },

  // ─── 8. GALLERY ────────────────────────────────────────────
  // Ảnh gallery: 1200×900px (4:3) — lưới hiển thị khung 4:3, ảnh lớn dùng cho lightbox
  // Mobile dùng chung ảnh này (1 cột ≤ 480px, 2 cột trên tablet). "category" phải trùng 1 mục trong categories
  gallery: {
    sectionLabel: "Hình Ảnh",
    heading: "Khoảnh Khắc Đáng Nhớ",
    subheading: "Những khoảnh khắc thực tế từ các sự kiện tôi đã đồng hành.",
    categories: ["Tất cả", "Đám cưới", "Doanh nghiệp", "Sự kiện", "Hậu trường"],
    items: [
      {
        src: "public/images/gallery/gallery-01.webp",    // 1200×900px
        alt: "MC dẫn chương trình đám cưới sang trọng",
        category: "Đám cưới",
      },
      {
        src: "public/images/gallery/gallery-02.webp",
        alt: "MC trên sân khấu gala doanh nghiệp",
        category: "Doanh nghiệp",
      },
      {
        src: "public/images/gallery/gallery-03.webp",
        alt: "Khoảnh khắc tương tác với khán giả",
        category: "Sự kiện",
      },
      {
        src: "public/images/gallery/gallery-04.webp",
        alt: "MC dẫn đám cưới ngoài trời",
        category: "Đám cưới",
      },
      {
        src: "public/images/gallery/gallery-05.webp",
        alt: "Gala dinner doanh nghiệp",
        category: "Doanh nghiệp",
      },
      {
        src: "public/images/gallery/gallery-06.webp",
        alt: "Chuẩn bị trước sự kiện",
        category: "Hậu trường",
      },
      {
        src: "public/images/gallery/gallery-07.webp",
        alt: "MC festival âm nhạc",
        category: "Sự kiện",
      },
      {
        src: "public/images/gallery/gallery-08.webp",
        alt: "Chụp ảnh cùng cặp đôi",
        category: "Đám cưới",
      },
      {
        src: "public/images/gallery/gallery-04.webp",
        alt: "MC dẫn chương trình lễ khai trương cửa hàng",
        category: "Doanh nghiệp",
      },
    ],
  },

  // ─── 9. KHÁCH HÀNG / ĐỐI TÁC ─────────────────────────────
  // Logo đối tác: 200×80px, nền trong suốt (WebP/PNG/SVG) — dùng chung desktop & mobile
  // Chưa có logo → hiển thị tên công ty trong khung
  partners: {
    sectionLabel: "Đối Tác",
    heading: "Tin Tưởng Bởi",
    items: [
      { name: "Công ty A", logo: "public/images/partners/partner-01.webp" },
      { name: "Công ty B", logo: "public/images/partners/partner-02.webp" },
      { name: "Công ty C", logo: "public/images/partners/partner-03.webp" },
      { name: "Công ty D", logo: "public/images/partners/partner-04.webp" },
      { name: "Công ty E", logo: "public/images/partners/partner-05.webp" },
      { name: "Công ty F", logo: "public/images/partners/partner-06.webp" },
      //thêm logo đối tác khác tại đây bằng cách copy 1 dòng { name: "Tên công ty", logo: "public/images/partners/partner-xx.webp" } và đổi tên công ty + đường dẫn logo
    ],
  },

  // ─── 10. CẢM NHẬN KHÁCH HÀNG ──────────────────────────────
  // Avatar: 100×100px vuông (hiển thị tròn) — chưa có ảnh → hiện chữ cái đầu của tên
  testimonials: {
    sectionLabel: "Cảm Nhận",
    heading: "Khách Hàng Nói Gì",
    subheading: "Niềm tin của khách hàng là động lực lớn nhất để tôi không ngừng hoàn thiện.",
    items: [
      {
        name: "Anh Trần Văn Hùng",
        role: "Giám đốc, Công ty ABC",
        avatar: "public/images/testimonials/avatar-01.webp",  // 100×100px
        content: "Anh [TEN_MC] dẫn gala cuối năm cho công ty tôi rất chuyên nghiệp. Chương trình được dẫn dắt mạch lạc, không khí sôi động. Chắc chắn sẽ tiếp tục hợp tác!",
        rating: 5,
      },
      {
        name: "Chị Nguyễn Thị Mai",
        role: "Cô dâu",
        avatar: "public/images/testimonials/avatar-02.webp",
        content: "Cảm ơn anh [TEN_MC] đã làm đám cưới của vợ chồng em thêm trọn vẹn. Anh rất tâm lý, chuẩn bị kỹ lưỡng và tạo được nhiều khoảnh khắc xúc động.",
        rating: 5,
      },
      {
        name: "Anh Lê Minh Đức",
        role: "Trưởng phòng Marketing, Tập đoàn XYZ",
        avatar: "public/images/testimonials/avatar-03.webp",
        content: "Đã làm việc với nhiều MC nhưng anh [TEN_MC] luôn là lựa chọn hàng đầu cho các sự kiện quan trọng. Phong cách chuyên nghiệp, linh hoạt và rất có duyên.",
        rating: 5,
      },
      {
        name: "Chị Phạm Hồng Nhung",
        role: "Wedding Planner",
        avatar: "public/images/testimonials/avatar-04.webp",
        content: "Tôi thường xuyên giới thiệu anh [TEN_MC] cho các cặp đôi. Anh luôn mang đến sự chuyên nghiệp và cảm xúc đúng mực cho mỗi lễ cưới.",
        rating: 5,
      },
    ],
  },

  // ─── 11. LIÊN HỆ ──────────────────────────────────────────
  contact: {
    sectionLabel: "Liên Hệ",
    heading: "Hãy Kết Nối Với Tôi",
    subheading: "Bạn đang lên kế hoạch cho sự kiện? Liên hệ ngay để được tư vấn miễn phí!",
    phone: "[SO_DIEN_THOAI]",                        // VD: "0901 234 567" — tự tạo link tel:
    zalo: "[ZALO_LINK]",                             // https://zalo.me/<số điện thoại>
    email: "[EMAIL]",
    facebook: "[FACEBOOK_LINK]",
    youtube: "[YOUTUBE_LINK]",
    address: "[DIA_CHI]",
    workingHours: "Thứ 2 — Chủ nhật: 8:00 — 21:00",
    // Form báo giá: bấm gửi sẽ mở ứng dụng email với nội dung đã điền (không cần máy chủ)
    form: {
      heading: "Gửi Yêu Cầu Báo Giá",
      note: "Để lại thông tin, tôi sẽ liên hệ lại trong vòng 24 giờ.",
      submitLabel: "Gửi Yêu Cầu",
      eventTypes: ["Đám cưới", "Sự kiện doanh nghiệp", "Khai trương / Khánh thành", "Lễ trao giải", "Sự kiện song ngữ", "Khác"],
    },
  },

  // ─── 12. FLOATING BUTTON ──────────────────────────────────
  // Nút Zalo nổi góc phải (tablet/desktop). Trên mobile đã có thanh liên hệ ở đáy màn hình
  floatingButton: {
    enabled: true,
    type: "zalo",
    label: "Chat Zalo",
    href: "[ZALO_LINK]",                             // VD: https://zalo.me/0901234567
  },

  // ─── 13. FOOTER ────────────────────────────────────────────
  footer: {
    copyright: "© 2026 [TEN_MC]. All rights reserved.",
    madeWith: "MC sự kiện tại TP.HCM & toàn quốc",
    backToTop: true,
  },
};
