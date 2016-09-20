#!/bin/sh

function sumNum(){
	echo $1,$2
	return $(($1+$2))
}

sumNum 5 7
total=$(sumNum 3 2)
echo $total,$?
