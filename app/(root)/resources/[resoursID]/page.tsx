import { getResources } from '@/sanity/actions'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    params: { resoursID: number }
}

const page = async ({ params }: Props) => {
    const resources = await getResources({
        query: '',
        category: '',
        page: '1'
    })
    const ID: number = params.resoursID
    const resource = resources.find((res: any) => res._id === ID)


    return (
        <main className='flex-center paddings mx-auto w-full max-w-screen-2xl '>
            <section className='flex-center mt-10 w-full sm:mt-20 text-white-800 font-bold flex-col sm:flex-row'>
                <div className='w-full flex flex-col'>
                    <h1 className='heading3 py-4 text-gradient_purple-blue sm:heading2'>{resource.title}</h1>
                    <p className='text-2xl '>With over:</p>
                    <ul className='text-lg py-1 list-disc pl-8'>
                        <li>17+ chapters packed with example source code</li>
                        <li>comprehensive answers to popular interview questions</li>
                        <li>best practices</li>
                        <li>useful tips & tricks</li>
                    </ul>
                    <p className='text-lg'>...this eBook is a must-have for any web devloper</p>
                    <Link className='py-6' href={resource.downloadLink} >
                        <button className='gradient_blue-purple whitespace-nowrap rounded-lg px-8 py-2.5 capitalize '>
                            Download the Guide
                        </button>
                    </Link>
                </div>
                <Image
                    className='rotate-0 sm:rotate-12 mt-12 order-1'
                    src={resource.image}
                    alt='poster'
                    height={500}
                    width={400}
                />
            </section>
        </main>
    )
}

export default page