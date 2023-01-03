import gsap, { Power1 } from "gsap";
import { useEffect, useRef } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function Header() {
  useEffect(() => {
    let card1 = document.querySelector(".card-1");
    let reverse = document.querySelector(".left");
    let t1 = gsap.timeline({ paused: true, reversed: true });

    card1.addEventListener("click", (e) => {
      e.stopPropagation();
      t1.play();
    });

    reverse.addEventListener("click", (e) => {
      e.stopPropagation();
      t1.reverse();
    });

    t1.to(".card-1", {
      ease: Power1.easeInOut,
      height: 640,
      width: 320,
      top: 0,
      left: 0,
      margin: 0,
      duration: 0.5,
    });

    t1.to(
      ".card-2",
      {
        ease: Power1.easeInOut,
        duration: 0.5,
        x: 400,
      },
      0.1
    );

    t1.to(
      ".card-1 h3",
      {
        ease: Power1.easeInOut,
        duration: 0.5,
        fontSize: 24,
        margin: "32px",
        y: -250,
      },
      0.1
    );

    t1.to(
      ".card-1 p",
      {
        ease: Power1.easeInOut,
        duration: 0.5,
        padding: 24,
        marginLeft: 8,
        y: -580,
      },
      0.2
    );

    t1.to(".card-1 button", {
      ease: "elastic.out(1, .9)",
      duration: 0.5,
      bottom: "60px",
      marginLeft: 8,
    });

    t1.to(".left", {
      ease: "elastic.out(1, .9)",
      duration: 0.5,
      top: "24px",
      left: "24px",
    });
  }, []);

  return (
    <div>
      <h2>
        A Parlour
        <br /> is a <span>reception</span> space
      </h2>
      <p>Learn More</p>

      <div className="card card-1">
        <h3>Julie, India</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat
          temporibus nisi reprehenderit ex perferendis cum, quod, delectus porro
          illo error ratione deserunt tempore, possimus voluptatem in ad
          eligendi pariatur!
        </p>
        <button>More Information</button>
        <BiLeftArrowAlt className="left" />
      </div>

      <div className="card card-2">
        <h3>Nirosha, India</h3>
      </div>
    </div>
  );
}
