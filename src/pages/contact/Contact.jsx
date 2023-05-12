import React from "react";
import { FaTelegram } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiTwotoneMail,
} from "react-icons/ai";
import { BsFacebook, BsGithub, BsPhoneVibrateFill } from "react-icons/bs";

function Contact() {
  return (
    <div>
      <div className='contact-bg pt-40 text-white text-4xl mb-20'>
        <div>
          <h1 className='uppercase text-center'>
            My social media to connect with me
          </h1>
        </div>
      </div>
      <div className='container max-w-7xl m-auto social-link mb-20 flex items-center '>
        <ul className='mr-auto'>
          <li>
            <a target={"_blank"} href='https://ilyosaxmadaliy@gmail.com'>
              <span>
                <AiTwotoneMail />
              </span>
              <p>Email</p>
              <h4>ilyosaxmadaliy@gmail.com</h4>
            </a>
          </li>

          <li>
            <a target={"_blank"} href='https://t.me/IlyosAxmadAli'>
              <span>
                <FaTelegram />
              </span>
              <p>Telegram</p>
              <h4>t-IlyosAxmadAli</h4>
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              href='https://www.instagram.com/invites/contact/?i=11b9rqiev0g57&utm_content=5azmvw6'>
              <span>
                <AiFillInstagram />
              </span>
              <p>Instagram</p>
              <h4>i-IlyosAxmadAli</h4>
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              href='https://www.facebook.com/ilyos.axmadaliyev.9?mibextid=ZbWKwL'>
              <span>
                <BsFacebook />
              </span>
              <p>Facebook</p>
              <h4>f-IlyosAxmadAli</h4>
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              href='https://www.linkedin.com/in/ilyos-axmad-ali-1980a926a'>
              <span>
                <AiFillLinkedin />
              </span>
              <p>Linkedin</p>
              <h4>l-IlyosAxmadAli</h4>
            </a>
          </li>
          <li>
            <a target={"_blank"} href='https://github.com/IlyosDeveloper'>
              <span>
                <BsGithub />
              </span>
              <p>Github</p>
              <h4>g-IlyosAxmadAli</h4>
            </a>
          </li>
        </ul>
        <div>
          <div className='globes'></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
