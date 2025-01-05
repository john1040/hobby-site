import ProductReview from '~/components/ProductReview';
import { Header } from '~/components/layout/Header';
import { Footer } from '~/components/layout/Footer';

export default function ProductReviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ProductReview />
      </main>
      <Footer />
    </div>
  );
} 