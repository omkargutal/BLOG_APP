import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Search, Calendar, TrendingUp } from "lucide-react"

export function Sidebar() {
  const categories = [
    { name: "Technology", count: 24 },
    { name: "Design", count: 18 },
    { name: "Business", count: 15 },
    { name: "Productivity", count: 12 },
    { name: "Marketing", count: 9 },
    { name: "Tutorials", count: 21 }
  ]

  const recentPosts = [
    {
      title: "10 Essential VS Code Extensions for Developers",
      date: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1595623654300-b27329804025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kaW5nfGVufDF8fHx8MTc1NzE1MzI4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "The Art of Minimalist Design in 2024",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1664520132859-727fc515fc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NTcyMjcyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Building Successful Startups: A Complete Guide",
      date: "Dec 8, 2024",
      image: "https://images.unsplash.com/photo-1629787177096-9fbe3e2ef6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU3MTc3NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ]

  const popularTags = [
    "React", "JavaScript", "TypeScript", "CSS", "Node.js", "Python",
    "Design", "UX/UI", "Productivity", "Business", "Startup", "Marketing"
  ]

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Search</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center justify-between py-2 hover:bg-muted/50 rounded px-2 cursor-pointer transition-colors">
                <span className="text-sm">{category.name}</span>
                <Badge variant="outline" className="text-xs">{category.count}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Recent Posts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex space-x-3 cursor-pointer group">
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Popular Tags</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>Stay Updated</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm opacity-90 mb-4">
            Get the latest articles and insights delivered to your inbox.
          </p>
          <div className="space-y-3">
            <Input 
              placeholder="Enter your email" 
              className="bg-background text-foreground"
            />
            <Button variant="secondary" className="w-full">
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}