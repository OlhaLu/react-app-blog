import React from "react";

interface HeaderBlockProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({
  title,
  description,
  imageUrl
}) => {
  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1 style={{ color: `#191970`, textTransform: `uppercase` }}>{title}</h1>
      <h3 style={{ color: `#778899` }}>{description}</h3>
    </div>
  );
};

HeaderBlock.defaultProps = {
  title: "My Test Blog React js | ts",
  description:
    "Cоздавайте компоненты с собственным состоянием, затем объединяйте их в сложные пользовательские интерфейсы.",
  imageUrl:
    "https://dgdesign.ru/uploads/posts/2019-08/1566569269_shapka-sayta-gorod-11614142.jpg"
};

export default HeaderBlock;
