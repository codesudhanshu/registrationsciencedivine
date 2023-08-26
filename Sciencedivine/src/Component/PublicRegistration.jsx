import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import  axios  from 'axios'

const PublicRegistration = () => {

    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [address,setaddress] = useState('')
    const [phonenumber,setphonenumber] = useState('')
   

   const submitdata = async () =>{
    axios.post('http://localhost:8081/api/reception/registration',{name,email,address,phonenumber})
    .then(()=>console.log("the data has been succesfully added"))
    .catch((err)=>console.log(err))

        document.write('<div style="text-align:center;align-items:center;margin-top:5em">')
        document.write('<h1>Thanks for Your Registration</h1>')
        document.write('<h1>Science Divine Warmly Welcome You and Your Family</h1>')
        document.write('<h1 style="color:blue;">Your Id is Your Phone Number Thank You<h1>')
        document.write('</div>')
   }

  return (
    <div className='content-sales-home'>
   
        <div className='name'> 
            <Typography variant='h3' component="div">
                Welcome In Science Divine Foundation Gurgaon Event
            </Typography>
        </div>

        <div className='name'> 
            <Typography variant='h3' component="div" color="primary">
                Design Your Destiny
            </Typography>
        </div>

      <div className='fields-person'>
                <form>
                    <TextField type='text'
                     name='name'  
                    value={name}        
                    onChange={(e)=>setname(e.target.value)}       
                    label='Name'
                    sx={{mb:2,width:320}}/>
                <br/>

                    <TextField type='email' 
                    name='email'      
                    value={email}       
                    onChange={(e)=>setemail(e.target.value)}      
                    label='E - Mail'
                    sx={{mb:2,width:320}}/>
                <br />
                    <TextField type='text' 
                    name='address'    
                    value={address}     
                    onChange={(e)=>setaddress(e.target.value)}    
                    label='Address'
                    sx={{mb:2,width:320}}
                    />
                <br/>
                    <TextField type='number'
                     name='phonenumber'
                     value={phonenumber} 
                     onChange={(e)=>setphonenumber(e.target.value = e.target.value.slice(0, 10)) }
                     label='Phone Number'
                      maxLength = "10"
                     sx={{mb:2,width:320}}/>
                     <br/>
                    <Button variant='contained' color='info' onClick={()=> submitdata()} sx={{ml:10}}>warmly welcome</Button>
                </form>

      </div>   
    </div>
  )
}

export default PublicRegistration


