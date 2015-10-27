#!/bin/bash
set -ev
if [ "${TRAVIS_BRANCH}" = "master" ]; then
	echo "Master Branch"
	scp -i deploy -r dist/* deploy@vsg-xebaci.cyoncloud.com:/var/www/html/diekulissezug.ch/client
fi

if [ "${TRAVIS_BRANCH}" = "development" ]; then
	echo "Dev Branch"
	scp -i deploy -r dist/* deploy@vsg-xebaci.cyoncloud.com:/var/www/html/dkz.gifstr.io/client
fi