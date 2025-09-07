import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { BlogCard } from "./components/BlogCard"
import { Sidebar } from "./components/Sidebar"
import { Newsletter } from "./components/Newsletter"
import { Footer } from "./components/Footer"
import { Button } from "./components/ui/button"
import { ArrowRight } from "lucide-react"

export default function App() {
  // Mock blog data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Modern Architecture",
      excerpt: "Learn how to structure large React applications using the latest patterns, state management solutions, and best practices for maintainable code.",
      image: "https://images.unsplash.com/photo-1595623654300-b27329804025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kaW5nfGVufDF8fHx8MTc1NzE1MzI4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "Alex Johnson",
      date: "Dec 14, 2024",
      readTime: "12 min read",
      category: "Technology",
      featured: true
    },
    {
      id: 2,
      title: "The Psychology of Color in Modern UI Design",
      excerpt: "Discover how color choices impact user behavior and learn to create more effective interfaces through strategic color application.",
      image: "https://images.unsplash.com/photo-1664520132859-727fc515fc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NTcyMjcyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "Maria Garcia",
      date: "Dec 13, 2024",
      readTime: "8 min read",
      category: "Design"
    },
    {
      id: 3,
      title: "Startup Growth Strategies That Actually Work",
      excerpt: "Real-world insights from successful entrepreneurs on building and scaling startups in today's competitive landscape.",
      image: "https://images.unsplash.com/photo-1629787177096-9fbe3e2ef6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU3MTc3NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "David Kim",
      date: "Dec 12, 2024",
      readTime: "15 min read",
      category: "Business"
    },
    {
      id: 4,
      title: "Digital Marketing Trends to Watch in 2025",
      excerpt: "Stay ahead of the curve with emerging digital marketing strategies and technologies that will define the next year.",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDF8fHx8MTc1NzEyOTE0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "Emily Chen",
      date: "Dec 11, 2024",
      readTime: "10 min read",
      category: "Marketing"
    },
    {
      id: 5,
      title: "Advanced Web Development Techniques for 2024",
      excerpt: "Explore cutting-edge web development practices, from performance optimization to modern deployment strategies.",
      image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTcxNzEzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "Ryan Taylor",
      date: "Dec 10, 2024",
      readTime: "14 min read",
      category: "Technology"
    },
    {
      id: 6,
      title: "Productivity Hacks for Remote Developers",
      excerpt: "Proven strategies to boost your productivity while working from home, including tools, techniques, and mindset shifts.",
      image: "https://images.unsplash.com/photo-1748665194498-21a7e3d8ff19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzU3MjI3Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "Lisa Wang",
      date: "Dec 9, 2024",
      readTime: "7 min read",
      category: "Productivity"
    }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Featured Section */}
        {featuredPost && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Featured Article</h2>
                <p className="text-muted-foreground">Don't miss our editor's pick</p>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <BlogCard {...featuredPost} featured={true} />
              </div>
              <div className="space-y-6">
                {regularPosts.slice(0, 2).map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Latest Articles</h2>
              <p className="text-muted-foreground">Stay updated with our newest content</p>
            </div>
            <Button variant="outline" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {regularPosts.slice(2).map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  )
}