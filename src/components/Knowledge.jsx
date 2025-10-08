import AngularIcon from "../assets/knowledge/angular.svg";
import CssIcon from "../assets/knowledge/css.svg";
import HtmlIcon from "../assets/knowledge/html.svg";
import JsIcon from "../assets/knowledge/js.svg";
import NodejsIcon from "../assets/knowledge/nodejs.svg";
import ReactjsIcon from "../assets/knowledge/reactjs.svg";
import TailwindcssIcon from "../assets/knowledge/tailwindcss.svg";

const icons = [
  { name: "Angular", icon: AngularIcon },
  { name: "Css", icon: CssIcon },
  { name: "Html", icon: HtmlIcon },
  { name: "JavaScript", icon: JsIcon },
  { name: "NodeJs", icon: NodejsIcon },
  { name: "ReactJs", icon: ReactjsIcon },
  { name: "Tailwindcss", icon: TailwindcssIcon },
];

export default function Knowledge() {
  return (
    <div className="flex gap-4 sm:gap-5 mt-5">
      {icons.map((item, index) => (
        <div
          key={index}
          className="flex flex-col text-center font-roboto cursor-pointer"
        >
          <img
            src={item.icon}
            alt={item.name}
            title={item.name}
            className="h-10 w-10 bg-gradient-to-br from-gray-700 to-gray-700/10 p-1 rounded"
          />
        </div>
      ))}
    </div>
  );
}
