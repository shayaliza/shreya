// src/App.js
import Image from "next/image";
import React from "react";
import Profile from "@/public/profile.jpeg";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 h-screen flex items-center">
        <div className="max-w-6xl mx-auto flex items-center flex-col md:flex-row space-x-4 w-full">
          <div className="h-full md:w-1/2 w-full flex justify-center items-center">
            <Image
              src={Profile}
              alt="Profile Image"
              height={400}
              width={400}
              className="object-cover rounded-full"
            />
          </div>
          <div className="md:w-1/2 w-full  md:px-8 ">
            <h1 className="text-4xl font-bold">Shreya Rai</h1>
            <p className="text-lg mt-2">
              Passionate educator pursuing a BALLB degree with extensive
              coaching and tutoring experience.
            </p>
            {/* Additional contact information */}
            {/* <div className="mt-4">
              <p>Email: shreyarai@gmail.com</p>
              <p>Phone: +91 85287 32586</p>
              <p>Location: Varanasi, UP</p>
            </div> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto mt-8 px-8">
        {/* Profile */}
        <section className="p-6 bg-white shadow-lg rounded-lg mb-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Profile</h2>
          <p className="text-lg text-gray-700">
            Passionate educator with a strong background in coaching and
            tutoring, currently pursuing a BALLB degree. Known for innovative
            teaching methods and fostering a supportive learning environment.
          </p>
        </section>

        {/* Work Experience */}
        <section className="p-6 bg-white shadow-lg rounded-lg mb-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Work Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Bright Education Classes
              </h3>
              <p className="text-base text-gray-600">2023 - Present</p>
              <p className="text-base text-gray-600">
                Role: Full-Time Educator
              </p>
              <p className="text-base text-gray-600">
                Responsibilities: Guiding students from CBSE and ICSE Boards,
                creating personalized learning plans.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Home Tutor
              </h3>
              <p className="text-base text-gray-600">Part-Time</p>
              <p className="text-base text-gray-600">
                Tutored More than 30+ Students
              </p>
              <p className="text-base text-gray-600">
                Responsibilities: Developed tailored lesson plans for various
                subjects including Mathematics, Science, English, and Social
                Studies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Tutor Tution Bureau
              </h3>
              <p className="text-base text-gray-600">CEO</p>
              <p className="text-base text-gray-600">
                Sourced and recruited qualified teachers to join the bureau,
                matching them with suitable positions.
              </p>
              <p className="text-base text-gray-600">
                Ensured high standards of tutoring by providing ongoing support
                and professional development opportunities for teachers.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="p-6 bg-white shadow-lg rounded-lg mb-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                MGKVP (Main Campus)
              </h3>
              <p className="text-base text-gray-600">2023 - 2028</p>
              <p className="text-base text-gray-600">
                Bachelor of Arts and Bachelor of Legislative Law
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Varanasi Public School
              </h3>
              <p className="text-base text-gray-600">2019 - 2021</p>
              <p className="text-base text-gray-600">Role: Teacher</p>
              <p className="text-base text-gray-600">
                Responsibilities: Teaching Mathematics and Science to 9th and
                10th graders.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                S.S.V English School
              </h3>
              <p className="text-base text-gray-600">2017 - 2018</p>
              <p className="text-base text-gray-600">10th Grade</p>
              <p className="text-base text-gray-600">GPA: 7.5</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="p-6 bg-white shadow-lg rounded-lg mb-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Achievements
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>
              Participated in Taekwondo Competitions in Jharkhand, showcasing
              discipline and physical prowess.
            </li>
            <li>
              Cleared LU and DDU Entrance Exams for BALLB, demonstrating strong
              academic capabilities.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="p-6 bg-white shadow-lg rounded-lg mb-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact</h2>
          <p className="text-lg text-gray-700">Email: sheru090@gmail.com</p>
          <p className="text-lg text-gray-700">Phone: +91 85287 32586</p>
          <p className="text-lg text-gray-700">Location: Varanasi, UP</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Shreya Rai. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
