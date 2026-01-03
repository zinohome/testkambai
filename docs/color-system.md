# UI 色彩规范（年轻活力 + 温情治愈）

> 品牌主色：**#008B00**（绿色）  
> 情绪辅助色：**蜂蜜黄 #F59E0B**（治愈、鼓励、成就）  
> 中性色：**暖灰**（更柔和、更有温度）

本规范包含两套可直接落地的 Token：
- **Tailwind 风格（50/100/…）**：见 `docs/tokens.tailwind.json`
- **语义风格（bg/surface/text/action…）**：见 `docs/tokens.semantic.json`

---

## 1. 颜色角色（为什么这样分）
- **Primary（品牌绿）**：用于核心行动与关键强调（主按钮、关键链接、关键状态）。
- **Secondary（蜂蜜黄）**：用于温情提示/奖励/成就/引导（不等同“警告色”）。
- **Warm Neutral（暖灰）**：用于大面积背景、卡片、分割线、正文，保证信息层级与舒适度。

---

## 2. 调性与使用原则（年轻活力 + 温情）
- **大面积用浅色**：页面背景优先用 `warm.50`，品牌氛围用 `primary.50/100` 或 `honey.50/100` 点缀。
- **把深绿留给 CTA**：`primary.600` 做默认主行动，hover/active 用更深色（700/800）提升反馈。
- **蜂蜜黄用于“积极情绪”**：成就、鼓励、提示引导、插画点睛；避免把蜂蜜黄当作错误/警告的默认色。
- **中性色做信息层级**：正文/次级/弱化文本都用暖灰，避免“整页发绿/发黄”造成阅读压力。

---

## 3. 交互组件推荐（默认/hover/active/disabled）

### 3.1 主按钮（Primary Button）
- **Default**：背景 `primary.600`（#008B00），文字 `#FFFFFF`
- **Hover**：背景 `primary.700`（#007A00）
- **Active/Pressed**：背景 `primary.800`（#006300）
- **Disabled**：背景 `primary.200`（#B0E6B0），文字 `warm.500`（#78716C）
- **Focus Ring**：`primary.400`（#55C855）外发光/描边（建议 2px）

### 3.2 次按钮（Secondary Button / Honey）
- **Default**：背景 `honey.500`（#F59E0B），文字 `warm.900`（#1C1917）
- **Hover**：背景 `honey.600`（#D97706）
- **Active/Pressed**：背景 `honey.700`（#B45309）
- **Disabled**：背景 `honey.200`（#FFD98A），文字 `warm.500`（#78716C）
- **Focus Ring**：`honey.400`（#FFAE1A）

### 3.3 链接（Link）
- **Default**：`primary.700`（#007A00）
- **Hover**：`primary.800`（#006300）
- **Visited（可选）**：建议仍保持绿色体系（避免紫色破坏品牌），如 `primary.800`

### 3.4 轻背景提示条（Callout / Banner）
按“情绪类型”选底色，文字用暖灰深色：
- **品牌氛围**：底 `primary.50/100`，标题 `primary.800`，正文 `warm.700`
- **温情鼓励**：底 `honey.50/100`，标题 `honey.700`，正文 `warm.700`

---

## 4. 可访问性（Accessibility）最低要求
- **正文文本对比度**：至少满足 WCAG AA：\( \ge 4.5:1 \)
- **大号文本/粗体**：至少 \( \ge 3:1 \)
- **蜂蜜黄上放文字**：优先使用 `warm.900`（#1C1917），避免白字导致对比不足。
- **绿色按钮白字**：`primary.600` 上白字通常可读；若在更浅绿（200~400）上放字，请改用深色字（`warm.900`）。

---

## 5. 落地建议（前端实现方式）
你可以选择两种落地方式：
- **方式 A：Tailwind 扩展 colors**：把 `docs/tokens.tailwind.json` 的 `colors` 合并到 `tailwind.config.*` 的 `theme.extend.colors`。
- **方式 B：语义 Token + CSS 变量**：把 `docs/tokens.semantic.json` 映射到 `:root` CSS 变量（如 `--color-bg-canvas`），组件只引用语义变量，便于主题切换（暗色模式/多品牌）。

如需我把这两份 token 进一步输出成可直接复制的 `tailwind.config.ts` 片段或 `app/globals.css` 的 `:root` 变量块，也可以继续说一声。


