import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-[1800px] mx-auto min-h-[50vh] flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10vw] leading-[0.8] font-display font-bold tracking-tighter uppercase text-foreground opacity-10 mb-24"
        >
          Contact
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group border-t border-border pt-6"
          >
            <Mail className="w-6 h-6 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">Email</h3>
            <p className="text-xl font-display font-bold">deepanshu.verma@zohomail.in</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group border-t border-border pt-6"
          >
            <Phone className="w-6 h-6 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-mono text-xs uppercase tracking-widest mb-2 text-muted-foreground">Phone</h3>
            <p className="text-xl font-display font-bold">+91 7879761418</p>
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
        </div>
      </div>
    </Layout>
  );
}
