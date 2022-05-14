import React, {useEffect, useState} from 'react';
import './TopForm.css';

const max = 5;
const min = 0;

function HelloWorldComponent() {
   
        return <option value={year}>{year} years old</option>;

}



const useClick = (defaultCount) =>{
    const [count, setCount] = useState(defaultCount);
    if (count >= min && count <=max){
        const handleClickMinus = () => {
            setCount(count - 1);
        };
        const handleClickPlus = () => {
            setCount(count + 1);
        };
        return [count, handleClickMinus, handleClickPlus]
    } else{
        // ?????
    }
};


const TopForm = ({setFindValue}) => {
    const [countAdults, adultsClickMinus, adultsClickPlus] = useClick(2);
    const [countChildren, childrenClickMinus, childrenClickPlus]= useClick(0);
    const [countRooms, roomsClickMinus,roomsClickPlus]= useClick(0);

    const [query, setQuery] = useState();

    const handleSearch = (e) => {
        e.preventDefault();
        fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${query}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setFindValue(result);
                },
            )
    }




    return (
        <div className="form-search col-sm-12">
            <form className="header-search col-xl-12 col-sm-12">
                <div className="search-block col-sm-12">
                    <div className="label-block">
                        <img src={require("../../../images/Vector.svg").default} alt="vector"/>
                        <label>Your destination or hotel name</label>
                    </div>
                    <div className="input-block">
                        <input
                            id="searchHeader" type="text" name="search-input" placeholder="New York"
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </div>


                </div>
                <div className="search-data col-sm-12">
                    <div className="data-label">
                        <label>Check-in — Check-out</label>
                    </div>

                    <div className="data-label-2">
                        <div className="col-sm-6">Check-in data</div>
                        <div className="col-sm-6">Check-out data</div>
                    </div>

                    <div className="data-block col-sm-12">
                        <input className="col-sm-6"
                               type="text"
                               name="data-in"
                               placeholder="Tue 15 Sept"/>
                        <span>—</span>
                        <input className="col-sm-6"
                               type="text"
                               name="data-out"
                               placeholder="Sat 19 Sept"/>
                    </div>
                </div>


                <div className="filter-block col-sm-12">
                    <div className="filter-label">
                        <label id="lable-value">{countAdults} Adults — {countChildren} Children — {countRooms} Room</label>
                    </div>
                    <div className="filter-input">
                        <input id="filter-input-adults"
                               type="text"
                               name="filter-adults"
                               value={countAdults}/>
                        {/*как добавить текст в value*/}
                        <span>—</span>
                        <input id="filter-input-children"
                               type="text"
                               name="filter-children"
                               className="filter-children"
                               value={countChildren}/>
                        <span>—</span>
                        <input id="filter-input-rooms"
                               type="text"
                               name="filter-room"
                               value={countRooms}/>
                    </div>


                    <div className="filter-input-parameters">
                        <div className="filter-values">



                            <div className="filter-values-members">
                                <p>Adults</p>
                                <div
                                    onClick={adultsClickMinus}
                                    id='counter-adults-minus'
                                    className={countAdults > 0 ? "color-value-active" : "color-value-inactive"}>-</div>
                                <input type="text" id="adults-value" value={countAdults}/>
                                <div
                                    onClick={adultsClickPlus}
                                    id="counter-adults-plus"
                                    className={countAdults < max ? "color-value-active" : "color-value-inactive"}
                                >+</div>
                            </div>



                            <div className="filter-values-members">
                                <p>Children</p>
                                <div
                                    onClick={childrenClickMinus}
                                    id="counter-children-minus"
                                    className={countChildren > 0 ? "color-value-active" : "color-value-inactive"}>-</div>
                                <input type="text" id="children-value" value={countChildren}/>
                                <div
                                    onClick={childrenClickPlus}
                                    id="counter-children-plus"
                                    className={countChildren < max ? "color-value-active" : "color-value-inactive"}
                                >+</div>
                            </div>



                            <div className="filter-values-members">
                                <p>Rooms</p>
                                <div
                                    onClick={roomsClickMinus}
                                    id="counter-rooms-minus"
                                    className={countRooms > 0 ? "color-value-active" : "color-value-inactive"}
                                >-</div>
                                <input
                                    type="text"
                                    id="rooms-value"
                                    value={countRooms}/>
                                <div
                                    onClick={roomsClickPlus}
                                    id="counter-rooms-plus"
                                    className={countRooms < max ? "color-value-active" : "color-value-inactive"}
                                >+</div>


                            </div>
                        </div>

                        <div
                            id="children-select"
                            className={countChildren > min ? "parameters-children-age": "parameters-children-age-none"} >
                            <p>What is the age of the child you’re travelling with?</p>
                        </div>

                    </div>


                </div>
                <div className="filter-input-2 col-sm-12">
                    <div className="col-sm-6">
                        <span>Adults<p>2</p></span>
                    </div>

                    <div className="col-sm-6">
                        <span>Children<p>0</p></span>
                    </div>

                    <div className="col-sm-6">
                        <span>Rooms<p>1</p></span>
                    </div>
                </div>
                <div className="header-button col-sm-12">
                    <button onClick={handleSearch} className="button-blue ">Search</button>
                </div>
            </form>
        </div>

    );
}

export default TopForm;