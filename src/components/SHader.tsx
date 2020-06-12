import React from "react";
import styled from "styled-components";


const SHeaderWrapper = styled.div`
  width:100vw;
  height:7%;
  display:flex;
  border:1px solid red;

  .left{
    width:25%;
    height:100%;
    border:1px solid red;
  }

  .middle{
    width:50%;
    height:100%;
    border:1px solid red;
  }

  .right{
    width:25%;
    height:100%;
    border:1px solid red;
  }
`;

const SHeader = () => {
    return (
        <SHeaderWrapper>
            <div className="left">
                left
            </div>
            <div className="middle">
                middle
            </div>
            <div className="right">
                <PlusOutlined />
            </div>
        </SHeaderWrapper>
    )

}

export default SHeader;
