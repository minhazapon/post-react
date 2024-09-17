
import { useEffect, useState } from "react";


const Api = () => {


    const [user, setUser] = useState([])


    useEffect( ()=>{
     
        fetch('http://localhost:5000/user')
        .then(res =>res.json())
        .then(data =>setUser(data))

    } , [])


    const handleForm = e =>{

     e.preventDefault();
     const form = e.target
     const name = form.name.value
     const email = form.email.value
     const user = {name, email}
     console.log(user)
     fetch('http://localhost:5000/user', {
         method: 'POST',
         headers:{
            'content-type': 'application/json'
         },
         body: JSON.stringify(user)
     })
     .then(res => res.json())
     .then(data =>{
      console.log(data)
      const newUser = [user, data]
      setUser(newUser)
      form.reset()
     })
    }



    return (
        <div className=" mt-20">


           

              <form onSubmit={handleForm} >
                <input className=" border-[1px] border-blue-400" type="text" name="name" />
                <br></br>
                <input className=" border-[1px] border-blue-400"  type="email" name="email" id="" />
                <br></br>
                <input className=" btn " type="submit" value="add User" />

              </form>

              
              {
                user.map( user=>  <p>{user.id} {user.name} {user.email} {user.company} </p> )
               }

            
             
             <div>


             </div>
            
        </div>
    );
};

export default Api;