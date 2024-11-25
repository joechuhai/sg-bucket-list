export interface BucketItem {
    id: number;
    title: string;
    description: string;
    category: string;
    location: string;
    coordinates: string;
    image?: string;
    likes: number;
    completed: number;
    enabled: boolean;
    order: number;
  }
  
  export interface User {
    id: number;
    name?: string;
    email: string;
  }