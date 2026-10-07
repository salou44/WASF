<div align="center">

# ⚽ Academy Future Star
### أكاديمية النجوم المستقبلية لكرة القدم — ميلة، الجزائر

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 نبذة عن المشروع

موقع احترافي لأكاديمية **Academy Future Star** لكرة القدم للشباب، مبني بأحدث تقنيات الويب. يوفر الموقع منصة متكاملة لإدارة التسجيلات، عرض اللاعبين، الجدول التدريبي، وإنتاج سيرة ذاتية احترافية قابلة للطباعة لكل لاعب.

## ✨ الميزات الرئيسية

- 🌍 **دعم متعدد اللغات**: عربي، فرنسي، إنجليزي (مع دعم RTL للعربية)
- 📄 **سيرة ذاتية احترافية قابلة للطباعة (A4)**: مع رمز QR فريد لكل لاعب
- 📱 **QR Code ذكي**: يوجّه لصفحة السيرة الذاتية للاعب مباشرة عند المسح بالهاتف
- 🔐 **لوحة تحكم مدير**: إدارة الأخبار، المدربين، اللاعبين والمحتوى
- 📊 **تقييم اللاعبين**: متابعة الأداء البدني والبيومتري
- 🌙 **وضع ليلي ونهاري**: تجربة مستخدم محسّنة
- 🎬 **تحريكات سلسة**: مبنية على مكتبة Motion

## 🛠️ التقنيات المستخدمة

| التقنية | الإصدار | الغرض |
|--------|---------|-------|
| React | 19 | واجهة المستخدم |
| TypeScript | 5.8 | الكتابة الصارمة للكود |
| Vite | 6 | بيئة البناء والتطوير |
| Tailwind CSS | 4 | التنسيق والتصميم |
| React Router | 7 | إدارة المسارات |
| Motion | 12 | التحريكات |
| Lucide React | — | الأيقونات |

## 🚀 تشغيل المشروع محلياً

### المتطلبات
- [Node.js](https://nodejs.org/) v18 أو أحدث

### خطوات التثبيت

```bash
# 1. استنساخ المستودع
git clone https://github.com/your-username/academy-future-star.git
cd academy-future-star

# 2. تثبيت الاعتماديات
npm install

# 3. إعداد متغيرات البيئة
cp .env.example .env
# عدّل ملف .env وضع قيمك الفعلية

# 4. تشغيل بيئة التطوير
npm run dev
```

سيعمل الموقع على: `http://localhost:3000`

## ⚙️ إعداد البيئة

انسخ ملف `.env.example` إلى `.env` واملأ القيم:

```env
# مفتاح Gemini AI (اختياري للميزات الذكية)
GEMINI_API_KEY="your-api-key"

# رابط موقعك الرسمي (يُستخدم في QR Code بالسيرة الذاتية)
VITE_APP_URL="https://your-domain.com"
```

## 📋 الأوامر المتاحة

```bash
npm run dev      # تشغيل بيئة التطوير (المنفذ 3000)
npm run build    # بناء نسخة الإنتاج
npm run preview  # معاينة نسخة الإنتاج محلياً
npm run lint     # فحص الكود البرمجي
```

## 📁 هيكل المشروع

```
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Sidebar, Footer
│   │   ├── sections/      # Hero, About, Registration, Coaches...
│   │   └── ui/            # مكونات الواجهة المشتركة
│   ├── context/           # AppContext لإدارة الحالة العامة
│   ├── pages/             # Home, AdminDashboard, NewsPage
│   └── translations.ts    # ملف الترجمات (AR/FR/EN)
├── public/
├── index.html
├── vite.config.ts
└── tsconfig.json
```

## 🔒 ملاحظة أمنية

- **لا ترفع ملف `.env`** على GitHub أبداً — يحتوي على مفاتيح سرية
- ملف `.gitignore` مُعدّ مسبقاً لمنع رفع الملفات الحساسة تلقائياً

---

<div align="center">
  صُنع بـ ❤️ لأكاديمية النجوم المستقبلية — ميلة، الجزائر
</div>
