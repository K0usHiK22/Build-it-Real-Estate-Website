import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6fab283a-5334-45ff-bf05-7d32b9a37ca5");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };

    return (
        <div className='text-center p-6 py-15 lg:px-32 w-full overflow-hidden mt-3 mx-auto bg-[var(--Contactus-page-bg)]' id='Contact'>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium mb-2 text-center">
                Have any Questions?
            </h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center decoration-1 under">Contact <span className='underline underline-offset-4 decoration-1 under font-light'>us</span></h2>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Enter Your Name' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Enter Your Email' required />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Your message here'></textarea>
                </div>
                <button className='bg-transparent border border-black text-black hover:bg-blue-500 hover:text-white transition duration-400 cursor-pointer py-2 px-12 mb-10 rounded'>
                    {result ? result : "Send message"}
                </button>
            </form>

        </div>
    )
}

export default Contact
