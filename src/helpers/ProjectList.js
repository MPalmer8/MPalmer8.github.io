import greggor from "../assets/projects/greggor.PNG"
import musiclesson from "../assets/projects/musiclesson.PNG"
import predatorprey from "../assets/projects/predatorprey.PNG"
import joke from "../assets/projects/joke.png"
import weather from "../assets/projects/weather.png"
import lush from "../assets/projects/lush.PNG"
import airbnb from "../assets/projects/AirBnB.PNG"

import { DiPython, DiHtml5, DiCss3, DiPhp, DiJava, DiJsBadge } from "react-icons/di";
import { TbSql } from "react-icons/tb";

export const projectList = [
    {
        name: "Greggor Financial Companion",
        team: "Group Project | Team Size: 8",
        image: greggor,
        skills: "Python (Django), HTML, CSS/SCSS, JavaScript",
        logos: [<DiPython size="3rem"/>,<DiHtml5 size="3rem"/>,<DiCss3 size="3rem"/>,<DiJsBadge size="3rem"/>],
        repo: "https://github.com/Bhavik-Gilbert/Greggor-Financial-Companion",
        site: "https://greggorfinancialcompanion.pythonanywhere.com/",
        description: [
            "Developed a web application which allows users to track their finances, includes categories, accounts, user groups, targets, financial quizzes, and more, in order to help users improve their financial literacy and management",
            "Responsible for developing vital aspects of the system, such as log in to allow users to access the system, “forgot your password” to allow users to reset their password through email, user groups to allow users to collaborate to meet their financial targets, and a user profile page to allow users to view their details, amongst other tasks",
            "Used industry standard code formatting, Trello organisation, and git commit messages alongside testing which had full code coverage, using the scrum development process, in order to produce a coherent application with the use of Git and GitHub in order to collaborate effectively",
            "Took part in and had the opportunity to lead team meetings where tasks for the week, workload, assignment, planning, and more details of the project were discussed to ensure clear team communication and project progress."
        ]
    },
    {
        name: "Music Lesson Booking System",
        team: "Group Project | Team Size: 4",
        image: musiclesson,
        skills: "Python (Django), HTML, CSS",
        logos: [<DiPython size="3rem"/>,<DiHtml5 size="3rem"/>,<DiCss3 size="3rem"/>],
        repo: "https:/github.com/Jiale-Yang/Moose",
        site: "",
        description: [
            "Developed a Music School Web-Based Application which is an innovative digital platform designed to streamline the process of requesting music lessons for both parents and pupils while providing school administrators with efficient tools to manage and fulfill these requests. The application aims to enhance communication, improve scheduling, and optimize the overall learning experience for students attending the music school.",
            "Responsible for developing a secure log in system for students that use the system, ensuring data privacy and efficiency; A comprehensive system to allow school administrators to edit and delete lesson bookings which is then reflected in the associated invoice to ensure accuracy; An effective design and implementation of a web page to allow school administrators to view the balance and transactions of an individual student to ensure students have paid the necessary amount, helping with the financial management of the music school.",
            "Consistently attended scheduled project meetings to discuss task assignments, design, implementation, code cleanliness, testing, and more, in order to ensure client requirements have been met and maintained.",
            "Improved my web development proficiency, collaboration, time management, organisation, and communication skills. Learnt how to effectively write efficient, broad tests to ensure code was working as intended. ",
            "Positive feedback from all team members about my attitude to work, collaboration, and technical awareness."
        ]
    },
    {
        name: "AirBnB Property Viewer",
        team: "Group Project | Team Size: 4",
        image: airbnb,
        skills: "Java, Javafx",
        logos: [<DiJava size="3rem"/>],
        repo: "",
        site: "",
        description: [
            "Developed an AirBnB property viewer GUI application using Javafx to allow users to view properties located in different boroughs throughout London, users are able to view the properties of a specific borough by clicking the respective borough on the map",
            "Responsible for developing the statistics feature of the system, including the statistics panels and calculations, which required reading data from a CSV file, data manipulation, bar chart creation, and efficient algorithm design; statistics included: Average Reviews per Property, Standard Deviation of Price, Most Expensive Borough, Total Available Properties, Borough with the Highest Average Amount of Reviews",
            "Improved my understanding of Javafx, Java, Object Orientated Programming, unit testing, and team collaboration"
        ]
    },
    {
        name: "Predator Prey Simulation",
        team: "Pair Project | Team Size: 2",
        image: predatorprey,
        skills: "Java, Javafx",
        logos: [<DiJava size="3rem"/>],
        repo: "https://github.com/MPalmer8/Predator-Prey-Simulation",
        site: "",
        description: [
            "Developed an application to mimic a natural habitat's predator and prey population over a set amount of time in order to gain accurate information whilst improving my skills when developing GUI based applications.",
            "Pair programming used throughout the whole of the project's development to ensure code readability and cleanliness, which lead to more efficient code formatting, along with improved communication and collaboration techniques between myself and my partner."
        ]
    },
    {
        name: "Joke Discord Bot",
        team: "Solo Project",
        image: joke,
        skills: "Python",
        logos: [<DiPython size="3rem"/>],
        repo: "https://github.com/MPalmer8/Joke-Discord-Bot",
        site: "",
        description: [
            "Developed, designed, and implemented a bot that runs on the Discord application",
            "Fun, interactive bot that users can use to play interactive text-based games, such as guess the number, and to generate jokes of different categories. ",
            "Uses a RESTful API which is used to fetch the jokes produced and then outputted to the user, helping to develop my skills when using API's in a development environment",
            "Present on multiple Discord servers with a total user count of 200+."
        ]
    },
    {
        name: "Weather Discord Bot",
        team: "Solo Project",
        image: weather,
        skills: "Python",
        logos: [<DiPython size="3rem"/>],
        repo: "https://github.com/MPalmer8/Weather-Discord-Bot",
        site: "",
        description: [
            "Developed a bot that runs on the Discord application that allows users to easily fetch weather information about a specific location whilst on Discord",
            "Uses a RESTful API in order to fetch weather information about a given location, improving my knowledge of the workings of RESTful APIs",
            "Data fetched and outputted to the user includes: Temperature, Wind Speed, Wind Direction, Pressure, Precipitation, Humidity, Cloud Coverage, UV, and Gust.",
        ]
    },
    {
        name: "Salon Appointment Booking System",
        team: "Solo Project",
        image: lush,
        skills: "PHP, HTML, CSS, SQL",
        logos: [<DiPhp size="3rem"/>,<DiHtml5 size="3rem"/>,<DiCss3 size="3rem"/>,<TbSql size="3rem"/>],
        repo: "https://github.com/MPalmer8/Salon-Booking-System",
        site: "",
        description: [
            "Developed, designed, and implemented an online website and appointment booking system for a local salon business to help the small business manage their appointments",
            "Completed detailed documentation highlighting the analysis, design, implementation, and testing phases of the development process to an industry standard",
            "Developed my knowledge of front-end and back-end web development alongside database management in order to produce a coherent and efficient system",
            "Site includes functionality which allows users to log in/out, control their personal details, and manage their appointments; Staff members can log in/out, control all the appointments on the system, manage their own details, and more."
        ]
    }
]
