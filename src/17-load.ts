import _ from 'lodash';

const data = [
    {
        userName: "connie", 
        role: "admin"
    }, 
    {
        userName: "valentina", 
        role: "seller"
    }, 
    {
        userName: "mauro", 
        role: "seller"
    }, 
    {
        userName: "santiago", 
        role: "customer"
    }, 
];

const rta = _.groupBy(data, (item)=>item.role);
console.log (rta); 