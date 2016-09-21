#!/bin/sh
str=""
while read p; do
	str="$str\n$p"
	echo $p
done <loop.txt

echo $str