import React, { memo, useState } from 'react'
import { Grid, Paper, Container,  Avatar, Typography, Box, Card, CardContent, Table, TableBody, TableContainer, TableHead, TableRow, SvgIcon } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'

import { makeStyles} from '@material-ui/core/styles'
import { AttachMoney, SwapVert } from '@material-ui/icons'
import { green, yellow, blue } from '@material-ui/core/colors'

const Tax = 0.45

function createRow (
  date: string,
  investiment: number,
  nowBitcoin: number,
  ) {
  let grossAmountInvested = (investiment + (Tax*100)).toFixed(2)
  const percentBitcoin = Tax
  return {
    date,
    investiment,
    nowBitcoin,
    percentBitcoin,
    grossAmountInvested
  }
}

const rows = [
  createRow('12/04/2021', 12.35, 322.45),
  createRow('12/04/2021', 12.35, 322.45),
  createRow('12/04/2021', 12.35, 322.45),
]

const colors = [green[500], yellow[500], blue[500]]

const useStyles = makeStyles({
  marginTop: {
    marginTop: 55
  },
  paper: {

  },
  purchase: {
    backgroundColor: colors[0],

  },
  bitcoin: {
    backgroundColor: colors[1]
  },
  day: {
    backgroundColor: colors[2]
  },
  avatar: {

  },
  divider: {
    marginTop: 20,
    marginBottom: 20
  }
})

const Dashboard = memo((props: {}) => {
  const classes = useStyles(props)
  const [list, setList] = useState(rows)
  let total = list.map(l => Number(l.grossAmountInvested)).reduce((acc, total) => acc += total)
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Typography variant="h4" component="h1" style={{ padding: '15px 0' }}>
            Dashboard
          </Typography> 
        </Grid>
        <Grid container spacing={4} >
          <Grid item xs={12} md>
              <Card>
                <CardContent>
                  <Box textAlign="left">
                    <Grid container direction="row" justify="space-between">
                      <Typography gutterBottom variant='h4'>
                         Saldo
                      </Typography>
                      <Avatar aria-label="Saldo" className={classes.purchase}>
                        <AttachMoney />
                      </Avatar>
                    </Grid>
                  <Typography gutterBottom variant='subtitle2'  >
                        R$ 19,00
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={12} md>
            <Card>
              <CardContent>
                <Box textAlign="left">
                  <Grid container direction="row" justify="space-between">
                    <Typography gutterBottom variant='h5'>
                        Compra | Venda
                    </Typography>
                    <Avatar aria-label="Saldo" className={classes.bitcoin}>
                      <SvgIcon>
                        <path d="M11 24v-3.022h-1v3.022h-2v-3.022h-4.969l.5-2.978h1.079c.884 0 1.39-.851 1.39-1.707v-8.889c0-.833-.485-1.404-1.365-1.404h-1.635v-3h5v-3h2v3h1v-3h2v3.053c4.315.146 6.024 1.781 6.514 3.625.58 2.18-.857 4.01-2.093 4.456 1.501.382 3.579 1.491 3.579 4.05 0 3.483-2.688 5.816-8 5.816v3h-2zm-1-11.006v5.006c3.969 0 6.688-.375 6.688-2.516 0-2.296-2.938-2.49-6.688-2.49zm0-1.994c2.211 0 5.578-.156 5.578-2.5 0-2-2.078-2.5-5.578-2.5v5z"/>
                      </SvgIcon>
                    </Avatar>
                  </Grid>
                  <Typography gutterBottom variant='subtitle1'>
                      R$ {total} | 0,00
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md>
            <Card>
              <CardContent>
                <Box textAlign="left">
                  <Grid container direction="row" justify="space-between">
                    <Typography gutterBottom variant='h4'>
                        Cotação
                    </Typography>
                    <Avatar aria-label="Saldo" className={classes.day}>
                      <SwapVert />
                    </Avatar>
                  </Grid>
                  <Typography gutterBottom variant='subtitle2'  >
                    <strong>compra</strong> R$ 489,00 | <strong>venda</strong> R$ 500,89
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md>
          <Card>
                <CardContent>
                  <Box textAlign="left">
                    <Grid container direction="row" justify="space-between">
                      <Typography gutterBottom variant='h4'>
                        Total
                      </Typography>
                      <Avatar aria-label="Saldo" className={classes.avatar}>
                        $
                      </Avatar>
                    </Grid>
                  <Typography gutterBottom variant='subtitle2'  >
                    R$ {total }
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
          </Grid>
        </Grid>
        <br />
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
              {list.map((row) => (
                <TableRow>
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
      </Container>
    </>
  );

}) 

export default Dashboard;
