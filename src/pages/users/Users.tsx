
import DataTable from '../../components/dataTable/DataTable'
import './users.scss'
const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>add new user</button>
      </div>
      <div className='dataChart'>
        <DataTable/>
      </div>
    </div>
  )
}

export default Users