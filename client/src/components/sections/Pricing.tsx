import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EarlyAccessButton } from "@/components/EarlyAccessButton";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center md:max-w-2xl md:mx-auto">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">
            Start for free, scale as you grow. Professional coaching shouldn't be a luxury.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {/* Pro Tier */}
          <Card className="relative flex flex-col border-primary shadow-lg scale-105 z-10">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Growth</CardTitle>
              <CardDescription>For scaling leaders</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-4xl font-bold">$20</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <strong>Unlimited</strong> AI Coaching
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  Priority Access to Human Coaches
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  Advanced Frameworks
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  Personalized Growth Arc
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <EarlyAccessButton className="w-full bg-primary hover:bg-primary/90 text-white">Start Free Trial</EarlyAccessButton>
            </CardFooter>
          </Card>

          {/* Enterprise Tier */}
          <Card className="flex flex-col border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For accelerators & VCs</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  White-label Platform
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Portfolio-wide Analytics
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Dedicated Success Manager
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Custom Integrations
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}