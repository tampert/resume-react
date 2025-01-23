import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="grid grid-cols-2 gap-4">
        <section className="p-10">
          <div>
            <h1 className="text-4xl font-bold">Dirk Soentjens</h1>
            <h2 className="text-2xl mt-2">Frontend Developer</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              I am a passionate frontend developer who loves to experiment and
              build features for all kinds of web applications. Since my high
              school days, I've always had an interest in coding and computers.
              My interest helped me go from building single-page websites to
              more complex systems. I am able to easily adapt to the
              documentation, stadards and best practices of the frameworks I am
              asked to work with. I alse enjoy trying out new things and
              learning from them. I can empathize with the users, and I
              understand how important it is to make sure the complex systems
              that I build are usable by them. Furthermore, I believe that
              usability is key in the final product. Currently, I am looking for
              opportunities to work for a company that promotes development and
              stability. A place where I can fullly utilize my experience, learn
              and grow professionally.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold border-t-2 border-black-600 p-2">
              Contact
            </h2>
            <p>Wessem, The Netherlands</p>
            <p>0031-(0)6 10 65 94 92</p>
            <p>dirk.soentjens@gmail.com</p>
            <p>linkedin.com/in/dirk-soentjens/</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold border-t-2 border-black-600 p-2">
              Interpersonal skills
            </h2>
            <p>
              Problem solving, Creativity, Communication, Mentoring, Pair
              programming, Reviewing, Approachability and Helpfulness
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold border-t-2 border-black-600 p-2">
              Industry knowledge
            </h2>
            <p>
              Wireframes, Techdesigns, design documents, knowledge sharing,
              scrum, Kanban, Jira, Object Oriented Programming (OOP), GIT
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold border-b-2 border-t-2 border-black-600 p-2">
              Languages
            </h2>
          </div>
          <div>
            <h2 className="text-2xl font-semibold border-b-2  border-black-600 p-2">
              Education
            </h2>
          </div>
        </section>
        <section className="p-10">
          <h2 className="text-2xl font-semibold border-b-2 border-t-2 border-black-600 p-2">
            Experience
          </h2>
        </section>
      </div>
      {/* <Header />
      <MainContent />*/}
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-blue-600 text-white py-6 text-center">
      <h1 className="text-4xl font-bold">Dirk Soentjens</h1>
      <h2 className="text-2xl mt-2">Frontend Developer</h2>
      <p className="text-lg mt-4 max-w-3xl mx-auto">
        I am a passionate frontend developer who loves to experiment and build
        features for all kinds of web applications. Since my high school days,
        I've always had an interest in coding and computers. My interest helped
        me go from building single-page websites to more complex systems. I am
        able to easily adapt to the documentation, stadards and best practices
        of the frameworks I am asked to work with. I alse enjoy trying out new
        things and learning from them. I can empathize with the users, and I
        understand how important it is to make sure the complex systems that I
        build are usable by them. Furthermore, I believe that usability is key
        in the final product. Currently, I am looking for opportunities to work
        for a company that promotes development and stability. A place where I
        can fullly utilize my experience, learn and grow professionally.
      </p>
    </header>
  );
}

function MainContent() {
  return (
    <main className="grid grid-cols-2 gap-4">
      <section id="experience" className="mb-10">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
          Experience
        </h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Interaction Modeler</h3>
          <p className="text-gray-700 mt-2">
            <strong>Primary Tech Stack:</strong> C#, Expression Blend, WPF
          </p>
          <p className="text-gray-700">
            <strong>Responsibilities:</strong> Develop custom-made
            visualizations into MVPs, prototyping to support the project team,
            and creating desktop applications in the corporate UI style.
          </p>
          <p className="text-gray-700">
            <strong>Challenges:</strong> Collaborating with a large design team
            and answering UI/GUI questions through web applications.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold">Frontend Developer</h3>
          <p className="text-gray-700 mt-2">
            <strong>Primary Tech Stack:</strong> Vue3, Nuxt3, Vuetify, Vuex,
            Docker, GitHub
          </p>
          <p className="text-gray-700">
            <strong>Responsibilities:</strong> Develop and maintain a webshop,
            admin tools, and lead technical architecture implementation.
          </p>
          <p className="text-gray-700">
            <strong>Challenges:</strong> Translating pixel-perfect designs,
            connecting micro-services, and mentoring newcomers.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold">Software Engineer</h3>
          <p className="text-gray-700 mt-2">
            <strong>Primary Tech Stack:</strong> Vue.js, AngularJS, MySQL,
            Docker, Cloudinary
          </p>
          <p className="text-gray-700">
            <strong>Responsibilities:</strong> Develop automation tools, email
            integrations, and provide technical support for marketing teams.
          </p>
          <p className="text-gray-700">
            <strong>Challenges:</strong> Automating recurring tasks using
            machine learning (TensorFlow) and stakeholder communication.
          </p>
        </div>
      </section>

      <section id="education" className="mb-10">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
          Education
        </h2>
        <ul className="mt-4 space-y-4">
          <li>
            <h3 className="text-xl font-bold">
              Hogeschool voor de Kunsten Utrecht
            </h3>
            <p className="text-gray-700">
              Bachelor of Arts, Interaction Design (2002 - 2006)
            </p>
          </li>
          <li>
            <h3 className="text-xl font-bold">MTS Sint-Lucas Boxtel</h3>
            <p className="text-gray-700">Multimedia Design (1998 - 2002)</p>
          </li>
        </ul>
      </section>

      <section id="skills" className="mb-10">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
          Skills
        </h2>
        <p className="text-gray-700 mt-4">
          <strong>Interpersonal Skills:</strong> Problem solving, Creativity,
          Communication, Mentoring, Pair programming, Reviewing,
          Approachability, Helpfulness
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Industry Knowledge:</strong> Wireframes, Tech designs, Scrum,
          Kanban, Object-Oriented Programming (OOP), GIT
        </p>
      </section>

      <section id="languages" className="mb-10">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
          Languages
        </h2>
        <p className="text-gray-700 mt-4">
          Dutch (Mother tongue), English (Fluent), German (Fluent)
        </p>
      </section>

      <section id="resume-download" className="mb-10">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
          Download CV
        </h2>
        <a
          href="./Resume_DirkSoentjens_EN.pdf"
          download
          className="text-blue-600 underline mt-4 inline-block"
        >
          Download PDF Version
        </a>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="text-black py-4 text-center">
      <p>© 2025 Dirk Soentjens. All rights reserved.</p>
    </footer>
  );
}
