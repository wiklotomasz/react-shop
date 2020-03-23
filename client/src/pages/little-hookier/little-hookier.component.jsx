import React, {useState, useEffect} from 'react';


const UseEffectExample = () => {
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (searchQuery.length > 0) {
            console.log('searchQuery', searchQuery);
            const fetchFunc = async () => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
                const resJson = await response.json();
                setUser(resJson[0]);
            }
    
            fetchFunc();
        }

    }, [searchQuery]);

    return (
        <div>
            <h1>{user ? user.name : 'Didn\'t find a name'}</h1>
            <input type="search" onChange={event => setSearchQuery(event.target.value)} />
        </div>
    )
}

const UseStateExample = () => {
    const [name, setName] = useState('Tomasito2');

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => setName('Elowunia')}>Change name to Elowunia</button>
        </div>
    )
}

const Wrapper = () => {
    return (
        <div>
            <UseStateExample />
            <br/><br/><br/>
            <UseEffectExample />
        </div>
    )
}

export class HookierPage extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'Tomasito'
        };
    }

    render() {
        return (
            <div>Little Hookier {this.state.name}</div>
        )
    }
};

export default Wrapper;