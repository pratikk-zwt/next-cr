import {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import EditForm from '../../components/EditForm'

export default function Edit(){
	const router = useRouter()
  const { id } = router.query
	const [user,setUser] = useState({});
	const [msg,setMsg] = useState("");
	const [isLoading,setIsLoading] = useState(1);
	
	useEffect(() => {
	 (async function() {
		 let res = await fetch("http://siteproofs.net/nextjs-crud-api/api/read_single.php?id="+id);
		 let userData = await res.json();
		 setIsLoading(0);
		 setUser(userData);
		 console.log("Pratik",userData);
	 })()
  },[])	
	
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
	  const rawResponse = await fetch('http://siteproofs.net/nextjs-crud-api/api/update.php', {
		method: 'POST',
		body: JSON.stringify(user)
	 });
  
  const content = await rawResponse.json();
  setMsg(content.message); 	
  console.log(content);
})();
    event.preventDefault();
  }
  
  return <EditForm msg={msg} data={user} actionInputChange={handleInputChange} actionSubmit={handleSubmit} />
  
}