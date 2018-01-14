export const buttons = [
    {type:'operator',value:'('},
    {type:'operator',value:')'},
    {type:'operator',value:'%'},
    {type:'operator',value:'÷'},
    {type:'number',value:'7'},
    {type:'number',value:'8'},
    {type:'number',value:'9'},
    {type:'operator',value:'*'},
    {type:'number',value:'4'},
    {type:'number',value:'5'},
    {type:'number',value:'6'},
    {type:'operator',value:'-'},
    {type:'number',value:'1'},
    {type:'number',value:'2'},
    {type:'number',value:'3'},
    {type:'operator',value:'+'},
    {type:'operator',value:'±'},
    {type:'number',value:'0'},
    {type:'operator',value:'.'},
    {type:'cta',value:'='}
];
export const isItNumber = item => {
    return !!item.match(/[0-9]+/);
};

export const findSubstringInAnArr = (arr, str) => (
    arr.filter(item => item === str).length
)