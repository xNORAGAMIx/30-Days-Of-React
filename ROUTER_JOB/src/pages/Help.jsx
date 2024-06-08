import { Form, useActionData } from 'react-router-dom'

const Faq = () => {
    return (
      <div className="faq">
        <h3>Frequently Asked Questions</h3>
  
        <div className="question">
          <p><strong>Lorem ipsum dolor sit amet.</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
        </div>
  
        <div className="question">
          <p><strong>Lorem ipsum dolor sit amet.</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
        </div>
  
        <div className="question">
          <p><strong>Lorem ipsum dolor sit amet.</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
        </div>
  
        <div className="question">
          <p><strong>Lorem ipsum dolor sit amet.</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
        </div>
  
        <div className="question">
          <p><strong>Lorem ipsum dolor sit amet.</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
        </div>
  
      </div>
    )
  }


const Contact = () => {
  const data = useActionData();
    return (
      <div className="contact" action="/help/contact">
        <h3>Contact Us</h3>
        <Form method='post'>
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
          </label>
          <button>Submit</button>

          {data && data.error && <p>{data.error}</p>}
        </Form>
      </div>
    )
  }


export {Faq, Contact}