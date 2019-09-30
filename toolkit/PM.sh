#!/bin/bash

#script untuk restart aplikasi

date

var=$(ps axu | grep -v grep | grep "node neira-api.js")
        if [ ! -z "$var" ];
                then echo "found";
        else
          while true
          do
		node neira-pi.js|more
          done
fi

