"use client";

import { FadeIn } from "../animations/FadeIn";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export function ContactInfo() {
    return (
        <FadeIn direction="left" className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed max-w-sm">
                    Our global headquarters is located in the heart of the biotech innovation district.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-1">Headquarters</h3>
                        <p className="text-gray-400">123 Biotech Aveneue<br />Science Park, Chennai<br />India - 600113</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-1">Email Us</h3>
                        <p className="text-gray-400">info@aroorabiotech.com</p>
                        <p className="text-gray-400">support@aroorabiotech.com</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-1">Call Us</h3>
                        <p className="text-gray-400">+91 98765 43210</p>
                        <p className="text-gray-400">Mon-Fri, 9am - 6pm</p>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] to-[#0A2540]" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/30 font-bold group-hover:text-white/50 transition-colors">Interactive Map Integration</p>
                </div>
            </div>
        </FadeIn>
    );
}

