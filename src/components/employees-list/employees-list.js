import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Alex C." salary={3800}/>
            <EmployeesListItem name="John M." salary={300}/>
            <EmployeesListItem name="Mike L." salary={5000}/>
        </ul>
    )
}

export default EmployeesList;