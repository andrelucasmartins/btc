export function counterGrossAmountInvested(investiment: number, tax: number) {
  const amountInvested = Number((investiment + (tax * 100)).toFixed(2))
  return amountInvested
}