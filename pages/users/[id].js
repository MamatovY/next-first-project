import { useRouter } from 'next/router'
import A from '../../components/A';
import styles from '../../style/user.module.scss'
import MainContainer from '../../components/mainContainer';

const User = ({ user }) => {
    const { query } = useRouter()
    console.log(user);

    return (
        <MainContainer title={user.name} keywords={`, ${user.name}`}>
            <div className={styles.user}>
                <h1>
                    Пользователь с id {query.id}
                    <br />
                    Имя пользователя - {user.name}
                </h1>
            </div>
        </MainContainer>

    )
}

export default User

export const getServerSideProps = async ({ params }) => {
    console.log(params.id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
    return { props: { user } };
};