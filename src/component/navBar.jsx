import { useNavigate } from "react-router-dom"

function outlet() {
    const navigate = useNavigate()
    return (
        <>
            <nav className='bg-black w-screen h-[80px]'>
                <button id='logo' className="bg-zinc-900 text-cyan-500 w-[200px] h-[100%]"
                    onClick={() => {
                        navigate('/')
                    }}>로고</button>
            </nav>
        </>
    )
}

export default outlet
