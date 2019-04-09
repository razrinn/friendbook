import React, {
    Component
} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            people: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({
                people: users
            }));
    }

    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value
        });

    }

    render() {
        const { people, searchField } = this.state;
        const filteredFriend = people.filter(people => {
            return people.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (people.length === 0) {
            return <h1 className="tc f1">Loading . . .</h1>
        }
        else {
            return (
                <div className="tc" >
                    <h1 className="f1"> Frienbooks </h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList people={filteredFriend} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}
export default App;
