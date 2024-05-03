/**
 * when working with node js, we are going to use lots of third party libraries to create node js applications
 * we are going to install or download those third party packages from npm.
 * 
 * NPM: node package maneger
 * it has 1) command line interface
 *        2) package reposatary
 * 
 * 1) command line interface: 
 *  npm command line interface gets automantically installed on the machine when we install node js.
 *  we cam ues this command line interface to install and manage open source packages 
 *  we are going to install and manage these open source packages from package repository 
 *  basically the packages which we install and manage using npmcli, it comes from package repository which is also called as npm (npmjs.com)
 * command line interface: 
 *  command line interface that is use to manage packages
 *  that we use to manage install thrid party open source packages that we choose to include and use in our project 
 *   to use npm command line interface you can open command prompt or you can also use  vs code built-in teriminal
 *   to check version of the npm is = npm -V or npm --version
 *   whenever we create new project the first we do is we create a configuration file for that project and this configration file we called as package.json where all kind of information about the project is stored.
 *   to create package.json file we can run this command called npm init 
 * 
 * package repository:
 *  package repository where we install packages this npmjs.com this is the package repository, where all the packages are stored from where we can download and install them 
 *  npm respository it is the largest software in the world, it hasn around 1 million package libraries and framewords which we can download  
 *  these days npm not just used only for node js but it is used accross the entire javascript development. no matter if you are developing frontend or backend application
 * 
 * Types of packages:
 *  1)Regular dependencies
 *  2)development dependencies
 * 
 * 1)Regular dependencies:
 *   a package is called as a simple or regular dependency if the working of our application or the code which we are writing depends on that package. 
 * 2)Development dependencies: 
 *   a package is called as development dependency if that package is only required for development purpose and on which, the working of the application does not depent.
 * 
 * to install package from npm the command is npm install package name
 * if you want to install specific version npm install package name@version_of_the_package
 * if you want to install dev dependency npm install package name --save-dev
 * 
 * 
 * Types of package installation:
 *   1. local installation
 *   2. global installation
 * 
 * 1. local installation:
 *    the packages is only being available in that project folder, where the packages is installed. it cannot be used outside of that folder
 * 2. global installation:
 *    the packages is installed globally in the machine and can be accessed from any folder or any project repository.
 *    to install package globally :-- npm install -g <package_name>
 *    to install package globally in dev dependency :-- npm i -g  <package_name> --save-dev
 * 
 * 
 * 
 */
