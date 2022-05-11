import React, {useState, useEffect} from 'react'
import Box                  from '@mui/material/Box'
import Grid                 from '@mui/material/Grid'
import Paper                from '@mui/material/Paper'
import { styled }           from '@mui/material/styles'
import { Typography }       from '@material-ui/core'
import { Button }           from '@mui/material'
import { query, collection, onSnapshot, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import CardComponent        from '../../components/CardComponent'
import TableComponent       from '../../components/TableComponent'

const Item = styled(Paper)(({ theme }) => ({
  marginBottom: theme.spacing(1)
}))

const HomeViewTypography = styled(Typography)(({ theme }) => ({
  color: '#f4f3ef',
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(2)
}))

const HomeView = () => {
  const [collectionData, setCollectionData] = useState([]);
  const [totalBudget, setTotalBudget] = useState(0);
  const [collectionUnsub, setCollectionUnsub] = useState({ f: null });
  const currentUser = useAuth().currentUser;
  const tableHeaders=['S no.', 'Project Name', 'Budget Allocated', 'Amount Spent', 'Audited']
  
  function getCollectionData() {
    if (collectionUnsub.f) collectionUnsub.f();
    const unsub = onSnapshot(
      query(collection(db, `projects`)),
      (querySnapshot) => {
        const projects = [];
        let budget = 0;
        querySnapshot.forEach((doc) => {
          projects.push(doc.data());
          budget += parseInt(doc.data().budget);
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
        NGO Dashboard
      </HomeViewTypography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnSpacing={14}>
          <Grid item xs={4}>
            <Item><CardComponent title={'total projects'} data={collectionData.length} caption={" "}/></Item>
          </Grid>
          <Grid item xs={4}>
            <Item><CardComponent title={'total spend'} data={10000} caption={"in dollars"}/></Item>
          </Grid>
          <Grid item xs={4}>
            <Item><CardComponent title={'total budget'} data={totalBudget} caption={"in dollars"}/></Item>
          </Grid>
        </Grid>
      </Box>
      <HomeViewTypography variant="subtitle1">
        Projects
      </HomeViewTypography>
      <TableComponent headers={tableHeaders} data={collectionData} />
    </div>
  );
}

export default HomeView;
