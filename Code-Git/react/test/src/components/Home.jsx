import React from 'react';

const Home = ({name, id, color}) => {
    return (
        <div style={{color}}>
            Hello, {name}, {id}
        </div>
    );
};

export default Home;