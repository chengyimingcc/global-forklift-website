# Global Forklift Website

第一版叉车全球销售网站框架，已预留多语言、SEO、产品数据、询盘接口、商品 feed 和免费部署路径。

## 已完成

- 8 种语言路由：`en`、`es`、`fr`、`ja`、`de`、`pt`、`ko`、`ar`
- 阿拉伯语 RTL 文本支持，整体页面布局保持统一
- 首页、产品列表、产品详情、行业页、资源页、服务页、关于页、联系页
- SEO 组件：title、description、canonical、hreflang、Open Graph、Twitter Card
- 结构化数据：Organization、WebSite、Product、BreadcrumbList、FAQPage
- sitemap、robots、manifest
- 询盘表单和 Netlify Function：`/.netlify/functions/lead`
- 商品 feed：`/feeds/products.json`、`/feeds/google-merchant.csv`
- 接口说明：`/api/status.json`、`/api/lead.schema.json`
- 默认 `noindex` 保护，避免空内容被 Google 提前收录

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 上线前必须修改

1. 复制 `.env.example` 为 `.env`。
2. 把 `PUBLIC_SITE_URL` 改成正式域名。
3. 填写真实产品内容：`src/data/products.ts`。
4. 填写行业和资源内容：`src/data/content.ts`。
5. 替换公司信息：`src/data/site.ts`。
6. 如果要用 Google Merchant Center，先在 feed 中补真实价格、库存、图片和运费政策。
7. 配置询盘路由：设置 `LEAD_WEBHOOK_URL`，可接 Zapier、Make、飞书、企业微信、HubSpot 或自建 CRM。
8. 内容真实完整后，把 `PUBLIC_ALLOW_INDEXING=true`，再提交 Google Search Console。

## 低成本部署建议

- Netlify：最省事，表单函数可直接用。
- Cloudflare Pages：适合静态站，询盘接口可改成 Workers。
- GitHub Pages：免费静态站，但询盘接口需要外部服务。

## Google 推广注意

不要在占位内容状态下开放索引。先补齐真实型号、参数、图片、证书、FAQ、交付条款、隐私政策，再开启 `PUBLIC_ALLOW_INDEXING=true`。
