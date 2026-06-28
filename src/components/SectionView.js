import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Bio from './Bio';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
const sectionContent = {
    bio: _jsx(Bio, {}),
    experience: _jsx(Experience, {}),
    projects: _jsx(Projects, {}),
    skills: _jsx(Skills, {}),
    contact: _jsx(Contact, {}),
};
export default function SectionView({ section, onBack }) {
    return (_jsxs("div", { className: "relative h-screen", children: [_jsx("video", { autoPlay: true, loop: true, muted: true, playsInline: true, className: "absolute inset-0 w-full h-full object-cover", children: _jsx("source", { src: "/background2.mp4", type: "video/mp4" }) }), _jsx("div", { className: "absolute inset-0 bg-black/70" }), _jsxs("div", { className: "relative h-full overflow-y-auto", children: [_jsx("div", { className: "sticky top-0 z-10 px-4 sm:px-8 py-4 flex items-center gap-4 border-b border-white/5", style: { background: 'rgba(8, 15, 26, 0.88)', backdropFilter: 'blur(10px)' }, children: _jsxs("button", { onClick: onBack, className: "group flex items-center gap-3 text-white hover:text-blue-400 transition-colors duration-150", children: [_jsx("span", { className: "text-blue-500 group-hover:text-white text-sm transition-colors duration-150", children: "\u2190" }), _jsx("span", { style: {
                                        fontFamily: "'Anton', sans-serif",
                                        fontSize: '1.05rem',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                    }, children: "Jonathan Fabien" })] }) }), sectionContent[section]] })] }));
}
