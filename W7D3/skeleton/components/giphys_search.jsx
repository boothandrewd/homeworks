import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);

    this.setState({ searchTerm: '' });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const searchTerm = this.state.searchTerm;
    const giphys = this.props.giphys;

    return (
      <div>
        <form className='search-bar'>
          <label>Search:
            <input onChange={handleChange} value={searchTerm} />
          </label>

          <button onClick={handleSubmit}>Submit</button>
        </form>

        <br />

        <GiphysIndex giphys={giphys} />
      </div>
    );
  }
}

export default GiphysSearch;
