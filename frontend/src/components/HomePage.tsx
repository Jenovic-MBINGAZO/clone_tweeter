import type React from "react"
import { useNavigate } from "react-router-dom"
import { Bell, Bookmark, Home, ImageIcon, Link, ListVideo, Mail, Pencil, Search, Twitter, User2 } from "lucide-react"
import TweetCard from "./TweetCard"


const HomePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Tweet Button */}
      <button className="fixed right-4 bottom-20 md:hidden z-50 rounded-full w-14 h-14 bg-blue-500 hover:bg-blue-600 shadow-lg flex items-center justify-center">
        <Pencil className="h-6 w-6" />
      </button>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4">
        {/* Left Sidebar - Hidden on Mobile */}
        <div className="hidden md:block md:col-span-3 py-4">
          <div className="space-y-4 sticky top-4">
            <Twitter className="h-8 w-8 ml-4" />
            <nav className="space-y-2">
              <button className="w-full flex items-center justify-start text-xl gap-4 p-2 hover:bg-gray-900 rounded-full">
                <Home className="h-6 w-6" />
                <span className="hidden xl:inline">Home</span>
              </button>
              <button className="w-full flex items-center justify-start text-xl gap-4 p-2 hover:bg-gray-900 rounded-full">
                <Search className="h-6 w-6" />
                <span className="hidden xl:inline">Explore</span>
              </button>
              <button className="w-full flex items-center justify-start text-xl gap-4 p-2 hover:bg-gray-900 rounded-full">
                <Bell className="h-6 w-6" />
                <span className="hidden xl:inline">Notifications</span>
              </button>
              <button className="w-full flex items-center justify-start text-xl gap-4 p-2 hover:bg-gray-900 rounded-full">
                <Mail className="h-6 w-6" />
                <span className="hidden xl:inline">Messages</span>
              </button>
              <button className="w-full flex items-center justify-start text-xl gap-4 p-2 hover:bg-gray-900 rounded-full">
                <Bookmark className="h-6 w-6" />
                <span className="hidden xl:inline">Bookmarks</span>
              </button>
              <button className="w-full flex items-center justify-start text-xl gap-4 p-2 hover:bg-gray-900 rounded-full">
                <ListVideo className="h-6 w-6" />
                <span className="hidden xl:inline">Lists</span>
              </button>
              <button
                className="w-full flex items-center justify-start text-xl gap-4 p-2 hover:bg-gray-900 rounded-full"
                onClick={() => navigate("/johndoe")}
              >
                <User2 className="h-6 w-6" />
                <span className="hidden xl:inline">Profile</span>
              </button>
            </nav>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full hidden xl:block">
              Tweet
            </button>
            <button className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center xl:hidden">
              <Pencil className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="col-span-1 md:col-span-6 border-x border-gray-800">
          <div className="sticky top-0 z-10 bg-black/80 backdrop-blur p-4 border-b border-gray-800">
            <h1 className="text-xl font-bold">Home</h1>
          </div>

          <div className="p-4 border-b border-gray-800 hidden md:block">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-600"></div>
              <div className="flex-1">
                <input
                  className="bg-transparent border-none text-lg w-full focus:outline-none"
                  placeholder="What's happening?"
                />
                <div className="flex justify-between mt-4">
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:bg-blue-500/20 p-2 rounded-full">
                      <ImageIcon className="h-5 w-5" />
                    </button>
                    <button className="text-blue-500 hover:bg-blue-500/20 p-2 rounded-full">
                      <Link className="h-5 w-5" />
                    </button>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-120px)]">
            <TweetCard
              avatar="/placeholder.svg"
              name="CNN"
              handle="@CNN"
              verified={true}
              time="7m"
              content="President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis."
              comments="57"
              retweets="144"
              likes="184"
            />
            <TweetCard
              avatar="/placeholder.svg"
              name="The New York Times"
              handle="@nytimes"
              verified={true}
              time="2h"
              content="Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land"
              image="/placeholder.svg"
              comments="19"
              retweets="48"
              likes="482"
            />
          </div>
        </main>

        {/* Right Sidebar - Hidden on Mobile */}
        <div className="hidden md:block md:col-span-3 py-4">
          <div className="sticky top-4 space-y-4">
            <div className="bg-gray-900 rounded-xl p-4">
              <h2 className="text-xl font-bold mb-4">Trends for you</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-sm text-gray-500">Trending in Turkey</p>
                    <p className="font-bold">#SQUID</p>
                    <p className="text-sm text-gray-500">2,066 Tweets</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-4">
              <h2 className="text-xl font-bold mb-4">Who to follow</h2>
              <div className="space-y-4">
                {["The New York Times", "CNN", "Twitter"].map((name) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                      <div>
                        <p className="font-bold">{name}</p>
                        <p className="text-sm text-gray-500">@{name.toLowerCase().replace(/\s/g, "")}</p>
                      </div>
                    </div>
                    <button className="bg-white text-black font-bold py-1 px-4 rounded-full hover:bg-gray-200">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-4 flex justify-around md:hidden">
          <button className="text-white p-2 rounded-full hover:bg-gray-900">
            <Home className="h-6 w-6" />
          </button>
          <button className="text-white p-2 rounded-full hover:bg-gray-900">
            <Search className="h-6 w-6" />
          </button>
          <button className="text-white p-2 rounded-full hover:bg-gray-900">
            <Bell className="h-6 w-6" />
          </button>
          <button className="text-white p-2 rounded-full hover:bg-gray-900">
            <Mail className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage

