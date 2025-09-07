import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Mail, Send } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-semibold">
                  Stay in the Loop
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join over 10,000 developers and designers who get our latest articles, 
                  tutorials, and insights delivered straight to their inbox every week.
                </p>
              </div>

              {/* Form */}
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    placeholder="Enter your email address"
                    type="email"
                    className="flex-1"
                  />
                  <Button className="group">
                    Subscribe
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 pt-6 border-t">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-primary">Weekly</div>
                  <div className="text-sm text-muted-foreground">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Free</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}