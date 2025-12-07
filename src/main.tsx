import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// إعداد اتجاه الصفحة قبل تحميل التطبيق
const lang = localStorage.getItem('language') || 'en';
document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', lang);

// إضافة meta viewport إضافية للتأكد
const viewportMeta = document.querySelector('meta[name="viewport"]');
if (viewportMeta) {
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
}

// منع التمرير الأفقي عالمياً
document.documentElement.style.overflowX = 'hidden';
document.body.style.overflowX = 'hidden';

createRoot(document.getElementById("root")!).render(<App />);

// إضافة مستمع للتغييرات في الحجم
window.addEventListener('resize', () => {
    // إعادة تعيين overflow في حالة تغيير الحجم
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
});

