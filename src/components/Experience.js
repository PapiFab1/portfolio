import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const jobs = [
    {
        company: 'IntelliWake',
        role: 'Software Engineer',
        period: 'June 2026 – Present',
        description: 'Details to be added.',
    },
    {
        company: 'COMPETE Co.',
        role: 'Software Engineer',
        period: 'Aug 2025 – June 2026',
        note: 'Originally joined as a Senior Capstone project; hired part-time upon completion',
        description: 'Built full-stack features for live tournament and team event systems using React, Node.js, and MongoDB. Delivered bracket systems, countdown timers, and role-based participation logic. Improved event navigation efficiency by 30%.',
    },
    {
        company: 'UCF — Dr. Haiyan Hu',
        role: 'Undergraduate Research Assistant',
        period: 'Jan 2024 – Apr 2024',
        description: 'Built a Python/Pandas pipeline to preprocess GSEA output files for bioinformatics research. Reduced manual data-handling time by 61%.',
    },
];
export default function Experience() {
    return (_jsx("section", { id: "experience", className: "bg-gray-950 text-white py-28 px-6 border-t border-white/5", children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsxs("div", { className: "flex items-center gap-4 mb-14", children: [_jsx("div", { className: "h-px w-8 bg-blue-500" }), _jsx("p", { className: "text-blue-400 text-xs tracking-[0.5em] uppercase font-medium", children: "Experience" })] }), _jsx("div", { className: "space-y-12", children: jobs.map((job) => (_jsxs("div", { className: "group relative pl-6 border-l-2 border-gray-800 hover:border-blue-500 transition-colors duration-300", children: [_jsx("div", { className: "absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-700 group-hover:bg-blue-500 transition-colors duration-300" }), _jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-3 mb-1", children: [_jsx("h3", { className: "text-xl font-bold", children: job.role }), _jsx("span", { className: "text-xs text-gray-500 tracking-widest uppercase", children: job.period })] }), 'note' in job && (_jsx("p", { className: "text-xs text-gray-500 italic mb-1", children: job.note })), _jsx("p", { className: "text-blue-400 text-sm font-medium tracking-wide mb-3", children: job.company }), _jsx("p", { className: "text-gray-400 leading-relaxed", children: job.description })] }, job.company))) })] }) }));
}
