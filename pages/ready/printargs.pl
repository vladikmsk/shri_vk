#!/usr/bin/env perl

use strict;
use Getopt::Long;
use Pod::Usage;

my $help;
my $message = '';
my $verbose;

@ARGV and GetOptions(
    "h" => \$help,
    "m:s" => \$message,
    "v" => \$verbose,
    # TODO: add '-v' option for verbose mode
) or pod2usage(1);
pod2usage(-verbose => 2, -exitval => 2) if $help;

my $count = 0;

my $argus = '';

foreach(@ARGV) {
    # TODO: add '-v' option for verbose mode
    # and print each argument
    if ($verbose) {
    	$argus = $argus . @ARGV[$count] . ' ';
    }

    $count++;
}




if($message ne "") {
    print($message . "\n");
}

print("Count: " . $count . "\n");

print("Arguments are: " . $argus . "\n") if $verbose;

__END__

=head1 NAME

    printargs.pl - Print the number of arguments.

=head1 SYNOPSIS

    printargs.pl [options] [arguments]

=head1 OPTIONS

    -h      Show help message.

    -m MSG  Specify a custom message.

    -v      Verbose mode.	


=head1 EXAMPLE

    printargs.pl a b c

    printargs.pl -m 'Arguments count: ' a b c

    printargs.pl -h
   
    printargs.pl -v
