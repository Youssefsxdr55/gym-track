# الحديد — Gym Tracker

تطبيق تتبّع تمارين الجيم (React + Vite)، متجهّز يتبني APK أوتوماتيك عن طريق GitHub Actions.

## هترفعه على GitHub إزاي

1. اعمل ريبو جديد على GitHub (Public أو Private، مش فارق).
2. من جوه فولدر المشروع ده، نفّذ:

```bash
git init
git add .
git commit -m "أول نسخة من تطبيق الحديد"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

(غيّر `USERNAME/REPO-NAME` باسمك الحقيقي).

## هيبني الـ APK إزاي بالظبط؟

بمجرد ما تعمل push على branch اسمه `main` (أو `master`)، هيشتغل تلقائي ملف
`.github/workflows/build-apk.yml` اللي بيعمل الآتي:

1. يثبّت Node.js وJava.
2. يعمل `npm install` و`npm run build` (بناء الويب).
3. يضيف منصّة أندرويد عن طريق Capacitor (`npx cap add android`) — بيحصل مرة واحدة بس.
4. يبني ملف APK (نسخة Debug) باستخدام Gradle.
5. يرفع الـ APK كـ "Artifact" على الـ workflow نفسه.

## هنزّل الـ APK منين؟

1. روح لتبويب **Actions** في الريبو بتاعك على GitHub.
2. دوس على آخر run اسمه "Build Android APK".
3. تحت في قسم **Artifacts** هتلاقي ملف اسمه `gym-tracker-apk` — نزّله وفكّه (zip)، هتلاقي جواه `app-debug.apk`.
4. انقل الملف لموبايلك وثبّته (لازم تفعّل "تثبيت من مصادر غير معروفة" في إعدادات الأندرويد أول مرة).

## لو عايز تجرب على جهازك (اختياري)

```bash
npm install
npm run dev
```

هيفتح المشروع على المتصفح على `localhost` عشان تتأكد إن كل حاجة شغالة قبل ما ترفعه.

## ملحوظات مهمة

- البيانات (التمارين والجلسات) بتتخزن على جهاز المستخدم نفسه (`localStorage`)، مفيش سيرفر ولا حساب مطلوب.
- النسخة المبنية دي "Debug APK" — تكفي للتجربة الشخصية والتثبيت اليدوي. لو حبيت تنشره على Google Play بعدين، هتحتاج تعمل "Release build" موقّع (signed) — ده موضوع مختلف نقدر نتكلم فيه لما يجيلك وقته.
- لو عايز تغيّر اسم التطبيق أو الـ app ID، عدّل في `capacitor.config.json`.
