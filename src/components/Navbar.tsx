import { Link } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { ChevronDown} from 'lucide-react'

const products = [
  { name: 'Analytics', href: '#' },
  { name: 'Engagement', href: '#' },
  { name: 'Security', href: '#' },
  { name: 'Integrations', href: '#' },
]

const resources = [
  { name: 'Blog', href: '#' },
  { name: 'Documentation', href: '#' },
  { name: 'Guides', href: '#' },
  { name: 'Help Center', href: '#' },
]

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <img
              src="/logos.png"
              alt="zysk"
              width={80}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
                Products <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {products.map((product) => (
                  <DropdownMenuItem key={product.name}>
                    <Link to={product.href}>{product.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
                Resources <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {resources.map((resource) => (
                  <DropdownMenuItem key={resource.name}>
                    <Link to={resource.href}>{resource.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/pricing" className="text-sm font-medium">
              Pricing
            </Link>
          </div>
        </div>
        <img src="/profile.png" />
      </div>
    </nav>
  )
}

