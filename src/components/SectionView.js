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
    return (_jsxs("div", { className: "h-screen overflow-y-auto", style: { background: '#080f1a' }, children: [_jsx("div", { className: "sticky top-0 z-10 px-4 sm:px-8 py-4 flex items-center gap-4 border-b border-white/5", style: { background: 'rgba(8, 15, 26, 0.92)', backdropFilter: 'blur(8px)' }, children: _jsxs("button", { onClick: onBack, className: "group flex items-center gap-3 text-white hover:text-blue-400 transition-colors duration-150", children: [_jsx("span", { className: "text-blue-500 group-hover:text-white text-sm transition-colors duration-150", children: "\u2190" }), _jsx("span", { style: {
                                fontFamily: "'Anton', sans-serif",
                                fontSize: '1.05rem',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                            }, children: "Jonathan Fabien" })] }) }), sectionContent[section]] }));
}
