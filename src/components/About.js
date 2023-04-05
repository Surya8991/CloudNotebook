import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">About iNotebook</h1>
      <div className="row ">
        <div className="col-md-6">
          <h2>What is iNotebook?</h2>
          <p>iNotebook is a cloud-based note-taking application built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to create, edit, and delete notes that are stored securely in the cloud.</p>
          <h2>Why use iNotebook?</h2>
          <p>With iNotebook, you can access your notes from anywhere with an internet connection. You can also share notes with others, collaborate on projects, and never have to worry about losing your notes again.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
