import {useState} from 'react'
import AddForm from '../../components/AddForm'

export default function Add(){
	const [user,setUser] = useState({});
	const [msg,setMsg] = useState("");
	
const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setUser({
		...user,
      [name]: value
    });
  }
  
const handleSubmit = (event) => {
    console.log("user obj",user);
	
	(async () => {
	  const rawResponse = await fetch('http://siteproofs.net/nextjs-crud-api/api/create.php', {
		method: 'POST',
		body: JSON.stringify(user)
	 });
  
  const content = await rawResponse.json();
  setMsg(content.message); 	
  console.log(content);
})();
    event.preventDefault();
  }
  
  return <AddForm msg={msg} actionInputChange={handleInputChange} actionSubmit={handleSubmit} />
  
}