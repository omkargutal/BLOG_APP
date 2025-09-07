import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Search, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground">B</span>
            </div>
            <span className="text-xl font-semibold">BlogSpace</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Technology</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Design</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Business</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          </nav>

          {/* Search and CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" className="hidden md:inline-flex">Subscribe</Button>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}