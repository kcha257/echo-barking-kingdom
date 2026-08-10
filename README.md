# Echo's World 🐾 (Ko-fi Warm Café Craft Style Edition)

歡迎來到 **Echo's World**！這個版本的網站已根據 `DESIGN.md` 完全重構，採用了像溫馨手作咖啡館標籤簿般的 **Ko-fi 風格 (Warm Café Chalkboard on Cream Paper)**。

## 🎨 設計規範重點 (DESIGN.md Design System)

- **主色調組合 (Tokens)：**
  - **Canvas Base:** `--color-morning-fog` (`#e5e7eb`) 溫暖柔和的底色[cite: 2]
  - **Oat Surface:** `--color-oat-cream` (`#e9dfd2`) 特色區塊與內頁背景[cite: 2]
  - **Primary Action:** `--color-kofi-blue` (`#aac9f7`) 與 Hover 的 `--color-cobalt-pop` (`#72a4f2`)[cite: 2]
  - **Sticker Border:** `--color-sticker-black` (`#000000`) 2-3px 實線黑框取代傳統陰影[cite: 2]
- **極致圓角 (Rounded & Pill Shapes)：**
  - 按鈕、輸入框、Tag 均採用 `9999px` Pill 膠囊型圓角[cite: 2]。
  - 卡片採用 `40px` 或 `24px` 貼紙質感圓角[cite: 2]。
- **字體搭配 (Typography)：**
  - **Display Headline:** Sniglet / Fredoka 手繪手作風格大標題[cite: 2]。
  - **Body / UI:** DM Sans 搭配 Noto Sans TC 簡潔現代字體[cite: 2]。

## 📁 檔案結構

```text
echo-website/
├── index.html     # 網頁主結構與內容 (Ko-fi 風格標籤與區塊)
├── style.css      # DESIGN.md 規範樣式與 RWD 響應式排版
├── script.js      # 摸摸 Echo 互動與即時留言板邏輯
└── README.md      # 專案說明文件