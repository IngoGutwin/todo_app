## To store data from the front-end in a MongoDB database, you'll need a few things:

# 1. [done] 
A MongoDB database: You'll need a MongoDB database set up and running. You can either set up your own MongoDB server or use a cloud-based MongoDB service like MongoDB Atlas.

# 2.  
A backend server: You'll need a backend server that can communicate with the MongoDB database. The server can be written in any language that has a MongoDB driver, such as Node.js, Python, or Java.

# 3. 
A connection to the MongoDB database: You'll need to establish a connection to the MongoDB database from your backend server. This can be done using a MongoDB driver for your chosen language.

# 4. 
A way to send data from the front-end: You'll need a way to send data from the front-end to the backend server. This can be done using an HTTP request library like axios or fetch, or a library for making API calls like vue-resource.

# 5. 
A way to handle the data on the backend: Once the data is sent from the front-end, you'll need to handle it on the backend. You'll need to write code that can receive the data, validate it, and store it in the MongoDB database.

# 6. 
Data Model: You'll need to create data models that represent the structure of the data you'll be storing in the MongoDB database. You can use Mongoose or any other ODM (Object Document Mapping) library to create models.

# 7. 
Authentication & Authorization: It's important to implement authentication and authorization mechanism to secure the data and make sure that only authorized users can access the data.

# 8. 
Once you have all these components set up, you can send data from the front-end to the backend server, where it can be validated, processed, and stored in the MongoDB database.

# It's important to note that, you should use a secure way of sending data from front-end to back-end, like using HTTPS and also validate the data on the backend before storing it in the database.