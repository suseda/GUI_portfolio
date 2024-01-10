const Button = (props) =>
{
    return (
        <button className="p-2 lg:h-10 xl:h-10 m-3 sm:h-20 border-2 rounded border-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" >{props.name}</button>
    );
}

export default Button;