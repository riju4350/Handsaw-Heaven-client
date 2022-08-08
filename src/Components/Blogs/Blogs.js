import React from "react";
import "./Blogs.css";
const Blog = () => {
  return (
    <div className="m-10">
      <div className="blogCard bg-primary rounded">
        <h3 className="font-bold">
          How will you improve the performance of a React Application?
        </h3>
        <p>
          <b>
            Following tasks can improve the performance of a React Application
          </b>{" "}
          <br />
          1. Keeping component state local where necessary.
          <br />
          2. Memoizing React components to prevent unnecessary re-renders.
          <br />
          3. Code-splitting in React using dynamic import{"()"}.<br />
          4. Windowing or list virtualization in React.
          <br />
          5. Lazy loading images in React. <br />
        </p>
      </div>

      <div className="blogCard bg-primary rounded">
        <h3 className="font-bold">
          When should you use node.js and when should you use mongodb
        </h3>
        <p>
          <p>
            <b>Node : </b>
            Node. js is primarily used for non-blocking, event-driven servers,
            due to its single-threaded nature. It's used for traditional web
            sites and back-end API services, but was designed with real-time,
            push-based architectures in mind.
          </p>
          <p>
            <b>MongoDB : </b>
            MongoDB is a good choice when your data is document-centric and
            doesn't fit well into the schema of a relational database, when you
            need to accommodate massive scale, when you are rapidly prototyping,
            and a few other use cases.
          </p>
        </p>
      </div>
      <div className="blogCard bg-primary rounded">
        <h3 className="font-bold">
          What is the differences between sql and nosql databases.
        </h3>
        <p>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON.
        </p>
      </div>
      <div className="blogCard bg-primary rounded">
        <h3 className="font-bold">
          What is the purpose of jwt and how does it work
        </h3>
        <p>
          JSON Web Token (JWT) defines a compact and self-contained way for
          securely transmitting information between parties as a JSON object.
          This information can be verified and trusted because it is digitally
          signed.
        </p>
      </div>
    </div>
  );
};

export default Blog;
