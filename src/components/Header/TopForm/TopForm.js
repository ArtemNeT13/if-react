import React, {useState} from 'react';
import './TopForm.css';

const TopForm = ({setFindValue}) => {
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
                        <label id="lable-value">2 Adults — 0 Children — 1 Room</label>
                    </div>
                    <div className="filter-input">
                        <input id="filter-input-adults"
                               type="text"
                               name="filter-adults"
                               value="2 Adults"/>
                        <span>—</span>
                        <input id="filter-input-children"
                               type="text"
                               name="filter-children"
                               className="filter-children"
                               value="0 Children"/>
                        <span>—</span>
                        <input id="filter-input-rooms"
                               type="text"
                               name="filter-room"
                               value="1 Room"/>
                    </div>


                    <div className="filter-input-parameters">
                        <div className="filter-values">

                            <div className="filter-values-members">
                                <p>Adults</p>
                                <div id="counter-adults-minus" className="color-value-active">-</div>
                                <input type="text" id="adults-value" value="2"/>
                                <div id="counter-adults-plus" className="color-value-active">+</div>
                            </div>

                            <div className="filter-values-members">
                                <p>Children</p>
                                <div id="counter-children-minus" className="color-value-inactive">-</div>
                                <input type="text" id="children-value" value="0"/>
                                <div id="counter-children-plus" className="color-value-active">+</div>
                            </div>

                            <div className="filter-values-members">
                                <p>Rooms</p>
                                <div id="counter-rooms-minus" className="color-value-inactive">-</div>
                                <input type="text" id="rooms-value" value="0"/>
                                <div id="counter-rooms-plus" className="color-value-active">+</div>
                            </div>
                        </div>
                        <div id="children-select" className="parameters-children-age">
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