import React,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import GetImage from './GetImage';
const HVLR = () => {
  const navigate=useNavigate()
    const Initialhvrls=[]
    const [hvlrs,SetHvlrs]=useState(Initialhvrls)
   // const host="http://localhost:5000"
  // const host="https://sevenhvlr-api.onrender.com";
   const host="https://hvlr-server-production.up.railway.app"
  const StringAuthToken=localStorage.getItem('token')
   
    
    const getDevices=async()=>{
const response=await fetch(`${host}/api/device/getdevices`,{
      method:"GET",
      headers:{
        'auth-token': StringAuthToken,
        'Content-Type': 'application/json'
      }  });
    const json=await response.json();
    // //console.log(json.device)
     SetHvlrs(json.device)
    
    
    
    
     console.log("hvlrs")
     console.log(json.device)
    }

    const addDevice=async()=>{
    //adding the device 
   
    const response=await fetch(`${host}/api/device/adddevice`,{
      method:"POST",
      headers:{
        'auth-token': StringAuthToken,
        'Content-Type': 'application/json'
      }  });
    const json=await response.json();
 // //console.log(json)
  getDevices();
    }
    const updateDevice=async({id,d,name})=>{
      //console.log(id+" "+d+" "+name)
     //updating
     if(name=='left')
     {
      //console.log("left")
      const response=await fetch(`${host}/api/device/updatedevice/${id}`,{
        method:"PUT",
        headers:{
          'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({D0:(!d)}) 
        });
      const json=await response.json();
       //console.log(json)
     }
     else if(name=='right')
     {
      //console.log("right")
      const response=await fetch(`${host}/api/device/updatedevice/${id}`,{
        method:"PUT",
        headers:{
          'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({D1:(!d)}) 
        });
      const json=await response.json();
       //console.log(json)
     }
     else if(name=='up')
     {
      //console.log("up")
      const response=await fetch(`${host}/api/device/updatedevice/${id}`,{
        method:"PUT",
        headers:{
          'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({D4:(!d)}) 
        });
      const json=await response.json();
       //console.log(json)
     }
     else if(name=='down')
     {
      //console.log("down")
      const response=await fetch(`${host}/api/device/updatedevice/${id}`,{
        method:"PUT",
        headers:{
          'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({D5:(!d)}) 
        });
      const json=await response.json();
       //console.log(json)
     }
     else if(name=='openjet')
     {
      //console.log("openjet")
      const response=await fetch(`${host}/api/device/updatedevice/${id}`,{
        method:"PUT",
        headers:{
          'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({D3:(!d)}) 
        });
      const json=await response.json();
       //console.log(json)
     }
     else if(name=='closejet')
     {
      //console.log("closejet")
      const response=await fetch(`${host}/api/device/updatedevice/${id}`,{
        method:"PUT",
        headers:{
          'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({D2:(!d)}) 
        });
      const json=await response.json();
       //console.log(json)
     }
     else if(name=='openfoam')
    {
      //console.log("openfoam")
      const response=await fetch(`${host}/api/device/updatedevice/${id}`,{
        method:"PUT",
        headers:{
          'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({D6:(!d)}) 
        });
      const json=await response.json();
       //console.log(json)
    }
    else if(name=='closefoam')
    {
      //console.log("closefoam")
      const response=await fetch(`${host}/api/device/updatedevice/${id}`,{
        method:"PUT",
        headers:{
          'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({D7:(!d)}) 
        });
      const json=await response.json();
       //console.log(json)
    }
     getDevices();
     
  }
  
    const handlelogout=()=>{
      localStorage.removeItem('token')
      navigate('/sign-up')
    }



    useEffect(() => {
      updateStatus();
      getDevices();
      
      // eslint-disable-next-line
    }, []);


    const updateHvlrStatus=async(id)=>{
      const response=await fetch(`${host}/api/device/updatedevice/${id}`,{
        method:"PUT",
        headers:{
          'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({status:"offline",camStatus:'offline'}) 
        });
       
    }
  const updateStatus=()=>{
    //for each hvlr we need to send status offline
    for(let i=0;i<hvlrs.length;i++)
    {
      const hvlr=hvlrs[i];
      updateHvlrStatus(hvlr._id);
    }
  }
  const fun=()=>{
    updateStatus();
    console.log("updated")
    getDevices();
  }
     //setInterval(fun,100000)
    // setInterval(getDevices,8000)

  return (
    <div className='container' >
     <div style={{display:'flex'}}>
     <button className='btn btn-primary my-3' style={{marginLeft:'50px'}} onClick={addDevice}>New Hvlr</button>
      <button className='btn btn-primary my-3' style={{marginLeft:'120px'}} onClick={handlelogout}>Logout</button>
     </div>
      
       {hvlrs.map((hvlr,index)=>{

        return <div  key={index} className='container my-3'>
            
              {/*<GetImage bufi={hvlr.preImage}   />
                <div style={{display:'flex',marginLeft:'100px'}} >Camera-{hvlr.camStatus==='online'?<span className='success' style={{background:"#00cc00"}}>Online</span>:<span className='warning' style={{background:"#ff0000"}}>Offline</span>}</div>
       */}
               <div style={{display:'flex'}}className="my-3">
                
              
              <div style={{fontSize:'10px'}}>
                {index+1}-
                  {hvlr.status==='online'?<span className='success' style={{background:"#00cc00"}}>Online</span>:<span className='warning' style={{background:"#ff0000"}}>Offline</span>}
              </div>
              <div className='mx-2'>
              <div>
                <span>
                      {hvlr.D0?<button className='btn btn-success' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D0,name:'left'})}}>Left</button>
                      :<button className='btn btn-secondary' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D0,name:'left'})}}>Left</button>}
                      {hvlr.D4?<button className='btn btn-success mx-3' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D4,name:'up'})}}>Up</button>:<button className='btn btn-secondary mx-3' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D4,name:'up'})}}>Up</button>}
                      {hvlr.D3?<button className='btn btn-success mx-4' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D3,name:'openjet'})}}>OpenJet</button>
                     :<button className='btn btn-secondary mx-4' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D3,name:'openjet'})}}>OpenJet</button>
                    }
                    {hvlr.D6?<button className='btn btn-success' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D6,name:'openfoam'})}}>OpenFoam</button>
            :<button className='btn btn-secondary' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D6,name:'openfoam'})}}>OpenFoam</button>
          }
                           </span>
              
              </div>
              <div className='my-2'>
                <span> 
                  {hvlr.D1?<button className='btn btn-success' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D1,name:'right'})}}>Right</button>
                    :<button className='btn btn-secondary' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D1,name:'right'})}}>Right</button>
                  }
                    {hvlr.D5? <button className='btn btn-success mx-2' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D5,name:'down'})}}>Down</button>
                     : <button className='btn btn-secondary mx-2' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D5,name:'down'})}}>Down</button>
                    }  
                     {hvlr.D2? <button className='btn btn-success mx-2' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D2,name:'closejet'})}}>CloseJet</button>
                      : <button className='btn btn-secondary mx-2' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D2,name:'closejet'})}}>CloseJet</button>
                    }
                    {hvlr.D7?<button className='btn btn-success mx-3' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D7,name:'closefoam'})}}>CloseFoam</button>
            :<button className='btn btn-secondary mx-3' onClick={()=>{updateDevice({id:hvlr._id,d:hvlr.D7,name:'closefoam'})}}>CloseFoam</button>
          }
                         </span>
              </div>
              </div>
              
              
            </div>
            </div>
       })}

    </div>
  )
}

export default HVLR