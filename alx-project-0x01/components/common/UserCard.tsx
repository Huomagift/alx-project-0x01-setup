import { UserProps } from "@/interfaces";

const UserCard: React.FC<{user: UserProps}> = ({ user }) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover: shadow-neutral-700 transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-2">{user.name} ({user.username})</h2>
            <p className="text-gray-600 mb-1"> {user.email}</p>
            <p className="text-gray-600 mb-1"> {user.phone}</p>
            <p className="text-gray-600 mb-1"> <a href={`https://${user.website}`} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <div className="mt-2">
                <h3 className="font-semibold"> Company</h3>
                <p>{user.company.name}</p>
                <p className="text-sm italic">{user.company.catchPhrase}</p>
            </div>
            <div className="mt-2">
                <h3 className="font-semibold"> Address</h3>
                <p>{user.address.suite}, {user.address.street}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
        </div>
    )
}

export default UserCard;