import './App.css';
import useFetch from './Hook/useFetch';

function App() {

//   const [data,setData]=useState([])
//   const [loading,setloading] = useState(false)
//   const [error,seterror] = useState(false)

//   const fetchData=()=>{
//     fetch("https://api.github.com/search/users?q=masai")
//     .then((r)=>r.json()) // using this bcs our link in json link thats why 
//     .then((r)=>{
//       setData(r.items);
//       setloading(false)
//     })
//     .catch((err)=>{
//       setloading(false);
//       seterror(true)
//     });
//   }
// useEffect(()=>{
//   fetchData();
// },[])

   const {data,loading,error} = useFetch("https://api.github.com/search/users?q=masai");


  return (
    <div className="App">
      <h1>fetch Hook</h1>
       {loading && "Loading"}
       {data.length>0 && data.map(item =>{
        return <div key={item.id}>
          <div style={{border: "1px solid black",width: "15%",margin: "0 auto"}}>
          {item.login}
          </div>
         
          </div>
       })}
    </div>
  );
}

export default App;
