import React, { useState } from 'react';
import { Container, Grid, Paper, Table, TableContainer, TableHead, TableBody, TableRow } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'

import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import AlertDialog from '../../Shared/AlertDialog'

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function createRow(
  id: number,
  name: string,
  date: string,
  investiment: number,
  nowBitcoin: number,
  percentBitcoin: number,
) {
  // let nowBitcoin = (investiment)
  let grossAmountInvested = (investiment + percentBitcoin)
  return {
    id,
    name,
    date,
    investiment,
    nowBitcoin,
    percentBitcoin,
    grossAmountInvested,
  }
}
const rows = [
  createRow(1, 'Comprar', '12/01/2021', 12.35, 322.45, 46),
  createRow(2, 'Comprar', '31/03/2021', 12.35, 322.45, 35),
  createRow(3, 'Comprar', '12/04/2021', 12.35, 322.45, 102),
]


export default function Sales() {
  const classes = useStyles();

  const [list, setList] = useState(rows)

  return (
    <Container>
      <Grid container spacing={4}>
        <h1>Compra</h1>
      </Grid>
      <Grid container spacing={4}>
        <TableContainer component={Paper}>
          <Table className={classes.table} size='medium' aria-label="A paying list">
            <TableHead>
              <TableRow>
                <TableCell>Data de compra</TableCell>
                <TableCell align='right'>valor investido</TableCell>
                <TableCell align='right'>percentual de variação do preço do bitcoin</TableCell>
                <TableCell align='right'>valor bruto atual do investimento</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow component={StyledTableRow} key={row.date}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell align='right'>R$ {row.nowBitcoin}</TableCell>
                  <TableCell align='right'>{row.percentBitcoin}%</TableCell>
                  <TableCell align='right'>R$ {row.grossAmountInvested}</TableCell>
                  <TableCell align='right'>
                    <AlertDialog
                      id={row.id}
                      name={row.name}
                      date={row.date}
                      nowBitcoin={row.nowBitcoin}
                      percentBitcoin={row.percentBitcoin}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
}
