import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_visualization_of_neural_networks_merging_with_organic_tree_roots,_representing_ai_and_human_growth..png";
import { EarlyAccessButton } from "@/components/EarlyAccessButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 h-full w-1/2 opacity-10 blur-3xl bg-gradient-to-bl from-primary to-transparent" />
      <div className="absolute bottom-0 left-0 -z-10 h-full w-1/2 opacity-10 blur-3xl bg-gradient-to-tr from-accent to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
              Now accepting early access
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Leadership Coaching, <br />
              <span className="text-gradient">Reimagined by AI.</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl lg:max-w-lg">
              Operating in complexity? Get real-time, on-demand guidance guided by proven frameworks.
              Powered by AI, anchored in human wisdom.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <EarlyAccessButton size="lg" className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-lg">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </EarlyAccessButton>
              <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                View Methodology
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              <img
                src={heroImage}
                alt="Abstract representation of AI and human growth"
                className="h-full w-full object-cover"
              />
              {/* Overlay gradient for text readability if needed, though image is decorative */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-foreground">300+ Leaders</p>
                  <p className="text-muted-foreground">Trust Aarohana</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}