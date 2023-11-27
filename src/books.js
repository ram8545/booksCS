import html_img from "./image/html.png";
import c_img from "./image/C.png";
import dsa_img from "./image/DSA.png";
import css_img from "./image/css.png";
import java_img from "./image/java.png";
import javascript_img from "./image/javascript.png";
import nodejs_img from "./image/nodejs.png";
import reactjs_img from "./image/reactjs.png";
import python_img from "./image/python.png";
import html_book from "./resource/html.pdf";
import c_book from "./resource/Let us c - yashwantkanetkar.pdf";
import dsa_book from "./resource/DSA.pdf";
import css_book from "./resource/CSSNotesForProfessionals.pdf";
import java_book from "./resource/LearnJava.pdf";
import javascript_book from "./resource/javascript.pdf";
import nodejs_book from "./resource/NodeJS.pdf";
import reactjs_book from "./resource/react.pdf";
import python_book from "./resource/Learning_Python.pdf";

export const books = [
  {
    author: "Tim Berners-Lee(1993)",
    title: "HTML",
    img: html_img,
    path: html_book,
    id: 1,
  },
  {
    author: "Bert Bos",
    title: "CSS",
    img: css_img,
    path: css_book,
    id: 2,
  },
  {
    author: "Brendan Eich(1995)",
    title: "JavaScript",
    img: javascript_img,
    path: javascript_book,
    id: 3,
  },
  {
    author: "Jordan Walke",
    title: "ReactJs(JavaScript library)",
    img: reactjs_img,
    path: reactjs_book,
    id: 4,
  },
  {
    author: "Ryan Dahl",
    title: "NodeJs(JS,C++,Python)",
    img: nodejs_img,
    path: nodejs_book,
    id: 5,
  },
  {
    author: "Dennis Ritchie(1970)",
    title: "C",
    img: c_img,
    path: c_book,
    id: 6,
  },
  {
    author: "Guido van Rossum(1991)",
    title: "Python",
    img: python_img,
    path: python_book,
    id: 7,
  },
  {
    author: "Narasimha Karumanchi",
    title: "Data Structures and Algorithms",
    img: dsa_img,
    path: dsa_book,
    id: 8,
  },
  {
    author: "James Gosling(1991)",
    title: "JAVA",
    img: java_img,
    path: java_book,
    id: 9,
  },
];
