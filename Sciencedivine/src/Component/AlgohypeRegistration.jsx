import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import  axios  from 'axios'

const AlgohypeRegistration = () => {

    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [address,setaddress] = useState('')
    const [phonenumber,setphonenumber] = useState('')
    const [poc,setpoc] = useState('')
    const [open, setopen] = useState(false)
    const [submitdatas,setsubmitdatas] = useState([])
   const clickedmember = () =>{
    setopen(true)
   }

   const closemember = () =>{
    setopen(false);
   }


   const submitdata = () =>{
    axios.post('https://registrationsciencedivine-api.vercel.app/api/reception/registration',{name,email,address,phonenumber,poc})
    .then(()=>console.log("the data has been succesfully added"))
    .catch((err)=>console.log(err))
    setopen(false)
   }


   const [users, setUsers] = useState([]);

   useEffect(() => {
     async function fetchUsers() { 
       try {
         const response = await axios.get('https://registrationsciencedivine-api.vercel.app/api/reception/registrationfetch');
         setUsers(response.data);
       } catch (error) {
         console.error("Error fetching users:", error);
       }
     }
 
     fetchUsers();
   }, []);
   
   function formatDate(dateString) {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toLocaleString();
    }
    return "N/A";  // or any placeholder for invalid dates
  }

  return (
    <div className='content-sales-home'>

    <div className='names'> 
            <Typography variant='h3' component="div" color="primary">
                Welcome In Science Divine Foundation Algohype data
            </Typography>
        </div>

     <div className='import-export'>
     <Button className="button" variant="contained" sx={{borderRadius:5}} color="secondary" onClick={clickedmember}>Add Registration</Button>
    </div>


      <div>
        <Dialog open={open} onClose={closemember} fullWidth maxWidth={'md'}>
            <DialogTitle id="form-dialog-title" sx={{ color: '#024978', fontWeight:'bold'}} >Registration Member</DialogTitle>
            <Stack spacing={2} margin={2}>
                <form onSubmit={submitdata}>
                    <TextField type='text'
                     name='name'  
                    value={name}        
                    onChange={(e)=>setname(e.target.value)}       
                    label='Name'
                    sx={{mb:2,width:850}}/>
                <br/>

                    <TextField type='email' 
                    name='email'      
                    value={email}       
                    onChange={(e)=>setemail(e.target.value)}      
                    label='E - Mail'
                    sx={{mb:2,width:850}}/>
                <br />
                    <TextField type='text' 
                    name='address'    
                    value={address}     
                    onChange={(e)=>setaddress(e.target.value)}    
                    label='Address'
                    sx={{mb:2,width:850}}
                    />
                <br/>
                    <TextField type='number'
                     name='phonenumber'
                     value={phonenumber} 
                     onChange={(e)=>setphonenumber(e.target.value = e.target.value.slice(0, 10)) }
                     label='Phone Number'
                      maxLength = "10"
                     sx={{mb:2,width:850}}/>

<br/>
                    <TextField type='text'
                     name='poc'
                     value={poc} 
                     onChange={(e)=>setpoc(e.target.value = e.target.value.slice(0, 10)) }
                     label='pointof context'
                      maxLength = "10"
                     sx={{mb:2,width:850}}/>

                    <DialogActions>
                    <Button variant='contained' color='info' onClick={submitdata}>Add Member</Button>
                    <Button variant='contained' color='error' onClick={closemember}>Close</Button>
                    </DialogActions>
                </form>
            </Stack>
        </Dialog>
      </div>

  
<div className='tables-data'>
      <table className='table'>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Poc</th>
            <th>Time</th>
          </tr>
        </thead>
         <tbody>
         {
           users.map((user)=>{
               return <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phonenumber}</td>
                    <td>{user.address}</td>
                    <td>{user.poc}</td>
                    <td>{formatDate(user.submissionTime)}</td>
                </tr>
            })
         }
        </tbody>
      </table>
 </div>
    </div>
  )
}

export default AlgohypeRegistration


