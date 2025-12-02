/*
//Asc
i = 1;

do {
    console.log(i);
    i++;
} while (i<=5);



//Desc
i = 6;

do {
    console.log(i);
    i--;
} while (i>=5);


i = 1;

do {
    console.log(i);
    i--;
} while (i>=5);
 */


arr = [4,2,3];

function arrDoWhile(arr){
    output="";
i = 0;
output="";

do{
    output += arr[i] + " ";
    i++;
} while(i < arr.length)

    console.log(output);
}

arrDoWhile(arr1);