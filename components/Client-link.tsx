"use client"
import Link from "next/link"
import { writeClient } from "@/sanity/lib/client"

interface Props {
    children: React.ReactNode,
    id: string,
    downloadNumber: number
}



const Client = ({ children, id, downloadNumber }: Props) => {
    let newViews = downloadNumber
    const handleClick = () => {
        newViews++
        writeClient
            .patch(id) // Replace with your document id
            .set({ views: newViews }) // Specify the path to the field you want to update
            .commit() // Don't forget to commit the changes
            .then(updatedDocument => {
                console.log('Updated document:', updatedDocument)
            })
            .catch(err => {
                console.error('Update failed:', err.message)
            })

    }
    return (
        <Link
            onClick={handleClick}
            href={`/resources/${id}`} >
            {children}
        </Link>
    )
}

export default Client