import { motion } from "framer-motion";

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
            <div className="space-y-8">
              <div className="p-8 bg-card rounded-2xl shadow-sm border border-border relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <h3 className="text-2xl font-bold font-serif mb-2">Sinddu Shastry</h3>
                <p className="text-primary font-medium mb-4">Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed">
                  Leading the vision to democratize elite leadership coaching through 
                  the power of AI and human expertise.
                </p>
              </div>

              <div className="p-8 bg-muted/30 rounded-2xl border border-border relative overflow-hidden">
                <h3 className="text-xl font-bold font-serif mb-2">James Shastry</h3>
                <p className="text-primary/80 font-medium mb-4">Advisor & Coach</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  James brings decades of experience in organizational psychology and executive performance, 
                  supporting the leadership growth of founders across 80+ global ventures.
                </p>
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
                We founded Aarohana to bridge the gap between the lonely journey of a founder
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