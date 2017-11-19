let contacts = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'http://images6.fanpop.com/image/photos/33100000/' +
               'CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'img/yoda-sat-wars-animated-gif-2.gif'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
    }
];

class Contact extends React.Component {

    render() {
        return(
            <li className="contacts-list__contact">
                <img className="contacts-list__image" src={this.props.image} alt="изображение контакта" width="80" height="80"/>
                <div className="contacts-list__info">
                    <div className="contacts-list__title">{this.props.name}</div>
                    <div className="contacts-list__number">{this.props.phone}</div>
                </div>
            </li>
        );
    }

}

class ContactsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayedContacts: contacts
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        let searchQuery = e.target.value.toLowerCase();

        let displayedContacts = contacts.filter((el) => {
            let searchValue = el.name.toLowerCase();

            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts
        });

    }

    render() {
        return(
            <div className="contacts page__contacts">
                <input className='search-field' onChange={this.handleSearch}/>
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map((el) => {
                            return (
                                <Contact key={el.id}
                                         name={el.name}
                                         phone={el.phoneNumber}
                                         image={el.image}/>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

}

ReactDOM.render(
    <ContactsList/>,
    document.querySelector('#content')
);