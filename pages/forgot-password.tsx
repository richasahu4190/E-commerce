import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 

type ForgotMail = {
  email: string;
}

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: ForgotMail) => {
    const res = await postData(`${server}/api/login`, {
      email: data.email,
    });

    console.log(res);
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="max-w-[380px] mx-auto px-4 sm:max-w-[650px] md:max-w-[980px] lg:max-w-[1280px]">
          <div className="mb-8 sm:mb-12 py-8 sm:py-12">
            <Link href="/products">
              <a className="text-black text-[13px] font-semibold sm:text-[14px]">
                <i className="mr-6"></i> Back to shop
              </a>
            </Link>
          </div>

          <div className="w-full mx-auto sm:w-[448px]">
            <h2 className="text-[22px] font-semibold px-[50px] leading-[150%] text-center mb-6">Forgot your password?</h2>
            <p className="text-[14px] leading-[165%] text-center mb-6">Enter your email or phone number and recover your account</p>
            
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-[15px]">
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                  placeholder="Email" 
                  type="text" 
                  name="email"
                  ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === 'required' && 
                  <p className="text-red-500 text-sm mt-1">This field is required</p>
                }

                {errors.email && errors.email.type === 'pattern' && 
                  <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
                }
              </div>

              <button type="submit" className="w-full py-3 bg-yellow-500 text-white rounded-md text-sm font-medium hover:bg-yellow-600">Reset password</button>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default ForgotPassword;
