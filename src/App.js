import React from "react";
import "./index.css";
import Experience from "./components/Experience";
import {
  PhoneIcon,
  HomeIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import {
  UserIcon,
  AcademicCapIcon,
  LanguageIcon,
  WrenchIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
export default function App() {
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 pt-4">
        <section className="p-4">
          <div className="pb-4 m-4">
            <h1 className="text-4xl font-bold tracking-wide">Dirk Soentjens</h1>
            <h2 className="text-2xl mt-2">Frontend Developer</h2>
            <p className="mt-4 text-gray-800">
              I am a passionate frontend developer who loves to experiment and
              build features for all kinds of web applications. Since my high
              school days, I've always had an interest in coding and computers.
              My interest helped me go from building single-page websites to
              more complex systems. I am able to easily adapt to the
              documentation, standards and best practices of the frameworks I am
              asked to work with. I else enjoy trying out new things and
              learning from them. I can empathize with the users, and I
              understand how important it is to make sure the complex systems
              that I build are usable by them. Furthermore, I believe that
              usability is key in the final product.
              <br />
              <br />
              Currently, I am looking for opportunities to work for a company
              that promotes development and stability. A place where I can fully
              utilize my experience, learn and grow professionally.
            </p>
          </div>
          <div className="m-4">
            <div className="flex items-center border-t-2 border-black p-2 ">
              <UserIcon className="size-6 text-black mr-4 text-left" />
              <h2 className="text-2xl font-semibold uppercase tracking-wider">
                Contact
              </h2>
            </div>
            <ul>
              <li className="flex items-center border-t-2 border-black py-2">
                <HomeIcon className="size-6 text-black mx-4" />
                <div className="border-l border-black pl-4 my-1">&nbsp;</div>
                <p className="text-right w-full">Wessem, The Netherlands</p>
              </li>
              <li className="flex items-center border-t-2 border-black py-2">
                <PhoneIcon className="size-6 text-black mx-4" />
                <div className="border-l border-black pl-4 my-1">&nbsp;</div>
                <p className="text-right w-full">0031-(0)6 10 65 94 92</p>
              </li>
              <li className="flex items-center border-t-2 border-black py-2">
                <EnvelopeIcon className="size-6 text-black mx-4" />
                <div className="border-l border-black pl-4 my-1">&nbsp;</div>
                <p className="text-right w-full">dirk.soentjens@gmail.com</p>
              </li>
              <li className="flex items-center border-t-2 border-black py-2">
                <GlobeAltIcon className="size-6 text-black mx-4" />
                <div className="border-l border-black pl-4 my-1">&nbsp;</div>
                <p className="text-right w-full">
                  linkedin.com/in/dirk-soentjens/
                </p>
              </li>
            </ul>
          </div>
          <div className="m-4">
            <div className="flex items-center border-t-2 border-black p-2 ">
              <WrenchIcon className="size-6 text-black mr-4 text-left" />
              <h2 className="text-2xl font-semibold p-2 uppercase tracking-wider">
                Interpersonal skills
              </h2>
            </div>
            <p>
              Problem solving, Creativity, Communication, Mentoring, Pair
              programming, Reviewing, Approachability and Helpfulness
            </p>
          </div>
          <div className="m-4">
            <div className="flex items-center border-t-2 border-black p-2 ">
              <CodeBracketIcon className="size-6 text-black mr-4 text-left" />
              <h2 className="text-2xl font-semibold p-2 uppercase tracking-wider">
                Industry knowledge
              </h2>
            </div>
            <p>
              Wireframes, Techdesigns, design documents, knowledge sharing,
              scrum, Kanban, Jira, Object Oriented Programming (OOP), GIT
            </p>
          </div>
          <div className="m-4">
            <div className="flex items-center border-t-2 border-black p-2 ">
              <LanguageIcon className="size-6 text-black mr-4 text-left" />
              <h2 className="text-2xl font-semibold p-2 uppercase tracking-wider">
                Languages
              </h2>
            </div>
            <p>Dutch (mother tongue), English (fluent), German (fluent)</p>
          </div>
          <div className="m-4">
            <div className="flex items-center border-t-2 border-black p-2 ">
              <AcademicCapIcon className="size-6 text-black mr-4 text-left" />
              <h2 className="text-2xl font-semibold uppercase tracking-wider">
                Education
              </h2>
            </div>
            <p>
              <ul>
                <li className="flex items-start">
                  <div className="pl-2 pr-4 text-sm">2002 - 2006</div>
                  <div className="border-l border-black pl-4 my-1">&nbsp;</div>
                  <div className="mr-6 text-sm">
                    <strong>Bachelor of Arts, Interaction Design</strong>
                    <br />
                    Hogeschool voor de Kunsten Utrecht
                  </div>
                </li>
                <li className="flex">
                  <div className="pl-2 pr-4 text-sm">1998 - 2002</div>
                  <div className="border-l border-black pl-4 my-1">&nbsp;</div>
                  <div className="mr-6 text-sm">
                    <strong>Multimedia Design</strong>
                    <br />
                    MTS Sint-Lucas Boxtel
                  </div>
                </li>
              </ul>
            </p>
          </div>
        </section>
        <Experience />
      </div>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="text-black py-4 text-center">
      <p>© 2025 Dirk Soentjens. All rights reserved.</p>
    </footer>
  );
}
