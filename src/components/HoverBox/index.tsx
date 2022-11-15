import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { GetResponse } from "../../utils/axios";
import { nanoid } from "nanoid";

import "./index.css";

interface propsTypes {
  ShowHoverBox: () => void;
  obj: { [x: number]: any };
}

let imgArr: string[];

const App = (props: propsTypes) => {
  const [contributors, setContributors] = useState<Array<string>>([]);
  const [languages, setLanguages] = useState<Array<string>>([]);
  const { ShowHoverBox, obj } = props;
  const item = obj[0];
  const url = item?.url;
  console.log(url);

  useEffect(() => {
    if (item) {
      GetResponse(item.contributors).then((response: any) => {
        setContributors([]);
        imgArr = [];
        for (let i in response.data) {
          imgArr.push(response.data[i].avatar_url);
        }
        setContributors(imgArr);
      });

      GetResponse(item.languages).then((response: any) => {
        let lang = Object.keys(response.data).sort((a: string, b: string) => {
          return Number(a) - Number(b);
        });
        setLanguages(lang.slice(0, 3));
      });
    }
  }, [item]);

  return (
    <div className="hover_page">
      <div className="hover_box">
        <div className="close" onClick={ShowHoverBox}>
          <img src={require("../../assets/images/close.png")} alt="" />
        </div>
        <div className="hover_total_title">{item?.name}</div>
        <div className="hover_author">
          {item?.author}
          <span></span>
          {item?.createTime.slice(0, 10)}
        </div>
        <div className="hover_title">描述</div>
        <div className="description">{item?.description}</div>
        <div className="hover_title">使用最多的语言</div>
        <div className="languages">
          {languages.map((current) => {
            return <span key={nanoid()}>{current}</span>;
          })}
        </div>
        <div className="hover_title">贡献者</div>
        <Avatar.Group
          maxCount={10}
          maxPopoverTrigger="click"
          size="large"
          maxStyle={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
            cursor: "pointer",
          }}
        >
          {contributors.map((current) => {
            return <Avatar src={current} key={nanoid()} />;
          })}
        </Avatar.Group>
        <div className="target_button">
          <button
            onClick={() => {
              window.open(url);
            }}
          >
            跳转
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
