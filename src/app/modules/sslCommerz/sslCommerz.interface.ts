export interface ISSLCommerz {
  amount: number;
  transactionId: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}


export interface ISSLCommerzResponse {
  status: string;
  GatewayPageURL: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Optional: allows flexibility for other unknown fields
}
