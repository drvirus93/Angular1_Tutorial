#!/bin/bash
setup(){

	npm update
	bower update
	bower install
	npm install
}
setup
echo "You can launch now npm start"
