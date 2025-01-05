import { Link } from "@remix-run/react";
import { LoginModal } from "~/components/auth/login-modal";

export function Header() {
  return (
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
            <LoginModal mode="signin" />
            <LoginModal mode="signup" />
          </div>
        </div>
      </div>
    </header>
  );
} 