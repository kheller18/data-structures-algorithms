# Simple Access Protocol (SOAP) API
+ SOAP API, or simple object access protocol application programming interface, is a standard messaging protocol that operating systems use to communicate via Hypertext Transfer Protocol (HTTP) and Extensible Markup Language (XML). As an API, SOAP allows applications to interact and create, update, delete and recover records such as passwords, accounts and custom objects. Because of its extensible, neutral and independent nature, SOAP API allows developers to maintain accounts and run searches using all programming languages.
+ Web protocols like HTTP can install and run on all operating systems, so with SOAP, you can receive responses independent of the language or platform. SOAP messages are XML documents that include coding and tag elements like:
  + `Message`: A message represents information that's exchanged between two SOAP nodes. A node allows the two APIs to connect to the network properly.
  + `Envelope`: The envelope includes the XML document as a SOAP message. The envelope tag identifies the XML as SOAP.
  + `Header`: The header tag provides a title for the entire landing page or body text. Having a header tag in the coding is optional.
  + `Body`: The body contains the call and response information of the message, which includes the name of the procedure, parameters and data. The body tag contains the bulk of the SOAP message.
  + `Fault`: The fault tag relays information about errors that took place while processing the message within the SOAP body. This tag also contains sub-element tags that describe what type of error occurred.

## SOAP API vs. REST API
+ Representational state transfer (REST) is another popular API delivery method. SOAP API and REST API have similar functionalities, as they both work and use different tools to communicate. REST API is an architectural style that's easy to use and tends to be more common, while SOAP API is a more complex protocol that's in use among fewer developers. Though the two compete in standards, it's possible to build a REST API while using SOAP protocols. The major differences between SOAP and REST include:
  + `Standards`: SOAP API has official standards because it's a protocol, while REST API has no official standards because it's an architectural style of coding and tags. SOAP only operates with HTTP and XML standards, and REST API uses multiple standards, such as uniform resource locater (URL) and HTTP.
  + `Functionality`: REST accesses data through a consistent interface with names of resources. SOAP uses a different interface to perform operations through a standardized set of messaging patterns.
  + `Business logic`: REST and SOAP use different algorithms when exchanging information between a database and the user interface. SOAP API uses service interfaces like @WebService and REST API uses a URL interface like @path(“ /WeatherService“).
  + `Bandwidth`: REST API uses little bandwidth and resources, while SOAP uses XML to create a payload that results in large file sizes.
  + `Language`: REST API uses Web Application Description Language, while SOAP API uses Web Services Description language to describe the functionalities being offered by web services.
  + `Errors`: Because SOAP API uses multiple standards that function in a certain way, miscommunication can result in errors. REST API doesn't require many standards, so an error may cause a corrupt API.
  + `Convenience`: REST API is convenient with the use of specific programming languages and can implement easily. While SOAP API works with specific programming languages, it may not have the capability for implementation with other software programs.
  + `Rules`: Both SOAP and REST rely on well-established rules that developers and webmasters have agreed to follow to exchange information. Rules for SOAP are important because you can't reach any level of standardization without them, while REST is more flexible and doesn't require processing.

## When to Use SOAP
+ While many software companies provide easy-to-use tools for clients to organize business processes, some organizations have complex processes that existing technology doesn't support. Developers can use SOAP to build custom functionalities for individual organizations. When developers are working on custom objects, accounts or leads, they can use SOAP to create, update, retrieve or delete records. SOAP API has over 20 different calls that allow you to maintain passwords, perform searches and complete other tasks. It can also use any language that supports web services, meaning that web developers who use a range of languages can work with this API.

## Benefits of SOAP
+ `Standard protocols`: With SOAP's standard HTTP protocol, it's easier to operate across proxies and firewalls without having to make any modifications.
+ `Enhanced security`: SOAP offers robust security with the assurance of data privacy and integrity while supporting identity verification through third-party encryptions such as SSL.
+ `Reliable transactions`: With the use of HTTP, SOAP allows for greater transaction reliability. This helps with ACID-compliant transactions in the event of errors, power failures or other mishaps.
+ `Neutral functionality`: SOAP APIs can operate over various communication protocols, including simple mail transfer protocol (SMTP), transmission control protocol (TCP) and HTTP.
+ `Less coding`: When dealing with complex operations, SOAP requires minimal coding in the application layer for security, transactions and other elements. This can make it relatively easy to learn how to work with SOAP.
+ `Greater extensibility`: SOAP is extensible through other technologies and protocols. SOAP supports various web services, including WS-Security, WS-Coordination, WS-Reliable Messaging and WS-Addressing.
+ `Independent operation`: Because of its independent operation and compatibility with any programming language, SOAP API is convenient for various organizations and web developers.
