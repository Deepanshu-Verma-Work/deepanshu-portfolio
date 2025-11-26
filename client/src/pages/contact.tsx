import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-[1800px] mx-auto min-h-[50vh] flex flex-col justify-center px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10vw] leading-[0.8] font-display font-bold tracking-tighter uppercase text-foreground opacity-10 mb-12"
        >
          Contact
        </motion.h1>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-heading text-muted-foreground max-w-3xl mb-16"
        >
          Let's discuss how we can build resilient, scalable systems together. Whether you're looking for architectural guidance or collaboration on complex projects, I'm here to help.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group border-t border-border pt-6"
          >
            <Mail className="w-6 h-6 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">Email</h3>
            <a href="mailto:deepanshu.verma@zohomail.in" className="text-xl font-display font-bold hover:text-primary transition-colors break-all">
              deepanshu.verma@zohomail.in
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group border-t border-border pt-6"
          >
            <Phone className="w-6 h-6 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">Phone</h3>
            <a href="tel:+917987170923" className="text-xl font-display font-bold hover:text-primary transition-colors">
              +91 7987170923
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group border-t border-border pt-6"
          >
            <MapPin className="w-6 h-6 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">Location</h3>
            <p className="text-xl font-display font-bold">Pune, India</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="group border-t border-border pt-6"
          >
            <div className="flex gap-3 mb-4">
              <Linkedin className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <Github className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <MessageCircle className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-mono text-xs uppercase tracking-widest mb-3 text-muted-foreground">Connect</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/deepanshu-verma-work"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono hover:text-primary transition-colors"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/Deepanshu-Verma-Work"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono hover:text-primary transition-colors"
              >
                GitHub →
              </a>
              <a
                href="https://wa.me/917987170923?text=Hi%20Deepanshu%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono hover:text-primary transition-colors"
              >
                WhatsApp →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Availability Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-t border-border pt-8"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Currently available for consulting and architecture review projects
          </p>
        </motion.div>
      </div>
    </Layout>
  );
}
