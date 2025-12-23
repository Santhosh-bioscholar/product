"use client";

import { FadeIn } from "../animations/FadeIn";
import { Send } from "lucide-react";

export function ContactForm() {
    return (
        <FadeIn direction="right" className="bg-[#131313] p-8 rounded-3xl border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400 transition-colors" placeholder="john@example.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                    <select id="subject" className="w-full px-4 py-3 bg-[#131313] border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400 transition-colors">
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales & Partnership</option>
                        <option value="press">Press & Media</option>
                        <option value="careers">Careers</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                    <textarea id="message" rows={5} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400 transition-colors" placeholder="How can we help?" />
                </div>

                <button type="submit" className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/20 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> Send Message
                </button>
            </form>
        </FadeIn>
    );
}

