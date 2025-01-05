import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const ProductReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const images = [
    '/example-post-images/1.jpeg',
    '/example-post-images/2.jpeg',
    '/example-post-images/3.jpeg',
    '/example-post-images/4.jpeg',
    '/example-post-images/5.jpeg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleRating = (value: number) => {
    setRating(value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const submitComment = () => {
    // Handle comment submission logic here
    console.log('Comment submitted:', comment);
    setComment('');
  };

  return (
    <Card className="flex">
      <div className="w-1/3 relative">
        <img src={images[currentImageIndex]} alt="RG Gundam 2.0" className="object-cover w-full h-full rounded-l-lg" />
        <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">◀</button>
        <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">▶</button>
      </div>
      <div className="w-2/3">
        <CardHeader>
          <h2>RG Gundam 2.0</h2>
          <p>Grade: RG</p>
          <p>Price: ¥3000</p>
        </CardHeader>
        <CardContent>
          <Separator />
          <h3>Rating</h3>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRating(star)}
                style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
              >
                ★
              </span>
            ))}
          </div>
          <Separator />
          <h3>Comments</h3>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
            rows={4}
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <Button onClick={submitComment}>Add Comment</Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProductReview; 