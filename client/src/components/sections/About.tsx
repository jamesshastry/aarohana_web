import { motion } from "framer-motion";
import headshot from "@assets/James_Photo_1763839723997.jpg";

export function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
              <img
                src={headshot}
                alt="James Shastry"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <h3 className="text-xl font-bold font-serif">James Shastry</h3>
                <p className="text-sm text-white/80">Founder & Lead Coach</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 -z-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 -z-10 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Built on Deep Domain Expertise</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Startups fail not because of technology, but because of people problems.
                Leadership in ambiguity is the hardest skill to master.
              </p>
              <p>
                I founded Aarohana to bridge the gap between the lonely journey of a founder
                and the expensive, inaccessible world of executive coaching.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="rounded-lg bg-muted/50 p-4">
                  <h4 className="mb-1 text-3xl font-bold text-primary">80+</h4>
                  <p className="text-sm font-medium">Ventures Advised</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <h4 className="mb-1 text-3xl font-bold text-primary">0→1</h4>
                  <p className="text-sm font-medium">Meta Product Lead</p>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <p className="text-sm font-semibold text-foreground uppercase tracking-wider">Credentials</p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Georgetown Institute for Transformational Leadership</li>
                  <li>Harvard Kennedy School Adaptive Leadership</li>
                  <li>MIT Sloan MBA & IIT Background</li>
                </ul>
              </div>

              <div className="mt-8 rounded-xl border border-primary/10 bg-primary/5 p-6">
                <h3 className="mb-3 text-lg font-bold font-serif text-primary">What is Aarohana?</h3>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <em className="text-foreground font-medium">Arohana</em> (आरोहण) is a Sanskrit word meaning "ascending," "rising," or "climbing," representing a journey upward, growth, or a gradual progression, used in contexts from Indian classical music (ascending musical scales) to yoga (spiritual ascent).
                  </p>
                  <p>
                    It signifies moving to a higher state or level, whether physically, mentally, or spiritually.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}