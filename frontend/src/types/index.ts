export interface Tweet {
    id: string;
    username: string;
    avatar: string;
    content: string;
    likes: number;
    isLiked: boolean;
  }
  
  export interface User {
    username: string;
    name: string;
    avatar: string;
    bio: string;
  }