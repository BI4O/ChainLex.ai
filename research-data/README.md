# ChainLex Research 报告管理指南

这个目录包含所有研究报告的元数据配置。每篇报告都通过 JSON 文件配置，内容则通过 React 组件实现。

## 📁 目录结构

```
research-data/
├── README.md                    # 本文件
└── research-001.json            # 报告元数据配置

src/components/research/
└── ResearchReport001.tsx        # 报告内容组件
```

---

## 📝 添加新研究报告

### 步骤 1: 创建元数据配置文件

在 `research-data/` 目录下创建新的 JSON 文件，命名格式为 `research-XXX.json`（XXX 为数字 ID）：

```json
{
  "id": "2",
  "title": "你的研究报告标题",
  "subtitle": "副标题（可选）",
  "date": "February 10, 2026",
  "category": "Global Research",
  "heroImage": "/images/research-bg.webp",
  "component": "ResearchReport002"
}
```

**字段说明：**
- `id`: 唯一标识符（数字或字符串）
- `title`: 报告标题
- `subtitle`: 副标题（可选）
- `date`: 发布日期，格式：`Month DD, YYYY`
- `category`: 分类，例如：`"Global Research"`, `"Market Analysis"`, `"Policy Update"`
- `heroImage`: 头部背景图片路径
- `component`: 对应的 React 组件名称

### 步骤 2: 创建报告内容组件

在 `src/components/research/` 目录下创建对应的 React 组件：

```tsx
// src/components/research/ResearchReport002.tsx
"use client";

export default function ResearchReport002() {
  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* 报告标题 */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
          你的研究报告标题
        </h1>

        {/* 报告内容 */}
        <p className="text-base md:text-lg leading-relaxed text-justify text-gray-900">
          你的研究内容...
        </p>

        {/* 可以添加更多章节、图表、数据卡片等 */}
      </div>
    </div>
  );
}
```

**设计规范：**
- 使用 `max-w-6xl` 限制最大宽度
- 使用 `px-6 md:px-12` 实现响应式左右边距
- 使用 `py-12` 添加上下内边距
- 章节标题使用 `mt-12 mb-6 md:mb-8` 保持统一间距
- 正文使用 `text-base md:text-lg` 实现响应式字体大小
- 颜色使用 `text-gray-900` 确保可读性

### 步骤 3: 更新路由配置

编辑 `src/app/research/[id]/page.tsx`，在 `generateStaticParams()` 函数中添加新的 ID：

```typescript
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },  // 添加这一行
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ];
}
```

### 步骤 4: 在首页展示（可选）

如果你想在首页 Research 部分展示这个新报告，编辑 `src/components/Research.tsx`：

```typescript
const researchItems = [
  {
    title: "2026 Global Crypto Asset Regulation Outlook",
    image: "/images/research-bg.webp",
    link: "/research/1"
  },
  {
    title: "你的新研究报告标题",
    image: "/images/your-image.webp",
    link: "/research/2"  // 添加这一项
  },
  // ...
];
```

---

## 🎨 可复用的组件

`ResearchReport001.tsx` 中包含一些可复用的辅助组件，你可以在新报告中使用：

### 数据卡片 (DashboardCard)

```tsx
<DashboardCard
  label="指标名称"
  value="数值"
  valueSuffix="单位"
  note="备注说明"
  oldValue="旧数值（可选）"
  valueColor="text-green-700"
  noteColor="text-red-600"
/>
```

### 章节标题 (SectionTitle)

```tsx
<SectionTitle>章节标题</SectionTitle>
```

### 子章节标题 (SubSectionTitle)

```tsx
<SubSectionTitle>子章节标题</SubSectionTitle>
```

### 信息卡片 (InfoCard)

```tsx
<InfoCard
  title="卡片标题"
  description="卡片内容描述"
/>
```

### 监管卡片 (RegulatoryCard)

```tsx
<RegulatoryCard
  title="监管机构"
  subtitle="监管范围"
  description="详细说明"
  color="border-blue-600"
/>
```

### 表格行 (TableRow)

```tsx
<TableRow
  cells={["列1", "列2", "列3", "列4"]}
  highlight  // 高亮该行（可选）
  red       // 红色文字（可选）
/>
```

### 税收图表 (TaxChart)

```tsx
<TaxChart />  // 显示税收对比柱状图
```

### M&A 图表 (MAChart)

```tsx
<MAChart />  // 显示并购趋势折线图
```

---

## 🖼️ 添加图片

### 背景图片

将报告的头部背景图片放在 `public/images/` 目录下，然后在 JSON 配置中引用：

```json
{
  "heroImage": "/images/your-report-image.webp"
}
```

### 报告内容中的图片

在报告组件中使用 Next.js Image 组件：

```tsx
import Image from "next/image";

<Image
  src="/images/chart-1.webp"
  alt="图表说明"
  width={800}
  height={400}
  className="w-full rounded-lg"
/>
```

---

## 🚀 本地预览

启动开发服务器：

```bash
pnpm run dev
```

访问报告页面：
- 第一篇报告：http://localhost:3000/research/1
- 新报告：http://localhost:3000/research/2

---

## 📦 构建和部署

构建静态网站：

```bash
pnpm run build
```

构建完成后，所有报告页面会被生成为静态 HTML 文件，可以直接部署。

---

## 💡 最佳实践

1. **保持一致的间距**：章节之间使用 `mt-12`，保持 48px 的统一间距
2. **使用响应式设计**：所有尺寸使用 `md:` 断点前缀
3. **确保可读性**：正文使用 `text-gray-900` 或更深的颜色
4. **组件复用**：优先使用已有的辅助组件，保持代码一致性
5. **图片优化**：使用 WebP 格式，提供适当的 width 和 height
6. **类型安全**：充分利用 TypeScript 的类型检查

---

## 🔍 故障排除

### 报告页面显示 404

检查以下几点：
1. JSON 配置文件的 `id` 是否正确
2. `generateStaticParams()` 是否包含了该 ID
3. React 组件文件名是否与 JSON 中的 `component` 字段匹配

### 样式显示不正确

1. 确保最外层使用 `<div className="w-full bg-white">`
2. 内层使用 `<div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-12">`
3. 检查是否有 CSS 类名冲突

### 组件无法加载

1. 检查组件文件是否在 `src/components/research/` 目录下
2. 确认组件是默认导出：`export default function ResearchReportXXX()`
3. 检查 JSON 中的 `component` 字段是否与文件名匹配

---

## 📚 相关文件

- `src/app/research/[id]/page.tsx` - 动态路由页面
- `src/components/Research.tsx` - 首页 Research 组件
- `src/components/research/ResearchReport001.tsx` - 第一篇报告示例
