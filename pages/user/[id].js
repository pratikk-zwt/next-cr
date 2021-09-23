import {useState,useEffect} from 'react'
//import { useRouter } from 'next/router'
import EditForm from '../../components/EditForm'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'

export async function getServerSideProps(context) {
	console.log("what is this => ",context.params);
		 
  return {
    props: {id:context.params.id},
  }
}

export default function Edit({id}){

	const [user,setUser] = useState(null);
	const [msg,setMsg] = useState("");
	const [isLoading,setIsLoading] = useState(1);
	
	useEffect(() => {
	 (async function() {
		 let res = await fetch("/api/getUser?id="+id);
		 let userData = await res.json();
		 
		 setUser(userData);
		 setIsLoading(0);
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
	  const rawResponse = await fetch('/api/updateUser', {
		method: 'POST',
		body: JSON.stringify(user)
	 });
  
  const content = await rawResponse.json();
  setMsg(content.message); 	
  console.log(content);
})();
    event.preventDefault();
  }
  
  return (
  <Layout>
  {isLoading ? <Loader /> : <EditForm msg={msg} data={user} actionInputChange={handleInputChange} actionSubmit={handleSubmit} />}  
  </Layout>
  )
  
}