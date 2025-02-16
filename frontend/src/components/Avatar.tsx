import type React from "react"

interface AvatarProps {
  src?: string
  alt: string
  size?: "sm" | "md" | "lg"
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-32 h-32",
  }
  src= "../../images/Profile-Photo.png"

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-300`}>
      <img src={src || "../../images/Profile-Photo.png"} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}

export default Avatar

