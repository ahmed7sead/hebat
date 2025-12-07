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
                    title: isRTL ? ' نجفاتنا في المساجد الفاخرة ' : 'Our Chandeliers in Grand Mosques',
                    content: isRTL
                        ? 'باقة مختارة من أعمال مصنعنا في النجف الإسلامي والكلاسيكي التي زيّنت أجمل وأحدث المساجد الإسلامية الفاخرة.'
                        : 'A selection of our factory’s Islamic and classic chandeliers installed in the most beautiful modern mosques.'
                }
            ],

            pdfs: [
                {
                    label: isRTL ? 'تحميل كتيب المشروعات الكتالوج الاسلامي (PDF)' : 'Download Islamic Catalog Projects (PDF)',
                    url: '/projects-page/muslim/hebat-east-m.pdf'
                }
            ]
        },

        project2: {
            id: 'project2',
            title: isRTL ? 'منتجات مصنعنا في الإضاءة الفاخرة والنجف المودرن' : 'Our Factory’s Masterpieces in Luxury & Modern Chandeliers',
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
                    title: isRTL ? 'Our Chandeliers in Luxury Hotels' : 'نجفاتنا في الفنادق الفاخرة',
                    content: isRTL
                        ? 'باقة مختارة من أعمال مصنعنا في النجف الكريستالي والمودرن التي زيّنت أحدث الفنادق الفاخرة والمنتجعات السياحية وقاعات المؤتمرات الراقية.'
                        : ' A selection of our factory’s modern and crystal chandeliers installed in the newest luxury hotels, resorts, and conference halls.'
                },

            ],

            pdfs: [
                {
                    label: isRTL ? 'تحميل كتالوج النجف و بعض منتجات مصنعنا (PDF)' : 'Download our chandelier catalog and some of our factorys products (PDF)',
                    url: '/projects-page/muslim/hebat-east-m.pdf'
                },

            ]
        }
    };
}