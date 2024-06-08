import { useRouteError, Link } from "react-router-dom"

function CareerError() {
    const error = useRouteError();
  return (
    <div className="career-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default CareerError
