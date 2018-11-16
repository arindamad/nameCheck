var name1 = "Sangita";
var name2 = "Arindam";
var print= "";
// console.log(name1.length);
for(var i=0; i<name1.length; i++){
    for(var j=0; j<name2.length; j++){
        if(name1[i]==name2[j]){             
            if(print==""){
                console.log('empty');
                print+=name1[i];
            }else{                
                for(var index=0; index<print.length; index++){
                    if(print[index]!=name1[i]){
                        print+=name1[i];
                    }                    
                }
            }                       

        }
    }
    
}
 
console.log(print);
