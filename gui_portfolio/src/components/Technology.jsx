const Technology = (props) => 
{
    return(
        <div className="border-2 rounded-md border-black m-4">
          <div className='m-4 p-4'>
            <div className='flex items-center justify-center'>
              <h1 className='text-black font-bold italic '>{props.title}</h1>
            </div>
            <p className='text-black italic'>{props.p}</p>
          </div>
          <img alt="Image" src={props.img}/>
        </div>      
    )
}

export default Technology;