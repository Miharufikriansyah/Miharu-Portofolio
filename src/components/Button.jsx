/* eslint-disable react/prop-types */
export default function Button({name,type, handleClick}) {
    return (
        <button onClick={handleClick} type={type}  className="bg-tertiary p-2 text-primary rounded-full text-xs text-center hover:bg-primary hover:text-tertiary hover:ring-2 transition duration-300 ease-out min-w-[96px] lg:text-base">{name}</button>
    )
}