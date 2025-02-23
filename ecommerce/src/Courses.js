// src/Courses.js
import React from 'react';
import './courses.css';

const Courses = () => {
    return (
        <div className="container">
            {/* Course Title */}
            <h1 className="course-title">Introduction to Robotics</h1>

            {/* Course Description */}
            <div className="course-description">
                <p>Welcome to "Introduction to Robotics"! In this course, we will explore the fundamentals of robotics, including how robots are designed, programmed, and controlled. Whether you're a beginner or someone looking to expand your knowledge, this course will help you understand the concepts that drive robotics.</p>

                <p>You will learn about the following topics:</p>
                <ul>
                    <li>What is Robotics?</li>
                    <li>Basic Components of Robots</li>
                    <li>Types of Robots</li>
                    <li>Introduction to Robot Programming</li>
                    <li>Sensor and Actuator Systems</li>
                    <li>Robotics in Industries and Academia</li>
                </ul>

                <p>By the end of this course, you will have a solid understanding of how robots work and the core principles behind robot design and programming.</p>
            </div>

            {/* Enroll Button */}
            <div>
                <button className="enroll-button" onClick={() => window.location.href = 'enroll.html'}>Enroll Now</button>
            </div>

            {/* Suggested Courses Section */}
            <div className="suggested-courses">
                <h2>Suggested Courses</h2>
                <p>If you're interested in expanding your knowledge of robotics, check out these additional courses:</p>
                <ul>
                    <li><a href="robotics-advanced.html">Advanced Robotics</a></li>
                    <li><a href="robotics-programming.html">Robotics Programming with Python</a></li>
                    <li><a href="robotics-ai.html">Artificial Intelligence in Robotics</a></li>
                    <li><a href="robotics-mechanics.html">Mechanics of Robotics</a></li>
                </ul>
                <button className="other-courses-button" onClick={() => window.location.href = 'courses.html'}>Explore More Courses</button>
            </div>

            {/* Notes Section */}
            <div className="notes-section">
                <h2>Course Notes</h2>
                <ul>
                    <li><a href="#">Download Lecture Notes (PDF)</a></li>
                    <li><a href="#">Robotics in Industry - White Paper</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Courses;