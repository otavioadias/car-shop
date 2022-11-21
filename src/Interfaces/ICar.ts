interface ICars {
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  doorsQty: number,
  seatsQty: number,
  id?: string | undefined,
}

export default ICars;