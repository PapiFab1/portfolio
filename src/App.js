import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import SectionView from './components/SectionView';
export default function App() {
    const [section, setSection] = useState(null);
    const [flash, setFlash] = useState(false);
    const triggerFlash = () => {
        setFlash(true);
        setTimeout(() => setFlash(false), 350);
    };
    const navigate = (id) => {
        triggerFlash();
        setSection(id);
    };
    const goHome = () => {
        triggerFlash();
        setSection(null);
    };
    return (_jsxs("div", { className: "relative h-screen overflow-hidden bg-black", children: [_jsx(AnimatePresence, { mode: "wait", initial: false, children: section === null ? (_jsx(motion.div, { className: "absolute inset-0", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, scale: 0.96 }, transition: { duration: 0.22, ease: 'easeInOut' }, children: _jsx(Hero, { onNavigate: navigate }) }, "hero")) : (_jsx(motion.div, { className: "absolute inset-0", initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' }, transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }, children: _jsx(SectionView, { section: section, onBack: goHome }) }, section)) }), _jsx(AnimatePresence, { children: flash && (_jsx(motion.div, { className: "absolute inset-0 pointer-events-none", style: { background: 'white', zIndex: 100 }, initial: { opacity: 0.85 }, animate: { opacity: 0 }, exit: { opacity: 0 }, transition: { duration: 0.35, ease: 'easeOut' } })) })] }));
}
