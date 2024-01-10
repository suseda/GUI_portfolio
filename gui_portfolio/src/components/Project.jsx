const Project = (props) =>
{
    return (
        <div className='border-2 rounded-md border-black bg-white p-4 m-4'>
          <div className='w-1/4 border-2 rounded-md border-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 flex items-center justify-center'>
            <a href={props.repository}>{props.title}</a>
          </div>
          <div className='relative border-2 rounded-md border-black m-4'>
            <div className='absolute -top-4 bg-white w-1/5 flex items-center justify-center'>
              <h1 className='text-lg font-bold'>Description</h1>
            </div>
            <p className='p-3'>{props.p}</p>
          </div>
        </div>
    );
}

export default Project;