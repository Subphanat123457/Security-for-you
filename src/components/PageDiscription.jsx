
import React from "react";
import {Card, CardHeader, CardBody, Divider,Image} from "@nextui-org/react";
import data from "../data/data.json";

export default function PageDiscription({ selectedId }) {
  
  console.log("Id in Page",selectedId?.[0])

  let selectedData;
  if (selectedId && selectedId[0]) {
  switch (selectedId[0]) {
    case 'N':
      selectedData = selectedId ? data.Network.find((item) => item.Id === selectedId) : null;
      break;
    case 'A':
      selectedData = selectedId ? data.Attack.find((item) => item.Id === selectedId) : null;
      break;
    case 'P':
      selectedData = selectedId ? data.Protect.find((item) => item.Id === selectedId) : null;
      break;
    default:
      selectedData = null;
  }
}
  const Network = selectedData;
  console.log("Id in Page",selectedId)
  return (
    <div>
      {Network ? (
        <Card>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-4xl">{ Network.Topic }</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
        <div className="flex justify-center">
          <Image
            className="rounded items-center"
            width={300}
            alt="NextUI hero Image"
            src={Network.Image1}
          />
        </div>
          <p>{ Network.Discription }</p>
        </CardBody>
        <Divider/>
      </Card>
      ) : (
        <Card>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-4xl">Security</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <p></p>
        </CardBody>
        <Divider/>
      </Card>
      )}
    </div>
  );
} 
