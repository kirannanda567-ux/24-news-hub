export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  author: string;
  readTime: number;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  views: string;
  publishedAt: string;
}

export interface YouTubeChannel {
  name: string;
  description: string;
  subscriberCount: string;
  channelUrl: string;
  thumbnailUrl: string;
  videos: YouTubeVideo[];
}
