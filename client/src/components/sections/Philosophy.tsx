import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-4">The Problem</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Startup leadership is <br />
              <span className="italic text-muted-foreground">lonely, complex, and high-stakes.</span>
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founders operate in ambiguity with limited support. You need real-time guidance when facing critical decisions, not just a scheduled chat once a month.
              </p>
              <p>
                Traditional executive coaching is expensive ($200-400/hr) and hard to access. Discovery is a gamble.
              </p>
              <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-foreground font-serif text-xl">
                "We're not replacing coaches. We're democratizing access to coaching."
              </blockquote>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="p-6 rounded-2xl bg-white/50 border border-white/20 shadow-lg backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-2">The Market Failure</h4>
              <p className="text-muted-foreground">
                Personal change is hard without structured support. Existing solutions cater to established enterprises, not the chaotic reality of early-stage startups.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 shadow-lg">
              <h4 className="text-xl font-bold mb-2 text-primary">The Aarohana Way</h4>
              <p className="text-foreground/80">
                We combine the scalability of AI with the depth of human wisdom.
                An always-on partner that knows your context, guided by adult development theory.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}