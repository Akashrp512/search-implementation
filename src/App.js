import React from 'react';
import unsplash from './api/unsplash';
import ImageList from './component/ImageList';
import SearchBar from './component/SearchBar';



class App extends React.Component {

  state= { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{  //first argument is address and second is object
     params: {query: term}
      });
     this.setState({
      images: response.data.results
     });
 };


  render() {
  return (
    <div className="ui container" style={{marginTop: '20px'}}>
      <SearchBar  onSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images}/>
    </div>
  );
}
}

export default App;
