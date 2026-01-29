interface QuoteCardProps {
    number: string;
    title: string;
    description: string;
}

const QuoteCard = ({ number, title, description }: QuoteCardProps) => {
    return (
        <div
            className="absolute right-16 md:right-32 top-1/3 z-20 opacity-0 animate-scale-in animation-delay-600"
            style={{ animationFillMode: 'forwards' }}
        >
            <div className="border-gradient-lime bg-background/30 backdrop-blur-sm p-8 max-w-sm">
                <div className="text-6xl md:text-7xl font-black text-primary mb-2">
                    {number}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default QuoteCard;
