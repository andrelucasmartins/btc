import React from 'react';
import { Container, Grid, List, ListItem } from '@material-ui/core'
function Deposits() {
  return (
    <Container>
      <Grid container spacing={4}>
        <h1>Deposito</h1>
      </Grid>
      <Grid xs item container>
        <List>
          <ListItem>
            Sua conta corrente na BTC
          </ListItem>
          <ListItem>
            Para realizar o envio de recursos para a BTC, faça uma TED de mesma titularidade com os dados abaixo, para a sua conta na BTC.
          </ListItem>
          <ListItem>
            Número / Banco<br />
            102 SC XP Investimentos
          </ListItem>
          <ListItem>
            Agência<br />
            0003
          </ListItem>
          <ListItem>
            Conta<br />
            285457-7
          </ListItem>
          <ListItem>
            Nome do favorecido<br />
            andre lucas martins ezequiel
          </ListItem>
          <ListItem>
            CPF do favorecido<br />
            328.640.078-51
          </ListItem>
        </List>
      </Grid>
    </Container>
  );
}

export default Deposits;
