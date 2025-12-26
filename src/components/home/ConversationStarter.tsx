"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Twitter, Linkedin, Instagram, Palette, Send, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

export function ConversationStarter() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            console.log("Form submitted:", formState);
            setIsSubmitting(false);
            // Reset form or show success message could go here
        }, 1000);
    };

    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-[#131313] overflow-hidden min-h-[600px] flex items-center justify-center">
            <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* Left Column: Contact Info */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
                        >
                            Let's Start a<br />
                            <span className="text-gray-400">Conversation.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-400 text-lg font-light leading-relaxed max-w-md"
                        >
                            Reach out directly regarding your next project or follow our journey on social media.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Direct Channels</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a href="mailto:info@aroorabiotech.com<" className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">Email Us</div>
                                        <div className="text-sm font-semibold text-white">info@aroorabiotech.com</div>
                                    </div>
                                </a>
                                <a href="tel:+91 98765 43210" className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">Call Us</div>
                                        <div className="text-sm font-semibold text-white">+91 98765 43210</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Social Presence</h3>
                            <div className="flex gap-4">
                                {[
                                    // { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                                    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                                    { icon: <Facebook className="w-5 h-5" />, label: "facebook" },
                                    { icon: <Instagram className="w-5 h-5" />, label: "Insta" },
                                ].map((social, idx) => (
                                    <a key={idx} href="#" className="flex flex-col items-center justify-center w-20 h-20 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
                                        <div className="text-white mb-2 group-hover:scale-110 transition-transform duration-300">{social.icon}</div>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide group-hover:text-white transition-colors">{social.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl relative"
                >
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white to-gray-50 rounded-2xl -z-10" />

                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Send your querys</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-semibold text-gray-600">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name....."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-600">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email....."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-gray-600">How can we help?</label>
                            <textarea
                                id="message"
                                placeholder="Tell us a little about your querys..."
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-[#131313] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors disabled:opacity-70 group"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                        </button>

                        <p className="text-xs text-gray-400 text-center mt-4">
                            By sending this form, you agree to our <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
