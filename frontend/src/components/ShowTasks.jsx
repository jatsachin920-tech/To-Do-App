import './ShowTasks.css';
export default function ShowTasks({ allTasks = [], onDeleteTask }) {
  const bgClasses = ["list-group-item-primary", "list-group-item-success", "list-group-item-danger", "list-group-item-warning", "list-group-item-info"];

  return (
    <div className='screen-wrapper'>
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <ul className="list-group">
            {allTasks.map((task, index) => (
           <li 
              key={index} 
              className={`list-group-item ${bgClasses[index % bgClasses.length]} mb-3 shadow rounded-pill border-0 px-4 d-flex align-items-center`}
           >
              <span className="badge bg-white text-dark rounded-circle me-3 shadow-sm" style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {index + 1}
             </span>
           <span className="fw-bold flex-grow-1 text-start">
              {task}
           </span>
           <button className="btn btn-sm btn-light rounded-circle"
            onClick={() => {
              console.log("Delete button clicked for index:", index);
            onDeleteTask(index)}
          }>Delete</button>
           </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}