import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Metadata } from "next";
import { ConversationStarter } from "@/components/home/ConversationStarter";

export const metadata: Metadata = {
    title: "Contact Us | Aroora Biotech",
    description: "Get in touch with Aroora Biotech. We are ready to partner with you for a sustainable future.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#131313]">
            {/* <ContactHero /> */}
                 <ConversationStarter />
            <div className="max-w-7xl mx-auto w-full px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* <ContactForm /> */}
                {/* <ContactInfo /> */}
                {/* <div className="w-full h-64 bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] to-[#0A2540]" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/30 font-bold group-hover:text-white/50 transition-colors">Interactive Map Integration</p>
                </div>
            </div> */}
            </div>
        </div>
    );
}

