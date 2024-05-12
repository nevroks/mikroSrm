


export interface IApply{
    id?:number
    title:string,
    description:string,
    price:number,
    state?:"new"|"work"|'payed'
}
export interface IFunnel{
    name:string,
    total:number,
    applies:Array<IApply>
}