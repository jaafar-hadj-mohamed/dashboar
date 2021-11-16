import React from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



function ListProduct(){
    const products=useSelector(state =>state.myProduct.products)
    console.log(products);
    return(
        <div>
            
           



            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell style={{ fontWeight: 600 }} >Products</TableCell>
            <TableCell style={{ fontWeight: 600 }} align="right">categories</TableCell>
            <TableCell style={{ fontWeight: 600 }} align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
              
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.cat}</TableCell>
              <TableCell align="right">{product.qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


        </div>
    )
}
export default ListProduct;