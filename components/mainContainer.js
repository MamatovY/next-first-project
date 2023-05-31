import Head from "next/head"
import A from "./A"


const MainContainer = ({ children, keywords, title }) => {

    return (
        <>
            <Head>
                <meta keywords={`Главная, next${keywords ? keywords : ''}`}></meta>
                <title>{title}</title>
            </Head>
            <nav className="navbar">
                <A href={'/'} text={'Главная'} />
                <A href={'/users'} text={'Пользователи'} />
            </nav>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainContainer