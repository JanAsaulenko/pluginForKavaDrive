export const convertValue=(value)=>{

    let rest = value%2;
    if(rest===0){
        return (value==2)? 4 : 2;
    }
    else{
        if(value == 3){
            return 3
        }
        else{
        return(value==1)?5 :1;
        }
    }
}