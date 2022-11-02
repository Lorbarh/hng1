import React from "react";
import Button from "./Helpers/Button";
import github from "../assets/Icongithub.jpg";
import slack from "../assets/slack.jpg";

const Links = () => {
  return (
    <>
      <Button>
        <a href="https://training.zuri.team/" id="btn__zuri" target="_blank">
          Zuri Team
        </a>
      </Button>
      <Button>
        <a href="http://books.zuri.team" id="books" target="_blank">
          Zuri Books
        </a>
      </Button>
      <Button>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=lorbarh"
          id="book__python"
          target="_blank"
        >
          Python Books
        </a>
      </Button>
      <Button>
        <a href="https://training.zuri.team/" id="pitch" target="_blank">
          Background Check for Coders
        </a>
      </Button>
      <Button>
        <a href="https://books.zuri.team/design-rules" id="books__design">
          Design Books
        </a>
      </Button>
      <div className="social">
        <img src={slack} className="slack" />
        <img src={github} className="github" />
      </div>
      <hr />
    </>
  );
};

export default Links;
