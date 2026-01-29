import { Menu, Search } from "lucide-react";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
            <div className="flex items-center justify-between">
                {/* Left Navigation */}
                <nav className="flex items-center gap-8 opacity-0 animate-fade-in-left animation-delay-200" style={{ animationFillMode: 'forwards' }}>
                    <button className="p-2 hover:text-primary transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                    <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                        Home
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                        Info
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                        Contact
                    </a>
                </nav>

                {/* Right Brand */}
                <div className="flex items-center gap-3 opacity-0 animate-fade-in-right animation-delay-200" style={{ animationFillMode: 'forwards' }}>
                    <Search className="w-5 h-5" />
                    <span className="text-lg font-light">
                        Nature <span className="font-semibold">Love</span>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
