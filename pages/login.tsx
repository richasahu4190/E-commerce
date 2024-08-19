import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 

type LoginMail = {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: LoginMail) => {
    const res = await postData(`${server}/api/login`, {
      email: data.email,
      password: data.password
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
                <i className="mr-6"></i> Back to store
              </a>
            </Link>
          </div>

          <div className="w-full mx-auto sm:w-[448px]">
            <h2 className="text-[22px] font-semibold px-[50px] leading-[150%] text-center mb-6">Log in</h2>
            <p className="text-[14px] leading-[165%] text-center mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            
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
              
              <div className="mb-[15px]">
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === 'required' && 
                  <p className="text-red-500 text-sm mt-1">This field is required</p>
                }
              </div>

              <div className="flex justify-between items-center text-sm mb-6">
                <label htmlFor="check-signed-in" className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    name="keepSigned" 
                    id="check-signed-in" 
                    ref={register({ required: false })}
                    className="form-checkbox h-4 w-4 text-yellow-600"
                  />
                  <span>Keep me signed in</span>
                </label>
                <Link href="/forgot-password">
                  <a className="text-yellow-600 hover:underline">Forgot password?</a>
                </Link>
              </div>

              <div className="flex justify-between space-x-4 mb-6">
                <button type="button" className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                  <i className="icon-facebook mr-2"></i>Facebook
                </button>
                <button type="button" className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                  <img src="/images/icons/gmail.svg" alt="gmail" className="h-5 w-5 mr-2"/> Gmail
                </button>
              </div>

              <button type="submit" className="w-full py-3 bg-yellow-500 text-white rounded-md text-sm font-medium hover:bg-yellow-600">Sign in</button>

              <p className="text-center text-sm mt-4">Not a member yet? <Link href="/register"><a className="text-yellow-600 hover:underline">Sign up</a></Link></p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
  
export default LoginPage;
