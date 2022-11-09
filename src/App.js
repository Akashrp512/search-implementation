
import React from 'react';
import ImageList from './component/ImageList';
import SearchBar from './component/SearchBar';

class App extends React.Component {

 onSearchSubmit(term) {
  console.log(term);
 }


  render() {
  return (
    <div className="ui container" style={{marginTop: '20px'}}>
      <SearchBar  onSubmit={this.onSearchSubmit} />
      <ImageList />
    </div>
  );
}
}

export default App;
