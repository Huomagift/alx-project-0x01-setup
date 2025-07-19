import { UserCardProps, UserProps } from "@/interfaces";

const UserCard: React.FC<UserCardProps> = ({ users }) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover: shadow-neutral-700 transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-2">{users.name} ({users.username})</h2>
            <p className="text-gray-600 mb-1"> {users.email}</p>
            <p className="text-gray-600 mb-1"> {users.phone}</p>
            <p className="text-gray-600 mb-1"> <a href={`https://${users.website}`} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{users.website}</a></p>
            <div className="mt-2">
                <h3 className="font-semibold"> Company</h3>
                <p>{users.company.name}</p>
                <p className="text-sm italic">{users.company.catchPhrase}</p>
            </div>
            <div className="mt-2">
                <h3 className="font-semibold"> Address</h3>
                <p>{users.address.suite}, {users.address.street}</p>
                <p>{users.address.city}, {users.address.zipcode}</p>
            </div>
        </div>
    )
}

export default UserCard;