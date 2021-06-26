import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Box,
  Card,
  Container,
  TableFooter,
  TablePagination,
  Typography,
} from "@material-ui/core";
import Axios from "axios";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    height: "100%",
    width: "100vw",
    paddingTop: "30px",
  },
});

const UserListComp = () => {
  const classes = useStyles();
  const [upEmail, setUpEmail] = useState(false);
  const [upName, setUpName] = useState(false);

  const [data, setData] = useState([]);

  const userList = async () => {
    const user = await Axios.get("https://jsonplaceholder.typicode.com/users");
    setData(user.data);

    if (user.data) {
    }
  };

  useEffect(() => {
    userList();
  }, []);

  //   const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortNameHandler = () => {
    function GetSortOrder(prop) {
      return function (a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      };
    }

    data.sort(GetSortOrder("name")); //Pass the attribute to be sorted on

    setData(data);
    setUpName(true);

    //Pass the
  };
  const sortEmailHandler = () => {
    function GetSortOrder(prop) {
      return function (a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      };
    }

    data.sort(GetSortOrder("email")); //Pass the attribute to be sorted on

    setData(data);
    setUpEmail(true);

    //Pass the
  };

  return (
    <Container className={classes.root}>
      <Typography className="text-center pb-5" variant="h4" color="secondary">
        User List
      </Typography>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{ cursor: "pointer" }}
                onClick={sortNameHandler}
                align="center"
              >
                Name {upName ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
              </TableCell>

              <TableCell
                style={{ cursor: "pointer" }}
                onClick={sortEmailHandler}
                align="center"
              >
                Email {upEmail ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
              </TableCell>
              <TableCell align="center">Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">
                  <Link to={`/user-profile/${row.id}`}>{row.name}</Link>
                </TableCell>

                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.website}</TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[3, 5, { label: "All", value: -1 }]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserListComp;
