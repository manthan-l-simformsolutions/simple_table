import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableRow: {
    backgroundColor: "black"
  },
  tableCell: {
    color: "white",
    fontSize: 20,
    fontFamily: "Akaya Kanadaka",
  }
});
function App() {
  const [data, setData] = useState([]);
  const classes = useStyles()
  useEffect(async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users")
    setData(result.data)
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableCell}>Name</TableCell>
            <TableCell className={classes.tableCell} align="right">E-mail</TableCell>
            <TableCell className={classes.tableCell} align="right">City</TableCell>
            <TableCell className={classes.tableCell} align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address.city}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
