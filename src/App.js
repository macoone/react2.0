import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import MyImage from './ress/pht.jpg'
const array =[" Ahmed Affes"," Student"," Legends never die ✨"]
const arr=["FullName :","Profession:","Bio  :"]
const handalert=(name)=>alert(`Hello Ahmed`)
function App() {
  return (
    <div className="App">
      <div className='cover'></div>
      <div className='box'>
      <img src={MyImage} className='img' alt="prof" />
    <Profile 
    ar={arr}
prof={array}
handalert={handalert}    />

      </div>
     
</div>
    
  );
}

export default App;
