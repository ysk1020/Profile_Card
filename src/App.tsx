import React from "react";

import "./App.css";

interface Skill {
  name: string;
  level: string;
}

const skills: Skill[] = [
  {
    name: "React",
    level: "beginner",
  },
  {
    name: "HTML+CSS",
    level: "advanced",
  },
  {
    name: "JavaScript",
    level: "middle",
  },
  {
    name: "Python",
    level: "middle",
  },
  {
    name: "Embedded",
    level: "beginner",
  },
  {
    name: "Typescript",
    level: "beginner",
  },
];

export default function App() {
  return (
    <div className="profileCard">
      <div>
        <Avatar />
        <div className="data">
          <Headline />
          <Skillset />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="profile-picture">
      <img className="profile-image" src="./avatar.jpeg" alt="avatar" />
    </div>
  );
}

function Headline() {
  return (
    <>
      <h1>Yussuf Uali</h1>
      <p>
        3rd year student. Learning React, Embedded C and German. I like to draw,
        to cook, and going to gym.
      </p>
    </>
  );
}
function Skillset() {
  return (
    <>
      <ul className="skill-list">
        {skills.map((el: any) => (
          <Knowledge skillObj={el} key={el.name} />
        ))}
      </ul>
    </>
  );
}

interface Knowledgeprops {
  skillObj: Skill;
}

function Knowledge({ skillObj }: Knowledgeprops) {
  return (
    <li className="skill-one">
      <span>{skillObj.name}</span>
      {/* <span className="skill-level">{skillObj.level}</span> */}
    </li>
  );
}
