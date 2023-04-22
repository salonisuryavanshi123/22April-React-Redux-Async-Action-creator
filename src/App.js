//1. Import Area
import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import { getUserData } from './actionCreators';


//2. Defination Area
function App() {
  //2.1 Hooks Area
  let dispatch = useDispatch();

  let storeObjectData = useSelector(store=>store)

  //2.2 Function Defination Area


  //2.3 Return Statement
  return (
    <>
      {console.log(storeObjectData)}
      <button onClick={()=>{ dispatch(getUserData()) }} style={{width:"100px",height:"50px",borderRadius:"10px",fontSize:"15px",marginTop:"25px",marginLeft:"50px"}}>Call the API</button>
      <ul>
        {
          storeObjectData && storeObjectData.map((cv,idx,arr)=>{
            return <li key={idx}>{cv.first_name}</li>
          })
        }
      </ul>
    </>
  );
}

//3. Export Area
export default App;
