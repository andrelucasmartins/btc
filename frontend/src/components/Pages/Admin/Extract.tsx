import React from 'react';
import { Container, Grid, Paper, Table, TableContainer, TableHead, TableBody, TableRow, Typography  } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Data de compra', width: 160},
  { field: 'investiment', headerName: 'Valor investido', width: 160 },
  { field: 'nowBitcoin', headerName: 'Valor do btc no momento da compra', width: 300 },
  { field: 'percentBitcoin', headerName: 'Percentual de variação do preço do bitcoin', type: 'number', width: 330 },
  {
    field: 'grossAmountInvested',
    headerName: 'Valor bruto atual',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  }
];

function createRow (
  id: number,
  date: string,
  investiment: number,
  nowBitcoin: number,
  percentBitcoin: number
  ) {
  let grossAmountInvested = Number((investiment + (percentBitcoin/100)).toFixed(2))

  return {
    id,
    date,
    investiment,
    nowBitcoin,
    percentBitcoin,
    grossAmountInvested
  }
}
const rows = [
  createRow(1, '12/04/2021', 12.35, 322.45, 45.00),
  createRow(2, '12/04/2021', 12.35, 322.45, 45.00),
  createRow(3, '12/04/2021', 12.35, 322.45, 45.00),
]

export default function Extract() {
  return (
    <Container>
      <Grid container spacing={4} style={{ marginBottom: 25 }}>
        <Typography variant="h4" component="h1">Extrato</Typography>
      </Grid>
      <Grid container spacing={4} style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
        <TableContainer component={Paper}>
          <Table size='medium' aria-label="A paying list">
            <TableHead>
              Meus Investimentos
            </TableHead>
            <TableHead>
              <TableRow>
                <TableCell>Data de compra</TableCell>
                <TableCell align='right'>valor investido</TableCell>
                <TableCell align='right'>valor do btc no momento da compra</TableCell>
                <TableCell align='right'>percentual de variação do preço do bitcoin</TableCell>
                <TableCell align='right'>valor bruto atual do investimento</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell align='right'>R$ {row.nowBitcoin}</TableCell>
                  <TableCell align='right'>R$ {row.nowBitcoin}</TableCell>
                  <TableCell align='right'>{row.percentBitcoin}%</TableCell>
                  <TableCell align='right'>R$ {row.grossAmountInvested }</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
}
