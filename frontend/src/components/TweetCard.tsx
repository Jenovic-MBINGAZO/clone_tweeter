"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { MessageCircle, MoreHorizontal, Share2, Star } from "lucide-react"

interface TweetCardProps {
  avatar: string
  name: string
  handle: string
  verified: boolean
  time: string
  content: string
  image?: string
  comments: string
  retweets: string
  likes: string
}

const TweetCard: React.FC<TweetCardProps> = ({
  avatar,
  name,
  handle,
  verified,
  time,
  content,
  image,
  comments,
  retweets,
  likes,
}) => {
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(Number.parseInt(likes))

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1)
    } else {
      setLikesCount(likesCount + 1)
    }
    setIsLiked(!isLiked)
  }

  return (
    <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50">
      <div className="flex gap-4">
        <Link to={`/${handle.slice(1)}`}>
          <div className="w-12 h-12 rounded-full bg-gray-600"></div>
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <Link to={`/${handle.slice(1)}`} className="font-bold truncate hover:underline">
              {name}
            </Link>
            {verified && <Star className="h-4 w-4 flex-shrink-0 fill-blue-500 text-blue-500" />}
            <Link to={`/${handle.slice(1)}`} className="text-gray-500 truncate hover:underline">
              {handle}
            </Link>
            <span className="text-gray-500">· {time}</span>
            <button className="ml-auto text-gray-500 hover:text-blue-500">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 break-words">{content}</p>
          {image && (
            <div className="mt-4 rounded-xl overflow-hidden">
              <img src="../../images/1.png" alt="Tweet image" className="w-full" />
            </div>
          )}
          <div className="flex justify-between mt-4 text-gray-500">
            <button className="group flex items-center gap-2 hover:text-blue-500">
              <MessageCircle className="h-4 w-4 group-hover:text-blue-500" />
              <span className="hidden sm:inline group-hover:text-blue-500">{comments}</span>
            </button>
            <button className="group flex items-center gap-2 hover:text-green-500">
              <Share2 className="h-4 w-4 group-hover:text-green-500" />
              <span className="hidden sm:inline group-hover:text-green-500">{retweets}</span>
            </button>
            <button
              className={`group flex items-center gap-2 ${isLiked ? "text-red-500" : "hover:text-red-500"}`}
              onClick={handleLike}
            >
              <Star className={`h-4 w-4 ${isLiked ? "fill-red-500" : "group-hover:text-red-500"}`} />
              <span className="hidden sm:inline">{likesCount}</span>
            </button>
            <button className="group hover:text-blue-500">
              <Share2 className="h-4 w-4 group-hover:text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TweetCard

