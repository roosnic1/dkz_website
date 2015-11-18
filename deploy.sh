#!/bin/bash
set -ev
if [ "${TRAVIS_BRANCH}" = "master" ]; then
	echo "Master Branch"
	ssh -i deploy deploy@vsg-xebaci.cyoncloud.com 'mkdir -p /var/www/html/www.diekulissezug.ch/client'
	scp -i deploy -r dist/* deploy@vsg-xebaci.cyoncloud.com:/var/www/html/www.diekulissezug.ch/client
fi

if [ "${TRAVIS_BRANCH}" = "development" ]; then
	echo "Dev Branch"
	ssh -i deploy deploy@vsg-xebaci.cyoncloud.com 'mkdir -p /var/www/html/dkz.gifstr.io/client'
	scp -i deploy -r dist/* deploy@vsg-xebaci.cyoncloud.com:/var/www/html/dkz.gifstr.io/client
fi