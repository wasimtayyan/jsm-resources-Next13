interface Props {
    category: string,
    query: string
}

const Header = ({ category, query }: Props) => {
    if (query && category) {
        return (<h1 className="heading3 self-start text-white-800" >
            search results for {`"${query}"`} in <span className="capitalize" >{category}</span>
        </h1>)
    }
    if (query) {
        return (
            <h1 className="heading3 self-start text-white-800" >
                search results for <span className="capitalize" >{`"${query} "`}</span>
            </h1>
        )
    }
    if (category) {
        return (
            <h1 className="heading3 self-start text-white-800 capitalize" >
                {category}
            </h1>
        )
    }
    // return (
    //     <h1 className="heading3 self-start text-white-800">No Result </h1>
    // )
}

export default Header