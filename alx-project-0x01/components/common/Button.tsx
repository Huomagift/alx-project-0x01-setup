import { Buttonprops } from "@/interfaces"

const Button: React.FC<Buttonprops> = ({title, styles}) => {
    return (
        <button className={`px-4 py-2 font-medium ${styles}`}>
            {title}
        </button>
    )
}