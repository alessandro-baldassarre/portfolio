import { motion } from "framer-motion"
import { useRef, useState } from "react"
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import Earth from "./canvas/Earth";

const Contact = () => {

    const formRef = useRef();

    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        emailjs.send("service_2c4h48r", "template_zj1dib8",
            { from_name: form.name, to_name: "Alessandro", from_email: form.email, to_email: "alessandro.baldassarre.dev@gmail.com", message: form.message }, "UFpUHfYpEEuNr9LnW"
        ).then(() => {
            setIsLoading(false)
            alert("Thank you. I will get back to you as soon as possible")

            setForm({ name: "", email: "", message: "" })
        }, (error) => {
            setIsLoading(false)
            console.log(error)
            alert("Something went wrong, please try again.")
        })

    }

    return (
        <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-10 xl:flex-row xl:justify-center">
            <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-primary p-8 rounded-2xl border border-orange-500">
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4 ml-2">Your Name</span>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4 ml-2">Your Email</span>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4 ml-2">Your Message</span>
                        <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
                    </label>

                    <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mx-auto border border-secondary">{isLoading ? "Sending..." : "Send"}</button>
                </form>

            </motion.div>

            {/* <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"> */}
            {/*     <Earth /> */}
            {/* </motion.div> */}

        </div>
    )
}

export default SectionWrapper(Contact, "contact")
