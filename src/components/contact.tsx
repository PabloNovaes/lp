import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { ChatCircleText, Envelope, UserCircle } from "@phosphor-icons/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendMail } from "@/service/mail-service"
import { formatUppercase } from "@/utils/formatters"
import { useState } from "react"
import { toast } from "sonner"
import { SaveButton, type SaveState } from "./ui/save-button"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Il nome deve contenere almeno 2 caratteri.",
    }),
    email: z.string().email({
        message: "Inserisci un indirizzo email valido.",
    }),
    subject: z.string().min(5, {
        message: "L'oggetto deve contenere almeno 5 caratteri.",
    }),
    content: z.string().min(10, {
        message: "Il messaggio deve contenere almeno 10 caratteri.",
    }),
})

export function ContactForm() {
    const [state, setState] = useState<SaveState>("initial")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            content: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setState("loading")
        try {
            await sendMail(values)

            form.reset()
            toast.success("Modulo inviato con successo!", {
                description: "Abbiamo ricevuto le tue informazioni e ti contatteremo al più presto. Grazie!"
            })
            setState("success")
        } catch (error) {
            console.error(error)
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
        <Form {...form}>
            <motion.div initial="hidden" animate="visible" variants={formVariants} className="space-y-4">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <UserCircle weight="fill" size={22} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6a6a6a] h-5 w-5" />
                                            <Input
                                                placeholder="Il tuo nome"
                                                className="bg-black/20 backdrop-blur-3xl border border-ring/20 text-white rounded-2xl placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 h-13 pl-10"
                                                {...field}
                                                value={formatUppercase(field.value)}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <Envelope weight="fill" size={22} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6a6a6a] h-5 w-5" />
                                            <Input
                                                placeholder="La tua email"
                                                className="bg-black/20 backdrop-blur-3xl border border-ring/20 text-white rounded-2xl placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 h-13 pl-10"
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <ChatCircleText weight="fill" size={22} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6a6a6a] h-5 w-5 opacity-100" />
                                            <Input
                                                placeholder="Oggetto della richiesta"
                                                className="bg-black/20 backdrop-blur-3xl border border-ring/20 text-white rounded-2xl placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 h-13 pl-10"
                                                {...field}
                                                value={formatUppercase(field.value)}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Il tuo messaggio"
                                            className="min-h-[150px] bg-black/20 backdrop-blur-3xl border border-ring/20 text-white rounded-xl placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="pt-2">
                        <SaveButton state={state} content="Invia messaggio" />
                    </motion.div>
                </form>
            </motion.div>
        </Form>
    )
}
