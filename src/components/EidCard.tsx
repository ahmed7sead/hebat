import React from 'react';
import { motion } from "framer-motion";

const EidCard = () => {
    return (
        <div className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl overflow-hidden aspect-[3/4] animate-fade-in">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: 'url(/eid/c0e0d765-53fe-499a-90d4-60bc5bfd7a8f.png)'
            }} />

            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center group"></div>

            <div className="absolute top-4 left-4 w-20 h-24 group cursor-pointer">
                <img
                    src="/eid/bcf9e8ec-dea1-4ef8-a516-cfe7ef5caa46.png"
                    alt="Islamic Chandelier"
                    className="w-full h-full object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:drop-shadow-2xl group-hover:rotate-6"
                />
            </div>

            <div className="absolute top-20 left-40 w-32 h-32 group cursor-pointer z-10 translate-x-12 translate-y-20">
                <img
                    src="/eid/a.png"
                    alt="Islamic Chandelier"
                    className="w-full h-full object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-150 group-hover:drop-shadow-2xl"
                />
            </div>

            <div className="absolute top-4 right-4 w-20 h-24 group cursor-pointer">
                <img
                    src="/eid/bcf9e8ec-dea1-4ef8-a516-cfe7ef5caa46.png"
                    alt="Islamic Chandelier"
                    className="w-full h-full object-contain drop-shadow-lg transform scale-x-[-1] transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:drop-shadow-2xl group-hover:-rotate-6"
                />
            </div>

            {/* النصوص */}
            <div className="absolute top-[40%] left-8 right-8 z-0 text-center space-y-4">
                <div style={{ fontFamily: 'serif' }} className="text-amber-900 font-bold text-xl leading-loose px-0 py-[2px] drop-shadow-lg cursor-default">
                    بمناسبة حلول عيد الأضحى المبارك،<br />
                    نتقدّم إليكم بأطيب التهاني <br />
                    <span className="text-amber-800 font-extrabold text-2xl inline-block">و كل عام وأنتم بخير</span>
                </div>

                <div className="mt-2 pt-2">
                    <div className="text-amber-900 font-bold text-xl drop-shadow-lg cursor-default -translate-y-4">م. أشرف قنديل</div>
                </div>
            </div>

            <div className="absolute bottom-8 left-6 w-24 h-32 group cursor-pointer">
                <img
                    src="/eid/4c4366df-6b9a-442a-8a80-be68131a90e4.png"
                    alt="Islamic Lantern"
                    className="w-full h-full object-contain drop-shadow-lg transition-all duration-500 group-hover:scale-115 group-hover:brightness-110 group-hover:drop-shadow-2xl group-hover:-rotate-3 group-hover:translate-y-[-4px]"
                />
            </div>

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-amber-300/30 to-transparent animate-gentle-glow hover:from-amber-300/50 transition-all duration-300"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 rotate-12 w-1 h-24 bg-gradient-to-b from-yellow-200/25 to-transparent animate-gentle-glow hover:from-yellow-200/40 transition-all duration-300" style={{
                animationDelay: '1s'
            }}></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -rotate-12 w-1 h-24 bg-gradient-to-b from-yellow-200/25 to-transparent animate-gentle-glow hover:from-yellow-200/40 transition-all duration-300" style={{
                animationDelay: '2s'
            }}></div>

            <div className="absolute top-20 right-12 w-4 h-4 bg-amber-200/40 rounded-full blur-sm animate-gentle-glow hover:bg-amber-200/60 hover:scale-125 transition-all duration-300 cursor-pointer"></div>
            <div className="absolute top-40 left-12 w-3 h-3 bg-yellow-100/50 rounded-full blur-sm animate-gentle-glow hover:bg-yellow-100/70 hover:scale-125 transition-all duration-300 cursor-pointer" style={{
                animationDelay: '1.5s'
            }}></div>
            <div className="absolute bottom-32 right-16 w-5 h-5 bg-amber-100/45 rounded-full blur-sm animate-gentle-glow hover:bg-amber-100/65 hover:scale-125 transition-all duration-300 cursor-pointer" style={{
                animationDelay: '0.5s'
            }}></div>

            <div className="absolute top-16 left-20 w-2 h-2 bg-yellow-300/50 rounded-full blur-[1px] animate-gentle-glow hover:bg-yellow-300/70 hover:scale-150 transition-all duration-300 cursor-pointer" style={{
                animationDelay: '2.5s'
            }}></div>
            <div className="absolute bottom-20 left-32 w-2 h-2 bg-amber-300/45 rounded-full blur-[1px] animate-gentle-glow hover:bg-amber-300/65 hover:scale-150 transition-all duration-300 cursor-pointer" style={{
                animationDelay: '3s'
            }}></div>
        </div>
    );
};

export default EidCard;
