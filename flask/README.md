SEIU Metrics Calculator
======================

Installation
------------
1. Create MySQL database, user and the database "seiumetrics"

` mysql -uroot -p
` create database 'seiumetrics';
` create user 'username'@'localhost' identified by 'password';
` grant all privileges on seiumetrics.* to 'username'@'localhost';

2. Create virtual environment

` virtualenv env
` source env/bin/activate

3. Install pip requirements

` pip install -r requirements.txt

4. Modify config.py to use your MySQL credentials

5. Create database

` python db_create.py
` python db_migrate.py

6. Run application on localserver

` python run.py