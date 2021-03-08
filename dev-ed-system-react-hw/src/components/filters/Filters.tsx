import { CourseFilter } from '../../classes/CourseFilter';
import { FilterParameter } from '../../classes/FilterParameter';
import DrawFilter from './filter/DrawFilter';
import './Filters.css';

const anyStringArray: string[] = ["курс 1", "курс 2", "курс 3"];
const anyFilter: FilterParameter[] = [new CourseFilter(anyStringArray)];

function Filters() {
    return (
        <div className="row align-items-start filters">{
                anyFilter.map(filter => (
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