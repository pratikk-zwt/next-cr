import Link from 'next/link'

export default function Users(props) {
  const listUsers = props.data.map((item, key) => {
        return (
          <tr key={key}>
		  <td>
                {item.id}
            </td>
            <td>
                {item.name}
            </td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td>{item.created}</td>
            <td>
              <Link href={`user/${item.id}`}><a className="btn">Edit</a></Link>
              <a className="btn" onClick={(e) => props.deleteAction(e,item.id)}>Delete</a>
            </td>
          </tr>
        );
      });
  return (
  <>
          <h1>Users</h1>
		  <Link href="/user/add"><a className="btn">Add</a></Link>
          <table className="tblList">
            <thead>
              <tr>
			                  <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{listUsers}</tbody>
          </table>
        </>
  ) 
}
