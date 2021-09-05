import Header from 'components/Header';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
  useEffect(() => {
    const fectchProducts = async () => {
      // const productList = await productApi.getAll();
      // console.log(productList);
    };
    fectchProducts();
  }, []);
  return (
    <div className="App">
      <Header />
      <Route path="/" component={CounterFeature}></Route>
      <Route path="/todos" component={TodoFeature}></Route>
      <Route path="/albums" component={AlbumFeature}></Route>
    </div>
  );
}

export default App;
