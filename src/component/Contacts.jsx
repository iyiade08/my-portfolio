import React from "react";
import { useForm } from "react-hook-form";
import {
  FaCheckCircle,
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
  FaTimesCircle,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import Button from "../common/Button";

const DEFAULT_CONTACT_EMAIL = "iyiadetobiloba08@gmail.com";

const getEnvValue = (value) => (typeof value === "string" ? value.trim() : "");

const isMissingEnvValue = (value) => {
  const normalized = getEnvValue(value).toLowerCase();

  return (
    !normalized ||
    normalized.includes("your_") ||
    normalized.includes("_here") ||
    normalized === "changeme"
  );
};

const Contacts = () => {
  const destinationEmail =
    getEnvValue(import.meta.env.VITE_CONTACT_EMAIL) || DEFAULT_CONTACT_EMAIL;

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: destinationEmail,
      href: `mailto:${destinationEmail}`,
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+2349138071413",
      href: "tel:+2349138071413",
    },
    {
      icon: <FaLocationDot />,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "https://www.google.com/maps/search/?api=1&query=Lagos%2C%20Nigeria",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [submitStatus, setSubmitStatus] = React.useState({
    type: null,
    message: "",
  });

  const onSubmit = async ({ name, email, message }) => {
    setSubmitStatus({ type: null, message: "" });

    const serviceId = getEnvValue(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    const templateId = getEnvValue(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    const publicKey =
      getEnvValue(import.meta.env.VITE_EMAILJS_PUBLIC_KEY) ||
      getEnvValue(import.meta.env.VITE_EMAILJS_PUBLICKEY_ID);

    if (
      isMissingEnvValue(serviceId) ||
      isMissingEnvValue(templateId) ||
      isMissingEnvValue(publicKey)
    ) {
      setSubmitStatus({
        type: "error",
        message:
          "Email is not configured yet. Add your EmailJS service ID, template ID, and public key.",
      });
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: trimmedName,
          from_email: trimmedEmail,
          reply_to: trimmedEmail,
          to_email: destinationEmail,
          to_name: "Iyiade Tobiloba",
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          time: new Date().toLocaleString(),
        },
        { publicKey },
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error?.text ||
          error?.message ||
          "Failed to send the message. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pryColor/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlightColor/5 rounded-full blur-3xl" />
      </div>

      <div className="genLayout px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="text-secForeGround text-sm font-medium tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great
            </span>
          </h2>
          <p className="text-mutedForeGroundColor animate-fade-in animation-delay-100">
            Have a project in mind? I'd love to hear about it. Send me a
            message and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
          <div className="glass p-6 sm:p-8 rounded-3xl border border-pryColor/30 animate-fade-in animation-delay-300">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
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
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-surfaceColor border border-borderColor focus:border-pryColor focus:ring-1 focus:ring-pryColor outline-none transition-all rounded-md"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", {
                    required: "Please enter your name.",
                    minLength: {
                      value: 2,
                      message: "Name should be at least 2 characters.",
                    },
                  })}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
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
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-surfaceColor border border-borderColor focus:border-pryColor focus:ring-1 focus:ring-pryColor outline-none transition-all rounded-md"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "Please enter your email.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-sm mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project"
                  className="w-full px-4 py-3 bg-surfaceColor border border-borderColor focus:border-pryColor focus:ring-1 focus:ring-pryColor outline-none transition-all resize-none rounded-md"
                  aria-invalid={errors.message ? "true" : "false"}
                  {...register("message", {
                    required: "Please enter your message.",
                    minLength: {
                      value: 10,
                      message: "Message should be at least 10 characters.",
                    },
                  })}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                size="sm"
                className="w-full"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send <FaPaperPlane />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-start gap-3 p-4 rounded-xl text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-white"
                      : "bg-red-500/10 border border-red-500/20 text-red-300"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {submitStatus.type === "success" ? (
                    <FaCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <FaTimesCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-4 animate-fade-in animation-delay-400">
            <div className="glass p-6 sm:p-8 rounded-3xl border border-borderColor/70">
              <h3 className="text-2xl font-semibold mb-3">
                Prefer direct contact?
              </h3>
              <p className="text-mutedForeGroundColor mb-6">
                Reach out through any channel below. The form sends to this
                same destination email once EmailJS is configured.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 rounded-2xl border border-borderColor/60 bg-surfaceColor/60 p-4 transition-all hover:border-pryColor/50 hover:text-pryColor"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-pryColor/10 text-pryColor">
                      {item.icon}
                    </span>
                    <span>
                      <span className="block text-sm text-mutedForeGroundColor">
                        {item.label}
                      </span>
                      <span className="block font-medium break-all">
                        {item.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
