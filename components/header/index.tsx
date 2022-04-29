import { tw, css } from 'twind/css';
import Button from '../button';

import Link from 'next/link';

const headerStyle = css`
  background: radial-gradient(circle, white, gray);
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        NEAR-meetups
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Get the decentralized meetups experience.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Link href='/addevent' passHref>
          <Button primary>Add event</Button>
        </Link>
        <span className={tw(`mx-2`)}>or</span>
        <Button>View events</Button>
      </div>
    </div>
  </header>
);

export default Header;
