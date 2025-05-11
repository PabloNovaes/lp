import type React from "react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChatCircleText, Envelope, UserCircle } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { useState } from "react"
import { SaveButton } from "./ui/save-button"

export function ContactForm() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        oggetto: "",
        messaggio: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))

            setFormData({
                nome: "",
                email: "",
                oggetto: "",
                messaggio: "",
            })
        } catch (err) {
            console.log(err)
        }
    }

    const formVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    }

    return (
        <motion.form
            initial="hidden"
            animate="visible"
            variants={formVariants}
            onSubmit={handleSubmit}
            className="space-y-4 backdrop-blur-sm"
        >
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2 relative">
                    <div className="flex items-center relative  [&_input]:indent-[26px]">
                        <Input
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            className="bg-black/20 backdrop-blur-3xl border border-ring/20 text-white rounded-2xl placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 h-13"
                            placeholder="Il tuo nome"
                        />
                        <UserCircle weight="fill" size={22} className="absolute left-3 text-[#6a6a6a]" />
                    </div>
                </div>

                <div className="space-y-2 relative">
                    <div className="flex items-center relative [&_input]:indent-[26px]">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-black/20 backdrop-blur-3xl border border-ring/20 text-white rounded-2xl placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 h-13"
                            placeholder="La tua email"
                        />
                        <Envelope weight="fill" size={22} className="absolute left-3 text-[#6a6a6a]" />
                    </div>
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2 relative">
                <div className="flex items-center relative  [&_input]:indent-[26px]">
                    <Input
                        id="oggetto"
                        name="oggetto"
                        value={formData.oggetto}
                        onChange={handleChange}
                        required
                        className="bg-black/20 backdrop-blur-3xl border border-ring/20 text-white rounded-2xl placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 h-13"
                        placeholder="Oggetto della richiesta"
                    />
                    <ChatCircleText weight="fill" size={22} className="absolute left-3 text-[#6a6a6a]" />
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2 relative">
                <Textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-black/20 backdrop-blur-3xl border border-ring/20 text-white rounded-xl placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 resize-none"
                    placeholder="Il tuo messaggio"
                />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
                <SaveButton content="Invia messaggio" className="border border-ring/20" />
            </motion.div>
        </motion.form>
    )
}
