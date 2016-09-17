# PSR7-Requests In JavaScript

I try to implement [PSR7 Request and Response objects](http://www.php-fig.org/psr/psr-7/) as close as reasonable in
JavaScript. This is also nice for anyone who thinks about their code in terms
of passing around known and well defined objects, plus you gain symetry in how
you think about your code between systems.

Modeled after tests in [guzzle/psr7](https://github.com/guzzle/psr7)

# What's ported?

My goal for a v1.0 release is

 - Request
 - Response

Other aspects of the spec can be added as feature releases. PRs are welcome!

# Exceptions from canonical PSR7 spec

While implementing in JavaScript some things may work differently than in PHP.

 - Obvious there are no namespaces
 - There are no interface guards
 - PHP "Array" needs to be swapped for a JS Object any time the keys are named.
 - 
