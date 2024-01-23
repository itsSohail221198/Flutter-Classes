# Appium Flutter Driver using WDIO
* Implementing flutter integration testing using appium_flutter_driver

# Pre-requisite:
* Node.js V20
* Flutter sdk
* Android sdk
* TypeScript

# Procedure:
* Set up Brew
* Set up Node and node.js in environmental variable
* Set up Java and JAVA_HOME in the environmental variable
* Set up ANDROID_HOME in the environmental variable
* Install Appium Doctor
* Clone a repositry for testing. In my case, I have taken store_ui. Source: https://github.com/Mtconcept/store_ui
* Add flutter_test dependicies in the pubspec.yaml file    
* Build the iOS application using the XCode
* Build the android apk using Android Studio
* Create a new repositry for Mocha frame work
* Now set up the config using "npm init -y" command
* Install appium in your newly created framework using npm command
* Run "npm i -D @wdio/cli"
* Run "npm i -D appium-flutter-finder appium-flutter-driver"
* Set up the wdio framework using "npx wdio config" (Set the framework as Mocha)
* Create a copy of config file for android and ios
* Modify both the config files
* Set up the test scripts
* Implement Page Object Model for the Mocha framework

