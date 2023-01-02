import { BiLeftArrowAlt } from "react-icons/bi";

export default function Header() {
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
          eligendi pariatur! Obcaecati libero amet consectetur itaque nisi
          similique commodi pariatur, doloribus repellendus repudiandae sed
          saepe rem dolore, iusto numquam quis perferendis!
        </p>
        <button>More Information</button>
        <BiLeftArrowAlt class="left" />
      </div>

      <div className="card card-2">
        <h3>Nirosha, India</h3>
      </div>
    </div>
  );
}
