function evenOdd(i){
	if(i<=0){
		return 0;
	}
	return evenOdd(i-2) + i;	
}
console.log(evenOdd(4));