import { getProviders, signIn as SignInToProvider } from 'next-auth/react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'

function signIn({ providers }) {
  const router = useRouter()

  return (
    <div className="">
      <div
        style={{
          background: 'url("/images/bg_login.svg") no-repeat',
          backgroundSize: 'cover',
        }}
        className="flex flex-col md:flex-row md:overflow-auto overflow-hidden"
      >
        <div className="flex flex-row md:flex-col min-h-0 md:min-h-screen justify-between md:justify-start pt-2 pb-2 md:pt-40 md:pb-0 items-center bg-slate-900 px-5 shadow-slate-900 shadow-2xl">
          <img
            src="/images/signin.png"
            alt="insta_icon"
            className="text-white w-14 md:w-24 h-14 md:h-24 animate-pulse"
          />
          <p className="md:text-lg text-sm font-semibold text-white mt-0 md:mt-10">
            Welcome To Instagram
          </p>
          <button
            className="text-white bg-slate-800 rounded-md text-center font-semibold p-2 mt-0 md:mt-20 hidden md:block"
            onClick={() => router.replace('/')}
          >
            Back To Home
          </button>
        </div>
        <div className="flex flex-col justify-center mx-auto items-center min-h-screen min-w-screen py-2">
          <img src="/images/insta_txt.png" alt="insta-logo" className="w-80" />

          <div className="mt-12 mb-40">
            {Object.values(providers).map((provider) => (
              <div key={provider.name} className='flex justify-center flex-col'>
                <button
                  className="p-3 bg-red-600 rounded-lg text-white hover:translate-x-5 transition shadow-lg"
                  onClick={() =>
                    SignInToProvider(provider.id, { callbackUrl: '/' })
                  }
                >
                  Sign in with {provider.name}
                </button>
                <button
                  className="text-white bg-slate-800 rounded-md text-center font-semibold p-2 mt-20 block md:hidden"
                  onClick={() => router.replace('/')}
                >
                  Back To Home
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signIn
