import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Separator } from "~/components/ui/separator";
import { Badge } from "~/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

// Mock data - this would come from your backend later
const post = {
  id: "1",
  title: "The Ultimate Guide to DSLR Photography",
  content: `
    Photography is an art form that allows us to capture moments and create lasting memories. 
    In this comprehensive guide, we'll explore everything you need to know about DSLR photography, 
    from basic concepts to advanced techniques.

    First, let's talk about the essential equipment every photographer should have...
  `,
  author: {
    name: "Sarah Parker",
    username: "sparker",
    avatar: "https://i.pravatar.cc/150?u=sparker",
  },
  category: "Photography",
  tags: ["DSLR", "Beginner", "Equipment", "Tutorial"],
  createdAt: "2024-01-15T10:00:00Z",
  views: 1234,
  likes: 89,
  comments: [
    {
      id: "1",
      author: {
        name: "John Smith",
        username: "jsmith",
        avatar: "https://i.pravatar.cc/150?u=jsmith",
      },
      content: "Great article! I especially loved the section about aperture settings.",
      createdAt: "2024-01-15T14:30:00Z",
      likes: 12,
    },
    {
      id: "2",
      author: {
        name: "Emma Wilson",
        username: "ewilson",
        avatar: "https://i.pravatar.cc/150?u=ewilson",
      },
      content: "This helped me understand my new camera so much better. Thanks!",
      createdAt: "2024-01-15T16:45:00Z",
      likes: 8,
    },
  ],
  relatedProducts: [
    {
      id: "1",
      name: "Canon EOS 5D Mark IV",
      price: 2499.99,
      rating: 4.8,
      image: "https://placehold.co/200x200",
    },
    {
      id: "2",
      name: "50mm f/1.8 Prime Lens",
      price: 125.99,
      rating: 4.6,
      image: "https://placehold.co/200x200",
    },
  ],
};

export default function PostDetail() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/posts" className="hover:text-primary">Posts</Link>
          <span>/</span>
          <span className="text-foreground">{post.title}</span>
        </div>

        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">
                Posted on {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge variant="secondary">{post.category}</Badge>
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="content" className="mb-8">
          <TabsList>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="comments">
              Comments ({post.comments.length})
            </TabsTrigger>
            <TabsTrigger value="related">Related Products</TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <Card>
              <CardContent className="pt-6">
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">{post.content}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm">
                      👍 Like ({post.likes})
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      {post.views} views
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comments">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4">
                      <Avatar>
                        <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                        <AvatarFallback>{comment.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{comment.author.name}</h4>
                          <span className="text-sm text-muted-foreground">
                            {new Date(comment.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="mt-1">{comment.content}</p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          👍 {comment.likes}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
                <Button className="w-full">Add Comment</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="related">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedProducts.map((product) => (
                <Card key={product.id}>
                  <CardContent className="pt-6">
                    <div className="flex space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div>
                        <h4 className="font-medium">{product.name}</h4>
                        <p className="text-muted-foreground">
                          ${product.price.toFixed(2)}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="text-yellow-500">★</span>
                          <span className="ml-1 text-sm">
                            {product.rating} / 5.0
                          </span>
                        </div>
                        <Button size="sm" className="mt-2">
                          View Product
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
} 