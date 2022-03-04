import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const HomePage = () => {
    const[loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [])
    return (
       <div className="d-flex align-items-center " style={{height: '100%'}}>
            <div className="flex-grow-1 text-center  ">
                <h2 className="font-weight-bold text-uppercase" >well, are you introvert, extrovert, or ambivert?</h2>
                <Button variant="info" onClick={()=>history.push('/ask')} >click here to see</Button>
            </div>
            <img src={'https://www.psychologistworld.com/images/articles/a/575x360-v-as-125590185.jpg'} style={{height: '50%'}}/>
        </div>
       

       

    )
}

export default HomePage;

