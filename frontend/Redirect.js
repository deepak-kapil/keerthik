import React from 'react';


const Redirect = (props) => {
    
    let history=React.useHistory()
    React.useEffect(()=>{
        
        history.push(`/${props.path}`)

    })
   

    return (   
       <></>
    );
};

export default Redirect;