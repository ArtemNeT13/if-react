import './App.css';
import Header from '../Header/Header';
import {useEffect, useState} from 'react';
import ShowDataBlock from '../ShowDataBlock/ShowDataBlock';

const App = () => {
    const [findValue, setFindValue] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                },
            ).catch(error => console.log(error))
            .finally(setLoading(false))
    }, [])

    return (
        <div className="App">
            <Header setFindValue={setFindValue}/>
            {findValue.length > 0 && <ShowDataBlock title={`Available hotels`} data={findValue}/>}
            {!loading ? <ShowDataBlock title={`Homes guests loves`} data={data}/> : <p> Loading...</p>}
        </div>
    );
}

export default App;
