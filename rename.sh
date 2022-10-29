#!/bin/bash

ls
cd static
ls
cd open-doodles
ls
cd svg
ls
a=1
for i in *.svg; do
  new=$(printf "%04d.svg" "$a") #04 pad to length of 4
  mv -i -- "$i" "$new"
  let a=a+1
done