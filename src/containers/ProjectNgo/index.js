import React, {useState, useEffect} from 'react'
import { useAuth } from "../../contexts/AuthContext";
import Box                  from '@mui/material/Box'
import Grid                 from '@mui/material/Grid'
import Paper                from '@mui/material/Paper'
import { styled }           from '@mui/material/styles'
import { Typography }       from '@material-ui/core'
import { query, collection, onSnapshot, where } from "firebase/firestore";
import { db } from "../../firebase";
import Button from '../../components/Button'
import TableComponents       from '../../components/TableComponents'
import AnimatedModal from '../../components/AnimatedModal'
import Animation from '../../components/Animation'
import './index.scss';

const Item = styled(Paper)(({ theme }) => ({
  marginBottom: theme.spacing(1)
}))

const HomeViewTypography = styled(Typography)(({ theme }) => ({
  color: '#f4f3ef',
  marginBottom: theme.spacing(1)
}))



const ProjectNgo = () => {
  const [collectionData, setCollectionData] = useState([]);
  const [checkboxData, setcheckboxData] = useState([]);
  const [totalBudget, setTotalBudget] = useState(0);
  const [collectionUnsub, setCollectionUnsub] = useState({ f: null });
  const currentUser = useAuth().currentUser;
  const tableHeaders=['Select','Vendor Name', 'Time Stamp', 'Description', 'Amount', 'Key']
  
  const handleCheckbox = (e,index) =>
{
  const filterTransaction = collectionData.filter((item, ind ) => ind==index);
   setcheckboxData(filterTransaction);
}

  function getCollectionData() {
    if (collectionUnsub.f) collectionUnsub.f();
    const unsub = onSnapshot(
      query(collection(db, `transactions`)),
      (querySnapshot) => {
        const projects = [];

        let budget = 0;
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log(window.location.href)
          data.id = doc.id;
          projects.push(data);
          budget += parseInt(data.budget);
        });
        setCollectionData(projects);
        setTotalBudget(budget);
      },
      (error) => {
        console.log(error);
      }
    );

    setCollectionUnsub({ f: unsub });
  }

  useEffect(() => {
    getCollectionData();
    return function cleanup() {
      if (collectionUnsub.f) collectionUnsub.f();
    };
  }, [currentUser]);


  return (
    <div className="container">
      <HomeViewTypography variant="h6">
       {
          currentUser.email!='auditor@audit.com'?
        ' NGO Projects' :
        ' Transaction Details'

       } 
      </HomeViewTypography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnSpacing={12}>
          <Grid item xs={6}>
            <Item variant="subtitle1" style={{ color: '#f4f3ef', backgroundColor: '#414141' }}>
              Projects
            </Item>
          </Grid>
         {
           currentUser.email!='auditor@audit.com'&&
         <Grid item xs={6}>
            <Item><AnimatedModal variant="contained" /></Item>
          </Grid>
          } 

        </Grid>
      </Box>
      <TableComponents  headers={tableHeaders} data={collectionData} handlecheckbox={handleCheckbox} />
      {
        currentUser.email!='auditor@audit.com'?
        <Button onClick={event =>  window.location.href='#/dashboard'} style={{ marginTop: '30px' }}>SEND FOR AUDIT!</Button>
        :
        // <Box>
        // <Grid container >
        //   <Grid item xs={6}>
        //   <Button onClick={event =>  window.location.href='#/dashboard'} style={{ marginTop: '30px'}}>VERIFY All TRANSACTIONS!</Button>
        //   </Grid>
        //   <Grid item xs={6}>
        //     {/* <Item style={{ marginTop: '30px' }}><Animation checkboxData={checkboxData} /></Item> */}
        //     <Animation style={{marginTop: '30px'}} checkboxData={checkboxData}/>
        //   </Grid>
        //   </Grid>
        //   </Box>
        <div className="button-container">
             <Button onClick={event =>  window.location.href='#/dashboard'} style={{ marginTop: '30px'}}>VERIFY All TRANSACTIONS</Button>
             <Animation style={{marginTop: '30px'}} checkboxData={checkboxData}/>
          </div>
      }

      

     
    </div>
  );
}

export default ProjectNgo;