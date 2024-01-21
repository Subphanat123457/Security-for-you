import { createContext, useState} from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
} from "@nextui-org/react";
import data from "../data/data.json";
// import PageDiscription from "./PageDiscription";
import PageDiscription from "./PageDiscription";


import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

export const SelectedIdContext = createContext();

function CardContentsProtectAttack() {

  const [selectedId, setSelectedId] = useState();

  const handleNavigation = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const { top, height } = element.getBoundingClientRect();
      const offset = window.innerHeight / 2 - height / 2;
      window.scrollTo({
        top: top + window.pageYOffset - offset,
        behavior: 'smooth',
      });
    }
  };

  const handleCardClick = (id) => {
    setSelectedId(id);
  };
  return (
    <SelectedIdContext.Provider value={selectedId}>
    <div className="sm:p-14">
      <h1 className="text-4xl font-bold text-center">Cyber Protected</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center p-4 m-4 rounded">
        {data.Protect.map((item, index) => (
          <Card
            key={index}
            className="max-w-[400px] mb-4 sm:mb-0 hover:transform hover:-translate-y-1 transition-all duration-200"
            isPressable
            id={item.Id}
            onClick={(event) => {
              handleCardClick(item.Id);
              handleNavigation(event, 'PageDiscriptionProtection');
            }}
          >
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src={item.Image}
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">{item.Topic}</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                {item.Discription.length > 100
                  ? `${item.Discription.slice(0, 100)}...`
                  : item.Discription}
              </p>
            </CardBody>
            <Divider />
          </Card>
        ))}
      </div>
      <div id="PageDiscriptionProtection">
      <SelectedIdContext.Consumer>
          {(selectedId) => (
            <PageDiscription selectedId={selectedId} />
          )}
        </SelectedIdContext.Consumer>
        </div>
    </div>
    </SelectedIdContext.Provider>
  );
}
export default CardContentsProtectAttack;