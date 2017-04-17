# JobSearchPortal

Required Softwares:
1. NodeJs
2. Bower
3. Gulp
4. AngularJS
5. Bootstrap
6. Indeed rest search API
7. DataMap

Installation & Configuration:

Step 1:  
------
Download node.js from the below link as per your OS and type(bits)
	https://nodejs.org/en/

	- Once done with installation , check the node and npm installed or not
	using below commands.

	 - c:\> node –v 

	- c:\> npm -v
  
  
  Step 2: 
  ------
 
 - Open command prompt and install bower and gulp.
 
  c:\> npm install –g bower
  
  c:\> npm install -g gulp
  
  g- globally installing the bower command line installer using npm

	- Check the version using below command
  
	c:\> bower –v
  
  c:\> gulp -v
  
  
  Step 3:
  ------
	Go to the project source code folder from command prompt and install the
	following  tools.

	- {Project Folder}:\ > npm install

	 {Project Folder}:\ > bower install
   
  Step 4:
  -------
  
 Go to the project source code folder from command prompt and execute follwoing command to run the application

{Project Folder}:\ >gulp serve

 --- Application Overview ------
 
 APP:
 ----
 Application contains jobPortal as main module of application. In this module, all depedent modules are injected using angular depedency injection concept.
 
 Router:
 -------
 Applications router related configurations are available in index.route.js file. Here all controllers are binded with the templates and their router url using stateProvider service.($StateProvider service is angular default service)
 
 Controllers:
 ------------
 Application contains only two modules. They are 
 
 1. mainController:
 
      This controller contains data related to map and service calls to fetch data from the indeed site. 
      Indeed url: http://api.indeed.com/ads/apisearch
      On success of this service call, it will be redirected search results page.
      Custom ServiceSearch is injected into controller to hold data and access data in other controller.
      Datamaps API is used in controller to display USA map with data.
      
2. SearchresultController:

    This controller is used to display the job openings in table with pagination.
    Angular-Pagination module is injected in main module to use pagination in this controller.
    pageChangeHandler method in this controller to get fetch the data from indeed depending on the page number. It will retrieve data       using page number.
    
 Service:
 -------
    SearchService - To hold the dropdown data(state, category and classtype) and service fetched data from indeed.
    This service is injected in both controllers( mainController and SearchresultController)
    
    

 



