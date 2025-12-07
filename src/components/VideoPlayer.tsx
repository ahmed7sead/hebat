import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
    Play,
    Pause,
    Maximize2,
    Minimize2,
    Volume2,
    VolumeX,
    X,
    SkipBack,
    SkipForward
} from 'lucide-react';

interface VideoPlayerProps {
    src: string; // Video URL - required
    className?: string;
    poster?: string | null;
    autoPlay?: boolean; // Autoplay video
    controls?: boolean; // Show video controls
    muted?: boolean; // Start video muted
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src, // Video URL - required
    className = "",
    poster = null,
    autoPlay = false, // Autoplay video
    controls = true, // Show video controls
    muted = false // Start video muted
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const progressRef = useRef<HTMLDivElement | null>(null);
    const volumeRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [isVolumeDragging, setIsVolumeDragging] = useState<boolean>(false);

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [volume, setVolume] = useState<number>(muted ? 0 : 1);
    const [isMuted, setIsMuted] = useState<boolean>(muted);
    const [showControls, setShowControls] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isBuffering, setIsBuffering] = useState<boolean>(false);

    // Check if video URL exists
    if (!src) {
        return (
            <div className={`${className} aspect-video bg-gray-800 rounded-xl flex items-center justify-center`}>
                <div className="text-center text-white">
                    <div className="text-6xl mb-4">📹</div>
                    <p className="text-xl">No video source provided</p>
                    <p className="text-sm opacity-70 mt-2">Please pass the src prop to the component</p>
                </div>
            </div>
        );
    }

    // Detect if device is mobile
    useEffect(() => {
        const checkMobile = (): void => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Autoplay video if enabled
    useEffect(() => {
        if (autoPlay && videoRef.current) {
            videoRef.current.play().catch(() => {
                // Handle autoplay restriction by browsers
                console.log('Autoplay was prevented');
            });
        }
    }, [autoPlay, src]);

    // Handle play/pause
    const togglePlayPause = useCallback((): void => {
        const video = videoRef.current;
        if (video) {
            if (isPlaying) {
                video.pause();
                setIsPlaying(false);
            } else {
                video.play();
                setIsPlaying(true);
            }
        }
    }, [isPlaying]);

    // Handle time update
    const handleTimeUpdate = useCallback((): void => {
        const video = videoRef.current;
        if (video && !isDragging) {
            setCurrentTime(video.currentTime);
            setDuration(video.duration || 0);
        }
    }, [isDragging]);

    // Progress bar dragging functionality
    const updateProgress = useCallback((clientX: number, progressElement: HTMLElement): void => {
        const video = videoRef.current;
        const rect = progressElement.getBoundingClientRect();
        const clickX = clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, clickX / rect.width));

        if (video && duration) {
            const newTime = percentage * duration;
            video.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }, [duration]);

    // Handle progress bar mouse events
    const handleProgressMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDragging(true);
        updateProgress(e.clientX, e.currentTarget);
    }, [updateProgress]);

    const handleProgressMouseMove = useCallback((e: MouseEvent): void => {
        if (isDragging && progressRef.current) {
            updateProgress(e.clientX, progressRef.current);
        }
    }, [isDragging, updateProgress]);

    const handleProgressMouseUp = useCallback((): void => {
        setIsDragging(false);
    }, []);

    // Volume bar dragging functionality
    const updateVolume = useCallback((clientX: number, volumeElement: HTMLElement): void => {
        const video = videoRef.current;
        const rect = volumeElement.getBoundingClientRect();
        const clickX = clientX - rect.left;
        const newVolume = Math.max(0, Math.min(1, clickX / rect.width));

        if (video) {
            video.volume = newVolume;
            setVolume(newVolume);
            setIsMuted(newVolume === 0);
        }
    }, []);

    // Handle volume bar mouse events
    const handleVolumeMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsVolumeDragging(true);
        updateVolume(e.clientX, e.currentTarget);
    }, [updateVolume]);

    const handleVolumeMouseMove = useCallback((e: MouseEvent): void => {
        if (isVolumeDragging && volumeRef.current) {
            updateVolume(e.clientX, volumeRef.current);
        }
    }, [isVolumeDragging, updateVolume]);

    const handleVolumeMouseUp = useCallback((): void => {
        setIsVolumeDragging(false);
    }, []);

    // Global mouse events for dragging
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent): void => {
            handleProgressMouseMove(e);
            handleVolumeMouseMove(e);
        };

        const handleMouseUp = (): void => {
            handleProgressMouseUp();
            handleVolumeMouseUp();
        };

        if (isDragging || isVolumeDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, isVolumeDragging, handleProgressMouseMove, handleVolumeMouseMove]);

    // Toggle mute
    const toggleMute = useCallback((): void => {
        const video = videoRef.current;
        if (video) {
            if (isMuted) {
                video.volume = volume;
                setIsMuted(false);
            } else {
                video.volume = 0;
                setIsMuted(true);
            }
        }
    }, [isMuted, volume]);

    // Skip forward/backward
    const skipTime = useCallback((seconds: number): void => {
        const video = videoRef.current;
        if (video) {
            video.currentTime = Math.max(0, Math.min(duration, video.currentTime + seconds));
        }
    }, [duration]);

    // Toggle fullscreen - استخدام Fullscreen API الحقيقي
    const toggleFullscreen = useCallback((): void => {
        if (!containerRef.current) return;

        if (isFullscreen) {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if ((document as any).webkitExitFullscreen) {
                (document as any).webkitExitFullscreen();
            } else if ((document as any).mozCancelFullscreen) {
                (document as any).mozCancelFullscreen();
            } else if ((document as any).msExitFullscreen) {
                (document as any).msExitFullscreen();
            }
        } else {
            // Enter fullscreen
            const element = containerRef.current;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if ((element as any).webkitRequestFullscreen) {
                (element as any).webkitRequestFullscreen();
            } else if ((element as any).mozRequestFullscreen) {
                (element as any).mozRequestFullscreen();
            } else if ((element as any).msRequestFullscreen) {
                (element as any).msRequestFullscreen();
            }
        }
    }, [isFullscreen]);

    // Listen for fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = (): void => {
            const fullscreenElement = document.fullscreenElement ||
                (document as any).webkitFullscreenElement ||
                (document as any).mozFullscreenElement ||
                (document as any).msFullscreenElement;

            const isCurrentlyFullscreen = fullscreenElement === containerRef.current;
            setIsFullscreen(isCurrentlyFullscreen);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
        };
    }, []);

    // Handle video events
    const handleVideoLoad = useCallback((): void => {
        setIsLoading(false);
    }, []);

    const handleVideoEnded = useCallback((): void => {
        setIsPlaying(false);
    }, []);

    const handleWaiting = useCallback((): void => {
        setIsBuffering(true);
    }, []);

    const handleCanPlay = useCallback((): void => {
        setIsBuffering(false);
    }, []);

    // Handle video click
    const handleVideoClick = useCallback((e: React.MouseEvent): void => {
        // Prevent toggle if clicking on controls
        if ((e.target as HTMLElement).closest('.video-controls')) {
            return;
        }

        if (containerRef.current) {
            containerRef.current.focus();
        }
        togglePlayPause();
    }, [togglePlayPause]);

    // Format time display
    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // Auto-hide controls
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (isPlaying && showControls && !isMobile && controls) {
            timeoutId = setTimeout(() => {
                setShowControls(false);
            }, 3000);
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isPlaying, showControls, isMobile, controls]);

    // Show controls on interaction
    const handleMouseMove = useCallback((): void => {
        if (controls) {
            setShowControls(true);
        }
    }, [controls]);

    const handleTouch = useCallback((): void => {
        if (controls) {
            setShowControls(true);
        }
    }, [controls]);

    // Fixed keyboard shortcuts - Always work when video is focused
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent): void => {
            // Only work when video container is focused or in fullscreen
            if (document.activeElement === containerRef.current || isFullscreen) {
                switch (e.key) {
                    case ' ':
                        e.preventDefault();
                        togglePlayPause();
                        break;
                    case 'Escape':
                        if (isFullscreen) {
                            toggleFullscreen();
                        }
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        skipTime(-10);
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        skipTime(10);
                        break;
                    case 'm':
                    case 'M':
                        e.preventDefault();
                        toggleMute();
                        break;
                    case 'f':
                    case 'F':
                        e.preventDefault();
                        toggleFullscreen();
                        break;
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isFullscreen, togglePlayPause, skipTime, toggleMute, toggleFullscreen]);

    // Mobile controls component
    const MobileControls: React.FC<{ isFullscreenControls?: boolean }> = ({ isFullscreenControls = false }) => (
        <div className="absolute inset-0 flex items-center justify-center video-controls">
            {/* Center Play Button */}
            {!isPlaying && (
                <button
                    onClick={togglePlayPause}
                    className="w-20 h-20 bg-gold/90 hover:bg-gold rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105"
                >
                    <Play size={32} className="text-white ml-1" fill="white" />
                </button>
            )}

            {/* Top Controls */}
            <div className={`absolute top-4 left-4 right-4 flex justify-between items-center ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-2">
                    {isPlaying && (
                        <button
                            onClick={togglePlayPause}
                            className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center"
                        >
                            <Pause size={20} className="text-white" fill="white" />
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleMute}
                        className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                        {isMuted || volume === 0 ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
                    </button>

                    <button
                        onClick={toggleFullscreen}
                        className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                        {isFullscreenControls ? <Minimize2 size={20} className="text-white" /> : <Maximize2 size={20} className="text-white" />}
                    </button>

                    {isFullscreenControls && (
                        <button
                            onClick={toggleFullscreen}
                            className="w-12 h-12 bg-red-600/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                        >
                            <X size={20} className="text-white" />
                        </button>
                    )}
                </div>
            </div>

            {/* Bottom Progress */}
            <div className={`absolute bottom-4 left-4 right-4 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                <div
                    className="w-full h-2 bg-white/30 rounded-full cursor-pointer"
                    onMouseDown={handleProgressMouseDown}
                >
                    <div
                        className="h-full bg-gold rounded-full relative"
                        style={{
                            width: `${duration ? (currentTime / duration) * 100 : 0}%`
                        }}
                    >
                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full shadow-lg"></div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-white text-sm font-mono bg-black/50 px-2 py-1 rounded">
                        {formatTime(currentTime)}
                    </span>
                    <span className="text-white text-sm font-mono bg-black/50 px-2 py-1 rounded">
                        {formatTime(duration)}
                    </span>
                </div>
            </div>
        </div>
    );

    const DesktopControls: React.FC<{ isFullscreenControls?: boolean }> = ({ isFullscreenControls = false }) => (
        <>
            {/* Fullscreen button in top left */}
            <div className="absolute top-4 left-4 z-50 flex items-center gap-2">
                <button
                    onClick={toggleFullscreen}
                    className="w-12 h-12 bg-white/25 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                    {isFullscreenControls ? <Minimize2 size={18} className="text-white" /> : <Maximize2 size={18} className="text-white" />}
                </button>
            </div>

            {/* Bottom control bar */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 video-controls ${showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                {/* Progress Bar */}
                <div
                    ref={progressRef}
                    className="w-full h-2 bg-white/20 rounded-full cursor-pointer mb-4 hover:h-3 group"
                    onMouseDown={handleProgressMouseDown}
                >
                    <div
                        className="h-full bg-gradient-to-r from-gold/25 to-gold rounded-full relative"
                        style={{
                            width: `${duration ? (currentTime / duration) * 100 : 0}%`
                        }}
                    >
                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full shadow-lg opacity-0 group-hover:opacity-100"></div>
                    </div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center gap-4">
                    {/* Play/Pause */}
                    <button
                        onClick={togglePlayPause}
                        className="w-12 h-12 bg-gold/20 hover:bg-gold/30 rounded-full backdrop-blur-sm flex items-center justify-center"
                    >
                        {isPlaying ? <Pause size={24} className="text-white" fill="white" /> : <Play size={24} className="text-white ml-1" fill="white" />}
                    </button>

                    {/* Skip Controls */}
                    <button
                        onClick={() => skipTime(-10)}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center"
                    >
                        <SkipBack size={18} className="text-white" fill="white" />
                    </button>

                    <button
                        onClick={() => skipTime(10)}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center"
                    >
                        <SkipForward size={18} className="text-white" fill="white" />
                    </button>

                    {/* Volume Controls */}
                    <button
                        onClick={toggleMute}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center"
                    >
                        {isMuted || volume === 0 ? <VolumeX size={18} className="text-white" /> : <Volume2 size={18} className="text-white" />}
                    </button>

                    <div
                        ref={volumeRef}
                        className="w-20 h-1 bg-white/20 rounded-full cursor-pointer hover:h-2 group"
                        onMouseDown={handleVolumeMouseDown}
                    >
                        <div
                            className="h-full bg-gradient-to-r from-gold-light to-gold rounded-full relative"
                            style={{
                                width: `${isMuted ? 0 : volume * 100}%`
                            }}
                        >
                            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold rounded-full opacity-0 group-hover:opacity-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className={className}>
            {/* Main Video Player */}
            <div
                ref={containerRef}
                className={`relative rounded-xl shadow-2xl group cursor-pointer overflow-hidden focus:outline-none aspect-video ring-4 ring-gold-light focus:ring-gold transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-50 bg-black rounded-none' : ''
                    }`}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouch}
                onClick={handleVideoClick}
                tabIndex={0}
                role="button"
                aria-label="Video player - Click to play or pause"
            >
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    className={`w-full h-full object-cover cursor-pointer ${isFullscreen ? 'object-contain' : ''}`}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedData={handleVideoLoad}
                    onEnded={handleVideoEnded}
                    onWaiting={handleWaiting}
                    onCanPlay={handleCanPlay}
                    onClick={handleVideoClick}
                    muted={isMuted}
                />

                {/* Loading/Buffering Indicator */}
                {(isLoading || isBuffering) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-white text-sm">جاري التحميل...</span>
                        </div>
                    </div>
                )}

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

                {/* Exit Fullscreen Button (only visible in fullscreen) */}
                {isFullscreen && (
                    <button
                        onClick={toggleFullscreen}
                        className="absolute top-4 right-4 w-12 h-12 bg-red-600/80 hover:bg-red-600 backdrop-blur-sm rounded-full flex items-center justify-center z-10"
                    >
                        <X size={20} className="text-white" />
                    </button>
                )}

                {/* Controls */}
                {controls && (
                    isMobile ? <MobileControls isFullscreenControls={isFullscreen} /> : <DesktopControls isFullscreenControls={isFullscreen} />
                )}
            </div>
        </div>
    );
};

export default VideoPlayer;