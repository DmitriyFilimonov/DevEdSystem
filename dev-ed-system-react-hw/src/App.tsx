import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filters from './components/filters/Filters';
import { HomeworkPageModel } from './interfaces/HomeworkPageModel';
import { FilterParameter } from './classes/FilterParameter';
import { CourseFilter } from './classes/CourseFilter';
import { GroupFilter } from './classes/GroupFilter';
import { ThemeFilter } from './classes/ThemeFilter';
import DrawHomework from './components/homework/Homework';

const model: HomeworkPageModel = {
  Courses: [
    {
      CourseName: "C# Base",
      Groups: [{
        GroupName: "дневная",
        Homeworks: [{
          Id: 0,
          Themes: ["введение в ООП"],
          Answers: []
        }]
      }, {
        GroupName: "вечерняя",
        Homeworks: [{
          Id: 1,
          Themes: ["циклы"],
          Answers: []
        }]
      }]
    }, {
      CourseName: "Java Base",
      Groups: [{
        GroupName: "дневная",
        Homeworks: [{
          Id: 2,
          Themes: ["введение в ООП"],
          Answers: []
        }, {
          Id: 3,
          Themes: ["unit-тесты", "циклы"],
          Answers: []
        }]
      }]
    }, {
      CourseName: "Front-end",
      Groups: [{
        GroupName: "дневная",
        Homeworks: []
      }]
    }, {
      CourseName: "Back-end",
      Groups: [{
        GroupName: "вечерняя",
        Homeworks: []
      }]
    }, {
      CourseName: "Mobile dev",
      Groups: [{
        GroupName: "вечерняя",
        Homeworks: []
      }]
    }]
};


function App() {
  const coursesInFilterParameters: string[] = [];
  const groupsInFilterParameters: string[] = [];
  const themesInFilterParameters: string[] = [];

  model.Courses.map(course => {
    coursesInFilterParameters.push(course.CourseName);
    course.Groups.map(group => {
      groupsInFilterParameters.push(course.CourseName + " " + group.GroupName);
      group.Homeworks.map(homework => {
        homework.Themes.map(theme => {
          if (themesInFilterParameters.indexOf(theme) == -1) {
            themesInFilterParameters.push(theme);
          }
        })
      })
    })
  });

  const filterParameters: FilterParameter[] = [
    new CourseFilter(coursesInFilterParameters),
    new GroupFilter(groupsInFilterParameters),
    new ThemeFilter(themesInFilterParameters),
  ];
  return (
    <div className="container">
      <Filters filterParameters={filterParameters}></Filters>
      {model.Courses.map(course =>
      course.Groups.map(group =>
        group.Homeworks.map(homework =>
          (<DrawHomework
            Course={course.CourseName}
            Group={group.GroupName}
            Themes={homework.Themes}
            HomeworkObject={homework}></DrawHomework>))))

      }
    </div>
  );
}

export default App;
