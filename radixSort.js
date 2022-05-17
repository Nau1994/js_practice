const A=new Array(100000).fill().map(() => Math.floor(Math.random()*10000));

function counting_sort(A, digit, radix){
    //"A" is a list to be sorted, radix is the base of the number system, digit is the digit
    //we want to sort by

    //create a list B which will be the sorted list
    let B = new Array(A.length).fill(0);
    let C = new Array(radix).fill(0); 
    //counts the number of occurences of each digit in A 
    for (let i=0;i<A.length;i++){
        digit_of_Ai = Math.floor(A[i]/Math.pow(radix,digit))%radix;
      
        C[digit_of_Ai] = C[digit_of_Ai] +1 ; }
        //now C[i] is the value of the number of elements in A equal to i

    //this FOR loop changes C to show the cumulative // of digits up to that index of C
    for (let j=1;j<radix;j++){
        C[j] = C[j] + C[j-1]; }
        //here C is modifed to have the number of elements <= i
    for (let m=A.length-1;m>-1;m--) { //to count down (go through A backwards)
        digit_of_Ai = Math.floor(A[m]/Math.pow(radix,digit))%radix;
      
        C[digit_of_Ai] = C[digit_of_Ai] -1;
        B[C[digit_of_Ai]] = A[m];
    }
  
    return B
}

//alist = [9,3,1,4,5,7,7,2,2]
//print countingSort(alist,0,10)

function radix_sort(A,radix){
    //radix is the base of the number system
    //k is the largest number in the list
    k = Math.max(...A);
    //output is the result list we will build
    output = A;
    //compute the number of digits needed to represent k
    digits = (Math.floor((Math.log(k)/Math.log(radix))+1));
  
    for (let i=0;i<digits;i++) {
        output = counting_sort(output,i,radix);
    }
    return output;
      }

//A = [9,3,1,4,5,7,7,2,20,55]
//A = [10,1,100,8]
//let A=[5,3,88,235,65,23,4632,234];
console.log((radix_sort(A,10)));