import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography } from "@material-ui/core";
import { query, collection, onSnapshot, where } from "firebase/firestore";
import { db } from "../../firebase";
import Button from "../../components/Button";
import TableComponents from "../../components/TableComponents";
import AnimatedModal from "../../components/AnimatedModal";
import Animation from "../../components/Animation";

const Item = styled(Paper)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const HomeViewTypography = styled(Typography)(({ theme }) => ({
  color: "#f4f3ef",
  marginBottom: theme.spacing(1),
}));

const ProjectNgo = () => {
  const [collectionData, setCollectionData] = useState([]);
  const [checkboxData, setcheckboxData] = useState([]);
  const [collectionUnsub, setCollectionUnsub] = useState({ f: null });
  const currentUser = useAuth().currentUser;
  const tableHeaders = [
    "Select",
    "Vendor Name",
    "Time Stamp",
    "Description",
    "Amount",
    "Key",
  ];
  let params = new URLSearchParams(window.location.href);
  const p_name = params.get("p_name");
  const handleCheckbox = (id) => {
    const filterTransaction = collectionData.filter((item) => item.key == id);
    const otherTransaction = collectionData.filter((item) => item.key !== id);
    setcheckboxData(filterTransaction);
    filterTransaction[0].checked = !filterTransaction[0].checked;
    setCollectionData([...filterTransaction, ...otherTransaction]);
  };

  function getCollectionData() {
    if (collectionUnsub.f) collectionUnsub.f();
    const unsub = onSnapshot(
      query(collection(db, `transactions`)),
      (querySnapshot) => {
        const projects = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          data.checked = data.verified || false;
          projects.push(data);
        });
        setCollectionData(projects);
      },
      (error) => {
        console.log(error);
      }
    );

    setCollectionUnsub({ f: unsub });
  }

  useEffect(() => {
    const projectId = window.location
    getCollectionData();
    return function cleanup() {
      if (collectionUnsub.f) collectionUnsub.f();
    };
  }, [currentUser]);

  return (
    <div className="container">
      <HomeViewTypography variant="h6">
        {currentUser.email != "auditor@audit.com"
          ? " Project Details"
          : " Transaction Ledger"}
      </HomeViewTypography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnSpacing={12}>
          <Grid item xs={6}>
            <Item
              variant="subtitle1"
              style={{ color: "#f4f3ef", backgroundColor: "#414141" }}
            >
              {p_name}
            </Item>
          </Grid>
          {currentUser.email != "auditor@audit.com" && (
            <Grid item xs={6}>
              <Item>
                <AnimatedModal variant="contained" />
              </Item>
            </Grid>
          )}
        </Grid>
      </Box>
      <TableComponents
        headers={tableHeaders}
        data={collectionData}
        handlecheckbox={handleCheckbox}
      />
      {currentUser.email != "auditor@audit.com" ? (
        <Button variant={"contained"} color="primary"
          onClick={(event) => (window.location.href = "#/dashboard")}
          style={{ marginTop: "30px", marginLeft: "600px" }}
        >
          SEND FOR AUDIT
        </Button>
      ) : (
        <Box sx={{ flexGrow: 1, marginTop: "30px"}}>
          <Grid container columnSpacing={12} justifyContent="space-around">
            <Grid item xs={3}>
              <Button variant="contained" color="primary"
                onClick={(event) => (window.location.href = "#/dashboard")}
              >
                VERIFY All TRANSACTIONS
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Animation checkboxData={checkboxData} />
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default ProjectNgo;
