import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LazyImage from '../components/LazyImage';
import ScrollObserver from '../components/home-index/ScrollObserver';
import {
  Card,
  CardContent
} from "../components/ui/card";
import { AspectRatio } from '../components/ui/aspect-ratio';
import { useIsMobile } from '../hooks/use-mobile';
import {
  Linkedin,
  Mail,
  Twitter
} from 'lucide-react';

const About = () => {
  const { isRTL } = useLanguage();
  const isMobile = useIsMobile();
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: isRTL ? 'م/اشرف عبدالعزيز' : 'Eng / Ashraf Abd elaziz ',
      role: isRTL ? ' المدير التنفيذي وعضو مجلس ادارة' : 'CEO & Board Member',
      bio: isRTL
        ? 'يمتلك أكثر من 25 عامًا من الخبرة في إدارة وتنفيذ مشاريع الإضاءة الفاخرة والنجف والثريات للمشاريع الكبرى. حاصل على شهادة PMP وشهادات مهنية في الإدارة التنفيذية، ويتمتع بخبرة واسعة في قيادة الفرق، وإدارة المشاريع الضخمة، والتخطيط الاستراتيجي، وضمان تحقيق أعلى معايير الجودة والكفاءة.'
        : 'With over 25 years of experience in managing and delivering luxury lighting, chandeliers, and decorative lighting projects, he is PMP certified and holds executive management certifications. He has extensive expertise in leading multidisciplinary teams, managing large-scale projects, strategic planning, and delivering projects to the highest standards of quality and operational excellence.', image: "/team/as.png"
    },

    {
      name: isRTL ? 'م/محمد اشرف' : 'Eng / Mohamed Ashraf',
      role: isRTL ? 'نائب  مديرالمشروعات' : 'Deputy Project Manager',
      bio: isRTL
        ? 'مسئول تنسيق ومتابعة سير المشروعات، والتواصل بين فرق العمل، والحرص على تنفيذ الأعمال وفق الخطط والجداول الزمنية المحددة'
        : 'Responsible for coordinating and monitoring project progress, facilitating communication between teams, and ensuring work is executed according to established plans and schedules..',
      image: "/team/4.jpeg"
    },

    {
      name: isRTL ? 'م/محمد متولي' : 'Eng / Mohamed Metwally ',

      role: isRTL ? 'مدير المكتب الفني' : 'Technical Office Manager',
      bio: isRTL
        ? '   يمتلك خبرة تزيد عن 20 عامًا في التصميم الهندسي وإعداد الرسومات التنفيذية باستخدام AutoCAD، مع خبرة في مراجعة المخططات الفنية، وتنسيق الأعمال الهندسية، وضمان دقة التصميمات ومطابقتها لمتطلبات المشروع.'
        : 'Over 20 years of experience in engineering design and AutoCAD drafting, with extensive expertise in reviewing technical drawings, coordinating engineering works, and ensuring design accuracy and compliance with project requirements...',
      image: "/team/5.png"
    },
    {
  name: isRTL ? 'مصطفى عبدالتواب' : 'Mostafa Abdel Tawab',
  role: isRTL
    ? 'مدير المصنع'
    : 'Factory Manager',
  bio: isRTL
    ? 'مسؤول عن إدارة وتنظيم عمليات المصنع ومتابعة سير العمل والإنتاج، مع الإشراف على التنسيق بين مختلف الأقسام وضمان كفاءة التشغيل، إلى جانب دعم عمليات البيع والتنسيق مع العملاء واحتياجات المشروعات.'
    : 'Responsible for managing and coordinating factory operations and production workflows, overseeing cross-department coordination and operational efficiency, while also supporting sales activities and coordinating with clients and project requirements.',
  image: "/team/mostafa-abdel-tawab.png" // غيّر المسار حسب الصورة الفعلية
},

{
  name: isRTL ? 'أحمد عبدالواحد' : 'Ahmed Abdelwahab',
  role: isRTL
    ? 'مطور أعمال'
    : 'Business Development',
  bio: isRTL
    ? 'يساهم في تطوير أعمال الشركة من خلال توظيف التقنية والحلول الرقمية لدعم النمو وتوسيع الحضور في السوق، ويشمل ذلك تطوير وإدارة الموقع والأنظمة الرقمية الاخري ،والتسويق الإلكتروني .'
    : 'Drives business growth through digital solutions, website and system development, online presence, and digital marketing.',
  image: "/team/ahmed-pro.png"
},
    {
      name: isRTL ? 'م/ إبراهيم محمد السيد' : 'Eng. Ibrahim Muhammad Al-Sayed',
      role: isRTL ? 'مهندس مبيعات' : 'Sales Engineer',
      bio: isRTL
        ? 'متخصص في تقديم الحلول الفنية للعملاء، وتحليل احتياجات المشاريع، وضمان توافق المنتجات مع المتطلبات.'
        : 'Specialized in providing technical solutions to clients, analyzing project needs, and ensuring product compatibility.',
      image: "/team/Ibrahim.webp"
    },

    {
      name: isRTL ? 'م/ أدهم مصطفى' : 'Eng. Adham Mostafa',
      role: isRTL
        ? 'مهندس مشروعات تركيب الإضاءة والثريات والنجف'
        : 'Lighting, Chandeliers & Decorative Fixtures Installation Project Engineer',
      bio: isRTL
        ? 'يمتلك خبرة تمتد إلى 5 سنوات في إدارة وتنفيذ مشروعات تركيب الإضاءة والثريات والنجف والإشراف على التنفيذ، وضمان الالتزام بالمخططات الفنية، ومعايير الجودة، والجداول الزمنية للمشروعات.'
        : '5 years of experience in managing and executing lighting, chandelier, and decorative fixture installation projects, supervising on-site execution, ensuring compliance with technical drawings, quality standards.',
      image: "/team/ad.png"
    },
    {
      name: isRTL ? 'م/ محمد مصطفى' : 'Eng. Mohamed Mostafa',
      role: isRTL ? 'مهندس مشروعات ' : 'Senior Projects Engineer',
      bio: isRTL
        ? 'يمتلك خبرة واسعة في إدارة وتنفيذ مشاريع الإضاءة والنجف والثريات بالمملكة العربية السعودية، مع الإشراف على جميع مراحل المشروع بدءًا من التخطيط والتنسيق وحتى التركيب والتسليم وفق أعلى معايير الجودة.'
        : 'Experienced in managing and delivering lighting, chandeliers, and decorative lighting projects across Saudi Arabia, overseeing every project phase from planning and coordination to installation and final handover while ensuring the highest quality standards.',
      image: "/team/ms.png"
    },
{
      name: isRTL ? 'سيد حسين' : 'Sayed Hussein',
      role: isRTL ? 'أخصائي تسويق' : 'Marketing Specialist',
      bio: isRTL
        ? 'يمتلك خبرة تتجاوز 15 عامًا في تسويق وبيع النجف والثريات وحلول الإضاءة، مع خبرة في بناء علاقات قوية مع العملاء، وتحليل احتياجات المشاريع، وتقديم الحلول المناسبة التي تجمع بين الجودة والقيمة.'
        : 'With over 15 years of experience in marketing and sales of chandeliers, decorative lighting, and lighting solutions, he specializes in building strong client relationships, understanding project requirements, and delivering tailored solutions that combine quality and value.',
      image: "/team/sh.png"
    },
    {
      name: isRTL ? 'م/ شريف حجازي' : 'Eng / Sherif Hejazy',
      role: isRTL ? 'مهندس معماري ومتخصص تصيير ثلاثي الأبعاد' : 'Architect & 3D Visualizer',
      bio: isRTL
        ? 'متخصص في التصيير الثلاثي الأبعاد والتصميم الواقعي للمشروعات الداخلية والخارجية.'
        : 'Specialist in 3D visualization and realistic design for interior and exterior projects.',
      image: "/team/sherif.JPG" // غير المسار حسب الصورة الحقيقية
    },

{
      name: isRTL ? 'م/ هانيا هشام' : 'Hania Hesham',
      role: isRTL ? 'مهندسة معمارية ومصممة داخلية' : 'Architect & Interior Designer',
      bio: isRTL
        ? 'خبيرة في تصميم المساحات الداخلية العصرية مع لمسة فنية تناسب مختلف الأذواق.'
        : 'Expert in modern interior space design with an artistic touch tailored to diverse styles.',
      image: "/team/hania.jpg" // غير المسار حسب الصورة الحقيقية
    },

    

{
      name: isRTL ? 'م/ عبدالرحمن إسماعيل' : 'Eng / Abdulrahman Ismail',
      role: isRTL
        ? 'مهندس  في تصميم الثريا - خبرة 5 سنوات'
        : 'AutoCAD Chandelier Design Engineer - 5 Years of Experience',
      bio: isRTL
        ? 'متخصص في تصميم الثريات مع خبرة تمتد إلى 5 سنوات في إعداد الرسومات التنفيذية والتفصيلية بدقة عالية وتحويل الأفكار إلى تصاميم احترافية قابلة للتنفيذ.'
        : 'Specialized in chandelier design using AutoCAD, with 5 years of experience creating detailed technical drawings, production-ready designs, and precise drafting solutions.',
      image: "/team/abd.png" // غيّر المسار حسب الصورة الفعلية
    },


    {
      name: isRTL ? 'م/ مهاب إسماعيل' : 'Eng. Mohab Ismail',
      role: isRTL ? 'مهندس إنتاج' : 'Production Engineer',
      bio: isRTL
        ? 'يمتلك خبرة تمتد لأربع سنوات في عمليات تصنيع النجف والثريات، مع التركيز على متابعة مراحل الإنتاج، وضبط الجودة، والالتزام بمعايير التصنيع لتحقيق أفضل النتائج.'
        : 'Production Engineer with 4 years of experience in chandelier and decorative lighting manufacturing, focusing on production processes, quality control, and maintaining high manufacturing standards.',
      image: "/team/mah.png"
    },
    
    

    
{
  name: isRTL ? 'مصطفى محمد' : 'Mostafa Mohamed',
  role: isRTL
    ? 'مصمم داخلي'
    : 'Junior Designer',
  bio: isRTL
    ? 'متخصص في إعداد الرسومات والتعديلات باستخدام AutoCAD، ويساهم في تجهيز المخططات والرسومات الفنية وفق متطلبات العمل.'
    : 'Junior AutoCAD specialist responsible for preparing and modifying technical drawings and supporting the team with accurate drafting using AutoCAD.',
  image: "/team/mos2.png" // غيّر المسار حسب الصورة الفعلية
},

{
  name: isRTL ? 'سارة عبدالتواب' : 'Sara Abdel Tawab',
  role: isRTL
    ? 'مديرة الموارد البشرية'
    : 'Human Resources Manager',
  bio: isRTL
    ? 'مديرة الموارد البشرية ومسؤولة عن إدارة وتطوير الموارد البشرية، ودعم بيئة العمل، وتنظيم عمليات التوظيف والتطوير بما يدعم أهداف الشركة.'
    : 'Human Resources Manager responsible for managing and developing human resources, supporting a positive work environment, and overseeing recruitment and employee development in alignment with the company’s goals.',
  image: "/team/sara.png" // غيّر المسار حسب الصورة الفعلية
},


  ];

  const ValuesIcon = ({ index }: { index: number }) => {
    switch (index) {
      case 0:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 1:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 2:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Header with ScrollObserver */}
      <ScrollObserver animation="fade-up" threshold={0} className="bg-charcoal text-white py-20">
        <div className="container-custom mx-auto">
          <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
            <ScrollObserver animation="fade-up" delay={25} className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                {isRTL ? 'من نحن' : 'About Us'}
              </h1>
            </ScrollObserver>
            <ScrollObserver animation="fade-up" delay={50} className="text-xl text-gray-300">
              <p>
                {isRTL ? 'هبات أيست' : 'section-about-subtitle'}
              </p>
            </ScrollObserver>
          </div>
        </div>
      </ScrollObserver>

      {/* Our Story with ScrollObserver */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollObserver animation="fade-right" threshold={0.3} delay={300}
              className={`${isRTL ? 'order-2 text-right' : 'order-1 text-left'}`}>
              <h2 className="text-3xl font-bold text-gold mb-6 ">
                {isRTL ? 'من نحن' : 'About Us'}
              </h2>
              <p className="text-gray-600 mb-4">
                {isRTL
                  ? 'مجموعة هبات الشرق هي شركة سعودية رائدة في حلول الإنارة الديكورية وإنارة الواجهات المعمارية. نجمع بين الإبداع الفني والهندسة المتقدمة لتقديم تجارب إنارة استثنائية للمشاريع الفندقية الفاخرة والمعالم الثقافية والمشاريع التجارية..'
                  : 'Hebat East Group is a leading Saudi company in decorative lighting and architectural façade lighting solutions. We combine artistic creativity with advanced engineering to deliver exceptional lighting experiences for luxury hotel projects, cultural landmarks, and commercial developments..'}
              </p>
              <p className="text-gray-600">
                {isRTL
                  ? 'على مدار السنوات، أصبحنا من اهم الموردين الرئيسين للثريات الفاخرة للفنادق والقصور والمساحات التجارية الراقية في المملكة. نحن نفخر بتقديم الجودة والأناقة في كل تفاصيل عملنا.'
                  : 'Over the years, we have become the premier provider of luxury chandeliers for hotels, palaces, and upscale commercial spaces in the Kingdom. We take pride in delivering quality and elegance in every detail of our work.'}
              </p>
            </ScrollObserver>
            <ScrollObserver animation="fade-left" threshold={0.2} delay={200}
              className={`${isRTL ? 'order-1' : 'order-2'} relative`}>

              <div className="relative">
                {/* Background decorative element */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl transform rotate-3"></div>

                {/* Main image container */}
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                  <AspectRatio ratio={4 / 3} className="bg-gray-100">
                    <LazyImage
                      src="/Logo_and_identity/about-t.jpg"
                      alt="Our Story"
                      className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                    />
                  </AspectRatio>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-4 -right-4 grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-gold rounded-full opacity-30"></div>
                  ))}
                </div>
              </div>

            </ScrollObserver>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision with ScrollObserver */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <ScrollObserver animation="fade-up" threshold={0.1} delay={100}>
              <Card className={`h-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                <CardContent className="p-8">
                  <div className="bg-gold text-white w-14 h-14 flex items-center justify-center rounded-full mb-6 transform transition-transform duration-500 hover:scale-110">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L4 6V12C4 15.31 7.58 20 12 22C16.42 20 20 15.31 20 12V6L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    {isRTL ? 'مهمتنا' : 'Our Mission'}
                  </h3>
                  <p className="text-gray-600">
                    {isRTL
                      ? 'مهمتنا هي إضاءة المساحات بتصاميم فريدة وأنيقة تتجاوز التوقعات. نحن نهدف إلى تحويل أي مكان إلى تحفة فنية من خلال الإضاءة الاستثنائية والتفاصيل الدقيقة، مع التزامنا المطلق بالجودة والخدمة.'
                      : 'By combining our expertise and passion for innovation, we are committed to providing advanced, tailor-made lighting solutions that enhance both residential and commercial environments and become the first choice for those with refined and luxurious taste, from hotels, mosques, villas and palaces.'}
                  </p>
                </CardContent>
              </Card>
            </ScrollObserver>

            {/* Vision */}
            <ScrollObserver animation="fade-up" threshold={0.2} delay={200}>
              <Card className={`h-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                <CardContent className="p-8">
                  <div className="bg-gold text-white w-14 h-14 flex items-center justify-center rounded-full mb-6 transform transition-transform duration-500 hover:scale-110">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    {isRTL ? 'رؤيتنا' : 'Our Vision'}
                  </h3>
                  <p className="text-gray-600">
                    {isRTL
                      ? 'أن نُضيء المساحات بأناقة ورقي ولمسة فنية مميزة، مُقدمين تجارب إضاءة تتجاوز المألوف. أن نحافظ على ريادتنا ونُرسخ مكانتنا كواحدة من أكبر الشركات السعودية في مجال الإضاءة والديكور..'
                      : 'To illuminate spaces with elegance, sophistication, and a distinctive artistic touch, offering lighting experiences that transcend the ordinary. To maintain our leadership and position ourselves as one of the largest Saudi companies in the field of lighting and décor..'}
                  </p>
                </CardContent>
              </Card>
            </ScrollObserver>
          </div>
        </div>
      </section>

      {/* Our Team with enhanced animations */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <ScrollObserver animation="fade-up" threshold={0.1} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              {isRTL ? 'فريقنا' : 'Our Team'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL
                ? 'تعرف على الخبراء الذين يقفون وراء تصاميمنا وتركيباتنا الاستثنائية'
                : 'Meet the experts behind our exceptional designs and installations'}
            </p>
          </ScrollObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollObserver
                key={index}
                animation="fade-up"
                threshold={0.1}
                delay={150 * (index + 1)}
                className="relative group"
              >
                <Card
                  className="overflow-hidden h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  onMouseEnter={() => setActiveTeamMember(index)}
                  onMouseLeave={() => setActiveTeamMember(null)}
                >
                  <div className="h-80 overflow-hidden relative">
                    <LazyImage
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110"
                    />
                    {/* Enhanced hover overlay with smoother transition */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gold/90 via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out flex items-end justify-center pb-6">
                      <div className="translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out delay-100 flex flex-col items-center">
                        <div className="flex space-x-4 mb-4">
                          <div className="flex items-center justify-between gap-4">
                            {/* Social icons with staggered animations */}
                            <button className="w-10 h-10 rounded-full bg-white text-gold flex items-center justify-center hover:bg-charcoal hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                              <Linkedin size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white text-gold flex items-center justify-center hover:bg-charcoal hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                              <Twitter size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white text-gold flex items-center justify-center hover:bg-charcoal hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                              <Mail size={18} />
                            </button>
                          </div>
                        </div>
                        <span className="text-white font-medium text-sm">{isRTL ? 'تواصل معنا' : 'Get in touch'}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-charcoal mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </ScrollObserver>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
