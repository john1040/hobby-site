import { Link } from "@remix-run/react";
import { Separator } from "~/components/ui/separator";

export function Footer() {
  return (
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
  );
} 