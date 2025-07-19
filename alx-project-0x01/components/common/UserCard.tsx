import { UserProps } from "@/interfaces";

const UserCard: React.FC<{posts: UserProps}> = ({ posts }) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover: shadow-neutral-700 transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-2">{posts.name} ({posts.username})</h2>
            <p className="text-gray-600 mb-1"> {posts.email}</p>
            <p className="text-gray-600 mb-1"> {posts.phone}</p>
            <p className="text-gray-600 mb-1"> <a href={`https://${posts.website}`} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{posts.website}</a></p>
            <div className="mt-2">
                <h3 className="font-semibold"> Company</h3>
                <p>{posts.company.name}</p>
                <p className="text-sm italic">{posts.company.catchPhrase}</p>
            </div>
            <div className="mt-2">
                <h3 className="font-semibold"> Address</h3>
                <p>{posts.address.suite}, {posts.address.street}</p>
                <p>{posts.address.city}, {posts.address.zipcode}</p>
            </div>
        </div>
    )
}

export default UserCard;