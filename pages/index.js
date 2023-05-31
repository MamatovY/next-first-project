import A from '../components/A'
import Head from 'next/head'
import MainContainer from '../components/mainContainer'

const Index = () => {
    return (
        <>
            <MainContainer keywords={", main page"} title='Главная страница'>
                <div>
                    <h1>
                        Главная страница
                    </h1>
                </div>
            </MainContainer>
        </>
    )
}

export default Index