const cf= new Intl.NumberFormat(undefined,{
    currency:"USD",style:"currency"
})
export function currency(number:number){

    return cf.format(number)

}