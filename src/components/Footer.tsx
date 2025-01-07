
const footerLinks = {
  Product: [
    { name: "Overview", href: "#" },
    { name: "Features", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Releases", href: "#" },


  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Media kit", href: "#" },
    { name: "News", href: "#" },


  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Status", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Status", href: "#" },
  ],
  UseCases:[
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Status", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Status", href: "#" },
  ],
  Social:[
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Status", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Status", href: "#" },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Status", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-8 text-center">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12  justify-between flex pt-8 border-t text-center text-gray-500">
        <img
              src="/logos.png"
              alt="zysk"
              width={80}
              height={32}
              className="h-8 w-auto"
            />
          <p>© 2025 Analytics Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
