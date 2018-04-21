# insurance-backend

This repository contains local web API that provides clients and policies info.

If you download this folder, do first npm install.

To run this code do npm start.

You have to authenticate to be authorized. You can authenticate yourself including in the headers of the request your user id using the key 'authId'.

There are two different enpoints depending if you want information about users or policies:

http://localhost:8080/user
http://localhost:8080/policies

To this two endpoints you can add query params to filter the results.

To the user enpoint yo can add one of the following query params: 
- 'id': to filter by user id
- 'name': to filter by user name
- 'policie': to filter by policie id

To the policies enpoint yo can add one of the following query params: 
- 'username': to filter by user name

Examples of use:
http://localhost:8080/user?id=a3b8d425-2b60-4ad7-becc-bedf2ef860bd
http://localhost:8080/policies?username=Britney
