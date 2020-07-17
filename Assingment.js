/**feettoMile */
var feets =5280;
function feetToMile(value){
        var result=value/5280;
        return result;
    }
    var miles=feetToMile(feets);
    if(miles<0){
        console.log("feet cannot negative");


    }
    else{
        console.log(feets+"feets ="+miles.toFixed(3)+ "miles");
    }




    /**function woodCalculator */
var Chair =2;
var Table=1;
var Bed =3;
function woodCalculator(Chair,Table,Bed){
        var woods=(Chair*1)+(Table*3)+(Bed*5);
        return woods;
    }
    if(Chair<0||Table<0||Bed<0){
        console.log("woods cannot negative");
        
        
    }
    else{
        var totalWood=woodCalculator(Chair,Table,Bed);
        console.log(totalWood+"need woods");
    }




    /**function brickCalculator */
var floor=25;
function brickCalculator(Base){
    var brick=0;
    if(base<10){
        brick=Base*15*1000;
    }
    else if(Base>10 && Base<=20){
        brick=(10*15*1000)+((Base-10)*12*1000);
    }
    else{
        brick=(10*15*1000)+((20-10)*12*1000)+((Base-20)*10*1000);
    }
    return brick;
}    
    
    var totalBrick=brickCalculator(floor);
    console.log(totalBrick+"bricks need for building");




    /**function tinyFriend */
var friendsList=['Niloy','Sheikh','Hasan','Yousuf','Ismail'];
function tinyFriend(friendsList){
    var sizeArray=Name[0].length;
    var index=0;
    for(var i=0;i<Name.length;i++){
        if(Name[i].length<sizeArray){
            Name=Name[i].lenght;
            index=i;
        }
    }
    return Name[index];


}
    var result=tinyFriend(friendsList);
    console.log(result);
    