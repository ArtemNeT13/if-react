import React, {useEffect, useState} from 'react';
import './TopForm.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const maxAdults = 30;
const minAdults = 0;
const maxChildren = 10;
const minChildren = 0;
const maxRooms = 30;
const minRooms = 0;

const addSelectYearChildren = () => {
    const selectAge = document.getElementById("children-select");
    const selectAgeChild = document.createElement('select');
    const maxAge = 17;
    for (let year = 0; year <= maxAge; year++){
        selectAgeChild.innerHTML += `<option value=${year}>${year} years old</option>`
    }
    selectAge.appendChild(selectAgeChild);
}

const removeSelectYearChildren = () => {
    const selectAge = document.getElementById("children-select");
    let removeChildSelector = selectAge.lastChild;
    selectAge.removeChild(removeChildSelector);
}

const useClick = (defaultCount) =>{
    const [count, setCount] = useState(defaultCount);
        const handleClickMinus = () => {
            setCount(count - 1);
        };
        const handleClickPlus = () => {
            setCount(count + 1);
        };
        return [count, handleClickMinus, handleClickPlus]
};

const TopForm = ({setFindValue}) => {
    const [countAdults, adultsClickMinus, adultsClickPlus] = useClick(2);
    const [countChildren, childrenClickMinus, childrenClickPlus]= useClick(0);
    const [countRooms, roomsClickMinus,roomsClickPlus]= useClick(0);

    const [startDate, setStartDate] = useState(new Date());
    const [outDate, setOutDate] = useState(new Date());
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
                        <DatePicker
                            selected={startDate} onChange={(date) => setStartDate(date)}
                            className="col-sm-6"
                            type="text"
                            name="data-in"
                            placeholder="Tue 15 Sept"/>
                        <span>—</span>
                        <DatePicker
                            selected={outDate} onChange={(date) => setOutDate(date)}
                            className="col-sm-6"
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
                               value={countAdults + ' Adults'}/>
                        <span>—</span>
                        <input id="filter-input-children"
                               type="text"
                               name="filter-children"
                               className="filter-children"
                               value={countChildren + ' Children'}/>
                        <span>—</span>
                        <input id="filter-input-rooms"
                               type="text"
                               name="filter-room"
                               value={countRooms + ' Rooms'}/>
                    </div>


                    <div className="filter-input-parameters">
                        <div className="filter-values">
                            <div className="filter-values-members">
                                <p>Adults</p>
                                <button
                                    disabled={countAdults <= minAdults}
                                    onClick={event =>{
                                        event.preventDefault();
                                        adultsClickMinus();
                                    }}
                                    id='counter-adults-minus'
                                    className={countAdults > 0 ? "color-value-active" : "color-value-inactive"}>-</button>
                                <input type="text" id="adults-value" value={countAdults}/>
                                <button
                                    disabled={countAdults >= maxAdults}
                                    onClick={event =>{
                                        event.preventDefault();
                                        adultsClickPlus();
                                    }}
                                    id="counter-adults-plus"
                                    className={countAdults < maxAdults ? "color-value-active" : "color-value-inactive"}
                                >+</button>
                            </div>
                            <div className="filter-values-members">
                                <p>Children</p>
                                <button
                                    disabled={countChildren <= minChildren}
                                    onClick={event => {
                                        event.preventDefault();
                                        removeSelectYearChildren();
                                        childrenClickMinus();
                                    }}
                                    id="counter-children-minus"
                                    className={countChildren > 0 ? "color-value-active" : "color-value-inactive"}>-</button>
                                <input type="text" id="children-value" value={countChildren}/>
                                <button
                                    disabled={countChildren >= maxChildren}
                                    onClick={event => {
                                        event.preventDefault();
                                        addSelectYearChildren();
                                        childrenClickPlus();
                                    }}
                                    id="counter-children-plus"
                                    className={countChildren < maxChildren ? "color-value-active" : "color-value-inactive"}
                                >+</button>
                            </div>
                            <div className="filter-values-members">
                                <p>Rooms</p>
                                <button
                                    disabled={countRooms <= minRooms}
                                    onClick={event => {
                                        event.preventDefault();
                                        roomsClickMinus();
                                    }}
                                    id="counter-rooms-minus"
                                    className={countRooms > 0 ? "color-value-active" : "color-value-inactive"}
                                >-</button>
                                <input
                                    type="text"
                                    id="rooms-value"
                                    value={countRooms}/>
                                <button
                                    disabled={countRooms >= maxRooms}
                                    onClick={event => {
                                        event.preventDefault();
                                        roomsClickPlus();
                                    }}
                                    id="counter-rooms-plus"
                                    className={countRooms < maxRooms ? "color-value-active" : "color-value-inactive"}
                                >+</button>
                            </div>
                        </div>
                        <div
                            id="children-select"
                            className={countChildren > minChildren ? "parameters-children-age": "parameters-children-age-none"}
                        >
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