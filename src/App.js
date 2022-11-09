
import ImageList from './component/ImageList';
import SearchBar from './component/SearchBar';

function App() {
  return (
    <div className="ui container" style={{marginTop: '20px'}}>
      <SearchBar />
      <ImageList />
    </div>
  );
}

export default App;
