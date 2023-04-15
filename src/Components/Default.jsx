// import React from "react";
// export const Default = (props) => {
//   return <div className="header">
//   <div className="d-flex justify-content-between">

//     <h1>SPYeye</h1>
//   </div>

//     <div className="content">
//     {props.childern}


//     </div>
//   </div>;
// };
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 200px;
  background-color: #f2f2f2;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

export const Default = (props) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>SPYeye</HeaderTitle>
      <div className="content">{props.children}</div>
    </HeaderWrapper>
  );
};
