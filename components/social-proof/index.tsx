import { tw } from 'twind';
import { useState } from 'react';
import Quote from '../../constants/svg/quote.svg';

const socialProofs = [
  {
    name: `Kevin Kimani`,
    company: `ABC company`,
    image: `/images/avatar-3.jpeg`,
    text: `NEAR-meetups gives anyone a chance to quickly immerse themselves to the web3 world.
    I love it here.`,
  },
  {
    name: `Everlyn Wanini`,
    company: `Techworld org`,
    image: `/images/avatar-4.jpeg`,
    text: `I uploaded my event swiftly. I love the idea of distributed finance.`,
  },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + 1 < socialProofs.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previous = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={tw(`container mx-auto my-8`)}>
      <div className={tw(`max-w-7xl mx-auto`)}>
        <section>
          <figure>
            <div className={tw(`relative bg-white`)}>
              <Quote className={tw(`w-16 md:w-12 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-gray-300`)} />
              <div className={tw(`pt-20 px-6 md:px-0`)}>
                <p className={tw(`text-gray-600 text-base pb-6`)}>{socialProofs[currentIndex].text}</p>
                <div className={tw(`flex items-center justify-between`)}>
                  <div className={tw(`flex items-center pb-12`)}>
                    <div className={tw(`h-12 w-12`)}>
                      <img
                        src={socialProofs[currentIndex].image}
                        alt={socialProofs[currentIndex].name}
                        className={tw(`h-full w-full object-cover overflow-hidden rounded-full`)}
                        height={48}
                        width={48}
                      />
                    </div>
                    <p className={tw(`text-gray-600 font-bold ml-3`)}>
                      {socialProofs[currentIndex].name} <br />
                      <span className={tw(`text-gray-600 text-base font-light`)}>
                        {socialProofs[currentIndex].company}
                      </span>
                    </p>
                  </div>
                  <div className={tw(`cursor-pointer flex pb-12`)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#CBD5E0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={previous}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#CBD5E0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={next}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default SocialProof;
