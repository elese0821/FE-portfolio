import './App.css'

function App() {
    const moving = (url: string) => {
        const href = /^https?:\/\//i.test(url) ? url : `https://${url}`;
        window.open(href, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <div className='text-4xl'>
                <p className=''>FE PortFolio</p>
            </div>
            <button
                onClick={() => moving("admin-dashboard-wy.vercel.app")}
            >
                B2B 관리자페이지 포트폴리오
            </button>
        </>
    )
}

export default App
