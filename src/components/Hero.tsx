import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { ArrowRight, Calendar, User } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background/90 to-muted/20">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">Featured Article</Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl tracking-tight">
                The Future of 
                <span className="text-primary"> Modern</span> Web Development
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Explore the latest trends, tools, and techniques that are shaping the future of web development in 2024 and beyond.
              </p>
            </div>
            
            {/* Meta info */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Sarah Chen</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Dec 15, 2024</span>
              </div>
              <span>8 min read</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View All Posts
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748665194498-21a7e3d8ff19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzU3MjI3Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern workspace with laptop"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card border rounded-xl p-4 shadow-lg max-w-sm">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">📊</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Latest Tech Insights</p>
                  <p className="text-xs text-muted-foreground">Updated daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}