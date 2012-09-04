#!/usr/bin/env bash

usage() {
cat << EOF
Usage: printargs.sh [OPTIONS] [ARGUMENTS]
  Print the number of arguments.

OPTIONS:
  -h      print help message
  -m MSG  custom message
  -v verbose mode

Examples:
  printargs.sh a b c
  printargs.sh -m 'Arguments count: ' a b c
  printargs.sh -h
  printargs.sh -v a b c
  printargs.sh -m 'Arguments count: ' -v a b c

EOF
}



while getopts “hm:v” OPTION # TODO: add '-v' option for verbose mode
do
    
    case $OPTION in
        h)
            usage
            exit 1
	    ;;
	m)
            MESSAGE=$OPTARG
	    ;;
	v)  MSG="arguments are:  "
	    ;;
    esac
done
shift $((OPTIND-1))

COUNT=0
#MSG="Arguments are: "

for ARG in $@; do
    # TODO: add '-v' option for verbose mode
    # and print each argument
    if [[ "$MSG" != "" ]]; then
    	MSG=$MSG' '$ARG
    fi
    let COUNT+=1
done


if [[ "$MESSAGE" != "" ]]; then
    echo $MESSAGE
fi

echo 'arguments count: '$COUNT

if [[ "$MSG" != "" ]]; then
    echo $MSG
fi
