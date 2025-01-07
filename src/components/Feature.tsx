import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, LineChart, PieChart, TrendingUp, Users, Zap } from 'lucide-react'

const features = [
  {
    title: "Real-time Analytics",
    description: "Track your metrics in real-time with our powerful dashboard.",
    icon: LineChart,
  },
  {
    title: "User Behavior",
    description: "Understand how users interact with your platform.",
    icon: Users,
  },
  {
    title: "Performance Metrics",
    description: "Monitor and optimize your application's performance.",
    icon: TrendingUp,
  },
  {
    title: "Custom Reports",
    description: "Create and export custom reports for your needs.",
    icon: BarChart3,
  },
  {
    title: "Data Visualization",
    description: "Beautiful charts and graphs to visualize your data.",
    icon: PieChart,
  },
  {
    title: "Instant Insights",
    description: "Get actionable insights with our AI-powered analytics.",
    icon: Zap,
  },
]
export function Features() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12 bg-gray-50 dark:bg-zinc-900">
      <h2 className="text-center text-red-600">Features</h2>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Analytics that leads to better future</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Powerful features to help you make data-driven decisions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="border-0 shadow-lg">
            <CardHeader>
              <feature.icon className="w-12 h-12 text-purple-600" />
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

