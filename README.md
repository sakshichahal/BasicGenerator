# BasicGenerator
A basic Yeoman Generator that could be used as a reference for generating the simplistic repository structure:
```
.
├── dummyfile.txt
├── folder1
│   └── file1.txt
└── folder2
    └── index.html
```

To create the Yeoman Generator (It is already assumed that the required dependencies are installed) </br>
**Step1:** Create a new folder named - A and go to Terminal to the directory path - A.</br>
**Step2:** When you are in the directory A, Run command ``` yo generator```. The terminal will prompt you to fill in some details such as generator name - should start from **generator-mygenname** </br>
**Step3:** Make changes to the boilerplate code to create the required generator. </br>
**Step4:** To link the generator with npm so that it could be used, in the terminal, go to the ```generators``` folder in the created generator and in the terminal, run command ```sudo npm link```. The function of this command will be described below. </br> 
**Step5:** To run the generator inside any new directory, go to the directory in the terminal and run command ```yo mygenname``` </br>

 **```npm link``` means to symlink a package folder'. Put simply, it's a means to connect your parent application to a module you have locally on your machine. When you run the application, any changes you make to the dependency will be reflected in the application.**
 
 This github repo contains the folder use-basic-one where the generator has generated the above directory tree. 
 
