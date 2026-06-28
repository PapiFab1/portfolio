import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const categories = [
    {
        label: 'Languages',
        items: ['Java', 'Python', 'C', 'C#', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'PHP'],
    },
    {
        label: 'Frameworks',
        items: ['React', 'Node.js', 'Express', 'Flask', 'Pandas', 'NumPy', 'Bootstrap 5'],
    },
    {
        label: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Drizzle ORM'],
    },
    {
        label: 'Tools & APIs',
        items: ['Gemini API', 'VS Code Extension API', 'REST APIs', 'Git', 'GitHub', 'Postman', 'Jira'],
    },
    {
        label: 'Cloud & DevOps',
        items: ['AWS', 'Docker'],
    },
];
const certifications = [
    { name: 'AWS Cloud Security Foundations Certificate', year: '2026' },
];
export default function Skills() {
    return (_jsx("section", { id: "skills", className: "text-white py-16 sm:py-28 px-6", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs("div", { className: "flex items-center gap-4 mb-8 sm:mb-14", children: [_jsx("div", { className: "h-px w-8 bg-blue-500" }), _jsx("p", { className: "text-blue-400 text-xs tracking-[0.5em] uppercase font-medium", children: "Skills" })] }), _jsx("div", { className: "space-y-8", children: categories.map((cat) => (_jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [_jsx("p", { className: "text-gray-500 text-xs tracking-[0.4em] uppercase font-medium w-32 shrink-0 pt-1", children: cat.label }), _jsx("div", { className: "flex flex-wrap gap-2", children: cat.items.map((skill) => (_jsx("span", { style: { clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 0 100%)' }, className: "text-xs tracking-wider px-3 py-1\n                               bg-gray-900 hover:bg-blue-600\n                               text-gray-300 hover:text-white\n                               border-l-2 border-blue-500/40 hover:border-transparent\n                               transition-colors duration-150 cursor-default", children: skill }, skill))) })] }, cat.label))) }), _jsxs("div", { className: "mt-16", children: [_jsxs("div", { className: "flex items-center gap-4 mb-8", children: [_jsx("div", { className: "h-px w-8 bg-blue-500" }), _jsx("p", { className: "text-blue-400 text-xs tracking-[0.5em] uppercase font-medium", children: "Certifications" })] }), _jsx("div", { className: "space-y-3", children: certifications.map((cert) => (_jsxs("div", { style: { clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0 100%)' }, className: "flex items-center justify-between px-5 py-4\n                           bg-gray-900 border-l-[3px] border-blue-500/40 max-w-lg", children: [_jsx("span", { className: "text-sm font-medium", children: cert.name }), _jsx("span", { className: "text-xs text-gray-500 tracking-widest ml-6", children: cert.year })] }, cert.name))) })] })] }) }));
}
