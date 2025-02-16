"use client";

import Card from "./Card";
import Image from "next/image";
import profilePic from "@/assets/profile-img.png"; // Replace with your profile image path

export default function ProfileCard() {
return (
    <div className="p-8 flex justify-center items-center mt-16 md:mt-16">
        <Card className="relative w-[250px] h-[405px] bg-emerald-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-800">
            <div className="relative z-10 p-4 flex flex-col items-center justify-center text-center text-emerald-500 h-full mt-8">
                <Image
                    src={profilePic}
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-md border-2 border-green-800 mb-2"
                />
            </div>
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 405">
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
                        <stop offset="0%" stopColor="rgba(34, 197, 94, 0.1)">
                            <animate attributeName="offset" values="0;1" dur="3s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="rgba(34, 197, 94, 0.4)">
                            <animate attributeName="offset" values="0;1" dur="3s" repeatCount="indefinite" />
                        </stop>
                    </linearGradient>
                </defs>          

                {/* Background Grid Pattern */}
                <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(34, 197, 94, 0.1)" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Inner Border */}
                <rect
                    x="10"
                    y="10"
                    width="230"
                    height="385"
                    rx="8"
                    ry="8"
                    fill="none"
                    stroke="rgba(34, 197, 94, 0.4)"
                    strokeWidth="1"
                />

                {/* Strap Hole - Rounded Rectangle */}
                <rect x="110" y="11" width="36" height="8" rx="7.5" ry="7.5" fill="rgba(0, 0, 0, 0.4)" />
                <rect x="112" y="13" width="30" height="4" rx="5.5" ry="5.5" fill="rgba(0, 0, 0, 0.1)" />

                {/* CPU-Inspired Chip Design */}
                <g transform="translate(30, 30)">
                    <rect width="30" height="40" rx="5" ry="5" style={{ fill: 'rgba(16, 185, 129, 0.2)', stroke: 'rgba(16, 185, 129, 0.6)', strokeWidth: 1 }} />
                    <circle cx="10" cy="10" r="2" style={{ fill: 'rgba(16, 185, 129, 0.3)' }} />
                    <circle cx="10" cy="30" r="2" style={{ fill: 'rgba(250, 204, 21, 0.3)' }} />
                    <line x1="10" y1="12" x2="10" y2="28" style={{ stroke: 'rgba(107, 114, 128, 0.3)', strokeWidth: 1 }} />
                    <line x1="5" y1="20" x2="15" y2="20" style={{ stroke: 'rgba(234, 179, 8, 0.2)', strokeWidth: 1 }} />
                </g>

                {/* Animated Circuit Traces */}
                <g className="slow-pulse">
                    <path
                        d="M80 70 L110 70 L140 100 L190 100 L220 130 
                             M80 110 L120 110 L150 140 L200 140 L230 170
                             M80 150 L130 150 L160 180 L210 180 L240 210 
                             M80 190 L140 190 L170 220 L220 220 L250 250"
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        fill="none"
                    >
                        <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="10s" repeatCount="indefinite" begin="0s" />
                        <animate attributeName="opacity" values="0;1;1;0" dur="10s" repeatCount="indefinite" begin="0s" />
                    </path>
                    <path
                        d="M110 40 L160 90 M130 40 L180 90 M150 40 L200 90
                             M90 240 L130 280 L180 280 L210 310
                             M100 270 L140 310 L190 310 L220 340"
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        fill="none"
                    >
                        <animate attributeName="stroke-dasharray" values="0,150;150,0" dur="12s" repeatCount="indefinite" begin="2s" />
                        <animate attributeName="opacity" values="0;1;1;0" dur="12s" repeatCount="indefinite" begin="2s" />
                    </path>
                </g>

                {/* Complex Component Patterns */}
                <g stroke="rgba(34, 197, 94, 0.4)" fill="none">
                    <rect x="20" y="200" width="40" height="40" strokeWidth="1" />
                    <path d="M25 250 h30 M25 260 h30 M25 270 h30" strokeWidth="0.5" />
                    <rect x="20" y="290" width="15" height="10" strokeWidth="1" />
                    <rect x="20" y="310" width="15" height="10" strokeWidth="1" />
                    <rect x="20" y="330" width="15" height="10" strokeWidth="1" />
                </g>

                {/* Bottom Right Connector Pattern */}
                <g stroke="rgba(255, 215, 0, 0.5)" strokeWidth="3">
                    <path d="M180 330 L200 330 M180 340 L200 340 M180 350 L200 350 M180 360 L200 360" />
                    <path d="M210 330 L230 330 M210 340 L230 340 M210 350 L230 350 M210 360 L230 360" />
                </g>

                {/* Additional Detail Patterns */}
                <g stroke="rgba(34, 197, 94, 0.3)" fill="none">
                    <path d="M30 80 L50 80 L50 100 M30 120 L50 120 L50 140" strokeWidth="0.75" />
                    <path d="M225 100 C 230 100, 235 100, 235 105 L235 120" strokeWidth="0.75" />
                    <path d="M205 260 C 210 260, 215 260, 215 265 L215 280" strokeWidth="0.75" />
                </g>

                {/* Connection Points */}
                <g fill="rgba(34, 197, 94, 0.6)">
                    {[
                        [80, 70],
                        [190, 100],
                        [220, 130],
                        [240, 210],
                        [250, 250],
                        [130, 280],
                        [180, 280],
                        [140, 310],
                        [190, 310],
                        [110, 320],
                        [135, 320],
                        [160, 320],
                    ].map(([cx, cy]) => (
                        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" />
                    ))}
                </g>

                {/* Glowing Points */}
                <g filter="url(#glow)" fill="rgba(134, 239, 172, 0.7)" className="animate-pulse">
                    {[
                        [135, 95],
                        [165, 215],
                        [195, 135],
                        [225, 165],
                        [145, 265],
                        [205, 305],
                        [175, 335],
                        [215, 355],
                    ].map(([cx, cy]) => (
                        <circle key={`glow-${cx}-${cy}`} cx={cx} cy={cy} r="2" />
                    ))}
                </g>

                {/* Small Detail Points */}
                <g filter="url(#softGlow)" fill="rgba(134, 239, 172, 0.4)">
                    {[
                        [35, 80],
                        [50, 120],
                        [65, 160],
                        [80, 200],
                        [225, 120],
                        [205, 280],
                        [185, 320],
                        [165, 360],
                    ].map(([cx, cy]) => (
                        <circle key={`detail-${cx}-${cy}`} cx={cx} cy={cy} r="1" />
                    ))}
                </g>

                {/* Circles of Different Shapes on Bottom Left */}
                <g fill="rgba(34, 197, 94, 0.3)">
                    <circle cx="30" cy="355" r="5" />
                    <circle cx="50" cy="355" r="8" />
                </g>
                
                {/* Hollow Circles on Top Right Corner */}
                <g stroke="rgba(34, 197, 94, 0.4)" fill="none">
                    <circle cx="220" cy="20" r="5" strokeWidth="1" />
                    <circle cx="190" cy="40" r="8" strokeWidth="1" />
                    <circle cx="220" cy="60" r="12" strokeWidth="1" />
                </g>

                {/* Lines/Strokes in Middle Left */}
                <g stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1">
                    <line x1="10" y1="130" x2="10" y2="180">
                        <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="10s" repeatCount="indefinite" begin="0s" />
                        <animate attributeName="opacity" values="0;1;1;0" dur="10s" repeatCount="indefinite" begin="0s" />
                    </line>
                    <line x1="15" y1="130" x2="15" y2="180">
                        <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="10s" repeatCount="indefinite" begin="2s" />
                        <animate attributeName="opacity" values="0;1;1;0" dur="10s" repeatCount="indefinite" begin="2s" />
                    </line>
                    <line x1="20" y1="130" x2="20" y2="180">
                        <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="10s" repeatCount="indefinite" begin="4s" />
                        <animate attributeName="opacity" values="0;1;1;0" dur="10s" repeatCount="indefinite" begin="4s" />
                    </line>
                    <line x1="25" y1="130" x2="25" y2="180">
                        <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="10s" repeatCount="indefinite" begin="6s" />
                        <animate attributeName="opacity" values="0;1;1;0" dur="10s" repeatCount="indefinite" begin="6s" />
                    </line>
                    <line x1="30" y1="130" x2="30" y2="180">
                        <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="10s" repeatCount="indefinite" begin="8s" />
                        <animate attributeName="opacity" values="0;1;1;0" dur="10s" repeatCount="indefinite" begin="8s" />
                    </line>
                </g>

                {/* Divider Line */}
                <line x1="10" y1="367" x2="240" y2="367" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1" />
                {/* Text below divider */}
  <text
    x="20"
    y="385"
    fill="rgba(16, 185, 129, 1)"
    className="text-base font-semibold"
  >
    Suko Gurung
  </text>
            </svg>
                 
        </Card>
    </div>
);
}