const Divider = (props) =>
{
    return (
        <div className="m-4">
            <hr className="bg-black h-1"></hr>
            <div className="relative flex items-center justify-center -top-4">
                <div className="bg-blue-500 border-2 rounded-md border-black w-1/3">
                    <h1 className="flex items-center justify-center font-bold">{props.name}</h1>
                </div>
            </div>
        </div>
    );
}

export default Divider;