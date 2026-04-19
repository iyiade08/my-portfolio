import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaCheckCircle,
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
  FaTimesCircle,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../common/Button";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "iyiadetobiloba08@gmail.com",
      href: "mailto:iyiadetobiloba08@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+2349138071413",
      href: "tel:+2349138071413",
    },
    {
      icon: <FaLocationDot />,
      label: "location",
      value: "Lagos",
      href: "#",
    },
  ];

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY_ID;

      console.log("ENV CHECK:", { serviceId, templateId, publicKey });

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJs config is missing. please check ur environment variables",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: name,
          email: email,
          message: message,
          time: new Date().toLocaleString(),
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! i'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Emailjs error;", err);
      setSubmitStatus({
        type: "error",
        message: err.text || "failed to send message try again later",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-98 h-96 bg-pryColor/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlightColor/5 rounded-full blur-3xl" />
      </div>
      <div className="genLayout px-6 relative z-10 ">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secForeGround text-sm font-medium tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in">
            let's build {""}
            <span className="font-serif italic font-normal text-white">
              something great
            </span>
          </h2>
          <p className="text-mutedForeGroundColor animate-fade-in animation-delay-100">
            Have a project in mind? i'd love to hear about it. Send me a message
            and let's discuss how we can work together{" "}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-pryColor/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-sm mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-surfaceColor border border-borderColor focus:border-pryColor focus:ring-1 focus:ring-pryColor outline-none transition-all rounded-md"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-sm mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-surfaceColor border border-borderColor focus:border-pryColor focus:ring-1 focus:ring-pryColor outline-none transition-all rounded-md"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-sm mb-2"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Enter Text"
                  className="w-full px-4 py-3 bg-surfaceColor border border-borderColor focus:border-pryColor focus:ring-1 focus:ring-pryColor outline-none transition-all resize-none rounded-md"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <Button
                size="sm"
                className="w-full"
                type="submit"
                disabled={loading}
              >
                {!loading ? (
                  <>
                    {" "}
                    Send
                    <FaPaperPlane />
                  </>
                ) : (
                  <>sending ....</>
                )}
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-red-500" : "bg-red-500/10 border border-red-500/20 text-red-500"}`}
                >
                  {submitStatus.type === "success" ? (
                    <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <FaTimesCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
