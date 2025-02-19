import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Left, Right } from "./Arrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/Teacher.css";

const TeacherSection = () => {
  return (
    <div>
      <div className="teacher-wrapper">
        <h1>Top Teachers on Headout</h1>
        <hr
          style={{
            backgroundColor: "#ffbb58",
            width: "75px",
            height: "2px",
            border: "none",
            marginTop: "0px",
            marginLeft: "0px",
            marginBottom: "20px",
          }}
        />
        <div className="teacher-carousel-wrap">
          <TeachersSlider />
        </div>
        <hr
          style={{
            height: "1px",
            color: "#e7e7e7",
            borderTop: "none",
            borderLeft: "none",
          }}
        />
      </div>
      <hr className="section-divide-hr" />
    </div>
  );
};

const TeachersSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <Right />,
    prevArrow: <Left />,
  };

  return (
    <Slider {...settings}>
      {TeachersData &&
        TeachersData.map(({ id, teachers, url, description, route }) => (
          <Link
            to={{ pathname: `/teacher/${route}` }}
            key={id}
            className="link"
          >
            <TeachersCard
              teachers={teachers}
              url={url}
              description={description}
            />
          </Link>
        ))}
    </Slider>
  );
};

const TeachersCard = ({ teachers, url, description }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${url})`,
  };

  return (
    <div className="teachers-card-wrapper">
      <div className="teachers-card">
        <div className="teachers-card-img" style={backgroundImageStyle} />
        <div className="teachers-details">
          <div id="triangle" />
          <p>{teachers}</p>
          <div id="teachers-hidden">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeachersData = [
  {
    id: 1,
    teachers: "Rakesh Kumar ray",
    route: "raka",
    description: "Take a bite of the Big Apple",
    url: "https://i.pinimg.com/originals/21/4d/2d/214d2d67777a013520421918c1e4a4f5.jpg",
  },
  {
    id: 2,
    teachers: "Bubun kumar mohanta",
    route: "smarty",
    description: "An offer you can't refuse",
    url: "https://wallpaperaccess.com/full/5052364.png",
  },
  {
    id: 3,
    teachers: "Rashmi ranjan swain",
    route: "killersmile",
    description: "Roam the eternal teachers",
    url: "https://yt3.ggpht.com/a/AATXAJwNuvBbbc7-Jcde71LjnR9gUH2OZiBvX6LcjA=s900-c-k-c0xffffffff-no-rj-mo",
  },
  {
    id: 4,
    teachers: "Suraj smantray",
    route: "mrhandsome",
    description: "money can be used",
    url: "https://images4.fanpop.com/image/photos/17700000/Itachi-Uchiha-itachi-uchiha-17766213-1280-720.jpg",
  },
  {
    id: 5,
    teachers: "Subham Db",
    route: "db",
    description: "For everything hunky-dory",
    url: "https://www.nawpic.com/media/2020/madara-uchiha-nawpic-16.jpg",
  },
  {
    id: 6,
    teachers: "Subham barik",
    route: "sb",
    description: "An Oasis like no other",
    url: "https://wallsdesk.com/wp-content/uploads/2017/01/Kakashi-Hatake-Computer-Wallpaper.png",
  },
  {
    id: 7,
    teachers: "BiswaRanjan jagadev",
    route: "puru",
    description: "Hacer Peunte a Catalunya",
    url: "https://external-preview.redd.it/3ogvA0kByG8S3XbrWwMi8sselvNcWTdlLiHwQjCuPeI.jpg?auto=webp&s=048e5ec4b45ff57b184f098c3626f4618b6ead53",
  },
];

export default TeacherSection;