import React, { useState, useRef } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import emailJs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailJs
      .send(
        "service_vsvuyn5",
        "template_018uvp5",
        {
          from_name: form.name,
          to_name: "Donny",
          from_email: form.email,
          to_email: "doniwahyu14@gmail.com",
          message: form.message,
        },
        "DhXT138w-C8udZXMI"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for contacting me. I will reply your message as soon as possible"
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Something when wrong.");
        }
      );
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse
  flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          ref={formRef}
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              placeholder="What's your name?"
              name="name"
              type="text"
              onChange={handleChange}
              value={form.name}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-xl outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              placeholder="What's your email?"
              name="email"
              type="email"
              onChange={handleChange}
              value={form.email}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-xl outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={5}
              placeholder="Message me.."
              name="message"
              onChange={handleChange}
              value={form.message}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-xl outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl 
             hover:bg-[#220738]"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
