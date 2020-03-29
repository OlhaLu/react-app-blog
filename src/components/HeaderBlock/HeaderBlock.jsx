import React from "react";

const HeaderBlock = ({ title, description, imageUrl }) => {
  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1 style={{ color: `#778899` }}>{title}</h1>
      <h3 style={{ color: `#778899` }}>{description}</h3>
    </div>
  );
};

HeaderBlock.defaultProps = {
  title: "My Test Blog ReactJ",
  description:
    "Cоздавайте компоненты с собственным состоянием, затем объединяйте их в сложные пользовательские интерфейсы.",
  imageUrl:
    "https://dgdesign.ru/uploads/posts/2019-08/1566569269_shapka-sayta-gorod-11614142.jpg"
};

export default HeaderBlock;
