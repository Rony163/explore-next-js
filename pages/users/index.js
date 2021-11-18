import React from 'react';
import Link from 'next/link'

const index = ({ users }) => {
    return (
        <div>
            <h1>This is users page: {users.length}</h1>
            {
                users.map(user => <p key={user.id}>
                    {user.name}
                    <Link href={`users/${user.id}`}>
                        <a>Explore</a>
                    </Link>
                </p>)
            }
        </div>
    );
};

export default index;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return {
        props: { users }
    }
}