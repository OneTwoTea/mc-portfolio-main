# MC Portfolio — Website MC sự kiện

Website một trang cho MC sự kiện: HTML + Tailwind CSS v4 + JavaScript thuần, không framework, không bundler.
Toàn bộ nội dung nằm trong **một file duy nhất: `site.config.js`**.

## Cài đặt

Yêu cầu **Node.js >= 20**.

```bash
npm install
```

## Các lệnh

| Lệnh | Tác dụng |
|---|---|
| `npm.cmd run dev` | Build (không minify), mở server tại http://localhost:5173 và tự build lại khi sửa `index.html`, `site.config.js`, `src/`, `public/` |
| `npm.cmd run build` | Build bản chính thức (CSS minify) vào `dist/` |
| `npm.cmd run preview` | Chỉ phục vụ `dist/` đang có, không build |
| `node scripts/build.mjs --html-only` | Chỉ ghép HTML, bỏ qua CSS (nhanh) |

- Đổi cổng: `PORT=3000 npm run dev` (PowerShell: `$env:PORT=3000; npm run dev`).
- Giả lập GitHub Pages dạng project: `npm run dev -- --base=/mc-portfolio/` rồi mở http://localhost:5173/mc-portfolio/.

Sau mỗi lần build, terminal sẽ báo:
- **Cảnh báo vàng**: file ảnh/video được khai báo nhưng chưa có trong `public/`, và các placeholder `[IN_HOA]` chưa thay.
- **Lỗi đỏ**: template dùng key không có trong config (lệnh build trả mã lỗi 1).

## Sửa nội dung

1. Mở `site.config.js` và sửa chữ, link, danh sách dịch vụ/video/ảnh… Mỗi mục có comment hướng dẫn và kích thước ảnh.
2. Thêm/bớt dịch vụ, video, ảnh gallery, đối tác, cảm nhận bằng cách thêm/xóa object trong mảng `items`.
3. Đường dẫn ảnh viết dạng `public/images/...` (không có dấu `/` ở đầu).
4. Không sửa tay thư mục `dist/` — nó bị xóa và tạo lại mỗi lần build.

Link còn là placeholder (`[ZALO_LINK]`, `[SO_DIEN_THOAI]`…) sẽ tự trỏ về mục Liên hệ, nên không bao giờ thành link hỏng.
Ảnh chưa có sẽ tự hiện khung nền thay thế.

## Placeholder cần thay (trong `site.config.js`)

| Placeholder | Ý nghĩa / ví dụ |
|---|---|
| `[TEN_MC]` | Tên MC / thương hiệu |
| `[SO_NAM_KINH_NGHIEM]`, `[SO_SU_KIEN]` | Số liệu, VD `8`, `500` |
| `[SO_DIEN_THOAI]` | `0901 234 567` (tự tạo link `tel:`) |
| `[ZALO_LINK]` | `https://zalo.me/0901234567` |
| `[EMAIL]` | Email nhận yêu cầu báo giá từ form |
| `[FACEBOOK_LINK]`, `[YOUTUBE_LINK]` | Link trang cá nhân |
| `[YOUTUBE_SHOWREEL_URL]`, `[YOUTUBE_VIDEO_01..04]` | Link YouTube hoặc `public/videos/xxx.mp4` |
| `[WEBSITE_URL]` | URL website sau khi deploy (cần cho ảnh chia sẻ Facebook/Zalo) |
| `[DIA_CHI]` | Khu vực hoạt động (để trống placeholder thì không hiện) |

## Ảnh cần chuẩn bị

Ưu tiên `.webp`, tên kebab-case có số thứ tự. Đặt đúng thư mục:

| File | Desktop | Mobile |
|---|---|---|
| `public/images/hero/hero-bg-desktop.webp` | 1920×1080 (ngang) | — |
| `public/images/hero/hero-bg-mobile.webp` | — | 750×1334 (dọc) |
| `public/images/about/portrait.webp` | 600×800 (3:4) | — |
| `public/images/about/portrait-mobile.webp` | — | 400×500 (4:5) |
| `public/images/services/service-01..06.webp` | 600×400 (3:2) | dùng chung |
| `public/images/videos/showreel-thumb.webp` | 1280×720 | dùng chung |
| `public/images/videos/video-01..04.webp` | 640×360 | dùng chung |
| `public/images/gallery/gallery-01..08.webp` | 1200×900 (4:3) | dùng chung |
| `public/images/partners/partner-01..06.webp` | 200×80, nền trong suốt | dùng chung |
| `public/images/testimonials/avatar-01..04.webp` | 100×100 | dùng chung |
| `public/images/og/og-cover.jpg` | 1200×630 (ảnh khi chia sẻ link) | — |
| `public/videos/*.mp4` | (tùy chọn) video tự host, H.264 | dùng chung |

Icon (`public/icons/`) đã có sẵn: `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png`.

## Deploy lên GitHub Pages

1. Tạo repo (VD `mc-portfolio`) và push code lên nhánh `main`.
2. Trên GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Mỗi lần push lên `main`, workflow `.github/workflows/deploy.yml` sẽ tự build và deploy (hoặc chạy tay trong tab **Actions**).

Trang dùng đường dẫn tương đối nên chạy được cả ở `https://ten.github.io/` lẫn `https://ten.github.io/mc-portfolio/`.
Có thể đưa thư mục `dist/` lên bất kỳ hosting tĩnh nào (Netlify, Vercel, Cloudflare Pages…).

## Cấu trúc thư mục

```
├── site.config.js        # NỘI DUNG website (sửa ở đây)
├── index.html            # Khung HTML (template)
├── src/
│   ├── templates.js      # Bộ render: config → HTML
│   ├── input.css         # CSS nguồn Tailwind v4 (màu, font trong @theme)
│   └── js/main.js        # JS phía trình duyệt (menu, gallery, slider, video, form)
├── public/               # icons/, images/<khu-vuc>/, videos/
├── scripts/
│   ├── build.mjs         # Build → dist/
│   └── dev.mjs           # Server phát triển
└── .github/workflows/deploy.yml
```
