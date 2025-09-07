import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
  featured?: boolean
}

export function BlogCard({ 
  title, 
  excerpt, 
  image, 
  author, 
  date, 
  readTime, 
  category, 
  featured = false 
}: BlogCardProps) {
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      featured ? 'lg:col-span-2 lg:row-span-2' : ''
    }`}>
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <ImageWithFallback
            src={image}
            alt={title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              featured ? 'h-[300px]' : 'h-[200px]'
            }`}
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary">{category}</Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className={`p-6 ${featured ? 'space-y-4' : 'space-y-3'}`}>
        <h3 className={`font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors ${
          featured ? 'text-xl lg:text-2xl' : 'text-lg'
        }`}>
          {title}
        </h3>
        <p className={`text-muted-foreground line-clamp-3 ${
          featured ? 'text-base' : 'text-sm'
        }`}>
          {excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </CardFooter>
    </Card>
  )
}