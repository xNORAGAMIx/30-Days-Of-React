const careerDetails = async ({params}) => {
    const { id } = params

    const res = await fetch('http://localhost:4000/careers/' + id);

    if(!res.ok){
        throw Error('Could not find that career');
    }

    return res.json();
}

export default careerDetails