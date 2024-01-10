const Card = (props) =>
{
    return (
        <div className="border-2 rounded-md border-black bg-white m-4">
            <div className="m-4">
                <div className="flex items-center justify-center">
                    <h1 className="text-lg font-bold">{props.title}</h1>
                </div>
                <p>{props.p}</p>
            </div>
        </div>
    )
}

export default Card;