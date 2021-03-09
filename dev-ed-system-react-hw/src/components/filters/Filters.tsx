import { CourseFilter } from '../../classes/CourseFilter';
import { FilterParameter } from '../../classes/FilterParameter';
import DrawFilter from './filter/DrawFilter';
import './Filters.css';
import { HomeworkPageModel } from '../../interfaces/HomeworkPageModel';
import { GroupFilter } from '../../classes/GroupFilter';

interface DrawFilterAttributes {
    filterParameters: FilterParameter[];
}

function Filters(attributes: DrawFilterAttributes) {
    return (
        <div className="row align-items-start filters">{
            attributes.filterParameters.map(filter => (
                <DrawFilter filterToRender={filter}></DrawFilter>
            ))
        }
            <div className="col">
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="поиск по тегам"></input>
                <datalist id="datalistOptions">
                </datalist>
            </div>
        </div>
    )
}

export default Filters;