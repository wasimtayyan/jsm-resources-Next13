import { Skeleton } from "@/components/ui/skeleton"


const loading = () => {
    return (
        <main className="flex-center paddings mx-auto w-full max-w-screen-2xl ">
            <section className="flex-center mt-10 w-full sm:mt-20 flex-col sm:flex-row">

                <div className="w-full flex flex-colsm:flex-row">
                    <Skeleton className="h-[100px] py-2  sm:w-[356px] bg-gray-500" />
                    <Skeleton className="h-[300px] py-2  sm:w-[356px] bg-gray-500" />
                    <Skeleton className="h-[100px] py-1  sm:w-[356px] bg-gray-500" />
                </div>

                <div className="rotate-0 sm:rotate-12 mt-12 order-1">

                    <Skeleton className="h-[500px] w-full sm:w-[356px] bg-gray-500" />
                </div>
            </section>
        </main>
    )
}

export default loading