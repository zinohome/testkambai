# 色彩系统实现指南

## 概述

本项目已集成专业的UI色彩规范和Tailwind Token系统，基于以下色彩系统：

- **品牌主色**: 绿色 (#008B00) - 用于核心行动和关键强调
- **情绪辅助色**: 蜂蜜黄 (#F59E0B) - 用于温情、鼓励、成就
- **中性色**: 暖灰 - 用于大面积背景、卡片、文字

---

## 色彩Token结构

### 1. 语义Token（推荐使用）

所有语义Token都在 `app/globals.css` 的 `:root` 中定义为CSS变量：

```css
/* 背景颜色 */
--bg-canvas: #FAFAF9;           /* 页面背景 */
--bg-subtle: #F5F5F4;           /* 次级背景 */
--bg-brand-subtle: #EAF7EA;     /* 品牌绿浅色 */
--bg-honey-subtle: #FFF7E6;     /* 蜂蜜黄浅色 */

/* 文字颜色 */
--text-primary: #1C1917;        /* 正文 */
--text-secondary: #44403C;      /* 次级 */
--text-muted: #78716C;          /* 弱化 */
--text-link: #007A00;           /* 链接 */

/* 按钮状态 */
--action-primary-bg: #008B00;       /* 主按钮背景 */
--action-primary-bg-hover: #007A00; /* 主按钮hover */
--action-secondary-bg: #F59E0B;     /* 次按钮背景 */
```

### 2. 色彩scale（Tailwind扩展）

在Tailwind中可直接使用：

```html
<!-- Primary Scale -->
<div class="bg-primary-50">浅品牌绿背景</div>
<div class="bg-primary-600">主品牌绿（CTA）</div>
<div class="text-primary-700">品牌绿文字</div>

<!-- Honey Scale -->
<div class="bg-honey-50">浅蜂蜜黄背景</div>
<div class="bg-honey-500">蜂蜜黄背景</div>

<!-- Warm Scale -->
<div class="bg-warm-50">浅暖灰背景</div>
<div class="text-warm-900">深暖灰文字</div>
```

---

## 使用方法

### 方法1：CSS变量（推荐）

在CSS中直接使用CSS变量：

```css
/* 在你的CSS中 */
.my-button {
  background-color: var(--action-primary-bg);
  color: var(--action-primary-fg);
}

.my-button:hover {
  background-color: var(--action-primary-bg-hover);
}
```

### 方法2：Tailwind类名

使用Tailwind的颜色类：

```html
<button class="bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800">
  主按钮
</button>

<div class="bg-honey-50 text-honey-700">
  温情提示
</div>
```

### 方法3：内联样式（不推荐）

```jsx
<div style={{ backgroundColor: 'var(--bg-canvas)' }}>
  Content
</div>
```

---

## 预定义的组件工具类

### 按钮样式

```html
<!-- 主按钮 -->
<button class="btn-primary">主按钮</button>

<!-- 次按钮 -->
<button class="btn-secondary">次按钮</button>

<!-- 幽灵按钮 -->
<button class="btn-ghost">幽灵按钮</button>
```

### 状态徽章

```html
<!-- 成功 -->
<span class="badge-success">成功</span>

<!-- 警告 -->
<span class="badge-warning">警告</span>

<!-- 危险 -->
<span class="badge-danger">危险</span>

<!-- 信息 -->
<span class="badge-info">信息</span>
```

### 链接

```html
<a class="link-primary">链接文字</a>
```

### 焦点环

```html
<input class="focus-ring" />
<button class="focus-ring-secondary">按钮</button>
```

---

## 交互组件推荐

### 主按钮（Primary Button）

```html
<button class="bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-200 disabled:text-warm-500 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2">
  主按钮
</button>

<!-- 或使用工具类 -->
<button class="btn-primary">主按钮</button>
```

### 次按钮（Honey Secondary）

```html
<button class="bg-honey-500 text-warm-900 hover:bg-honey-600 active:bg-honey-700 disabled:bg-honey-200 focus:ring-honey-400">
  次按钮
</button>

<!-- 或使用工具类 -->
<button class="btn-secondary">次按钮</button>
```

### 卡片背景

```html
<div class="bg-surface-default border border-border-default rounded-lg p-4">
  卡片内容
</div>

<!-- 品牌氛围卡片 -->
<div class="bg-bg-brand-subtle border border-primary-200">
  品牌卡片
</div>
```

---

## 可访问性检查清单

- ✅ 正文对比度至少 4.5:1（WCAG AA）
- ✅ 在蜂蜜黄上使用深色文字（--text-primary 或 --text-secondary）
- ✅ 使用焦点环（focus-ring）标记交互元素
- ✅ 避免仅用颜色传达信息，配合图标或文字

---

## 暗色模式（可选）

如需支持暗色模式，可在 `.dark` 类中扩展：

```css
.dark {
  --bg-canvas: #1C1917;
  --bg-subtle: #2C2A27;
  --text-primary: #FAFAF9;
  --text-secondary: #D6D3D1;
  /* ... 继续为其他Token定义暗色值 */
}
```

使用时：

```html
<div class="dark"><!-- 暗色区域 --></div>

<!-- 或整个应用 -->
<html class="dark">
```

---

## Token映射参考

### 背景颜色

| Token | 值 | 用途 |
|-------|-----|------|
| `--bg-canvas` | #FAFAF9 | 页面主背景 |
| `--bg-subtle` | #F5F5F4 | 次级背景（悬停等） |
| `--bg-brand-subtle` | #EAF7EA | 品牌浅色背景 |
| `--bg-honey-subtle` | #FFF7E6 | 蜂蜜浅色背景 |

### 文字颜色

| Token | 值 | 用途 |
|-------|-----|------|
| `--text-primary` | #1C1917 | 正文文字 |
| `--text-secondary` | #44403C | 次级文字 |
| `--text-muted` | #78716C | 弱化文字 |
| `--text-inverse` | #FFFFFF | 深底反色文字 |
| `--text-link` | #007A00 | 链接 |

### 按钮状态

| Token | 值 | 用途 |
|-------|-----|------|
| `--action-primary-bg` | #008B00 | 主按钮默认 |
| `--action-primary-bg-hover` | #007A00 | 主按钮悬停 |
| `--action-primary-bg-active` | #006300 | 主按钮按下 |
| `--action-secondary-bg` | #F59E0B | 次按钮默认 |

---

## 完整色彩scale

### Primary (绿色)

```
primary-50:   #EAF7EA  (最浅)
primary-100:  #D3F1D3
primary-200:  #B0E6B0
primary-300:  #85D885
primary-400:  #55C855
primary-500:  #22B122
primary-600:  #008B00  ← 品牌主色
primary-700:  #007A00
primary-800:  #006300
primary-900:  #004A00
primary-950:  #003300  (最深)
```

### Honey (蜂蜜黄)

```
honey-50:   #FFF7E6  (最浅)
honey-100:  #FFECC2
honey-200:  #FFD98A
honey-300:  #FFC34D
honey-400:  #FFAE1A
honey-500:  #F59E0B  ← 品牌辅助色
honey-600:  #D97706
honey-700:  #B45309  (最深)
```

### Warm (暖灰)

```
warm-50:   #FAFAF9  (最浅)
warm-100:  #F5F5F4
warm-200:  #E7E5E4
warm-300:  #D6D3D1
warm-500:  #78716C
warm-700:  #44403C
warm-900:  #1C1917  (最深)
```

---

## 常见问题

### Q: 我想改变主色，该怎么办？

A: 修改 `app/globals.css` 中的 `:root` 变量：

```css
:root {
  --primary-600: #NEW_COLOR;
  /* 同时更新其他 primary scale 值 */
  --primary-700: #LIGHTER_SHADE;
  /* ... */
}
```

### Q: 如何在组件中使用这些Token？

A: 三种方式都可以：

1. CSS变量：`style={{ backgroundColor: 'var(--action-primary-bg)' }}`
2. Tailwind类：`className="bg-primary-600"`
3. 预定义工具类：`className="btn-primary"`

### Q: Tailwind v4 中的CSS变量语法是什么？

A: 使用括号而不是方括号：

```html
<!-- ✅ 正确 (v4) -->
<div className="bg-(--color-primary)"></div>

<!-- ❌ 错误 (v3 语法) -->
<div className="bg-[--color-primary]"></div>
```

---

## 更新历史

- **v1.0** (2024-01) - 初始集成，完整的语义Token系统和Tailwind扩展