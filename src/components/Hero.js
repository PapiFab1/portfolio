import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const menuItems = [
    { label: 'Bio', id: 'bio' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
];
export default function Hero({ onNavigate }) {
    const [hovered, setHovered] = useState(null);
    const activeId = hovered ?? 'bio';
    return (_jsxs("section", { className: "relative h-screen overflow-hidden bg-black", children: [_jsx("video", { autoPlay: true, loop: true, muted: true, playsInline: true, className: "absolute inset-0 w-full h-full object-cover", children: _jsx("source", { src: "/background.mp4", type: "video/mp4" }) }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-black/85" }), _jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsxs("div", { className: "flex flex-col sm:-translate-x-[8%]", children: [_jsx("p", { className: "text-white text-xs tracking-[0.6em] uppercase mb-3 sm:mb-5 font-medium", children: "\u2014 Portfolio" }), _jsxs("h1", { className: "text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-2", children: ["Jonathan", _jsx("br", {}), "Fabien"] }), _jsx("p", { className: "text-blue-300 text-xs tracking-[0.5em] uppercase font-medium", children: "Software Engineer \u00B7 UCF '26" }), _jsx("nav", { className: "flex flex-col mt-6 sm:mt-10", onMouseLeave: () => setHovered(null), children: menuItems.map((item) => {
                                const isActive = item.id === activeId;
                                return (_jsxs("button", { onClick: () => onNavigate(item.id), onMouseEnter: () => setHovered(item.id), className: isActive ? 'p3-nav-active' : 'p3-nav-inactive', style: {
                                        fontFamily: "'Anton', sans-serif",
                                        color: 'white',
                                        opacity: isActive ? 1 : 0.5,
                                        letterSpacing: '0.04em',
                                        textTransform: 'uppercase',
                                        position: 'relative',
                                        isolation: 'isolate',
                                        textAlign: 'left',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: '3px 0',
                                        overflow: 'visible',
                                        lineHeight: 1.1,
                                        transition: 'font-size 0.2s ease, opacity 0.2s ease',
                                    }, children: [isActive && (_jsx("span", { "aria-hidden": "true", className: "p3-para-back", style: {
                                                position: 'absolute',
                                                background: '#e8001c',
                                                top: '50%',
                                                left: '-16px',
                                                transform: 'rotate(-12deg)',
                                            } })), isActive && (_jsx("span", { "aria-hidden": "true", className: "p3-para-front", style: {
                                                position: 'absolute',
                                                background: '#ff2d78',
                                                top: '50%',
                                                left: '-38px',
                                                transform: 'rotate(-12deg)',
                                            } })), _jsx("span", { style: { position: 'relative' }, children: item.label })] }, item.id));
                            }) }), _jsxs("div", { className: "flex items-center gap-4 mt-6 sm:mt-10", children: [_jsx("a", { href: "https://github.com/PapiFab1", target: "_blank", rel: "noreferrer", className: "text-gray-500 hover:text-blue-400 text-xs tracking-widest uppercase transition-colors", children: "GitHub" }), _jsx("span", { className: "text-gray-700", children: "\u00B7" }), _jsx("a", { href: "https://www.linkedin.com/in/jonathan-fabien-3b43bb1b3/", target: "_blank", rel: "noreferrer", className: "text-gray-500 hover:text-blue-400 text-xs tracking-widest uppercase transition-colors", children: "LinkedIn" }), _jsx("span", { className: "text-gray-700", children: "\u00B7" }), _jsx("a", { href: "mailto:jonathanfabien675@gmail.com", className: "text-gray-500 hover:text-blue-400 text-xs tracking-widest uppercase transition-colors", children: "Email" })] })] }) })] }));
}
