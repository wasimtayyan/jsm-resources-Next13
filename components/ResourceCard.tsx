import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"


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
            <Link href={`/resources/${id}`}>
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

            </Link>
            <CardContent className="flex-between mt-4 p-0">
                <div className="flex-center body-medium gap-1.5 text-white">
                    <Image src='/downloads.svg' alt="download" height={20} width={20} />
                    {downloadNumber}
                </div>
                <Link
                    className="flex-center gap-1.5 text-gradient_purple-blue body-semibold"
                    href={downloadLink}>
                    Download Now
                    <Image src='/arrow-blue.svg' alt="arrow" height={10} width={13} />
                </Link>
            </CardContent>
        </Card>

    )
}

export default ResourceCard