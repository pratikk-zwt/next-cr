import Link from 'next/link'
export default function EditForm(props) {
	const msg = props.msg;
	const user = props.data;
return (
<>
<h1>Edit User</h1>
<Link href="/"><a>All Users</a></Link>
{msg!=='' && <p>{msg}</p> }
<form onSubmit={props.actionSubmit}>
<label htmlFor="name">Name:</label>
<input type="text" name="name" id="name" value={user.name} onChange={props.actionInputChange} />
<br/><br/>
<label htmlFor="email">Email:</label>
<input type="text" name="email" id="email" value={user.email} onChange={props.actionInputChange} />
<br/><br/>
<label htmlFor="age">Age:</label>
<input type="text" name="age" id="age" value={user.age} onChange={props.actionInputChange} />
<br/><br/>
<button className="button">Save</button>
</form>
</>
)
}