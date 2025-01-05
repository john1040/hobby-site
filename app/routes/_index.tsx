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
import { LoginModal } from "~/components/auth/login-modal"
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

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
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8"
            >
              <Link to="/product-review">
                View Product Review
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
      <Footer />
    </div>
  );
}
