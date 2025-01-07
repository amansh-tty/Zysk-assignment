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
      <section className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row justify-between items-center">
      <div className="max-w-2xl">
        <p className="text-red-500 font-medium mb-2">Our blog</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Lastest blog posts</h2>
        <p className="text-gray-500 text-lg">
          Tool and strategies modern teams need to help their companies grow.
        </p>
      </div>
      <div className="mt-6 md:mt-0">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition">
          View all posts
        </button>
      </div>
    </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {posts.map((post) => (
          <Card key={post.title} className="overflow-hidden mx-auto w-72 h-72 flex flex-col">
            <CardHeader className="p-0 w-full h-36">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <div className="text-sm flex flex-row space-x-4 text-gray-500">
                <img src="/profile.png" className="w-8 h-8 rounded-full" />
                <div className="flex flex-col">
                  <p>{post.author}</p>
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
