export function CompanyCard({ id, fid, companyName, description, rating, verifiedAddresses, loading }:
    { id: string, fid: number, companyName: string, description: string, rating: number, verifiedAddresses: object, loading: boolean }) {

    return (
        <div className="flex bg-gradient-to-br from-base-200 to-base-300 shadow-lg rounded-xl overflow-hidden w-[300pt] transition-transform duration-200">
            {loading ?
                <div className="bg-gray-200 aspect-square rounded-xl object-cover w-full flex flex-col justify-center items-center">
                    Carregando papai
                </div>
                :
                <div className='flex flex-col items-start justify-between relative w-full'>
                    <div className='flex flex-col p-4 w-full'>
                        <div className="space-y-1 font-medium">
                            <div className='flex justify-between w-full'>
                                <div>
                                    <div className='flex align-middle'>
                                        <h1 className='flex text-4xl font-bold text-primary mr-3'>{companyName}</h1>
                                        {status === "open" ? <p className='text-gray-100 self-center py-1 px-3 rounded-full bg-green-500'>Open</p> : <p className='text-gray-100 self-center py-1 px-3 rounded-full bg-error'>Closed</p>}
                                    </div>
                                    <p className='text-gray-500 font-semibold'>Due to: {"01/04/2027"}</p>
                                </div>
                                <h2 className='text-3xl font-bold text-primary-focus self-auto'>${companyName}.00</h2>
                            </div>

                            {/* HARDCODED TAG SECTION (IMPLEMENT FILTERING LATER) */}
                            <div className='text-lg flex align-middle items-center text-gray-600'>
                                Tags:
                                <span className='text-gray-600 hover:border-primary hover:text-primary transition cursor-pointer self-center ml-1 py-0 px-2 rounded-full bg-primary bg-opacity-5 border-2 border-gray-400'>Art</span>
                                <span className='text-gray-600 hover:border-primary hover:text-primary transition cursor-pointer self-center ml-1 py-0 px-2 rounded-full bg-primary bg-opacity-5 border-2 border-gray-400'>Easy</span>
                                <span className='text-gray-600 hover:border-primary hover:text-primary transition cursor-pointer self-center ml-1 py-0 px-2 rounded-full bg-primary bg-opacity-5 border-2 border-gray-400'>Fast</span>
                                <span className='text-gray-600 hover:border-primary hover:text-primary transition cursor-pointer self-center ml-1 py-0 px-2 rounded-full bg-primary bg-opacity-5 border-2 border-gray-400'>Code</span>

                                {/* <div className='flex ml-1 flex-wrap gap-1'>
                                    <Badge color="gray" >Art</Badge>
                                    <Badge color="gray" >Easy</Badge>
                                    <Badge color="gray" >Fast</Badge>
                                    <Badge color="gray" >Code</Badge>
                                </div> */}
                            </div>

                            {/* <h2 className="text-md text-gray-500">{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, culpa a? Obcaecati adipisci debitis eligendi quaerat vel, expedita ipsum vitae voluptas harum fugit ad itaque deserunt sint. Quidem, dicta fuga!</h2> */}

                        </div>
                    </div>

                    <div className='w-[300pt] border-t-[1px] border-gray-400 self-center'></div>

                

                    {/* BUTTON V1 */}
                    
                    {/* BUTTON V2  */}
                    {/* <div className="absolute bottom-0 right-0 m-2 aspect-[21/9] flex bg-opacity-5 bg-blue rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105">
                        <Link className='flex items-center justify-center' href={`/explore-tasks/${id}`}>
                        <button className="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Learn more
                        </button>
                        </Link>
                    </div> */}

                </div>
            }
        </div>
    );
}