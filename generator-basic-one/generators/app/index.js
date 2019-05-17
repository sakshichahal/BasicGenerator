'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.

   this.log(
      yosay(`Welcome to the breathtaking ${chalk.red('generator-basic-one')} generator!`)
    );

    this.log("Hello! Congratulations for successfully creating a generator.I'll be creating two folders- folder1, folder2 and a dummy txt file at root.")
    
    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );

    this.fs.copy(
      this.templatePath('folder1/file1.txt'),
      this.destinationPath('folder1/file1.txt')
    );

    this.fs.copyTpl(
      this.templatePath('folder2/file2.html'), // the template file in this generator
      this.destinationPath('folder2/index.html'), //the path of created file
      { title: 'Henlo! I have changed the title!'} // user answer `title` used
    );
  }

  install() {
    this.installDependencies();
  }
};
