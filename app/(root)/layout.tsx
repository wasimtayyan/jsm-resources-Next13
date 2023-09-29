import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import React from "react"

type children = {
    children: React.ReactNode
}

const layout = ({ children }: children) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default layout