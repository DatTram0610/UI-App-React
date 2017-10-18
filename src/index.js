
import React from 'react';
import ReactDOM from 'react-dom';
import api from './utilities/api';


class Pictures extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      isLoading: false,
      error: null,
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://randomuser.me/api/?results=500')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        else {
          throw new Error('Something went wrong...')
        }

      })
      .then(data =>
        this.setState({ pictures: data.results, isLoading: false })
      )
      .catch(error =>
        this.setState({ error, isLoading: false })
      )
  }


  render() {
    const { pictures, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        {pictures.map(picture =>
          <div key={picture.login.username}>
           <a href="/image"> <img src={picture.picture.medium} /> </a>
          </div>
        )}
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Pictures />,
  document.getElementById('root')
);
