import type React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import Avatar from "./Avatar"

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-2xl">
        <div className="sticky top-0 z-10 bg-black/80 backdrop-blur p-4 flex items-center gap-4">
          <button className="text-white p-2 rounded-full hover:bg-gray-900" onClick={() => navigate("/")}>
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div>
            <h1 className="text-xl font-bold">{username}</h1>
            <p className="text-sm text-gray-500">22 Tweets</p>
          </div>
        </div>

        <div className="relative">
          <div className="h-48 bg-gray-700"></div>
          <div className="absolute bottom-0 left-4 transform translate-y-1/2">
            <Avatar src="/default-avatar.png" alt={username || "User"} size="lg" />
          </div>
        </div>

        <div className="mt-20 p-4">
          <h2 className="text-2xl font-bold">{username}</h2>
          <p className="text-gray-500">@{username}</p>
          <p className="mt-4">Bio goes here. This is a sample bio for the user's profile.</p>
          <div className="flex gap-4 mt-4 text-gray-500">
            <span>Location</span>
            <span>Website</span>
            <span>Joined Date</span>
          </div>
          <div className="flex gap-4 mt-4">
            <span>
              <strong>100</strong> Following
            </span>
            <span>
              <strong>200</strong> Followers
            </span>
          </div>
        </div>

        {/* Add more profile content here */}
      </div>
    </div>
  )
}

export default ProfilePage

