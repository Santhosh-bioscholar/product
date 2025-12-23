import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollTop = window.scrollY;
            const newProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            setProgress(newProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return progress;
};

export default useScrollProgress;
