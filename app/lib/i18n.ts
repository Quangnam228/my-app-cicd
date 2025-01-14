import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Sử dụng backend HTTP để load các file dịch
  .use(LanguageDetector) // Phát hiện ngôn ngữ tự động
  .use(initReactI18next) // Kết nối với react-i18next
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'vi'],
    defaultNS: 'common',
    ns: ['common'], // Tên namespace mặc định
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Đường dẫn tới file JSON chứa nội dung dịch
    },
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator'], // Cách phát hiện ngôn ngữ
      caches: ['cookie'], // Lưu ngôn ngữ vào cookie
    },
  });

export default i18n;
