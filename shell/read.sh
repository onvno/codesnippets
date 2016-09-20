#!/bin/sh
filename="t.txt"
ary=""
while IFS='' read -r line || [[ -n "$line" ]]; do
	ary="$ary\n$line"
    echo "Text read from file: $line"
    
done < "$filename"
echo $ary
