import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const VideoPopup = () => {
  const [isVisible, setIsVisible]     = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying]     = useState(false);
  const [isMuted, setIsMuted]         = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef        = useRef<HTMLVideoElement>(null);
  const controlsTimer   = useRef<NodeJS.Timeout | null>(null);
  const { isRTL }       = useLanguage();
  const navigate        = useNavigate();

  /* ── display logic (unchanged) ── */
  useEffect(() => {
    let heroId: NodeJS.Timeout;
    let featuredId: NodeJS.Timeout;
    let shown = false;

    heroId = setTimeout(() => {
      if (!shown) { setIsVisible(true); setTimeout(() => setIsAnimating(true), 555); shown = true; }
    }, 5555);

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.target.id === 'featured-collection' && !shown) {
          clearTimeout(heroId);
          featuredId = setTimeout(() => {
            if (!shown) { setIsVisible(true); setTimeout(() => setIsAnimating(true), 100); shown = true; }
          }, 3000);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });

    const sec = document.getElementById('featured-collection');
    if (sec) obs.observe(sec);
    return () => { obs.disconnect(); clearTimeout(heroId); clearTimeout(featuredId); };
  }, []);

  const handleClose = () => {
    videoRef.current?.pause();
    setIsPlaying(false); setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 400);
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) { videoRef.current.pause(); setIsPlaying(false); }
    else           { videoRef.current.play();  setIsPlaying(true);  }
    resetControls();
  };

  const handleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const resetControls = () => {
    setShowControls(true);
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => setShowControls(false), 2500);
  };

  const handleProject = () => {
    handleClose();
    setTimeout(() => { navigate('/projects/rixos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
  };

  if (!isVisible) return null;

  /*
   * ─── SIZING STRATEGY ────────────────────────────────────────
   *
   * Fixed heights so header & footer are ALWAYS visible:
   *   HEADER_H  = 52px
   *   FOOTER_H  = 58px
   *   TOP_BAR   =  3px
   *   CHROME    = 113px  (sum of above)
   *
   * Video height is capped explicitly:
   *   mobile  : min(55vh, 360px)   → leaves room for header/footer
   *   desktop : min(62vh, 460px)
   *
   * Card width:
   *   mobile  : 88vw   (almost full screen width — no wasted space)
   *   desktop : min(420px, 55vw)  — wide enough to look good
   *
   * Because the video box has an explicit HEIGHT, aspect-ratio 9/16
   * drives the WIDTH, but we clip it to the card width via overflow:hidden.
   * object-fit: cover fills edge-to-edge with zero black bars.
   * ────────────────────────────────────────────────────────────
   */

  return (
    <>
      {/* Backdrop */}
      <div onClick={handleClose} style={{
        position:'fixed', inset:0, zIndex:9998,
        background:'rgba(8,4,1,0.75)',
        backdropFilter:'blur(3px)', WebkitBackdropFilter:'blur(3px)',
        opacity: isAnimating ? 1 : 0,
        transition:'opacity 450ms ease',
        pointerEvents: isAnimating ? 'auto' : 'none',
      }} />

      {/* Card */}
      <div style={{
        position:'fixed', top:'50%', left:'50%',
        transform: isAnimating
          ? 'translate(-50%,-50%) scale(1)'
          : 'translate(-50%,-50%) scale(0.93)',
        opacity: isAnimating ? 1 : 0,
        transition:'transform 650ms cubic-bezier(0.34,1.56,0.64,1), opacity 400ms ease',
        zIndex:9999,
        pointerEvents: isAnimating ? 'auto' : 'none',

        /* responsive width */
width: 'auto',
maxWidth: '90vw',

        borderRadius:'16px',
        overflow:'hidden',
        display:'flex',
        flexDirection:'column',
        boxShadow:'0 20px 60px rgba(0,0,0,0.65), 0 0 0 1.5px rgba(201,168,76,0.3)',
      }}>

        {/* gold top bar */}
        <div style={{
          flexShrink:0, height:'3px',
          background:'linear-gradient(90deg,transparent,#C9A84C 40%,#F0D580 60%,#C9A84C 80%,transparent)',
        }} />

        {/* ── HEADER — always 52 px, never shrinks ── */}
        <div style={{
          flexShrink:0, height:'52px',
          display:'flex', alignItems:'center',
          justifyContent:'space-between',
          flexDirection: isRTL ? 'row-reverse' : 'row',
          padding:'0 14px',
          background:'#FAF6EE',
          borderBottom:'1px solid #E8D5A3',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:'9px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <div style={{
              width:'30px', height:'30px', borderRadius:'50%',
              background:'#F0E6C8', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
            }}>
              <Play style={{ width:'13px', height:'13px', color:'#C9A84C' }} />
            </div>
            <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
              <p style={{
                margin:0, fontSize:'13px', fontWeight:600, lineHeight:1.3, color:'#3D2B0A',
                fontFamily: isRTL ? 'Tajawal,sans-serif' : 'Playfair Display,serif',
              }}>
                {isRTL ? 'أعمالنا المميزة' : 'Our Featured Works'}
              </p>
              <p style={{
                margin:0, fontSize:'11px', lineHeight:1.2, color:'#A07830',
                fontFamily: isRTL ? 'Tajawal,sans-serif' : 'inherit',
              }}>
                {isRTL ? 'فندق ريكسوس' : 'Rixos Hotel'}
              </p>
            </div>
          </div>

          <button onClick={handleClose} aria-label="Close" style={{
            width:'32px', height:'32px', borderRadius:'50%',
            background:'#F5EED8', border:'none', cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
          }}>
            <X style={{ width:'15px', height:'15px', color:'#8B6914' }} />
          </button>
        </div>

        {/* ── VIDEO — explicit height, no flex magic needed ── */}
        <div
          onClick={handlePlayPause}
          onMouseMove={resetControls}
          onTouchStart={resetControls}
          style={{
            flexShrink:0,
            /*
             * Explicit height:
             *   on small screens  → 55vh  (leaves ~45 vh for chrome + scroll)
             *   on larger screens → capped at 460px
             * CSS clamp: clamp(min, preferred, max)
             * We can't use CSS clamp across units cleanly in inline style,
             * so we use a calc that works: min(55vh, 460px)
             */
width: 'min(360px, 88vw)',
height: 'min(640px, 65vh)',
position: 'relative',
background: '#0D0806',
cursor: 'pointer',
overflow: 'hidden',          }}
        >
          {/* =====================================================
              مسار الفيديو ↓  —  VIDEO PATH ↓
              ===================================================== */}
          <video
            ref={videoRef}
            src="videos/popupvid.mp4"
            playsInline
            onEnded={() => { setIsPlaying(false); setShowControls(true); }}
            style={{
              position:'absolute',
              /*
               * Center the 9:16 video inside the box.
               * top/left 50% + translate(-50%,-50%) centers it.
               * height:100% fills the explicit height.
               * width: auto → browser calculates correct 9:16 width.
               * This means on wide cards the video may be narrower than
               * the card — no black bars appear because background is dark.
               * To fill edge-to-edge: width:100%, height:auto instead,
               * but that may crop vertically. We choose to show full video.
               */
top:0, left:0,
width:'100%',
height:'100%',
objectFit:'cover',
display:'block',


                }}
          />

          {/* gradient overlay */}
          <div style={{
            position:'absolute', inset:0, pointerEvents:'none',
            background:'linear-gradient(to bottom,rgba(0,0,0,0.1) 0%,transparent 20%,transparent 60%,rgba(0,0,0,0.5) 100%)',
          }} />

          {/* center play/pause */}
          <div style={{
            position:'absolute', inset:0,
            display:'flex', alignItems:'center', justifyContent:'center',
            opacity: showControls ? 1 : 0, transition:'opacity 300ms',
          }}>
            <div style={{
              width:'56px', height:'56px', borderRadius:'50%',
              background:'rgba(201,168,76,0.88)',
              backdropFilter:'blur(6px)',
              display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 4px 18px rgba(160,120,48,0.5)',
            }}>
              {isPlaying
                ? <Pause style={{ width:'22px', height:'22px', color:'#fff' }} />
                : <Play  style={{ width:'22px', height:'22px', color:'#fff', marginLeft:'3px' }} />
              }
            </div>
          </div>

          {/* bottom controls */}
          <div style={{
            position:'absolute', bottom:0, left:0, right:0,
            padding:'28px 12px 12px',
            display:'flex', alignItems:'flex-end',
            justifyContent:'space-between',
            flexDirection: isRTL ? 'row-reverse' : 'row',
            opacity: showControls ? 1 : 0, transition:'opacity 300ms',
          }}>
            {!isPlaying ? (
              <span style={{
                color:'#fff', fontSize:'11px', fontWeight:500,
                padding:'4px 10px', borderRadius:'999px',
                background:'linear-gradient(135deg,#C9A84C,#A07830)',
                fontFamily: isRTL ? 'Tajawal,sans-serif' : 'inherit',
                pointerEvents:'none',
              }}>
                {isRTL ? '🎬 شاهد الآن' : '🎬 Watch Now'}
              </span>
            ) : <div />}

            <button onClick={handleMute} aria-label={isMuted ? 'Unmute' : 'Mute'} style={{
              width:'34px', height:'34px', borderRadius:'50%',
              background:'rgba(0,0,0,0.45)', backdropFilter:'blur(4px)',
              border:'none', cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              {isMuted
                ? <VolumeX style={{ width:'15px', height:'15px', color:'#fff' }} />
                : <Volume2 style={{ width:'15px', height:'15px', color:'#fff' }} />
              }
            </button>
          </div>

          {/* sparkle */}
          <div style={{
            position:'absolute', top:'10px', right:'10px',
            width:'7px', height:'7px', borderRadius:'50%',
            background:'#C9A84C', pointerEvents:'none',
          }} />
        </div>

        {/* ── FOOTER — always 58 px, never shrinks ── */}
        <div style={{
          flexShrink:0, height:'58px',
          display:'flex', alignItems:'center', gap:'10px',
          flexDirection: isRTL ? 'row-reverse' : 'row',
          padding:'0 14px',
          background:'#FAF6EE',
          borderTop:'1px solid #E8D5A3',
        }}>
          <div style={{ flex:1, minWidth:0, textAlign: isRTL ? 'right' : 'left' }}>
            <p style={{
              margin:'0 0 2px', fontSize:'12px', fontWeight:600,
              color:'#3D2B0A', lineHeight:1.3,
              fontFamily: isRTL ? 'Tajawal,sans-serif' : 'Playfair Display,serif',
              overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
            }}>
              {isRTL ? 'فندق ريكسوس — إضاءة فاخرة' : 'Rixos Hotel — Luxury Lighting'}
            </p>
            <p style={{
              margin:0, fontSize:'11px', color:'#7A5C2A', lineHeight:1.3,
              fontFamily: isRTL ? 'Tajawal,sans-serif' : 'inherit',
              overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
            }}>
              {isRTL ? 'نجف كريستالية وأعمال معادن دقيقة' : 'Crystal chandeliers and precision metalwork'}
            </p>
          </div>

          <button onClick={handleProject} style={{
            flexShrink:0,
            display:'flex', alignItems:'center', gap:'5px',
            flexDirection: isRTL ? 'row-reverse' : 'row',
            padding:'0 14px', height:'36px', borderRadius:'10px',
            background:'linear-gradient(135deg,#C9A84C,#A07830)',
            border:'none', cursor:'pointer', color:'#fff',
            fontSize:'12px', fontWeight:500, whiteSpace:'nowrap',
            fontFamily: isRTL ? 'Tajawal,sans-serif' : 'inherit',
            boxShadow:'0 2px 8px rgba(160,120,48,0.35)',
          }}>
            {isRTL ? 'شاهد المشروع' : 'See details'}
            <ExternalLink style={{ width:'12px', height:'12px' }} />
          </button>
        </div>

      </div>

      {/* floating gold dot */}
      <div style={{
        position:'fixed',
        top:'calc(50% - min(27.5vh, 230px) - 6px)',
        left:'calc(50% + min(210px, 44vw) - 6px)',
        width:'16px', height:'16px', borderRadius:'50%',
        background:'linear-gradient(135deg,#C9A84C,#A07830)',
        boxShadow:'0 2px 8px rgba(160,120,48,0.5)',
        display:'flex', alignItems:'center', justifyContent:'center',
        animation:'bounce 2s infinite',
        zIndex:9999, pointerEvents:'none',
        opacity: isAnimating ? 1 : 0, transition:'opacity 500ms',
      }}>
        <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'white' }} />
      </div>
    </>
  );
};

export default VideoPopup; 