import { ProjectType } from '../hooks/project';

// تعريف نوع عنصر المعرض
interface GalleryItem {
  full: string;
  thumbnail: string;
}

// تعريف نوع تفاصيل المشروع
interface ProjectDetail {
  title: string;
  content: string;
}

// تخزين مؤقت للبيانات لتجنب إعادة الحساب
let cachedData: Record<string, Record<string, ProjectType>> = {};

// دالة لتحميل الصور مسبقاً
const preloadImages = (imagePaths: string[]) => {
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
};

// دالة لاستخراج جميع مسارات الصور من المشروع
const extractImagePaths = (project: ProjectType): string[] => {
  const paths: string[] = [project.mainImage];
  project.gallery.forEach((item: any) => {
    if (typeof item === 'object' && item.full && item.thumbnail) {
      paths.push(item.full, item.thumbnail);
    }
  });
  return paths;
};

const getProjectsData = (isRTL: boolean): Record<string, ProjectType> => {
  // التحقق من التخزين المؤقت
  const cacheKey = isRTL ? 'rtl' : 'ltr';
  if (cachedData[cacheKey]) {
    return cachedData[cacheKey];
  }

  const projectsData: Record<string, ProjectType> = {
    'mosque1': {
      title: isRTL ? 'مسجد الشلوب' : 'Al-Shalhoub Mosque',
      subtitle: isRTL ? 'جدة، المملكة العربية السعودية' : 'Jeddah, KSA',
      description: isRTL
        ? 'مشروع إضاءة لمسجد الشلهوب في جدة شامل الديكورات وتركيب الهلال وإنارة المسجد وتركيب عدد 6 نجفات كلاسيكية إسلامية فاخرة.'
        : 'Al-Al-Shalhoub Mosque lighting project, including decorations, installation of the crescent, illumination of the mosque, and installation of 6 chandeliers.',
      year: '2024',
      category: isRTL ? 'مساجد' : 'Mosque',
      client: isRTL ? ' الشلهوب الخيرية' : 'Al-Al-Shalhoub Charitable Foundation',
      location: isRTL ? 'جدة، المملكة العربية السعودية' : 'Jeddah, KSA',
      mainImage: '/projects-page/mosque1/23.webp',

      gallery: [
        {
          full: '/projects-page/mosque1/1.webp',
          thumbnail: '/projects-page/mosque1/thumbs/1.webp'
        },
        {
          full: '/projects-page/mosque1/2.webp',
          thumbnail: '/projects-page/mosque1/thumbs/2.webp'
        },
        {
          full: '/projects-page/mosque1/3.webp',
          thumbnail: '/projects-page/mosque1/thumbs/3.webp'
        },
        {
          full: '/projects-page/mosque1/4.webp',
          thumbnail: '/projects-page/mosque1/thumbs/4.webp'
        },
        {
          full: '/projects-page/mosque1/5.webp',
          thumbnail: '/projects-page/mosque1/thumbs/5.webp'
        },
        {
          full: '/projects-page/mosque1/6.webp',
          thumbnail: '/projects-page/mosque1/thumbs/6.webp'
        },
        {
          full: '/projects-page/mosque1/7.webp',
          thumbnail: '/projects-page/mosque1/thumbs/7.webp'
        },
        {
          full: '/projects-page/mosque1/8.webp',
          thumbnail: '/projects-page/mosque1/thumbs/8.webp'
        },
        {
          full: '/projects-page/mosque1/9.webp',
          thumbnail: '/projects-page/mosque1/thumbs/9.webp'
        },

        
        {
          full: '/projects-page/mosque1/12.webp',
          thumbnail: '/projects-page/mosque1/thumbs/12.webp'
        },
        {
          full: '/projects-page/mosque1/13.webp',
          thumbnail: '/projects-page/mosque1/thumbs/13.webp'
        },
        {
          full: '/projects-page/mosque1/17.webp',
          thumbnail: '/projects-page/mosque1/thumbs/17.webp'
        },
       
      
      ],

      details: [
        {
          title: isRTL ? 'تصنيع وتركيب النجف' : 'Chandelier Design & Installation',
          content: isRTL
            ? 'تم تصنيع نجف المسجد بعناية على الطراز الإسلامي الفاخر، باستخدام مواد عالية الجودة. تضمنت الأعمال النجفة الرئيسية الكبيرة في القبة، بالإضافة إلى الفوانيس الجانبية والنجف الفرعي، مما أضفى على المسجد طابعًا جماليًا وروحانيًا مميزًا.'
            : 'The chandeliers were custom-made in a luxurious Islamic style using high-quality materials. The work included the main large chandelier under the dome, side lanterns, and smaller chandeliers, all adding a beautiful and spiritual atmosphere to the mosque.'
        },
        {
          title: isRTL ? 'الأعمال المعدنية والهلال' : 'Metal Works & Crescent Installation',
          content: isRTL
            ? 'شملت الأعمال المعدنية تصميم وتركيب العناصر الزخرفية على الأبواب والأعمدة الداخلية، بالإضافة إلى تركيب هلال المئذنة بدقة عالية ليكمل الطابع الإسلامي العام للمسجد.'
            : 'The metal works included decorative designs for the mosque doors and interior columns. We also installed the crescent on top of the minaret with high precision, completing the Islamic identity of the mosque.'
        }
      ]
    },

    'rixos': {
      title: isRTL ? 'فندق Rixos' : 'Rixos Hotel',
      subtitle: isRTL ? 'جدة، المملكة العربية السعودية' : 'Jeddah, KSA',
      description: isRTL
        ? 'مشروع إضاءة فاخر لفندق ريكسوس بجدة، شمل تصميم وتنفيذ كامل أنظمة الإضاءة من إنتاج مصنعنا، بتوازن دقيق بين الفخامة والحداثة.'
        : 'A luxury lighting project for Rixos Hotel in Jeddah, fully designed and executed by our factory, striking a refined balance between elegance and modernity.',
      year: '2025',
      category: isRTL ? 'فندق' : 'Hotel',
      client: isRTL ? 'طيبة الاستثمارية' : 'Taiba Investment',
      location: isRTL ? 'جدة، المملكة العربية السعودية' : 'Jeddah, KSA',
      mainImage: '/projects-page/Rixos/10.webp',

      gallery: [
        { full: '/projects-page/Rixos/1.webp', thumbnail: '/projects-page/Rixos/thumbs/1.webp' },
        { full: '/projects-page/Rixos/2.webp', thumbnail: '/projects-page/Rixos/thumbs/2.webp' },
        { full: '/projects-page/Rixos/3.webp', thumbnail: '/projects-page/Rixos/thumbs/3.webp' },
        { full: '/projects-page/Rixos/4.webp', thumbnail: '/projects-page/Rixos/thumbs/4.webp' },
        { full: '/projects-page/Rixos/5.webp', thumbnail: '/projects-page/Rixos/thumbs/5.webp' },
        { full: '/projects-page/Rixos/6.webp', thumbnail: '/projects-page/Rixos/thumbs/6.webp' },
        { full: '/projects-page/Rixos/7.webp', thumbnail: '/projects-page/Rixos/thumbs/7.webp' },
        { full: '/projects-page/Rixos/8.webp', thumbnail: '/projects-page/Rixos/thumbs/8.webp' },
        { full: '/projects-page/Rixos/9.webp', thumbnail: '/projects-page/Rixos/thumbs/9.webp' },
        { full: '/projects-page/Rixos/10.webp', thumbnail: '/projects-page/Rixos/thumbs/10.webp' },
        { full: '/projects-page/Rixos/11.webp', thumbnail: '/projects-page/Rixos/thumbs/11.webp' },
        { full: '/projects-page/Rixos/12.webp', thumbnail: '/projects-page/Rixos/thumbs/12.webp' },
        { full: '/projects-page/Rixos/13.webp', thumbnail: '/projects-page/Rixos/thumbs/13.webp' },
        { full: '/projects-page/Rixos/14.webp', thumbnail: '/projects-page/Rixos/thumbs/14.webp' },
        { full: '/projects-page/Rixos/15.webp', thumbnail: '/projects-page/Rixos/thumbs/15.webp' },
        { full: '/projects-page/Rixos/16.webp', thumbnail: '/projects-page/Rixos/thumbs/16.webp' },
        { full: '/projects-page/Rixos/17.webp', thumbnail: '/projects-page/Rixos/thumbs/17.webp' },
        { full: '/projects-page/Rixos/18.webp', thumbnail: '/projects-page/Rixos/thumbs/18.webp' },
        { full: '/projects-page/Rixos/19.webp', thumbnail: '/projects-page/Rixos/thumbs/19.webp' },
        { full: '/projects-page/Rixos/20.webp', thumbnail: '/projects-page/Rixos/thumbs/20.webp' },
        { full: '/projects-page/Rixos/21.webp', thumbnail: '/projects-page/Rixos/thumbs/21.webp' },
        { full: '/projects-page/Rixos/22.webp', thumbnail: '/projects-page/Rixos/thumbs/22.webp' },
        { full: '/projects-page/Rixos/23.webp', thumbnail: '/projects-page/Rixos/thumbs/23.webp' },
        { full: '/projects-page/Rixos/24.webp', thumbnail: '/projects-page/Rixos/thumbs/24.webp' }
      ],
      details: [
        {
          title: isRTL ? 'التوريد والتنفيذ' : 'Supply & Installation',
          content: isRTL
            ? 'قامت شركتنا بتوريد وتنفيذ جميع أعمال الإضاءة في الفندق، من تصنيع المنتجات في مصنعنا إلى تركيبها في كافة المناطق مثل الغرف والممرات والبهو والمرافق الخارجية، مع ضمان أعلى معايير الجودة والدقة.'
            : 'Our company supplied and executed all lighting works in the hotel — from manufacturing the units in our factory to installing them across rooms, corridors, the lobby, and exterior areas — ensuring the highest standards of quality and precision.'
        },
        {
          title: isRTL ? 'الثريات الفاخرة' : 'Luxury Chandeliers',
          content: isRTL
            ? 'قمنا بتركيب مجموعة من الثريات الكريستالية الفاخرة من إنتاج مصنعنا، تم تنفيذها خصيصًا لتتناسب مع الطابع الراقي للفندق، وتُعد نجفة البهو المركزي من أبرز معالم التصميم الداخلي.'
            : 'We installed a set of luxurious crystal chandeliers manufactured in our factory, custom-made to reflect the hotel refined atmosphere — with the grand lobby chandelier standing as a signature design feature.'
        }
      ]
    },

    'crown': {
      title: isRTL ? 'فندق Crowne Plaza' : 'Crowne Plaza Hotel',
      subtitle: isRTL ? 'جدة، المملكة العربية السعودية' : 'Jeddah, KSA',
      description: isRTL
        ? 'تم تصنيع وحدات الإضاءة المخصصة لمشروع فندق كراون بلازا بجدة داخل مصنعنا وفق أعلى معايير الجودة والدقة، بما يتماشى مع الطابع الفندقي الراقي للمشروع.'
        : 'The lighting units for the Crowne Plaza Hotel project in Jeddah were custom-manufactured in our factory, meeting the highest standards of quality and precision to match the hotels upscale identity.',
      year: '2022',
      category: isRTL ? 'فندق' : 'Hotel',
      client: isRTL ? 'Crowne Plaza Group' : 'Crowne Plaza Group',
      location: isRTL ? 'جدة، المملكة العربية السعودية' : 'Jeddah, KSA',
      mainImage: '/projects-page/crown/7.webp',

      gallery: [
        { full: '/projects-page/crown/1.webp', thumbnail: '/projects-page/crown/thumbs/1.webp' },
        { full: '/projects-page/crown/2.webp', thumbnail: '/projects-page/crown/thumbs/2.webp' },
        { full: '/projects-page/crown/3.webp', thumbnail: '/projects-page/crown/thumbs/3.webp' },
        { full: '/projects-page/crown/4.webp', thumbnail: '/projects-page/crown/thumbs/4.webp' },
        { full: '/projects-page/crown/5.webp', thumbnail: '/projects-page/crown/thumbs/5.webp' },
        { full: '/projects-page/crown/6.webp', thumbnail: '/projects-page/crown/thumbs/6.webp' },
        { full: '/projects-page/crown/7.webp', thumbnail: '/projects-page/crown/thumbs/7.webp' },
        { full: '/projects-page/crown/8.webp', thumbnail: '/projects-page/crown/thumbs/8.webp' },
        { full: '/projects-page/crown/9.webp', thumbnail: '/projects-page/crown/thumbs/9.webp' },
        { full: '/projects-page/crown/10.webp', thumbnail: '/projects-page/crown/thumbs/10.webp' },
        { full: '/projects-page/crown/11.webp', thumbnail: '/projects-page/crown/thumbs/11.webp' },
        { full: '/projects-page/crown/12.webp', thumbnail: '/projects-page/crown/thumbs/12.webp' },
        { full: '/projects-page/crown/13.webp', thumbnail: '/projects-page/crown/thumbs/13.webp' },
        { full: '/projects-page/crown/14.webp', thumbnail: '/projects-page/crown/thumbs/14.webp' },
        { full: '/projects-page/crown/15.webp', thumbnail: '/projects-page/crown/thumbs/15.webp' },
        { full: '/projects-page/crown/16.webp', thumbnail: '/projects-page/crown/thumbs/16.webp' },
        { full: '/projects-page/crown/17.webp', thumbnail: '/projects-page/crown/thumbs/17.webp' },
        { full: '/projects-page/crown/18.webp', thumbnail: '/projects-page/crown/thumbs/18.webp' },
        { full: '/projects-page/crown/19.webp', thumbnail: '/projects-page/crown/thumbs/19.webp' },
        { full: '/projects-page/crown/20.webp', thumbnail: '/projects-page/crown/thumbs/20.webp' },
        { full: '/projects-page/crown/21.webp', thumbnail: '/projects-page/crown/thumbs/21.webp' },
        { full: '/projects-page/crown/22.webp', thumbnail: '/projects-page/crown/thumbs/22.webp' },
        { full: '/projects-page/crown/23.webp', thumbnail: '/projects-page/crown/thumbs/23.webp' }
      ],
      details: [
        {
          title: isRTL ? 'تصنيع حسب الطلب' : 'Custom Manufacturing',
          content: isRTL
            ? 'تم تصنيع جميع وحدات الإضاءة المستخدمة في المشروع داخل مصنعنا بأعلى معايير الجودة، وفق مواصفات دقيقة تلبي احتياجات الفندق وتعكس الطابع العصري للمكان.'
            : 'All lighting units used in the project were manufactured in our factory to exact specifications, ensuring top-tier quality and a modern aesthetic that aligns with the hotel vision.'
        }
      ]
    },
    'Makarem': {
      title: isRTL ? 'فندق مكارم المدينة' : 'Makarim Al Madinah Hotel',
      subtitle: isRTL ? 'المدينة المنورة، المملكة العربية السعودية' : 'Al-Madinah, Saudi Arabia',
      description: isRTL
        ? 'تنفيذ وتركيب جميع أعمال النجف والإضاءة داخل فندق مكارم المدينة، وذلك وفقًا للتصاميم الهندسية الحديثة، مع توفير نجف فاخر يناسب الطابع الروحاني والمعماري للمدينة المنوّرة.'
        : 'Complete installation of chandeliers and lighting works at Makarim Al Madinah Hotel, following modern engineering designs, with premium chandeliers matching the spiritual and architectural character of Al Madinah.',
      year: '2025',
      category: isRTL ? 'فندق' : 'Hotel',
      client: isRTL ? 'شركة مكارم العالمية للفنادق' : 'Makarem Hotels',
      location: isRTL ? 'المدينة المنورة، المملكة العربية السعودية' : 'Al-Madinah, Saudi Arabia',
      mainImage: '/projects-page/Makarem/19t.webp',

      gallery: [

        { full: '/projects-page/Makarem/1t.jpg', thumbnail: '/projects-page/Makarem/thumbs/1t.jpg' },
        { full: '/projects-page/Makarem/2t.jpg', thumbnail: '/projects-page/Makarem/thumbs/2t.jpg' },
        { full: '/projects-page/Makarem/3t.jpeg', thumbnail: '/projects-page/Makarem/thumbs/3t.jpeg' },
        { full: '/projects-page/Makarem/4t.jpeg', thumbnail: '/projects-page/Makarem/thumbs/4t.jpeg' },
        { full: '/projects-page/Makarem/5t.jpg', thumbnail: '/projects-page/Makarem/thumbs/5t.jpg' },
        { full: '/projects-page/Makarem/6t.jpg', thumbnail: '/projects-page/Makarem/thumbs/6t.jpg' },
        { full: '/projects-page/Makarem/7t.jpg', thumbnail: '/projects-page/Makarem/thumbs/7t.jpg' },
        { full: '/projects-page/Makarem/8t.jfif', thumbnail: '/projects-page/Makarem/thumbs/8t.jfif' },
        { full: '/projects-page/Makarem/10t.jpg', thumbnail: '/projects-page/Makarem/thumbs/10t.jpg' },
        { full: '/projects-page/Makarem/11t.jpg', thumbnail: '/projects-page/Makarem/thumbs/11t.jpg' },
        { full: '/projects-page/Makarem/12t.jpg', thumbnail: '/projects-page/Makarem/thumbs/12t.jpg' },
        { full: '/projects-page/Makarem/13t.jpeg', thumbnail: '/projects-page/Makarem/thumbs/13t.jpeg' },
        { full: '/projects-page/Makarem/14t.jpg', thumbnail: '/projects-page/Makarem/thumbs/14t.jpg' },
        { full: '/projects-page/Makarem/15t.jpg', thumbnail: '/projects-page/Makarem/thumbs/15t.jpg' },
        { full: '/projects-page/Makarem/16t.webp', thumbnail: '/projects-page/Makarem/thumbs/16t.webp' },
        { full: '/projects-page/Makarem/16t.jpg', thumbnail: '/projects-page/Makarem/thumbs/16t.jpg' },
        { full: '/projects-page/Makarem/15t.jpg', thumbnail: '/projects-page/Makarem/thumbs/15t.jpg' },
        { full: '/projects-page/Makarem/19.jpeg', thumbnail: '/projects-page/Makarem/thumbs/19.jpeg' },
        { full: '/projects-page/Makarem/19t.webp', thumbnail: '/projects-page/Makarem/thumbs/19t.webp' },

      ],
      details: [
        {
          title: isRTL ? 'مشروع الإضاءة' : 'Lighting Project',
          content: isRTL
            ? 'نفذت شركتنا مشروع الإضاءة الكامل لفندق مكارم بالمدينة المنورة، أحد أبرز الفنادق المطلة على المسجد النبوي. ركّز المشروع على إبراز الطابع الروحاني للمكان عبر ثريات حديثة بطابع شرقي راقٍ، مع تنفيذ منظومة إضاءة داخلية دقيقة للغرف والممرات وصالات الاستقبال بما يوازن بين الفخامة والهدوء.'
            : 'Our company executed the complete lighting project for Makarem Hotel in Madinah, one of the city’s most notable hotels near the Prophet’s Mosque. The project focused on highlighting the spiritual atmosphere of the location through modern chandeliers with elegant oriental touches, along with refined interior lighting for rooms, corridors, and reception halls, balancing luxury with serenity.'
        },
        {
          title: isRTL ? 'ثريات مصممة خصيصًا لفندق مكارم' : 'Custom Chandeliers for Makarem Hotel',
          content: isRTL
            ? 'تم تصميم وتركيب مجموعة من الثريات الحديثة المصنوعة خصيصًا لفندق مكارم، بارتفاعات هندسية مميزة تتماشى مع هوية الفندق الروحية والفاخرة. تمتاز الإضاءة بتوهج ناعم يمنح الضيوف تجربة بصرية مريحة تعكس مكانة المدينة المنورة.'
            : 'We designed and installed a collection of modern custom-made chandeliers for Makarem Hotel, featuring distinctive architectural heights that match the hotel’s spiritual and luxurious identity. The lighting offers a soft, refined glow that enhances guests’ visual experience and reflects the significance of Madinah.'
        }
      ]
    },


    'commercial-plaza': {
      title: isRTL ? 'فندق Worth' : 'Worth Hotel',
      subtitle: isRTL ? 'المدينة المنورة، المملكة العربية السعودية' : 'Al-Madinah, Saudi Arabia',
      description: isRTL
        ? 'مشروع إضاءة فندقية متكاملة لفندق WORTH، شمل تنفيذ وتركيب أطول نجفة في العالم بلمسات فنية دقيقة، في واحد من أرقى الفنادق الذكية في المدينة المنورة.'
        : 'A comprehensive hotel lighting project for WORTH Hotel, including the design and installation of the world tallest chandelier with fine artistic details, in one of the most modern and smart hotels in Madinah.',
      year: '2024',
      category: isRTL ? 'فندق' : 'Hotel',
      client: isRTL ? 'شركة شبه الجزيرة' : 'Peninsula Company',
      location: isRTL ? 'المدينة المنورة، المملكة العربية السعودية' : 'Al-Madinah, Saudi Arabia',
      mainImage: '/projects-page/Worth/2.webp',

      gallery: [
        { full: '/projects-page/Worth/1.webp', thumbnail: '/projects-page/Worth/thumbs/1.webp' },
        { full: '/projects-page/Worth/2.webp', thumbnail: '/projects-page/Worth/thumbs/2.webp' },
        { full: '/projects-page/Worth/3.webp', thumbnail: '/projects-page/Worth/thumbs/3.webp' },
        { full: '/projects-page/Worth/4.webp', thumbnail: '/projects-page/Worth/thumbs/4.webp' },
        { full: '/projects-page/Worth/5.webp', thumbnail: '/projects-page/Worth/thumbs/5.webp' },
        { full: '/projects-page/Worth/555.webp', thumbnail: '/projects-page/Worth/thumbs/555.webp' },
        { full: '/projects-page/Worth/6.webp', thumbnail: '/projects-page/Worth/thumbs/6.webp' },
        { full: '/projects-page/Worth/7.webp', thumbnail: '/projects-page/Worth/thumbs/7.webp' },
        { full: '/projects-page/Worth/8.webp', thumbnail: '/projects-page/Worth/thumbs/8.webp' },
        { full: '/projects-page/Worth/82.webp', thumbnail: '/projects-page/Worth/thumbs/82.webp' },
        { full: '/projects-page/Worth/83.webp', thumbnail: '/projects-page/Worth/thumbs/83.webp' },
        { full: '/projects-page/Worth/84.webp', thumbnail: '/projects-page/Worth/thumbs/84.webp' },
        { full: '/projects-page/Worth/9.webp', thumbnail: '/projects-page/Worth/thumbs/9.webp' },
        { full: '/projects-page/Worth/10.webp', thumbnail: '/projects-page/Worth/thumbs/10.webp' },
        { full: '/projects-page/Worth/90.webp', thumbnail: '/projects-page/Worth/thumbs/90.webp' },
        { full: '/projects-page/Worth/133.webp', thumbnail: '/projects-page/Worth/thumbs/133.webp' },
        { full: '/projects-page/Worth/11.webp', thumbnail: '/projects-page/Worth/thumbs/11.webp' },
        { full: '/projects-page/Worth/12.webp', thumbnail: '/projects-page/Worth/thumbs/12.webp' },
        { full: '/projects-page/Worth/13.webp', thumbnail: '/projects-page/Worth/thumbs/13.webp' },
        { full: '/projects-page/Worth/1112.webp', thumbnail: '/projects-page/Worth/thumbs/1112.webp' },
        { full: '/projects-page/Worth/1113.webp', thumbnail: '/projects-page/Worth/thumbs/1113.webp' },
        { full: '/projects-page/Worth/1114.webp', thumbnail: '/projects-page/Worth/thumbs/1114.webp' },
        { full: '/projects-page/Worth/16.webp', thumbnail: '/projects-page/Worth/thumbs/16.webp' },
        { full: '/projects-page/Worth/20.webp', thumbnail: '/projects-page/Worth/thumbs/20.webp' }
      ],
      details: [
        {
          title: isRTL ? 'مشروع الإضاءة' : 'Lighting Project',
          content: isRTL
            ? 'نفذت شركتنا نظام الإضاءة بالكامل لفندق بننسولا وورث، أحدث فنادق المدينة المنورة وأول فندق ذكي في المنطقة. شمل المشروع تنفيذ الثريات الفاخرة والمودرن العصرية وتصميم إضاءة داخلية دقيقة للغرف والصالات وصالة الاستقبال والانتظار والممرات.'
            : 'Our company executed the complete lighting system for the Peninsula WORTH Hotel, the newest and first smart hotel in Madinah. The project included the installation of luxury and modern chandeliers, along with carefully designed interior lighting for rooms, halls, the main lobby, waiting areas, and corridors.'
        },
        {
          title: isRTL ? 'تركيب أطول نجفة في بالمملكة' : 'Installation of the World\'s Tallest Chandelier',
          content: isRTL
            ? 'تم تنفيذ وتركيب أطول نجفة في بالمملكة بفخامة وعصرية داخل فندق بننسولا وورث، وتم ترشيحها لدخول موسوعة غينيس للأرقام القياسية.'
            : 'The chandelier was installed with luxury and modern style at Peninsula WORTH Hotel, and has been nominated for the Guinness World Records.'
        }
      ]
    },

    'hotel-lobby': {
      title: isRTL ? 'فندق إعمار' : 'EMMAR Royal Hotel',
      subtitle: isRTL ? 'المدينة المنورة، المملكة العربية السعودية' : 'Al-Madinah, Saudi Arabia',
      description: isRTL
        ? 'مشروع إضاءة وتركيب نجفة فاخرة في بهو فندق إعمار رويال المدينة المنورة.'
        : 'Lighting and installation project of a luxury chandelier in the lobby of the Emaar Royal Hotel, Madinah.',
      year: '2024',
      category: isRTL ? 'فندق' : 'Hotel',
      client: isRTL ? 'فندق إعمار رويال المدينة' : 'EMMAR Royal Al-Madinah',
      location: isRTL ? 'المدينة المنورة، المملكة العربية السعودية' : 'Al-Madinah, Saudi Arabia',
      mainImage: '/projects-page/emmar/1.webp',

      gallery: [
        { full: '/projects-page/emmar/2.webp', thumbnail: '/projects-page/emmar/thumbs/2.webp' },
        { full: '/projects-page/emmar/4.webp', thumbnail: '/projects-page/emmar/thumbs/4.webp' },
        { full: '/projects-page/emmar/5.webp', thumbnail: '/projects-page/emmar/thumbs/5.webp' },
        { full: '/projects-page/emmar/6.webp', thumbnail: '/projects-page/emmar/thumbs/6.webp' },
        { full: '/projects-page/emmar/9.webp', thumbnail: '/projects-page/emmar/thumbs/9.webp' },
        { full: '/projects-page/emmar/7.webp', thumbnail: '/projects-page/emmar/thumbs/7.webp' },
        { full: '/projects-page/emmar/8.webp', thumbnail: '/projects-page/emmar/thumbs/8.webp' },
        { full: '/projects-page/emmar/3.webp', thumbnail: '/projects-page/emmar/thumbs/3.webp' }
      ],
      details: [
        {
          title: isRTL ? 'الثريات المركزية' : 'Central Chandeliers',
          content: isRTL
            ? 'تم تصميم وتنفيذ النجفة الكريستالية مخصصة لتكون نقطة محورية في البهو، مما يعكس فخامة وأناقة الفندق.'
            : 'Custom crystal chandelier was designed and implemented to be a focal point in the lobby, reflecting the luxury and elegance of the hotel.'
        }
      ]
    },
    'mosque3': {
      title: isRTL ? 'جامع محمد المرشد' : 'Mohammed Al-Murshid Mosque',
      subtitle: isRTL ? 'مكة المكرمة، المملكة العربية السعودية' : 'Makkah, KSA',
      description: isRTL
        ? 'مشروع 2025 لجامع محمد المرشد في مكة المكرمة، .'
        : '2025 project for Mohammed Al-Murshid Mosque in Makkah.',
      year: '2025',
      category: isRTL ? 'مساجد' : 'Mosque',
      client: isRTL ? 'جامع محمد المرشد' : 'Mohammed Al-Murshid Mosque',
      location: isRTL ? 'مكة المكرمة، المملكة العربية السعودية' : 'Makkah, KSA',
      mainImage: '/projects-page/mosque3/2.webp',

      gallery: [
        {
          full: '/projects-page/mosque3/1.webp',
          thumbnail: '/projects-page/mosque3/thumbs/1.webp'
        },
        {
          full: '/projects-page/mosque3/2.webp',
          thumbnail: '/projects-page/mosque3/thumbs/2.webp'
        },
        {
          full: '/projects-page/mosque3/3.webp',
          thumbnail: '/projects-page/mosque3/thumbs/3.webp'
        },

        {
          full: '/projects-page/mosque3/5.webp',
          thumbnail: '/projects-page/mosque3/thumbs/5.webp'
        },
        {
          full: '/projects-page/mosque3/6.webp',
          thumbnail: '/projects-page/mosque3/thumbs/6.webp'
        },
        {
          full: '/projects-page/mosque3/7.webp',
          thumbnail: '/projects-page/mosque3/thumbs/7.webp'
        },
        {
          full: '/projects-page/mosque3/8.webp',
          thumbnail: '/projects-page/mosque3/thumbs/8.webp'
        },
        {
          full: '/projects-page/mosque3/9.webp',
          thumbnail: '/projects-page/mosque3/thumbs/9.webp'
        },

        {
          full: '/projects-page/mosque3/11.webp',
          thumbnail: '/projects-page/mosque3/thumbs/11.webp'
        },

        {
          full: '/projects-page/mosque3/13.webp',
          thumbnail: '/projects-page/mosque3/thumbs/13.webp'
        },
        {
          full: '/projects-page/mosque3/14.webp',
          thumbnail: '/projects-page/mosque3/thumbs/14.webp'
        },

        {
          full: '/projects-page/mosque3/16.webp',
          thumbnail: '/projects-page/mosque3/thumbs/16.webp'
        },
        
        {
          full: '/projects-page/mosque3/18.webp',
          thumbnail: '/projects-page/mosque3/thumbs/18.webp'
        },
        {
          full: '/projects-page/mosque3/20.webp',
          thumbnail: '/projects-page/mosque3/thumbs/20.webp'
        }
      ],

      details: [
        {
          title: isRTL ? 'تركيب النجف' : 'Chandeliers Installation',
          content: isRTL
            ? 'شمل المشروع تركيب نجفة رئيسية فاخرة في منتصف قاعة الصلاة، بالإضافة إلى مجموعة من النجف الفرعي والفوانيس الجانبية التي تكمل المشهد البصري وتعزز الإضاءة داخل الجامع. تم اختيار الأشكال والتشطيبات بعناية لتناسب الطابع الإسلامي المهيب للمكان.'
            : 'The project included installing a large main chandelier in the prayer hall, along with smaller chandeliers and side lanterns. These lights made the mosque look more beautiful and bright. The designs were chosen to match the Islamic style of the mosque.'
        },
        {
          title: isRTL ? 'الأعمال المعدنية وتركيب الهلال' : 'Metal Works & Crescent Installation',
          content: isRTL
            ? 'تم تنفيذ أعمال معدنية داخلية عالية الجودة شملت الأبواب والأعمدة والعناصر الزخرفية، لتعزيز الفخامة والاتساق البصري مع التصميم المعماري للمسجد. كما تم تركيب هلال المئذنة بدقة هندسية وفنية ليكون ختامًا روحانيًا وجماليًا يميز الجامع من بعيد.'
            : 'The project also included high-quality metal work for the doors, columns, and decorative parts inside the mosque. These details made the place look more elegant. In addition, the crescent was carefully installed on top of the minaret to complete the mosque’s design and make it stand out from far away.'
        }
      ]

    },

    'mosque5': {
      title: isRTL ? 'جامع ضاحية سدايم' : 'Sdayem Suburb Mosque',

      subtitle: isRTL ? 'أبحر، جدة – المملكة العربية السعودية'
        : 'Obhur, Jeddah – Saudi Arabia',

      description: isRTL
        ? 'مشروع 2025 لجامع ضاحية سدايم في جدة، ويتضمن تصميم وتصنيع وتركيب نجفة LED بتكوين شبكي هندسي متقن، تعكس الطراز الإسلامي الحديث بروح معاصرة، إضافة إلى فوانيس حائط جانبية مصممة خصيصًا لتعزيز الاتساق البصري وإضاءة الفراغ الداخلي.'
        : '2025 project for Sdayem Suburb Mosque in Jeddah, featuring the design, manufacturing, and installation of a precisely engineered LED matrix chandelier that interprets modern Islamic aesthetics with refined geometry, along with custom-made wall lanterns that enhance the visual harmony and interior lighting.',

      year: '2025',

      category: isRTL ? 'مساجد' : 'Mosque',

      client: isRTL ? 'جامع ضاحية سدايم' : 'Sdayem Suburb Mosque',

      location: isRTL ? 'أبحر، جدة – المملكة العربية السعودية'
        : 'Obhur, Jeddah – Saudi Arabia',

      mainImage: '/projects-page/mosque5/1.jpeg',

      gallery: [
        {
          full: '/projects-page/mosque5/1.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/1.jpeg'
        },
        {
          full: '/projects-page/mosque5/2.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/2.jpeg'
        },
        {
          full: '/projects-page/mosque5/3.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/3.jpeg'
        },
        {
          full: '/projects-page/mosque5/4.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/4.jpeg'
        },
        {
          full: '/projects-page/mosque5/5.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/5.jpeg'
        },
        {
          full: '/projects-page/mosque5/6.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/6.jpeg'
        },
        {
          full: '/projects-page/mosque5/7.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/7.jpeg'
        },
        {
          full: '/projects-page/mosque5/8.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/8.jpeg'
        },
        {
          full: '/projects-page/mosque5/9.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/9.jpeg'
        },
        {
          full: '/projects-page/mosque5/10.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/10.jpeg'
        },
        {
          full: '/projects-page/mosque5/11.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/11.jpeg'
        },
        {
          full: '/projects-page/mosque5/12.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/12.jpeg'
        },

        {
          full: '/projects-page/mosque5/13.jpeg',
          thumbnail: '/projects-page/mosque5/thumbs/13.jpeg'
        },

      ],

      details: [
        {
          title: isRTL ? 'تصميم وتصنيع وتركيب النجف' : 'Design, Manufacturing & Installation of Chandeliers',
          content: isRTL
            ? 'شمل المشروع تصميم وتصنيع وتركيب النجفة الرئيسة في قبة المسجد، وهي تحفة معمارية هندسية على الطراز الإسلامي الحديث، صُنعت خصيصًا للموقع لتعكس الفخامة والدقة البصرية. كما تم تصنيع وتركيب فوانيس حائط جانبية تُكمل المشهد وتحقق توزيعًا متناغمًا للإضاءة داخل المسجد.'
            : 'The project included the design, manufacturing, and installation of the main chandelier in the mosque’s central dome. This architectural masterpiece, crafted in a modern Islamic geometric style, was custom-made to reflect elegance and visual precision. It was complemented by the production and installation of side wall lanterns that enhance the overall lighting harmony inside the mosque.'
        },
      ]

    },

    'mosque4': {
      title: isRTL ? 'جامع الشيخ سعد بن محمد العجلان ' : 'Muhammad Al-Ajlan Mosque',
      subtitle: isRTL ? 'الرياض , المملكة العربية السعودية' : 'Riyadh, KSA',
      description: isRTL
        ? 'مشروع 2025 لجامع محمد العجلان في مكة المكرمة، .'
        : '2025 project for Mohammed Al-Ajlan Mosque in Riyadh.',
      year: '2025',
      category: isRTL ? 'مساجد' : 'Mosque',
      client: isRTL ? 'مؤسسة محمد العجلان' : ' Al-Ajlan Foundation',
      location: isRTL ? 'الرياض , المملكة العربية السعودية' : 'Riyadh, KSA',
      mainImage: '/projects-page/mosque4/6.jpeg',

      gallery: [
        {
          full: '/projects-page/mosque4/1view.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/1view.jpeg'
        },
        {
          full: '/projects-page/mosque4/2.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/2.jpeg'
        },
        {
          full: '/projects-page/mosque4/3.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/3.jpeg'
        },
        {
          full: '/projects-page/mosque4/4.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/4.jpeg'
        },
        {
          full: '/projects-page/mosque4/5.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/5.jpeg'
        },
        {
          full: '/projects-page/mosque4/6.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/6.jpeg'
        },
        {
          full: '/projects-page/mosque4/7.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/7.jpeg'
        },
        {
          full: '/projects-page/mosque4/8.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/8.jpeg'
        },
        {
          full: '/projects-page/mosque4/9.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/9.jpeg'
        },
        {
          full: '/projects-page/mosque4/10.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/10.jpeg'
        },
        {
          full: '/projects-page/mosque4/11.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/11.jpeg'
        },
        {
          full: '/projects-page/mosque4/12.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/12.jpeg'
        },
        {
          full: '/projects-page/mosque4/13.jpeg',
          thumbnail: '/projects-page/mosque4/thumbs/13.jpeg'
        }




      ],

      details: [
        {
          title: isRTL ? 'تصميم وتصنيع وتركيب النجف' : 'Design, Manufacturing & Installation of Chandeliers',
          content: isRTL
            ? 'شمل المشروع تصميم وتصنيع وتركيب النجفة الرئيسية في قبة المسجد، وهي نجفة فاخرة على الطراز الإسلامي الحديث، بالإضافة إلى تصنيع وتركيب مجموعة من الفوانيس الجانبية التي تكمل المشهد البصري وتوزيع الإضاءة داخل المسجد. جميع القطع نُفذت خصيصًا للمسجد بما يتناسب مع الطابع المعماري وروح المكان.'
            : 'The project included the design, manufacturing, and installation of the main chandelier in the mosque’s central dome. This custom-made chandelier follows a modern Islamic style and was complemented by the production and installation of side wall lanterns that enhance the visual harmony and lighting distribution inside the mosque.'
        },

      ]

    },
  };

  // حفظ البيانات في التخزين المؤقت
  cachedData[cacheKey] = projectsData;

  // تحميل الصور مسبقاً في الخلفية (اختياري)
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      Object.values(projectsData).forEach(project => {
        const imagePaths = extractImagePaths(project);
        preloadImages(imagePaths);
      });
    }, 100);
  }

  return projectsData;
};

// دالة لمسح التخزين المؤقت إذا لزم الأمر
export const clearProjectsCache = (): void => {
  cachedData = {};
};

// دالة لتحميل مشروع واحد فقط (للاستخدام عند الحاجة)
export const getProjectById = (id: string, isRTL: boolean): ProjectType | null => {
  const projects = getProjectsData(isRTL);
  return projects[id] || null;
};

export default getProjectsData;
