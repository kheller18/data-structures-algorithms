# Amazon Web Services (AWS) Interview Questions

---

1. What is EC2?
   + EC2, a Virtual Machine in the cloud on which you have OS-level control. You can run this cloud server whenever you want and can be used when you need to deploy your own servers in the cloud, similar to your on-premises servers, and when you want to have full control over the choice of hardware and the updates on the machine.

2. What is SnowBall?
   + SnowBall is a small application that enables you to transfer terabytes of data inside and outside of the AWS environment.
   ![snowball](../images/aws/snowball.png)

3. What is CloudWatch?
   + CloudWatch helps you to monitor AWS environments like EC2, RDS Instances, and CPU utilization. It also triggers alarms depending on various metrics.
   ![cloudwatch](../images/aws/cloudwatch.png)

4. What is Elastic Transcoder?
   + Elastic Transcoder is an AWS Service Tool that helps you in changing a video’s format and resolution to support various devices like tablets, smartphones, and laptops of different resolutions.

5. What do you understand by VPC?
   + VPC stands for Virtual Private Cloud. It allows you to customize your networking configuration. VPC is a network that is logically isolated from other networks in the cloud. It allows you to have your private IP Address range, internet gateways, subnets, and security groups.

6. DNS and Load Balancer Services come under which type of Cloud Service?
   + DNS and Load Balancer are a part of IaaS-Storage Cloud Service.

7. What are the Storage Classes available in Amazon S3?
   + Storage Classes available with Amazon S3 are:
     + Amazon S3 Standard
     + Amazon S3 Standard-Infrequent Access
     + Amazon S3 Reduced Redundancy Storage
     + Amazon Glacier

8. Explain what T2 instances are?
   + T2 Instances are designed to provide moderate baseline performance and the capability to burst to higher performance as required by the workload.

9.  What are Key-Pairs in AWS?
    + Key-Pairs are secure login information for your Virtual Machines. To connect to the instances, you can use Key-Pairs which contain a Public Key and a Private Key.

10. How many Subnets can you have per VPC?
    + You can have 200 Subnets per VPC.

11. List different types of Cloud Services.
    + Different types of Cloud Services are:
      + Software as a Service (SaaS)
      + Data as a Service (DaaS)
      + Platform as a Service (PaaS)
      + Infrastructure as a Service (IaaS)

12. Explain what S3 is?
    + S3 stands for Simple Storage Service. You can use the S3 interface to store and retrieve any amount of data, at any time and from anywhere on the web. For S3, the payment model is “pay as you go”.

13. How does Amazon Route 53 provide high availability and low latency?
    + Amazon Route 53 uses the following to provide high availability and low latency:
      + `Globally Distributed Servers` - Amazon is a global service and consequently has DNS Servers globally. Any customer creating a query from any part of the world gets to reach a DNS Server local to them that provides low latency.
      + `Dependency` - Route 53 provides a high level of dependability required by critical applications.
      + `Optimal Locations` - Route 53 serves the requests from the nearest data center to the client sending the request. AWS has data-centers across the world. The data can be cached on different data-centers located in different regions of the world depending on the requirements and the configuration chosen. Route 53 enables any server in any data-center which has the required data to respond. This way, it enables the nearest server to serve the client request, thus reducing the time taken to serve.
      ![Amazon Route 53](../images/aws/route.png)
        + As can be seen in the above image, the requests coming from a user in India are served from the Singapore Server, while the requests coming from a user in the US are routed to Oregon region.

14. How can you send a request to Amazon S3?
    + Amazon S3 is a REST Service, and you can send a request by using the REST API or the AWS SDK wrapper libraries that wrap the underlying Amazon S3 REST API.

15. What does AMI include?
    + A template for the root volume for the instance.
    + Launch permissions to decide which AWS accounts can avail the AMI to launch instances.
    + A block device mapping that determines the volumes to attach to the instance when it is launched.

16. What are the different types of Instances?
    + Compute Optimized
    + Memory-Optimized
    + Storage Optimized
    + Accelerated Computing
    + General Purpose

17. What is the relation between the Availability Zone and Region?
    + An AWS Availability Zone is a physical location where an Amazon data center is located. On the other hand, an AWS Region is a collection or group of Availability Zones or Data Centers.
    + This setup helps your services to be more available as you can place your VMs in different data centers within an AWS Region. If one of the data centers fails in a Region, the client requests still get served from the other data centers located in the same Region. This arrangement, thus, helps your service to be available even if a Data Center goes down.

18. How do you monitor Amazon VPC?
    + CloudWatch
    + VPC Flow Logs

19. What are the different types of EC2 instances based on their costs?
    + The three types of EC2 instances based on the costs are:
      + `On-Demand Instance`: These instances are prepared as and when needed. Whenever you feel the need for a new EC2 instance, you can go ahead and create an on-demand instance. It is cheap for the short-time but not when taken for the long term.
      + `Spot Instance`: These types of instances can be bought through the bidding model. These are comparatively cheaper than On-Demand Instances.
      + `Reserved Instance`: On AWS, you can create instances that you can reserve for a year or so. These types of instances are especially useful when you know in advance that you will be needing an instance for the long term. In such cases, you can create a reserved instance and save heavily on costs.

20. What do you understand by stopping and terminating an EC2 Instance?
    + Stopping an EC2 instance means to shut it down as you would normally do on your Personal Computer. This will not delete any volumes attached to the instance and the instance can be started again when needed.
    + On the other hand, terminating an instance is equivalent to deleting an instance. All the volumes attached to the instance get deleted and it is not possible to restart the instance if needed at a later point in time.

21. What are the consistency models for modern DBs offered by AWS?
    + `Eventual Consistency`: It means that the data will be consistent eventually, but may not be immediate. This will serve the client requests faster, but chances are that some of the initial read requests may read the stale data. This type of consistency is preferred in systems where data need not be real-time. For example, if you don’t see the recent tweets on Twitter or recent posts on Facebook for a couple of seconds, it is acceptable.
    + `Strong Consistency`: It provides an immediate consistency where the data will be consistent across all the DB Servers immediately. Accordingly. This model may take some time to make the data consistent and subsequently start serving the requests again. However, in this model, it is guaranteed that all the responses will always have consistent data.

22. What is Geo-Targeting in CloudFront?
    + Geo-Targeting enables the creation of customized content based on the geographic location of the user. This allows you to serve the content which is more relevant to a user. For example, using Geo-Targeting, you can show the news related to local body elections to a user sitting in India, which you may not want to show to a user sitting in the US. Similarly, the news related to Baseball Tournament can be more relevant to a user sitting in the US, and not so relevant for a user sitting in India.

23. What are the advantages of AWS IAM?
    + AWS IAM enables an administrator to provide granular level access to different users and groups. Different users and user groups may need different levels of access to different resources created. With IAM, you can create roles with specific access-levels and assign the roles to the users.
    + It also allows you to provide access to the resources to users and applications without creating the IAM Roles, which is known as Federated Access.

24. What do you understand by a Security Group?
    + When you create an instance in AWS, you may or may not want that instance to be accessible from the public network. Moreover, you may want that instance to be accessible from some networks and not from others.
    + Security Groups are a type of rule-based Virtual Firewall using which you can control access to your instances. You can create rules defining the Port Numbers, Networks, or protocols from which you want to allow access or deny access.

25. What are Spot Instances and On-Demand Instances?
    + When AWS creates EC2 instances, there are some blocks of computing capacity and processing power left unused. AWS releases these blocks as Spot Instances. Spot Instances run whenever capacity is available. These are a good option if you are flexible about when your applications can run and if your applications can be interrupted.
    + On the other hand, On-Demand Instances can be created as and when needed. The prices of such instances are static. Such instances will always be available unless you explicitly terminate them.

26. Explain Connection Draining.
    + Connection Draining is a feature provided by AWS which enables your servers which are either going to be updated or removed, to serve the current requests.
    + If Connection Draining is enabled, the Load Balancer will allow an outgoing instance to complete the current requests for a specific period but will not send any new request to it. Without Connection Draining, an outgoing instance will immediately go off and the requests pending on that instance will error out.

27. What is a Stateful and a Stateless Firewall?
    + A Stateful Firewall is the one that maintains the state of the rules defined. It requires you to define only inbound rules. Based on the inbound rules defined, it automatically allows the outbound traffic to flow.
    + On the other hand, a Stateless Firewall requires you to explicitly define rules for inbound as well as outbound traffic.
    + For example, if you allow inbound traffic from Port 80, a Stateful Firewall will allow outbound traffic to Port 80, but a Stateless Firewall will not do so.

28. What is a Power User Access in AWS?
    + An Administrator User will be similar to the owner of the AWS Resources. He can create, delete, modify or view the resources and also grant permissions to other users for the AWS Resources.
    + A Power User Access provides Administrator Access without the capability to manage the users and permissions. In other words, a user with Power User Access can create, delete, modify or see the resources, but he cannot grant permissions to other users.

29. What is an Instance Store Volume and an EBS Volume?
    + An Instance Store Volume is temporary storage that is used to store the temporary data required by an instance to function. The data is available as long as the instance is running. As soon as the instance is turned off, the Instance Store Volume gets removed and the data gets deleted.
    + On the other hand, an EBS Volume represents a persistent storage disk. The data stored in an EBS Volume will be available even after the instance is turned off.

30. What are Recovery Time Objective and Recovery Point Objective in AWS?
    + `Recovery Time Objective`: It is the maximum acceptable delay between the interruption of service and restoration of service. This translates to an acceptable time window when the service can be unavailable.
    + `Recover Point Objective`: It is the maximum acceptable amount of time since the last data restore point. It translates to the acceptable amount of data loss which lies between the last recovery point and the interruption of service.

31. Is there a way to upload a file that is greater than 100 Megabytes in Amazon S3?
    + Yes, it is possible by using the Multipart Upload Utility from AWS. With the Multipart Upload Utility, larger files can be uploaded in multiple parts that are uploaded independently. You can also decrease upload time by uploading these parts in parallel. After the upload is done, the parts are merged into a single object or file to create the original file from which the parts were created.

32. Can you change the Private IP Address of an EC2 instance while it is running or in a stopped state?
    + No, a Private IP Address of an EC2 instance cannot be changed. When an EC2 instance is launched, a private IP Address is assigned to that instance at the boot time. This private IP Address is attached to the instance for its entire lifetime and can never be changed.

33. What is the use of lifecycle hooks is Autoscaling?
    + Lifecycle hooks are used for Auto-scaling to put an additional wait time to a scale-in or a scale-out event.

34. What are the policies that you can set for your user’s passwords?
    + Following are the policies that can be set for user’s passwords:
      + You can set a minimum length of the password.
      + You can ask the users to add at least one number or special character to the password.
      + Assigning the requirements of particular character types, including uppercase letters, lowercase letters, numbers, and non-alphanumeric characters.
      + You can enforce automatic password expiration, prevent the reuse of old passwords, and request for a password reset upon their next AWS sign-in.
      + You can have the AWS users contact an account administrator when the user has allowed the password to expire.

35. What is "AWS Lambda"?
+ Lambda, a software service platform offered by Amazon Web Services, is an example of this type of platform. Lambda enables serverless computing in specific scenarios. Events generated by AWS can be used to initiate the execution of code in any application.
+ You have access to a wide range of AWS services, including the Amazon Simple Storage Service (S3) for storing files, the Amazon DynamoDB for updating tables, the Amazon API Gateway for gaining access, and many more. AWS Lambda frees developers from the burden of configuring and managing software servers, allowing them to focus on writing and running their programmes.



36. Is there a programming language that AWS Lambda is not compatible with?
+ AWS Lambda allows for the use of the following programming languages: C#, .NET, Node.js, Javascript, Java (version 8), and Go. These programming languages already have their libraries and other built-in features set up and ready to go.



37. What are the procedures for entering EC2?
+ Users are able to connect to EC2 with either a command-line interface or a web-based interface. A further benefit of using AWS lambda is that it equips Windows power shells with the necessary tools.

38. What are the constraints that AWS lambda function imposes?
+ AWS Lambda imposes only a few light constraints on the kinds of things that may be done with an operating system and the kinds of programming languages that can be used with it. You cannot simply cease doing things like creating instances, tracking phone calls, or blocking incoming network connections.
+ These activities are not possible. While you're doing it, you should disable things like the system debugger and any TCP ports (More than 25 traffic available to measure the anti-spam). When it comes to establishing connections with the wider world, IP/TCP sockets are an extremely handy tool.



39. Which capabilities of AWS lambda contribute to the automation of the deployment process?
+ A diverse range of environments is available for use with AWS Lambda. You can use these configurations to retrieve the appropriate data and user credentials in the event that you need to make modifications to your deployment packages, but do not have access to the original packages.
+ Aliases are something that can be used with AWS Lambda, which is a serverless technique. This is something that is already common information. It is not difficult to take into account the many AWS Lambda variants throughout the pre-production phase and the development of an application.
+ As a consequence of this, the Lambda function can be considered for testing without seriously affecting the user code when it is being run in production. It is not important how you do the work as long as you follow the plan and do it in the correct sequence.



40. What is the maximum execution time allowed for an AWS Lambda function to be customised?
+ The entirety of the execution will be finished within three hundred seconds of the first user call being made to AWS lambda. The length of timeouts can be customized anywhere from 1 and 300 seconds, with 3 seconds serving as the default value.



41. What are the available frameworks for the serverless approach?
+ There are currently a number of powerful serverless frameworks available. They provide outstanding customer service, an open-source whisk, and capabilities for Microsoft Azure, all of which contribute to their product's high level of user-friendliness. 
+ During the process of constructing a cloud infrastructure, the concept of serverless application software is only taken into consideration. The AWS Lambda Application Programming Interface (API) makes scripting a snap, which in turn makes complicated processes more manageable and reliable.



42. For instance, how can Amazon Elastic Compute Cloud (AWS Lambda) guarantee the safety of my programmes?
+ The user codes for AWS Lambda can be saved in Amazon S3, and after that, they can be encrypted by following the necessary steps. During the processing, additional tests on the data's integrity are performed by using AWS Lambda.



43. How long may a lambda function in AWS be allowed to run before it is considered a DDOS attack?
+ DDOS attacks are possible with AWS lambda, but you only have five minutes to complete the process.



44. What is meant by the term "auto-scaling"?
+ Simply said, auto-scaling in AWS lambda is a function of the Amazon web service that enables users to start new instances of a service and carry out any necessary configuration chores without having to manually interfere.
  ![auto-scaling](../images/aws/auto_scaling.png)
+ This function enables users to save time and effort. You are free to relax and see how the installation is carried out while keeping a close check on the threshold and key performance indicators as they appear in real-time. In other circumstances, all that is required of you is to cross the threshold in order to instantly begin the work and any instances related to it. This entails no additional horizontal disruption.


1.  What are your thoughts on the concept of payments that have no downtime?
+ For deployment purposes, Lambda on AWS often makes use of instance functions. In addition, if the programmes are exceptionally difficult to understand, the AWS lambda framework can be segmented into more manageable parts. In reality, the application is inaccessible online while it is doing a process because that takes some amount of time. The finished thing turned out quite well.



1.  Is there access available to the servers that AWS lambda uses by the general public?
+ The answer is not positive, to put it succinctly. With the release of AWS Lambda, it is now possible to use the cloud computing infrastructure to carry out activities without requiring any input from the user. In addition to this, there is no way to access the Lambda infrastructure. Because of the way that this arrangement is configured, Lambda is able to perform preventative maintenance, check its health, and update its security measures.



1.  Kindly clarify what the EC2 services are?
+ Aws Lambda requires scalable computational capabilities so that it can process user data in the cloud. Managing EC2 is just as easy as managing any other online service, and all of the same measures for network security should be taken. Using this strategy, configuring capacity and working with EC2 with as little effort as feasible is achievable.



1.  What do you think about the idea of using packages with AWS lambda?
+ In AWS Lambda, it is very natural for user-created packages as well as NPM packages to be utilized efficiently.



1.  What is "AMI" in AWS Lambda?
+ `Amazon Machine Image` is referred to by its acronym, AMI, and is utilized rather commonly in Lambda-based processing. In its most basic form, it is a starting point that has commonly used software such as an operating system, an application server, and potentially some extra programs already installed on it.
+ The duplicate in the cloud can be created because it already has several copies and can handle running multiple instances at the same time. In addition, the Amazon Machine image can be used to run a virtual server that is hosted in the cloud.



1.  What are the limits of the availability of lambda functions on Amazon Web Services?
+ The lambda application hosted on Amazon Web Services makes use of redundancy and replication to ensure that your lambda and Amazon services continue to run without interruption. In addition, the management of Amazon Lambda's downtime and maintenance windows is incorporated into this offering.



1.  What are the various storage choices that are available through Amazon?
+ Amazon Lambda is designed to work with a broad range of storage alternatives, but the most important thing to keep in mind is that every one of these choices offers the highest possible level of dependability and productivity. There is no logical impediment to employing both of them in tandem. Access can also be gained without the use of a guide or assistant.
+ I'll only list a few, but one of them is Elastic Block Storage (EBS), which is a method for storing data that utilizes block-level storage. If separate storage is required, this product, which comes with built-in encryption features, is one option that could be considered. The subsequent type is known as an EC2 instance, and it operates very similarly to a storage disc that is directly connected to the host computer.
+ This form of storage is designed for use over a relatively short period of time, as the name suggests. After some time has gone by, the user has the opportunity to consider whether or not the financial investment in good storage is worthwhile. The user data will continue to be valid so long as the instances themselves continue to be valid. The next option is for adding storage, which is effectively the user's root storage and can be utilized for running instances.
+ This will almost always include data pertaining to the boot instance. Following that, Amazon Simple Storage Service (S3) -> is another type of AWS lambda storage that enables users to store an unlimited quantity of data at an affordable cost.



1.  Is there a maximum limit that has been predetermined and that needs to be adhered to in any way?
+ The account level is the only place where the default limit for AWS lambda is enforced. At the functional level, there is no limit that is predetermined.



1.  What exactly is meant by the term "elastic blocker" when referring to AWS lambda?
+ Users can make use of the elastic storage, which is effectively a digital file cabinet, in order to get started with the networking-related responsibilities that need to be completed. The user does not need to be concerned about the possibility of data loss due to a damaged disc as long as the RAID array is in good health.
+ The storage in question also supports the process of allocating and provisioning memory space. On occasion, a connection can be made between this and the application programming interface that exists on a node that serves a specific purpose.



1.  How can we automate apps that do not require a server?
+ Following the completion of the serverless application development with AWS Lambda, the automated procedure is then released, and the application is then deployed. Because of this, the serverless application can be deployed with the help of the AWS code pipeline, a continuous form of service delivery that enables the required modeling, data visualization, and automation of activities.
+ Automated code deployment for lambda-based applications is also on the roadmap for AWS code deployment. This enables the user to coordinate deployments in accordance with best practice application methodologies, such as a canary deployment and a linear deployment, which helps verify that the newly created deployment programme is safe, reliable, and fit for use at an industrial level.

1.  How do I build my first serverless app?
+ n order to get started with serverless applications, you will need to access the AWS Lambda dashboard and save the blueprint. This file's original version will be downloaded, and it should include both an AWS Sam file (which the programme refers to as an AWS resource) and a ZIP file (which mostly included the function code). With the assistance of the AWS Cloud Formation commands, you will be able to successfully complete tasks such as documenting your serverless apps and deploying them.



1.  What is SQS and what does it perform in relation to AWS lambda?
+ A way of sharing data between various hosts on a local network and network endpoints is what the Simple Queue Service (SQS) in AWS lambda is all about. SQS makes it possible for applications to communicate with one another and provides users with access to lambda's many different functions.
+ It makes no difference which functional components you make use of because they are all connected to one another. As a consequence of this, a failure mechanism is no longer required, and the ability of individual elements to communicate with one another has been significantly improved.



1.  What actions should I take to fix my app that does not require a server?
+ AWS x-ray can be used to activate an AWS lambda function for tracking by first providing x-ray access to lambda functional roles for execution and then setting the function's "mode of code tracing" to active.
+ When a user activates X-RAY for lambda functional components, the system starts recording various amounts of information, including the amount of time spent on each lambda service, the overall amount of time spent on all lambda services, the duration of each functional execution, and more. There are X-ray software development kits (SDKs) available right now for both Node.js and Java.



1.   If adjustments are made to the code or configuration, will the AWS lambda-based function still be accessible after these changes have been made?
+ If you're wondering whether or not an update to an AWS lambda function will cause a brief interval (less than a minute) during which requests can be fulfilled by either the old or new version of the lambda functions, the answer is yes. If you're wondering whether or not an update to an AWS lambda function will cause a brief interval (less than a minute), the answer is yes.



1.  Is there a limit to the number of AWS lambda functions that can run in parallel at the same time?
+ Because the AWS lambda application was designed to work only on certain instances of functional codes, the answer is "no." In addition, there is a default safety threshold in AWS lambda for a specific number of consecutive executions for each subscription. This barrier is based on the number of executions.
+ You will be able to save your most important resources for the times when they are required the most if you restrict the number of times that a single AWS function can execute a lambda in succession.



1.  What will happen if the total amount of my execution goes beyond the normal limit?
+ The AWS Lambda functions are called in real time whenever the threshold is exceeded, and the threshold error is returned (429 errors –code). A substantial quantity of traffic may be handled by Lambda functions for 15–30 minutes at a time, and they can be run asynchronously in order to fulfil their primary objectives. The operation will come to a close by filtering out and slowing down upcoming events.
+ After the AWS lambda function that manages the configuration has suppressed it, the storage tool will no longer be able to get it to respond to Amazon S3 events. The vast bulk of the events is supplied by Amazon Kinesis, Amazon DynamoDB, and the data that has been deprecated. The fact that Amazon Kinesis and Amazon DB events preserve data for more than twenty-four hours makes them extremely useful.



1.  What is a Serverless Application?
+ The serverless applications are lambda-based, which means that they are made up of functions that are triggered into action in response to particular events. Every one of the functional events, such as an item being uploaded to Amazon S3, an Amazon SNS message being received, or an API request being made, will activate one or more functions in the default serverless application.
+ These methods can function independently, making use of other Amazon Web Services (AWS) technologies such as DynamoDB tables and S3 buckets. The most popular kind of serverless application is called a function.



1.  How might we benefit if we did away with the requirement of having a server?
+ The following is a list of the primary advantages of using the Serverless method:
+ To get things started, the uncomplicated procedures of the Serverless technique provide a quicker time to market and an increase in revenue.
+ The user is only charged for the code while it is being compiled, and by increasing earnings, many expenses can be avoided.
+ You are able to simply manage the smaller applications that make up the larger program, and you have the appropriate infrastructure in place to back it up.


1.  What exactly are the drawbacks of deciding to follow the road of serverless computing?
+ 1. There are advantages and disadvantages to utilizing each component of AWS lambda, and these aspects change according to the type of work that is being carried out.
+ 2. In the serverless paradigm, scalability is totally dependent on the vendor, therefore there is an increased chance for outages. Additionally, the serverless model has a higher failure rate.
+ 3. The elimination of functionality and the introduction of new limitations are two examples of common issues. In addition, the serverless method of Amazon Web Services does not make use of any specialized hardware in any way.
+ 4. Problems are frequently brought about by the blunders made by the customer.



1.  What is the main difference between an anonymous class and a lambda function?
+ The fundamental difference is in the emphasis that is placed on a number of different phrases. Keywords are utilized by lambda functions so that they can successfully resolve the functional classes. On the other hand, keywords are employed in order to resolve the anonymous functional class within the anonymous class.



1.  What exactly does it mean to have anything "automated" when it comes to deployment?
+ 

1.  How does AWS lambda facilitate deployment automation?
+ 

1.  What are the procedures for entering EC2?
+ 

1.  Explain the many different serverless frameworks that are available.
+ 

1.  Why exactly should someone take into consideration implementing a serverless strategy?
+ 

1.  If a microservice or a small service fails, is it possible to debug and repair it?
+ 

1.  Is there any other potential downside to using the serverless method? Do you have any ideas or suggestions?
+ 

1.  Is there a particular explanation for why utilizing Lambda results in greater levels of efficiency?
+ 

1.  How long may a Lambda function be allowed to run before it is considered a successful distributed denial of service attack?
+ 

1.  Tell me more about the zero-downtime deployment.
+ 

1.  How could you possibly manage exceedingly intricate querying capabilities if you did not have a warehouse? Which database would you check first given the circumstances of the situation?
+ 

1.  What advantages does AWS Lambda have over its rival technologies, such as Google Cloud Functions and Microsoft Azure Functions?
+ 

1.  Serverless computing is something you might be able to explain if you're familiar with Amazon Web Services.
+ 

1.  What kinds of storage options does Amazon provide its customers with?
+ 

1.  In your perspective, is there a link between Instance and AMI?
+ 

1.  What are the best practices for maximizing Lambda's security?
+ 

1.  In the context of Lambda, what precisely does it mean to speak of elastic blockage storage?
+ 

1.  What is one simple way that the efficiency of your AWS Lambda deployment might be improved?
+ 

1.  What is your level of expertise in the craft of AMI construction?
+ 

1.  Is it possible to scale Lambda vertically?
+ 

1.  What are your thoughts on Configuration Management?
+ 

1.  What is SQS in Lambda. In what way does it function?
+ 

1.  How well versed are you in Lambda Expression?
+ 

1.  Where can I find more information about the Final Variables and Effectively Final Variables of Lambda?
+ 

1.  Where exactly is the functionality that Lambda was designed for?
+ 

1.  What is "Serverless App"?
+ 

1.  In what ways are anonymous classes and Lambda functions distinct from one another?
+ 

1.  Is code allowed to be paused in Lambda Expression without a label?
+ 

1.  In what ways does the coding that governs AWS Lambda functions impose limitations?
+ 

1.  What kinds of computer programmes can be run on Amazon Web Services' Lambda?
+ 

1.  How exactly does one go about automating a serverless app's processes?
+ 

1.  What happens when the maximum number of executions that can take place on an account has been reached?
+ 

1.  An application that does not need a server in order to execute is referred to as serverless.
+ 

1.  What exactly is the Lambda architecture of AWS?
+ 

1.   What are some of the ways in which a serverless architecture might be useful?
+ 

1.   How do I begin using a serverless application?
+ 

1.   What are the factors that decide how AWS Lambda is charged?
+ 


