#!/usr/bin/env python

import argparse

parser = argparse.ArgumentParser(description='Print the number of arguments.')
parser.add_argument('arguments', metavar='ARG', type=str, nargs='*', help='some arguments')
parser.add_argument('-m', dest='message', default='', help='custom message')
parser.add_argument('-v', '--verbose', help='verbose mode', action='store_true')
# TODO: add '-v' option for verbose mode

args = parser.parse_args()

count = 0
b = ''

for a in args.arguments:
    # TODO: add '-v' option for verbose mode
    # and print each argument
    b = b + a + ' '	
    count += 1

if args.message != '':
    print(args.message)


print(count)

if args.verbose:
    print('Arguments are: ' + b)
