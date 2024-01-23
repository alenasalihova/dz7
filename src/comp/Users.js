import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class Users extends Component {
    state = { 
        filterId: '',
        arrUsers: [   
            {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz'},
            {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv'},
            {id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net'},
            {id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org'},
            {id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca'},
            {id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info'},
            {id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz'},
            {id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me'},
            {id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io'},
            {id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz'}
            ]
    }
    deleteUser = (e) => {
        this.setState({arrUsers: this.state.arrUsers.filter((el, i) => i !==e )})
    }

    handleIdChange = (e) => {
        this.setState({ filterId: e.target.value });
    }

    render () {
        const filteredUsers = this.state.arrUsers.filter(user =>
            user.id.toString().includes(this.state.filterId)
        );

        return (
            <div>
                <h4>Users</h4>
                <input
                    type="text"
                    placeholder="Фільтр за ID"
                    value={this.state.filterId}
                    onChange={this.handleIdChange}
                />

                {filteredUsers.map((user, i) => (
                    <div key={i}>
                        {user.id} - {user.name} - {user.username} - {user.email}
                        <button onClick={() => this.deleteUser(i)}>Del</button>
                    </div> 
                ))}
            </div>
        );
    }
};

Users.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
};