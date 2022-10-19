import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoveItems from "./Carousel";
import { MovieList } from "../Unwanted/MovieList";
import UpcomingMovies from "./UpcomingMovies";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import customer from "../Assets/customer-support.svg";
import ticket from "../Assets/ticket1.svg";
import mail from "../Assets/mail.svg";

const StreamMovies = [
  {
    name: "Legend",
    poster:
      "https://popcornusa.s3.amazonaws.com/movies/650/10528-40341-TheLegen",
    languages: "Tamil | Hindi | Telugu",
    imdb: "2.7 / 10",
    genre: "Action , Drama , Romance",
  },
  {
    name: "Vikram",
    poster:
      "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/227915/Vikram-posterart.jpg",
    languages: "Tamil | Hindi | Telugu",
    imdb: "8 / 10",
    genre: "Action , Adventure , Thriller",
  },
  {
    name: "Gulu Gulu",
    poster:
      "https://popcornusa.s3.amazonaws.com/movies/650/10529-0-GuluGulujpg",
    languages: "Tamil | Hindi | Telugu",
    imdb: "7 / 10",
    genre: "Action , Comedy , Fantasy",
  },
];
function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      {/* carousel */}

      <MoveItems />

      {/* upcoming movies */}

      <div className="container my-5">
        <div className="row">
          <div>
            <h1 className="text-center">Up coming movies</h1>
          </div>
          <div className="my-2">
            <UpcomingMovies />
          </div>
        </div>
      </div>

      {/* streaming Movies */}
      <div className="container my-5">
        <div className="row">
          <div>
            <h1 className="text-center">Now streaming on</h1>
          </div>
          <div className="movie-list my-4">
            {StreamMovies.map((movie, index) => (
              <Card className="movie-container" key={index}>
                <img
                  className="movie-poster"
                  src={movie.poster}
                  alt={movie.name}
                ></img>

                <CardContent>
                  <div className="content">
                    <div className="movie-specs">
                      <h3 className="movie-name">{movie.name}</h3>
                    </div>
                    <div>
                      <p>
                        <span className="f-b">Languages</span> :{" "}
                        {movie.languages}
                      </p>
                      <p>
                        <span className="f-b">Genre</span> : {movie.genre}
                      </p>
                      <p>
                        <span className="f-b">IMDB</span> : {movie.imdb}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* support  */}

      <div className="container-support my-2">
        <div className="row-support text-white text-center">
          <div className="">
            <img src={customer} className="img-fluid" />
            <p className="my-1 mt-2">24/7 CUSTOMER CARE</p>
          </div>
          <div className="">
            <img src={ticket} className="img-fluid" />
            <p className="my-1">RESEND BOOKING CONFIRMATION</p>
          </div>
          <div className="">
            <img src={mail} className="img-fluid" />
            <p className="my-1">SUBSCRIBE TO THE NEWSLETTER</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;