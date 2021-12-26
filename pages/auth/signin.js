import { getProviders, signIn as SignInToProvider } from 'next-auth/react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'

function signIn({ providers }) {
  const router = useRouter()

  return (
    <div
      style={{
        background: 'url("/images/bg_login.svg") no-repeat',
        backgroundSize: 'cover',
      }}
      className="flex"
    >
      <div className="flex flex-col min-h-screen justify-start pt-40 items-center bg-slate-900 px-5 shadow-slate-900 shadow-2xl">
        <img
          src="/images/signin.png"
          alt="insta_icon"
          className="text-white w-24 h-24 animate-pulse"
        />
        <p className="text-lg font-semibold text-white mt-10">
          Welcome To Instagram
        </p>
        <button
          className="text-white bg-slate-800 rounded-md text-center font-semibold p-2 mt-20"
          onClick={() => router.replace('/')}
        >
          Back To Home
        </button>
      </div>
      <div className="flex flex-col justify-center mx-auto items-center min-h-screen min-w-screen py-2">
        <img src="/images/insta_txt.png" alt="insta-logo" className="w-80" />

        <div className="mt-12 mb-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-red-600 rounded-lg text-white hover:translate-x-5 transition shadow-lg"
                onClick={() =>
                  SignInToProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
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
