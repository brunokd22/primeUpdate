import { Button } from "flowbite-react";
export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Uganda leader backs military trials as rival in jail for Christmas
        </h2>
        <p className="text-gray-500 my-2">
          Uganda's President Yoweri Museveni, 80, has defended the use of
          military courts to try civilians - following an outcry over the arrest
          and trial of opposition leader Kizza Besigye. His 68-year-old rival
          has been charged in a military court with possession of pistols and
          attempting to purchase weapons abroad - accusations he denies.
          Besigye, who was abducted while visiting Kenya last month and forcibly
          taken to Uganda, found out on Tuesday that he would be spending
          Christmas in custody as his trial has been delayed until January.
          Museveni said any crime involving a gun was dealt with in a military
          court to ensure the country's stability as civilian courts took too
          long to deal with cases.
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            Exciting important Updates around Us.
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/5687/live/b986e860-b877-11ef-a72c-55cc49f950c5.jpg.webp" />
      </div>
    </div>
  );
}
