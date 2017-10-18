import React from 'react';

import api from '../utilities/api';


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

    api.getPictures()
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
            <img src={picture.picture.medium} alt="Hello" />
          </div>
        )}
      </div>
    );
  }
}

export default Pictures;