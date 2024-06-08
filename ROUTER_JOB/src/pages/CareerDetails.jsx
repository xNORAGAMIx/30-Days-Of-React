import { useLoaderData } from "react-router-dom";

const CareerDetails = () => {

    //const { id } = useParams();
    const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque perferendis quidem placeat commodi optio maxime iusto accusantium consequatur quam illum non obcaecati est repellendus, saepe doloribus totam? Distinctio, eveniet.</p>
      </div>
    </div>
  )
}

export default CareerDetails;
