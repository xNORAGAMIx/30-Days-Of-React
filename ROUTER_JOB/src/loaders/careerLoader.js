export const careerLoader = async () => {
    const res = await fetch('http://localhost:4000/careers');

    if(!res.ok){
        throw Error('Could not fetch that career');
    }
    
    return res.json()
}