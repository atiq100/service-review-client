import React from 'react';
import useTitle from '../Hooks/useTitle';

export const Blog = () => {
    useTitle("blog")
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="p-8 bg-white border rounded shadow-sm">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Database
              </a>{' '}
              <span className="text-gray-600">— 1 Feb 2020</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Jingle Bells"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Difference between SQL and NoSQL?
            </a>
            <p className="mb-5 text-gray-700">
              <span className='text-lg font-semibold'>SQL:</span> RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS),These databases have fixed or static or predefined schema,These databases have fixed or static or predefined schema.
              Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc<br/>
              <span className='text-lg font-semibold'>NoSQL:</span>Non-relational or distributed database system.They have dynamic schema,Horizontally scalable
              Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Tahir
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border rounded shadow-sm">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
              JWT
              </a>{' '}
              <span className="text-gray-600">— 15 Nov 2020</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Happy new Year"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              What is JWT, and how does it work?
            </a>
            <p className="mb-5 text-gray-700">
            A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature. These three parts are separated by dots(.). JWT defines the structure of information we are sending from one party to the another, and it comes in two forms – Serialized, Deserialized. The Serialized approach is mainly used to transfer the data through the network with each request and response. While the deserialized approach is used to read and write data to the web token.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  John Doe
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border rounded shadow-sm">


            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                programming
              </a>{' '}
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Why i love C++"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              What is the difference between javascript and NodeJS?
            </a>
            <p className="mb-5 text-gray-700">
            <span className='text-lg fonty-semibold'>Javascript</span> Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.
            It is basically used on the client-side.Javascript is used in frontend development.<br/> 
            <span className='text-lg fonty-semibold'>NodeJS</span>NodeJS is a Javascript runtime environment.
            We can run Javascript outside the browser with the help of NodeJS.Nodejs is used in server-side development.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Andrew Larkin
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border rounded shadow-sm">


            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                programming
              </a>{' '}
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Why i love C++"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              How does NodeJS handle multiple requests at the same time?
            </a>
            <p className="mb-5 text-gray-700">
            NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Andrew Larkin
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };