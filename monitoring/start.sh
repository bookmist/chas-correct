#!/bin/bash
mkdir results
for script in `cd scripts && ls *.js && cd ..`
do
	ionice -c3 nice -n9 js scripts/$script > results/$script.common.log &
done;