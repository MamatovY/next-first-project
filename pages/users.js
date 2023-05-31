import { useEffect, useState } from 'react'
import A from '../components/A'
import MainContainer from '../components/mainContainer'
//https://jsonplaceholder.typicode.com/users

const Users = ({ users }) => {

    return (
        <MainContainer title={'Список пользователей'} keywords={", Список пользователей"} >
            <h1>
                Список пользователей
            </h1>

            <ul>
                {users.map(user => {
                    return (
                        <li key={user.id}>
                            <A href={`users/${user.id}`} text={user.name} />
                        </li>
                    )
                })}
            </ul>

        </MainContainer>
    )
}

export default Users

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return { props: { users } };
}