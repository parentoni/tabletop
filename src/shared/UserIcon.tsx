

const userInitials = "VK"

export const UserIcon = () => {
  return (
    <div className="avatar placeholder flex justify-end w-full m-4">
      <div className="bg-gray-800 text-white w-16 rounded-full">
        <span className="text-3xl">{userInitials}</span>
      </div>
    </div>
  )
}