import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LazyImage from '../LazyImage';
import ScrollObserver from './ScrollObserver';
import { Card } from '../ui/card';
import { ChevronDown } from 'lucide-react';

const teamMembers = [
  {
    nameAr: 'م/اشرف عبدالعزيز',
    nameEn: 'Eng / Ashraf Abd elaziz',
    roleAr: 'المدير التنفيذي وعضو مجلس ادارة',
    roleEn: 'CEO & Board Member',
    image: '/team/as.png',
  },
  {
    nameAr: 'م/محمد اشرف',
    nameEn: 'Eng / Mohamed Ashraf',
    roleAr: 'نائب مديرالمشروعات',
    roleEn: 'Deputy Project Manager',
    image: '/team/4.jpeg',
  },
  {
    nameAr: 'م/محمد متولي',
    nameEn: 'Eng / Mohamed Metwally',
    roleAr: 'مدير المكتب الفني',
    roleEn: 'Technical Office Manager',
    image: '/team/5.png',
  },
  {
    nameAr: 'مصطفى عبدالتواب',
    nameEn: 'Mostafa Abdel Tawab',
    roleAr: 'مدير المصنع',
    roleEn: 'Factory Manager',
    image: '/team/mostafa-abdel-tawab.png',
  },
  {
    nameAr: 'أحمد عبدالواحد',
    nameEn: 'Ahmed Abdulwahid',
    roleAr: 'مطور أعمال',
    roleEn: 'Business Development',
    image: '/team/ahmed-pro.png',
  },
  {
    nameAr: 'م/ إبراهيم محمد السيد',
    nameEn: 'Eng. Ibrahim Muhammad Al-Sayed',
    roleAr: 'مهندس مبيعات',
    roleEn: 'Sales Engineer',
    image: '/team/Ibrahim.webp',
  },
  {
    nameAr: 'م/ أدهم مصطفى',
    nameEn: 'Eng. Adham Mostafa',
    roleAr: 'مهندس مشروعات تركيب الإضاءة والثريات والنجف',
    roleEn: 'Lighting, Chandeliers & Decorative Fixtures Installation Project Engineer',
    image: '/team/ad.png',
  },
{
    nameAr: 'م/ عبدالرحمن إسماعيل',
    nameEn: 'Eng / Abdulrahman Ismail',
    roleAr: 'مهندس في تصميم المعان والثرايا - خبرة 5 سنوات',
    roleEn: 'Senior Metalwork Designer - 5 Years of Experience',
    image: '/team/abd.png',
  },
  {
    nameAr: 'م/ محمد مصطفى',
    nameEn: 'Eng. Mohamed Mostafa',
    roleAr: 'مهندس مشروعات',
    roleEn: 'Senior Projects Engineer',
    image: '/team/ms.png',
  },
  {
    nameAr: 'سيد حسين',
    nameEn: 'Sayed Hussein',
    roleAr: 'أخصائي تسويق',
    roleEn: 'Marketing Specialist',
    image: '/team/sh.png',
  },
  {
    nameAr: 'م/ شريف حجازي',
    nameEn: 'Eng / Sherif Hejazy',
    roleAr: 'مهندس معماري ومتخصص تصيير ثلاثي الأبعاد',
    roleEn: 'Architect & 3D Visualizer',
    image: '/team/sherif.JPG',
  },
  {
    nameAr: 'م/ هانيا هشام',
    nameEn: 'Hania Hesham',
    roleAr: 'مهندسة معمارية ومصممة داخلية',
    roleEn: 'Architect & Interior Designer',
    image: '/team/hania.jpg',
  },
  
  {
    nameAr: 'م/ مهاب إسماعيل',
    nameEn: 'Eng. Mohab Ismail',
    roleAr: 'مهندس إنتاج',
    roleEn: 'Production Engineer',
    image: '/team/mah.png',
  },
  {
    nameAr: 'مصطفى محمد',
    nameEn: 'Mostafa Mohamed',
    roleAr: 'مصمم داخلي',
    roleEn: 'Junior Designer',
    image: '/team/mos2.png',
  },
  {
    nameAr: 'سارة عبدالتواب',
    nameEn: 'Sara Abdel Tawab',
    roleAr: 'مديرة الموارد البشرية',
    roleEn: 'Human Resources Manager',
    image: '/team/sara.png',
  },
];

const INITIAL_COUNT = 3;
const INCREMENT = 3;

const TeamSection = () => {
  const { isRTL } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleMembers = teamMembers.slice(0, visibleCount);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom mx-auto">
        {/* Header */}
        <ScrollObserver animation="fade-up" threshold={0.1} className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium">
              {isRTL ? 'فريق العمل' : 'Our Team'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            {isRTL ? 'تعرف على فريقنا' : 'Meet Our Team'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isRTL
              ? 'نخبة من الخبراء والمهندسين الذين يقفون وراء تصاميمنا وتركيباتنا الاستثنائية'
              : 'A team of experts and engineers behind our exceptional designs and installations'}
          </p>
        </ScrollObserver>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleMembers.map((member, index) => (
            <ScrollObserver
              key={index}
              animation="fade-up"
              threshold={0.1}
              delay={index < INITIAL_COUNT ? 150 * (index + 1) : 0}
              className="relative group"
            >
              <Card className="overflow-hidden h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="h-72 overflow-hidden relative">
                  <LazyImage
                    src={member.image}
                    alt={isRTL ? member.nameAr : member.nameEn}
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                </div>
                <div className={`p-5 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-lg font-bold text-charcoal mb-1">
                    {isRTL ? member.nameAr : member.nameEn}
                  </h3>
                  <p className="text-gold text-sm">
                    {isRTL ? member.roleAr : member.roleEn}
                  </p>
                </div>
              </Card>
            </ScrollObserver>
          ))}
        </div>

        {/* Show More button - reveals a few more members each click */}
        {visibleCount < teamMembers.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + INCREMENT, teamMembers.length))}
              className="inline-flex items-center gap-2 bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
            >
              {isRTL ? 'عرض المزيد' : 'Show More'}
              <ChevronDown size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
