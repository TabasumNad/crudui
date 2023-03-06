import React from "react";


const About=()=>{
    return(
        <div className="container">
            <div className=" py-4">
                <h2 className="para">About User's List using CRUD operations </h2>
                <p className="para"><b>This UI is about how to successsfully build a User's List using all the CRUD(Create, Read, Update, Delete) operations</b></p>
                <p className="paragraph">CRUD operations are used in persistent storage applications, meaning these applications will keep their data even after the system powers down. These are different from operations on data stored in volatile storage, like Random Access Memory or cache files.
                <br>
            </br>
            <br></br>
            CRUD is extensively used in database applications. This includes Relational Database Management Systems (RDBMS) like Oracle, MySQL, and PostgreSQL. It also includes NoSQL databases like MongoDB, Apache Cassandra, and AWS DynamoDB.
            <br></br>
            <br></br>
            Operations similar to CRUD can be performed on persistent data structures like files. For example, you can create a Microsoft Word document, update it, read it, and even delete it from the file explorer. However, files are not record-oriented (or document-oriented in the case of MongoDB or Couchbase). The CRUD terminology is specifically related to record-oriented operations instead of flat file operations.
            </p>

            </div>

        </div>
    );
};

export default About;