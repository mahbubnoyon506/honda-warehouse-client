import React from 'react';
import { Table } from 'react-bootstrap';
import Title from '../../Utilities/Title/Title';

const Blog = () => {
    return (
        <div>
            <Title title='Blogs'></Title>
            <div className='row g-5 mx-5'>
                <div className='col-md-6 py-3'>
                    <h4 className='py-3'>Difference between JavaScript and Node Js is given</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Java Script</th>
                                <th>Node Js</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Javascript is a programming language that is used for writing script on the website.</td>
                                <td>Node Js is a JavaScript runtime environment.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>JavaScript can onlt run in the browser.</td>
                                <td>We can run JavaScript outsite of the browser with the help of node js.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>It is basically used on the client side</td>
                                <td>It is mostly used on the server side.</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>JavaScript is capable enough to add HTML and play with the DOM</td>
                                <td>Node js does not have capability to add html tags. </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Javascript is used in frontend development.</td>
                                <td>Nodejs is used in server side development.</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='col-md-6 py-3'>
                    <h4 className='py-3'>Difference between SQL and NoSQL is given</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Relational database management system.</td>
                                <td>Non-Relational management seytem</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>These database have fixed or static schema</td>
                                <td>They have dynamic schema.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>This database are not suitable for hierarchical data storage.</td>
                                <td>These database are best suited for hierarchical data storage</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>These database are best suited for complex queries.</td>
                                <td>These database are not good for complex queries.</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Vertically scalable.</td>
                                <td>Horizontally scalable.</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className='row g-5 mx-5'>
                <div className='col-md-6 py-3'>
                    <h4 className='my-3'>JWT and working process of JWT are explain here</h4>
                    <p><span style={{ color: '#007CC3' }}>JWT</span> or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p> <br />
                    <p><span style={{ color: '#007CC3' }}>Working process:</span> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                </div>
                <div className='col-md-6 py-3'>
                    <h4 className='my-3'>Using purpose of MongoDB and NodeJs are explain here</h4>
                    <p><span style={{ color: '#007CC3' }}>MongoDb:</span> MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. <br /> As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they do not need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.</p> <br />
                    <p><span style={{ color: '#007CC3' }}>NodeJs:</span> The main idea of Node.js: use non-blocking, event-driven I/O to remain lightweight and efficient in the face of data-intensive real-time applications that run across distributed devices.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;