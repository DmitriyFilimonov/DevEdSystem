import { FilterParameter } from '../../../classes/FilterParameter';
import './Filter.css';

interface FilterToRender{
    filterToRender:FilterParameter;
}

function DrawFilter(filterToRender: FilterToRender) {
    return (
        <div className="col">
            <div className="multiselect">
                <div className="selectBox">
                    <select>
                        <option>{filterToRender.filterToRender.FilterType}</option>
                    </select>
                    <div className="overSelect"></div>
                </div>
                <div id="courses" className="listItems">{
                        filterToRender.filterToRender.Content.map(item => (
                           <p> <label>
                                <input type="checkbox"/>{item}</label></p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DrawFilter;