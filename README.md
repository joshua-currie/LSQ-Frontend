Joshua Currie - LSQ SWE Intern Take-Home Assessment

NOTE: This assessment consists of two repositories, one for the front end and one for the back end. 

This is the FRONTEND repository. The BACKEND repository can be found [here](https://github.com/joshua-currie/LSQ-Backend).

---

The following contains steps to run the application with the assumption that the user has access to both repositories (Frontend and Backend)

1. Create a local copy of both the frontend repository and the backend repository and open up two terminals, one will be for running the front end and the other for the backend.

   Let's start with the backend

2. In the terminal meant to run the backend, navigate into the directory containing the backend project. 
HINT: If you do the **ls** command, you should see Angular-Component-data, Api-Service, run_apis.bat, and run_apis.sh.

3. Once in the right directory, run either **run_apis.sh** or **run_apis.bat** depending on your operating system and other external configurations. 
NOTE: Because the python api scripts involve the flask library and flask cors, it might be necessary to install flask/flask_cors if it is not installed already (**pip install flask_cors**).

4. The backend and API services should be live now on ports:5000, 5001, 5002, 5003, and 5004. One for each individual API in order to promote isolation and flexibility.

   Time for the frontend

5. In the terminal meant to run the frontend, navigate into the directory containing the frontend project. 
Hint: If you do the **ls** command, you should see the src folder within this directory.

6. Then, provided node.js is already installed, run **npm install**.

7. After that, run **npm uninstall ng2-charts**, and then **npm install ng2-charts@2.3.0** to change the charts library into a more stable version.

8. Then, Using the Angular CLI run **ng serve** in order to launch the browser application.

9. In a browser, go to http://localhost:4200/ in order to view the application. 
