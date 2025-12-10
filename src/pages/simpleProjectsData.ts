export interface GalleryItem {
    full: string;
    thumbnail: string;
}

export interface DetailItem {
    title: string;
    content: string;
}

export interface PDFItem {
    label: string;
    url: string;
}

export interface SimpleProject {
    id: string;
    title: string;
    mainImage: string;
    gallery: GalleryItem[];
    details: DetailItem[];
    pdfs?: PDFItem[];
}

export interface SimpleProjectsData {
    [key: string]: SimpleProject;
}

export default function getSimpleProjectsData(isRTL: boolean): SimpleProjectsData {
    return {
        project1: {
            id: 'project1',
            title: isRTL ? 'روائع إضاءة المساجد العصرية' : 'Masterpieces of Modern Mosque Lighting',
            mainImage: '/projects-page/muslim/4.webp',

            gallery: [
                {
                    full: '/projects-page/muslim/1.webp',
                    thumbnail: '/projects-page/muslim/thumbs/1.webp'
                },
                {
                    full: '/projects-page/muslim/2.webp',
                    thumbnail: '/projects-page/muslim/thumbs/2.webp'
                }, {
                    full: '/projects-page/muslim/3.webp',
                    thumbnail: '/projects-page/muslim/thumbs/3.webp'
                }, {
                    full: '/projects-page/muslim/4.webp',
                    thumbnail: '/projects-page/muslim/thumbs/4.webp'
                }, {
                    full: '/projects-page/muslim/5.JPEG',
                    thumbnail: '/projects-page/muslim/thumbs/5.JPEG'
                },
                {
                    full: '/projects-page/muslim/6.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/6.JPG'
                },
                {
                    full: '/projects-page/muslim/7.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/7.JPG'
                }, {
                    full: '/projects-page/muslim/8.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/8.JPG'
                }, {
                    full: '/projects-page/muslim/9.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/9.JPG'
                }, {
                    full: '/projects-page/muslim/10.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/10.JPG'
                }, {
                    full: '/projects-page/muslim/11.webp',
                    thumbnail: '/projects-page/muslim/thumbs/11.webp'
                }, {
                    full: '/projects-page/muslim/12.JPEG',
                    thumbnail: '/projects-page/muslim/thumbs/12.JPEG'
                },
                {
                    full: '/projects-page/muslim/13.jpg',
                    thumbnail: '/projects-page/muslim/thumbs/13.jpg'
                },
                {
                    full: '/projects-page/muslim/14.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/14.JPG'
                }, {
                    full: '/projects-page/muslim/15.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/15.JPG'
                }, {
                    full: '/projects-page/muslim/16.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/16.JPG'
                }, {
                    full: '/projects-page/muslim/17.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/17.JPG'
                }, {
                    full: '/projects-page/muslim/18.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/18.JPG'
                }, {
                    full: '/projects-page/muslim/19.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/19.JPG'
                }, {
                    full: '/projects-page/muslim/20.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/20.JPG'
                }, {
                    full: '/projects-page/muslim/21.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/21.JPG'
                }, {
                    full: '/projects-page/muslim/22.webp',
                    thumbnail: '/projects-page/muslim/thumbs/22.webp'
                },

                {
                    full: '/projects-page/muslim/23.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/23.JPG'
                },

                {
                    full: '/projects-page/muslim/24.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/24.JPG'
                }, {
                    full: '/projects-page/muslim/25.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/25.JPG'
                }, {
                    full: '/projects-page/muslim/26.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/26.JPG'
                }, {
                    full: '/projects-page/muslim/27.webp',
                    thumbnail: '/projects-page/muslim/thumbs/27.wepb'
                }, {
                    full: '/projects-page/muslim/28.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/28.JPG'
                },
                {
                    full: '/projects-page/muslim/29.webp',
                    thumbnail: '/projects-page/muslim/thumbs/29.webp'
                }, {
                    full: '/projects-page/muslim/30.webp',
                    thumbnail: '/projects-page/muslim/thumbs/30.webp'
                }, {
                    full: '/projects-page/muslim/31.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/31.JPG'
                }, {
                    full: '/projects-page/muslim/32.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/32.JPG'
                }, {
                    full: '/projects-page/muslim/33.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/33.JPG'
                }, {
                    full: '/projects-page/muslim/34.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/34.JPG'
                }, {
                    full: '/projects-page/muslim/35.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/35.JPG'
                }, {
                    full: '/projects-page/muslim/36.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/36.JPG'
                }, {
                    full: '/projects-page/muslim/37.webp',
                    thumbnail: '/projects-page/muslim/thumbs/37.webp'

                },
                {
                    full: '/projects-page/muslim/38.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/38.JPG'

                }, {
                    full: '/projects-page/muslim/39.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/39.JPG'

                },
                {
                    full: '/projects-page/muslim/40.webp',
                    thumbnail: '/projects-page/muslim/thumbs/40.webp'

                }, {
                    full: '/projects-page/muslim/44.JPEG',
                    thumbnail: '/projects-page/muslim/thumbs/44.JPEG'

                },
                {
                    full: '/projects-page/muslim/45.JPG',
                    thumbnail: '/projects-page/muslim/thumbs/45.JPG'

                },



            ],

            details: [
                {
                    title: isRTL ? 'Our Chandeliers in Grand Mosques' : 'نجفاتنا في المساجد الفاخرة',
                    content: isRTL ? 'A selection of our factory Islamic and classic chandeliers installed in the most beautiful modern mosques.'

                        : 'باقة مختارة من أعمال مصنعنا في النجف الإسلامي والكلاسيكي التي زيّنت أجمل وأحدث المساجد الفاخرة، لتضفي جواً من الروحانية والفخامة لكل مكان.'

                }
            ],



        },

        project2: {
            id: 'project2',
            title: isRTL ? 'منتجات مصنعنا في الإضاءة الفاخرة والنجف المودرن' : 'Our Factorys Masterpieces in Luxury & Modern Chandeliers',
            mainImage: '/projects-page/modern/2.webp',

            gallery: [
                {
                    full: '/projects-page/modern/1.jpg',
                    thumbnail: '/projects-page/modern/thumbs/1.jpg'
                },
                {
                    full: '/projects-page/modern/2.webp',
                    thumbnail: '/projects-page/modern/thumbs/2.webp'
                }, {
                    full: '/projects-page/modern/3.jpg',
                    thumbnail: '/projects-page/modern/thumbs/3.jpg'
                },
                {
                    full: '/projects-page/modern/4.jpg',
                    thumbnail: '/projects-page/modern/thumbs/4.jpg'
                }, {
                    full: '/projects-page/modern/5.webp',
                    thumbnail: '/projects-page/modern/thumbs/5.webp'
                }, {
                    full: '/projects-page/modern/6.jpg',
                    thumbnail: '/projects-page/modern/thumbs/6.jpg'
                }, {
                    full: '/projects-page/modern/7.jpg',
                    thumbnail: '/projects-page/modern/thumbs/7.jpg'
                }, {
                    full: '/projects-page/modern/8.jpg',
                    thumbnail: '/projects-page/modern/thumbs/8.jpg'
                }, {
                    full: '/projects-page/modern/9.jpg',
                    thumbnail: '/projects-page/modern/thumbs/9.jpg'
                }, {
                    full: '/projects-page/modern/10.jpg',
                    thumbnail: '/projects-page/modern/thumbs/10.jpg'
                },
                {
                    full: '/projects-page/modern/11.webp',
                    thumbnail: '/projects-page/modern/thumbs/11.webp'
                },
                {
                    full: '/projects-page/modern/11.jpg',
                    thumbnail: '/projects-page/modern/thumbs/11.jpg'
                },
                {
                    full: '/projects-page/modern/12.jpg',
                    thumbnail: '/projects-page/modern/thumbs/12.jpg'
                }, {
                    full: '/projects-page/modern/12.webp',
                    thumbnail: '/projects-page/modern/thumbs/12.webp'
                }, {
                    full: '/projects-page/modern/13.jpg',
                    thumbnail: '/projects-page/modern/thumbs/13.jpg'
                },
                {
                    full: '/projects-page/modern/13.webp',
                    thumbnail: '/projects-page/modern/thumbs/13.webp'
                }, {
                    full: '/projects-page/modern/14.jpg',
                    thumbnail: '/projects-page/modern/thumbs/14.jpg'
                }, {
                    full: '/projects-page/modern/15.webp',
                    thumbnail: '/projects-page/modern/thumbs/15.webp'
                }, {
                    full: '/projects-page/modern/16.webp',
                    thumbnail: '/projects-page/modern/thumbs/16.webp'
                }, {
                    full: '/projects-page/modern/17.webp',
                    thumbnail: '/projects-page/modern/thumbs/17.webp'
                }, {
                    full: '/projects-page/modern/18.webp',
                    thumbnail: '/projects-page/modern/thumbs/18.webp'
                }, {
                    full: '/projects-page/modern/19.webp',
                    thumbnail: '/projects-page/modern/thumbs/19.webp'
                }, {
                    full: '/projects-page/modern/20.webp',
                    thumbnail: '/projects-page/modern/thumbs/20.webp'
                }, {
                    full: '/projects-page/modern/21.webp',
                    thumbnail: '/projects-page/modern/thumbs/21.webp'
                }, {
                    full: '/projects-page/modern/22.webp',
                    thumbnail: '/projects-page/modern/thumbs/22.webp'
                }, {
                    full: '/projects-page/modern/23.webp',
                    thumbnail: '/projects-page/modern/thumbs/23.webp'
                }, {
                    full: '/projects-page/modern/24.webp',
                    thumbnail: '/projects-page/modern/thumbs/24.webp'
                }, {
                    full: '/projects-page/modern/25.webp',
                    thumbnail: '/projects-page/modern/thumbs/25.webp'
                }, {
                    full: '/projects-page/modern/26.webp',
                    thumbnail: '/projects-page/modern/thumbs/26.webp'
                },
                {
                    full: '/projects-page/modern/27.jpg',
                    thumbnail: '/projects-page/modern/thumbs/27.jpg'
                }, {
                    full: '/projects-page/modern/29.jpg',
                    thumbnail: '/projects-page/modern/thumbs/29.jpg'
                },
                {
                    full: '/projects-page/modern/30.webp',
                    thumbnail: '/projects-page/modern/thumbs/30.webp'
                },
            ],

            details: [
                {
                    title: isRTL ? 'نجفاتنا في الفنادق الفاخرة' : 'Our Chandeliers in Luxury Hotels',
                    content: isRTL ? 'باقة مختارة من أعمال مصنعنا في النجف الكريستالي والمودرن التي زيّنت أحدث الفنادق الفاخرة والمنتجعات السياحية وقاعات المؤتمرات الراقية، لتضفي لمسة فخامة لا مثيل لها.'

                        : 'A selection of our factory’s modern and crystal chandeliers installed in the newest luxury hotels, resorts, and conference halls.'
                },

            ],


        },

        project3: {
            id: 'project3',
            title: isRTL ? 'مشروع اضاءة متحف البحر الاحمر' : 'Red Sea Museum lighting project',
            mainImage: '/News/finish/3.webp',

            gallery: [
                {
                    full: '/News/finish/1.webp',
                    thumbnail: '/News/finish/thumbs/1.webp'
                },
                {
                    full: '/News/finish/2.webp',
                    thumbnail: '/News/finish/thumbs/2.webp'
                }, {
                    full: '/News/finish/3.webp',
                    thumbnail: '/News/finish/thumbs/3.webp'
                }, {
                    full: '/News/finish/4.webp',
                    thumbnail: '/News/finish/thumbs/4.webp'
                }, {
                    full: '/News/finish/5.webp',
                    thumbnail: '/News/finish/thumbs/5.webp'
                }, {
                    full: '/News/finish/6.webp',
                    thumbnail: '/News/finish/thumbs/6.webp'
                }, {
                    full: '/News/finish/7.webp',
                    thumbnail: '/News/finish/thumbs/7.webp'
                }, {
                    full: '/News/finish/8.webp',
                    thumbnail: '/News/finish/thumbs/8.webp'
                }, {
                    full: '/News/finish/9.webp',
                    thumbnail: '/News/finish/thumbs/9.webp'
                }, {
                    full: '/News/finish/10.webp',
                    thumbnail: '/News/finish/thumbs/10.webp'
                }, {
                    full: '/News/finish/1a.webp',
                    thumbnail: '/News/finish/thumbs/1a.webp'
                },
            ],
            details: [
                {
                    title: isRTL ? 'نجف كريستال ونحاس باستايل خاص على مساحة 220 متر مربع' : 'Crystal and copper chandelier with an area of 220 square meters',
                    content: isRTL ? 'تم الانتهاء من مشروع إضاءة متحف البحر الأحمر وفق تصاميم الشركة المنفذة، وتم تنفيذ المشروع في زمن قياسي وبأعلى معايير الجودة، ليضفي تجربة بصرية فريدة.'

                        : 'The Red Sea Museum lighting project was completed according to the designs of the engineering company implementing the project and the project was implemented in record time and with the highest quality.'
                }
            ],



        },

    };
}