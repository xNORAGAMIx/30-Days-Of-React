import { redirect } from "react-router-dom";

const actionContact = async({ request }) =>{

    console.log(request);

    const data = await request.formData();

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    console.log(submission);

    if(submission.message.length < 10){
        return {error: 'Message must be over 10 characters long'};
    }

    return redirect('/')
}


export default actionContact