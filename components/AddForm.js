import Link from 'next/link'
export default function AddForm(props) {
	const msg = props.msg;
return (
<>
<h1>Add New User</h1>
<Link href="/"><a>All Users</a></Link>
{msg!=='' && <p>{msg}</p> }
<form onSubmit={props.actionSubmit}>
<label htmlFor="name">Name:</label>
<input type="text" name="name" id="name" onChange={props.actionInputChange} />
<br/><br/>
<label htmlFor="email">Email:</label>
<input type="text" name="email" id="email" onChange={props.actionInputChange} />
<br/><br/>
<label htmlFor="age">Age:</label>
<input type="text" name="age" id="age" onChange={props.actionInputChange} />
<br/><br/>
<button className="button">Save</button>
</form>
</>
)
}