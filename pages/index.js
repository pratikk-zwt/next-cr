import Head from 'next/head'
import {useState,useEffect} from 'react'
import Loader from '../components/Loader'
import Users from '../components/Users'
import Layout from '../components/Layout'

export default function Home() {
  const [users,setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState(1);
  const [msg,setMsg] = useState("");
  

  useEffect(() => {
	 fetchUsers();
  },[])	
  
  const fetchUsers = () => {
	  (async function() {
		 let res = await fetch("http://siteproofs.net/nextjs-crud-api/api/read.php");
		 let users = await res.json();
		 setIsLoading(0);
		 setUsers(users.body);
		 console.log("Pratik",users);
	 })()
  }
  
  const handleDeleteAction = (e,id) => {
	  const deleteUser = {id:id};
	  (async () => {
	  const rawResponse = await fetch('http://siteproofs.net/nextjs-crud-api/api/delete.php', {
		method: 'POST',
		body: JSON.stringify(deleteUser)
	 });
  
  const content = await rawResponse.json();
  setMsg(content.message); 	
  console.log(content);
  fetchUsers();
})();
  }
  
	
  return (
  <Layout>
  {msg!=='' && <p>{msg}</p>}
  {isLoading ? <Loader /> : <Users data={users} deleteAction={handleDeleteAction} />}
  </Layout>
  )
}
