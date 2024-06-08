import { useLoaderData, Link } from "react-router-dom"

const Career = () => {
    const careers = useLoaderData()
    return(
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>  
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    )
}

export default Career