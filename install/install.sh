#!/bin/bash
#install required debian packages
cat aptitude.txt | xargs sudo apt-get install --yes 

#install required python packages
sudo pip install -r requirements.txt

#creates application database
echo "create database gateway" | mysql --user=root --password=root

#set up django
cd ..
python manage.py syncdb
