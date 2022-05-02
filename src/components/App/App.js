
import './App.css';
import Header from '../Header/Header';
import data from '../Slider/dataSlider';
import {useState} from 'react';
import ShowDataBlock from '../ShowDataBlock/ShowDataBlock';

const App = () => {
    const [findValue, setFindValue] = useState([]);
    return (
        <div className="App">
            <Header setFindValue={setFindValue}/>
            {findValue.length > 0 && <ShowDataBlock title={`Available hotels`} data={findValue}/>}
            <ShowDataBlock title={`Homes guests loves`} data={data}/>
        </div>
    );
}

export default App;
