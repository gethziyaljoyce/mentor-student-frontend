/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

export const AssignMentorsContext = React.createContext();

export const AssignMentorProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`https://mentor-student-backend.herokuapp.com/`)
      .then((response) => setMentors(response.data))
      .then(() => console.log(mentors));

    await axios
      .get(`https://mentor-student-backend.herokuapp.com/Students`)
      .then((response) => setStudents(response.data))
      .then(() => console.log(students));
  };
  useEffect(() => {
    fetchData();
    return () => {
      <></>;
    };
  }, []);
  return (
    <>
      {console.log(mentors, students)}
      <AssignMentorsContext.Provider
        value={[mentors, setMentors, students, setStudents]}
      >
        {children}
      </AssignMentorsContext.Provider>
    </>
  );
};
