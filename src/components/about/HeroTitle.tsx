interface HeroTitleProps {
    title: string;
    subtitle: string;
    tagline: string;
}

const HeroTitle = ({ title, subtitle, tagline }: HeroTitleProps) => {
    return (
        <div className="absolute left-8 md:left-16 top-1/6 z-20 opacity-0 animate-fade-in-left animation-delay-400" style={{ animationFillMode: 'forwards' }}>
            <h1 className="text-6xl md:text-6xl font-black uppercase leading-none tracking-tight">
                <span className="block " style={{ fontFamily: "var(--font-jaini)" }}>{title}</span>
                <span className="block text-primary "style={{ fontFamily: "var(--font-jaini)" }}>{subtitle}</span>
            </h1>
            <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-px bg-foreground/50" />
                <span className="text-sm md:text-base font-light tracking-wider">{tagline}</span>
            </div>
        </div>
    );
};

export default HeroTitle;
