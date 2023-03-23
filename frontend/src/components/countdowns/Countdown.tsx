import React, { useState } from "react";
import { Carousel, Card } from "react-bootstrap";
import CountdownInner from "react-countdown";
import CountdownStyles from "../../styles/Countdown.module.css";

interface CountdownProps {
  title: string;
  countdown: string;
}

const mockCarouselItems: CountdownProps[] = [
  {
    title: "Hola",
    countdown: "Ya",
  },
  {
    title: "Hola 2",
    countdown: "Ya",
  },
  {
    title: "Hola 3",
    countdown: "Ya",
  },
];

const InnerCarousel = ({ title, countdown }: CountdownProps) => {
  return (
    <>
      <Carousel.Item>
        <Card className={`p-4 ${CountdownStyles.CountdownCard}`}>
          <h2>{title}</h2>
          <p>{countdown}</p>
        </Card>
      </Carousel.Item>
    </>
  );
};

export default function Countdown() {
  const [index, setIndex] = useState(0);
  const iLeave = new Date('04/05/2023')

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    // <Carousel fade variant="dark" activeIndex={index} onSelect={handleSelect}>
    //   <Carousel.Item>
        <Card className={`p-4 ${CountdownStyles.CountdownCard}`}>
          <h2>{mockCarouselItems[0].title}</h2>
          <CountdownInner date={iLeave} />
        </Card>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Card className={`p-4 ${CountdownStyles.CountdownCard}`}>
    //       <h2>{mockCarouselItems[1].title}</h2>
    //       <p>{mockCarouselItems[1].countdown}</p>
    //     </Card>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Card className={`p-4 ${CountdownStyles.CountdownCard}`}>
    //       <h2>{mockCarouselItems[2].title}</h2>
    //       <p>{mockCarouselItems[2].countdown}</p>
    //     </Card>
    //   </Carousel.Item>
    //   {/* {mockCarouselItemsCarouselItems?.map((item:CountdownProps) => {
    //     return (<InnerCarousel countdown={item.countdown} title={item.title} key={item.title}/> )
    //   })} */}
    // </Carousel>
  );
}
