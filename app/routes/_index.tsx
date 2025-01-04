import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-xl font-bold text-primary">
                Hobby Central
              </Link>
              <nav className="hidden md:flex space-x-4">
                <Link to="/products" className="text-sm font-medium hover:text-primary">
                  Products
                </Link>
                <Link to="/categories" className="text-sm font-medium hover:text-primary">
                  Categories
                </Link>
                <Link to="/blog" className="text-sm font-medium hover:text-primary">
                  Blog
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Welcome to Hobby Central!
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Discover, rate, and discuss the best products for your favorite hobby.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8"
            >
              <Link to="/products">
                Explore Products
              </Link>
            </Button>
          </div>
        </section>

        {/* Popular/Recent Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Popular & Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="transition hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>Post Title {index + 1}</CardTitle>
                    <CardDescription>Posted by John Doe • 2 days ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A short description of this amazing post that captures the reader's attention.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="px-0">
                      <Link to={`/posts/${index + 1}`}>
                        Read more →
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subcategory Links */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Explore by Subcategory</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Photography",
                "Gaming",
                "Art Supplies",
                "Music",
                "Gardening",
                "Cooking"
              ].map((category, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  asChild
                  className="min-w-[120px]"
                >
                  <Link to={`/products?category=${category}`}>
                    {category}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">About Us</h3>
              <p className="text-sm text-muted-foreground">
                Hobby Central is your go-to platform for discovering and discussing hobby-related products and experiences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="flex flex-col space-y-2">
                <Link to="/products?category=photography" className="text-sm text-muted-foreground hover:text-primary">Photography</Link>
                <Link to="/products?category=gaming" className="text-sm text-muted-foreground hover:text-primary">Gaming</Link>
                <Link to="/products?category=art" className="text-sm text-muted-foreground hover:text-primary">Art Supplies</Link>
                <Link to="/products?category=music" className="text-sm text-muted-foreground hover:text-primary">Music</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Connect With Us</h3>
              <div className="flex flex-col space-y-2">
                <a href="https://twitter.com" className="text-sm text-muted-foreground hover:text-primary">Twitter</a>
                <a href="https://facebook.com" className="text-sm text-muted-foreground hover:text-primary">Facebook</a>
                <a href="https://instagram.com" className="text-sm text-muted-foreground hover:text-primary">Instagram</a>
                <a href="https://youtube.com" className="text-sm text-muted-foreground hover:text-primary">YouTube</a>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hobby Central. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
