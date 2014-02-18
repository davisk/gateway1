#!/bin/bash
#a script for automatically runing autopep8

echo "Please enter the name of your file to be formatted:"
read FILENAME1
autopep8 --in-place --aggressive $FILENAME1
