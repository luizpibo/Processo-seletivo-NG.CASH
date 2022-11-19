export interface ITransactions {
    id: string;
    debitedAccountId: string;
    creditedAccountId: string;
    value: number;
    createAt: Date;
}