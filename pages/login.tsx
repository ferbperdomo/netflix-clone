import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import useAuth from "../hooks/useAuth"

interface Inputs {
    email: string
    password: string
}

function Login() {
    const [login, setLogin] = useState(false)
    const { signIn, signUp } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (login) {
            await signIn(data.email, data.password)
        } else {
            await signUp(data.email, data.password)
        }
    }

    return <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Head>
            <title>Netflix</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Image
            src="https://rb.gy/p2hphi"
            layout="fill"
            className="-z-10 !hidden opacity-60 sm:!inline"
            objectFit="cover"
        />

        <img
            src="https://rb.gy/ulxxee"
            className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
            width={150}
            height={150}
        />

        <form onSubmit={handleSubmit(onSubmit)}
            className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        >
            <h1 className="text-4xl font-semibold">Iniciar sesión</h1>
            <div className="space-y-4">
                <label className="inline-block w-full">
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="input"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <p className="p-1 text-[13px] font-light  text-orange-500">Escribe un correo electrónico válido.</p>}
                </label>
                <label className="inline-block w-full">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="input"
                        {...register('password', { required: true })}
                    />
                    {errors.password &&
                        <p className="p-1 text-[13px] font-light  text-orange-500">
                            La contraseña debe tener entre 4 y 10 caracteres.
                        </p>
                    }
                </label>
            </div>
            <button
                className="w-full rounded bg-[#E50914] py-3 font-semibold"
                type="submit"
                onClick={() => setLogin(true)}
            >
                Iniciar sesión
            </button>
            <div className="text-[gray]">
                ¿Todavía sin cuenta? Rellena el formulario y {'  '}

                <button
                    className="text-white hover:underline"
                    type="submit"
                    onClick={() => setLogin(false)}

                >
                    haz click aquí.
                </button>
                <p className="p-1 text-[13px] font-light">
                    O usa: clonetflix@gmail.com - clonetflix.
                </p>
            </div>
        </form>

    </div>
}
export default Login