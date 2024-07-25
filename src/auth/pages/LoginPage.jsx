import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const signIn = useNavigate();

    const onSignIn = () => {
        signIn('/dc', { replace: true });
    }

    return (
        <div className='flex justify-center'>
            <button
                onClick={onSignIn}
                className='px-4 py-2 mx-2 rounded-lg font-bold bg-white text-blue-900'
                >
                SigIn
            </button>
        </div>
    )
}
