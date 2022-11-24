import iconHTML5 from '../../../assets/img/icon-html5.png';
import iconSass from '../../../assets/img/icon-sass.png';
import iconCSS3 from '../../../assets/img/icon-css3.png';
import iconGitHub from '../../../assets/img/icon-github.webp';
import iconJavaScript from '../../../assets/img/icon-javascript.png';
import iconReact from '../../../assets/img/icon-react.jpg';
import iconNetlify from '../../../assets/img/icon-netlify.png';
import iconLinux from '../../../assets/img/icon-linux.png';
import iconTypescript from '../../../assets/img/icon-typescript.png';
import iconRedux from '../../../assets/img/icon-redux.png';
import iconJava from '../../../assets/img/icon-java.png';
import TechStackElement from './TechStackElement';

type TechStack = { usedTech: string[]; color: string };

const TechStack = ({ usedTech, color }: TechStack) => {
  const techArray = [
    <TechStackElement key={'0'} icon={iconHTML5} color={color}>
      HTML5
    </TechStackElement>,
    <TechStackElement key={'1'} icon={iconCSS3} color={color}>
      CSS3
    </TechStackElement>,
    <TechStackElement key={'2'} icon={iconSass} color={color}>
      SASS
    </TechStackElement>,
    <TechStackElement key={'3'} icon={iconGitHub} color={color}>
      Git & GitHub
    </TechStackElement>,
    <TechStackElement key={'4'} icon={iconJavaScript} color={color}>
      JavaScript
    </TechStackElement>,
    <TechStackElement key={'5'} icon={iconReact} color={color}>
      ReactJS
    </TechStackElement>,
    <TechStackElement key={'6'} icon={iconTypescript} color={color}>
      TypeScript
    </TechStackElement>,
    <TechStackElement key={'7'} icon={iconNetlify} color={color}>
      Netlify & Vercel
    </TechStackElement>,
    <TechStackElement key={'8'} icon={iconLinux} color={color}>
      Linux
    </TechStackElement>,
    <TechStackElement key={'9'} icon={iconRedux} color={color}>
      Redux
    </TechStackElement>,
    <TechStackElement key={'10'} icon={iconJava} color={color}>
      Java
    </TechStackElement>,
  ];

  const filteredArray = techArray.filter((techElement) => {
    return usedTech.includes(techElement.props.children);
  });

  return <>{filteredArray}</>;
};

export default TechStack;
