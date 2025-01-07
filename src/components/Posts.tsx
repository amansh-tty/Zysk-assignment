import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from 'next/link';


        
const posts = [
  {
    title: "Analyzing User Behavior Patterns",
    image: "/black.png",
    author: "John Doe",
    date: "Jan 5, 2024",
  },
  {
    title: "Improving Conversion Rates",
    image: "/black.png",
    author: "Jane Smith",
    date: "Jan 4, 2024",
  },
  {
    title: "Data-Driven Decision Making",
    image: "/black.png",
    author: "Mike Johnson",
    date: "Jan 3, 2024",
  },
]

export function LatestPosts() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-6 md:py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Latest blog posts</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Stay updated with our latest insights and news
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {posts.map((post) => (
          <Card key={post.title} className="overflow-hidden mx-auto">
            <CardHeader className="p-0">
              <img
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="object-cover"
              />
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            </CardContent>
            <CardFooter className="p-6 pt-0  justify-between">
              <div className="text-sm flex flex-row space-x-4 text-gray-500">
                <img src="/profile.png"/> 
                <div className="flex-col">

                <p>{post.author} </p>
                <p>{post.date}</p>

                </div>
              </div>
              <Link href="#" className="text-purple-600 hover:text-purple-700">
                Read more
              </Link>
            </CardFooter>
          </Card>
          
        ))}
      </div>
    </section>
  )
}
