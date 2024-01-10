import React from 'react';
import Button from './components/Button'
import './index.css'
import Divider from './components/Divider'
import Card from './components/Card';
import Project from './components/Project';
import Technology from './components/Technology';
import myImage from './my_photo.jpg';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function App() 
{  

  const scrollTo = (id) => {
    scroll.scrollTo(id, {
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
      <div className='grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3'>
      <div className="col-span-2 m-4 p-20">
            <h1 className="text-6xl m-4">Hi, I am Kaloyan!</h1>
            <p className='text-xl'>I'm studying programming at the Electronic Systems Technology School and I'm a 12th grade student.This is my portfolio where you can find interesting things about me!</p>
        </div> 
        <div className='flex items-center justify-center'>
            <img alt='My image' src={myImage} className='border-2 border-solid rounded-md border-black m-4 h-96'/>
        </div>
        
      </div>
      <div className="flex items-center justify-center p-5">
        <div className=" w-1/2 flex items-center justify-center">
          <ScrollLink className='w-1/3' to="AboutMe" smooth={true} offset={-50} duration={500}>
            <Button name="About me" />
          </ScrollLink>
          <ScrollLink className='w-1/3' to="TechStack" smooth={true} offset={-50} duration={500}>
            <Button name="Tech stack" />
          </ScrollLink>
          <ScrollLink className='w-1/3' to="MyProjects" smooth={true} offset={-50} duration={500}>
            <Button name="My projects" />
          </ScrollLink>
        </div>
      </div>
      <Divider name="About me" />
      <section id='AboutMe' className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 p-4'>
            <Card title="My hobbies" p="I have many hobbies mostly related to sports. At the moment, I practice darts 
                        most intensively, and my successes are 1 won tournament and 17th place out of 78 
                        in the 30-year Bulgarian Darts Federation tournament. I often play football and have many medals.
                        I love watching Formula 1, although for some people the drivers are just going around in circle."/>
            
            <Card title="My interests in school" p="At school we always learn a lot of new and interesting things. Circumstances came together so that now 
                        I mainly deal with web and mobile applications, but I am open to all kinds of new technologies. 
                        In general, I use my time at school to gain as much knowledge as possible. 
                        Also from the main subjects I love History as I know /used to know/ the entire medieval history of Bulgaria 
                        as well as Geography as I know all the countries and flags as well as 160 out of 197 capitals." />
      </section>
      <Divider name="Tech stack" />
      <section id='TechStack' className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4'>
        <Technology title="Web and mobile development" p="During HACKTUES 9, I began to delve deeper into web and mobile development, with my first project being a Flutter and Dart frontend. 
              Subsequently, I won an internship at Appolica where I got to know React, Typescript and Javascript for frontend and Strapi for backend."
              img="https://www.svgrepo.com/show/452092/react.svg"/>
        
        <Technology title="C/C++" p="Since the 8th grade in TUES, I have been writing and making projects in C and C++! My beginning and way of thinking is built on the basis of these two languages ​​which brought me besides a lot of knowledge and a lot of headaches." 
          img="https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png"/>

        <Technology title="Python" p="One of my favorite languages, in which I think anything can be written. I've been studying it since 9th grade and have quite a few projects written on it."
          img="https://cdn.icon-icons.com/icons2/2699/PNG/512/python_vertical_logo_icon_168039.png"/>
        
        <Technology title="Others" p="Other technologies that I have studied and have knowledge of but are not my favorite are Java, MySQL and Firebase for databases, Docker for containerization, Embedded as I have done projects with Arduino Uno and Arduino Nano."
          img="https://cdn4.iconfinder.com/data/icons/smart-industry/64/Embedded_system-microchip-electronics-process-cpu-controller-512.png"/>
        
      </section>
      <Divider name="My projects" />
      <section id='MyProjects' className='grid grid-cols-1 grid-rows-1 sm:grid-cols-1 sm:grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-2 xl:grid-rows-2'>
        <Project title="Connect4" repository="https://github.com/suseda/Connect4" p="Connect 4 is a game whose goal is to make 4 identical 
        symbols in a row /horizontally, vertically or diagonally/. Mode 1 should be set - for 
        two and mode 0 for computer vs human play." />

        <Project title="Chat mobile app" repository="https://github.com/suseda/Vot_web_app" p="First, the authentication page opens. 
        After entering a valid account, the application itself is displayed. It consists of 2 pages Chats and Profile.
        In Profile is our profile, and in Chats are all users with whom we can write. There is also a search field by name.
        After choosing a user, we press on it and our general chat appears where we can write. 
        Everything is saved in the database." />

        <Project title="Led race game" repository="https://github.com/suseda/Led_Race_VMKS" p="It's a simple racing game where two players control cars using buttons,
         and the cars' speeds and positions are affected by gravity. The LED strip represents the track and players race to complete laps and 
         win the game." />

        <Project title="Diplomna" repository="https://github.com/suseda/Diplomna-FE" p="This is the frontend only and still under development..." />
      </section>
    </div>
  )
}

export default App
