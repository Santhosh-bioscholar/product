import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Aroora Biotech",
    description: "Get in touch with Aroora Biotech. We are ready to partner with you for a sustainable future.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#131313]">
            <ContactHero />
            <div className="max-w-7xl mx-auto w-full px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <ContactForm />
                <ContactInfo />
            </div>
        </div>
    );
}

