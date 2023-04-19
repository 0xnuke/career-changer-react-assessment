import React from 'react';
import Layout from './Layout';
import Pic from './pic/Group 1.png'

const render =
    <div className='owner-container'>
        <h1>James - Group X - 61</h1>
        <img src={Pic} />
        <h4>Short Biography:</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        <p>aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis</p>
        <p>aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
        <p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </div>

const Owner = () => {
    return (
        <Layout>
            {render}
        </Layout>
    )
}

export default Owner;