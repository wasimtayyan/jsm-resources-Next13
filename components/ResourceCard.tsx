import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Client from "./Client-link"


interface Props {
    title: string,
    id: string,
    image: string,
    downloadNumber: number,
    downloadLink: string
}

const ResourceCard = ({ title, id, image, downloadLink, downloadNumber }: Props) => {
    return (
        <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
            <Client
                downloadNumber={downloadNumber}
                id={id}>

                <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                    <div className="h-fit w-full">
                        <Image
                            className="h-full rounded-md object-cover"
                            src={image}
                            alt="poster"
                            height={440}
                            width={384}
                        />
                    </div>
                    <CardTitle className="text-white pargraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>

                </CardHeader>
            </Client>
            <CardContent className="flex-between mt-4 p-0">
                <div className="flex-center body-medium gap-1.5 text-white">
                    <Image src='/downloads.svg' alt="download" height={20} width={20} />
                    {downloadNumber}
                </div>
                <Client
                    id={id}
                    downloadNumber={downloadNumber}
                >
                    <Image
                        className="text-gradient_purple-blue"
                        src='/arrow-blue.svg' alt="arrow" height={20} width={20} />
                </Client>
            </CardContent>
        </Card>

    )
}

export default ResourceCard