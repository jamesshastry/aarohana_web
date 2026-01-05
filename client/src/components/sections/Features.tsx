import { Brain, Users, Zap, Shield, TrendingUp, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "24/7 AI Coaching Agent",
    description: "Always-on, intelligent support guided by adult development theory and proven frameworks.",
  },
  {
    icon: Users,
    title: "Human Coach Bridge",
    description: "Seamless escalation to expert human coaches when depth and personal connection are needed.",
  },
  {
    icon: Zap,
    title: "Real-time Problem Solving",
    description: "Immediate guidance for critical decisions without waiting for your next scheduled session.",
  },
  {
    icon: TrendingUp,
    title: "Structured Growth Arc",
    description: "Personalized development paths tailored to your stage of leadership and startup maturity.",
  },
  {
    icon: MessageSquareText,
    title: "Context-Aware Insights",
    description: "The AI remembers your context, challenges, and goals, providing continuity across conversations.",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Your leadership challenges are sensitive. Our platform ensures enterprise-grade privacy.",
  },
];

export function Features() {
  return (
    <section id="solution" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center md:max-w-2xl md:mx-auto">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">The Future of Leadership Development</h2>
          <p className="text-muted-foreground text-lg">
            We solve the "market failure" of executive coaching: high costs, limited access, and scheduling friction.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border bg-background p-8 hover:shadow-lg transition-all hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}