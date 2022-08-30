import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { fetchData, nextImage, prevImage, setArtId, reset } from './dataSlice'

const mapStateToProps = (state) => ({
  artId: state.data.artId
})

function App(props) {
  // your logic goes here!
  const dispatch = useDispatch();
  const currentState = useSelector(state => state.data)
  const renderImage = () => {
    return currentState.apiData ?
      <img src={currentState.apiData.primaryImage} /> :
      <h3>not found</h3>
  }
  useEffect(() => {
    dispatch(fetchData())
  }, [props.artId, dispatch])
  return (
    <div className="App">
      <div>
        <button onClick={() => { dispatch(fetchData()) }}>Trigger Thunk</button>
        <button onClick={() => { dispatch(reset()) }}>Clear</button>
        <button onClick={() => { dispatch(nextImage()) }}>Next</button>
        <button onClick={() => { dispatch(prevImage()) }}>Back</button>
      </div>
      <div>
        <h1>{(currentState.artId)}</h1>
      </div>
      <input value={currentState.artId} onChange={(e) => { dispatch(setArtId(e.target.value)) }} />
      <div>
        {/* Once you have plugged everything in, render the image here! */}
      </div>
      <div>
        {
          renderImage()
        }
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);
