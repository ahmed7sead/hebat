// types/projects.ts

export interface DetailItem {
    title: string;
    content: string;
}

export interface GalleryItem {
    full: string;
    thumbnail: string;
}

// جديد: دعم ملفات PDF للمشاريع البسيطة
export interface PDFItem {
    title: string;
    file: string;
}

export interface ProjectType {
    title: string;
    subtitle: string;
    description: string;
    year: string;
    category: string;
    client: string;
    location: string;
    mainImage: string;
    gallery: GalleryItem[];
    details: DetailItem[];

    // اختياري عشان المشاريع القديمة تشتغل بدون مشاكل
    displayType?: "simple" | "normal";
    pdfs?: PDFItem[];
}
