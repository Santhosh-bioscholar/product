import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const SocialSidebar = () => {
    const socials = [
        { icon: Twitter, href: "#" },
        { icon: Facebook, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Youtube, href: "#" },
    ];

    return (
        <div
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-6 opacity-0 animate-fade-in-right animation-delay-800"
            style={{ animationFillMode: 'forwards' }}
        >
            <div className="flex flex-col gap-5">
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
            </div>
            <div className="w-px h-12 bg-foreground/30" />
            <span
                className="text-xs tracking-widest uppercase"
                style={{ writingMode: 'vertical-rl' }}
            >
                follow us
            </span>
        </div>
    );
};

export default SocialSidebar;
