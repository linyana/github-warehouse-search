import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import HoverBox from "../../components/HoverBox";
import { GetRepos } from "../../utils/axios";
import useFormatTime from "../../hooks/useFormatTime";

import "./index.css";

interface DataTypes {
  key?: React.Key;
  name?: string;
  description?: string;
  createTime?: string;
  updateTime?: string;
  languages?: string;
  contributors?: string;
  url?: string;
}

interface AuthorTypes {
  author?: string;
  authorUrl?: string;
  authorImg?: string;
}

let data: DataTypes[] = [];
let author: AuthorTypes;

const App: React.FC = () => {
  const [tableData, setTableData] = useState<Array<DataTypes>>();
  const [isShow, setIsShow] = useState<string>("hover_page_false");
  const [isDisplay, setIsDisplay] = useState({ display: "none" });
  const [obj, setObj] = useState({});
  const [authorData, setAuthorData] = useState<AuthorTypes>({});

  // 数据列表
  const columns: ColumnsType<DataTypes> = [
    {
      title: "名字",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "描述",
      dataIndex: "description",
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
    },
    {
      title: "更新时间",
      dataIndex: "updateTime",
    },
    {
      title: "查看",
      key: "check",
      render: (row, record) => {
        return (
          <div className={"check"} onClick={() => checkMore(row, record.key)}>
            查看
          </div>
        );
      },
    },
  ];

  // 获取路由参数
  const getsearchState = useLocation().state;
  const searchState =
    getsearchState === null ? "linyana" : getsearchState.searchState;
  // 获取接口数据
  useEffect(() => {
    GetRepos(searchState).then((response: any) => {
      data = [];
      author = {};
      for (let i = 0; i < response.data?.length; i++) {
        data.push({
          // key
          key: response.data[i].id,
          // 名字
          name: response.data[i].name,
          // 描述
          description:
            response.data[i].description || "作者太懒了，没有进行描述",
          // 起始时间
          // eslint-disable-next-line react-hooks/rules-of-hooks
          createTime: useFormatTime(response.data[i].created_at),
          // 更新时间
          // eslint-disable-next-line react-hooks/rules-of-hooks
          updateTime: useFormatTime(response.data[i].updated_at),
          // 语言
          languages: response.data[i].languages_url,
          // 贡献者
          contributors: response.data[i].contributors_url,
          // 地址
          url: response.data[i].html_url,
        });
      }

      author = {
        // 作者图片
        authorImg: response.data[0].owner.avatar_url,
        // 作者
        author: response.data[0].owner.login,
        // 地址
        authorUrl: response.data[0].owner.html_url,
      };
      setAuthorData(author);
      setTableData(data);
    });
  }, [searchState]);

  // 查看的点击事件
  const checkMore = (row: any, key: any) => {
    // 获取当前点击的列表信息，通过props传给子组件显示出来
    setObj(
      data.filter((_, index) => {
        return data[index].key === Number(key);
      })
    );
    ShowHoverBox();
  };

  const ShowHoverBox = () => {
    setIsShow("hover_page_true");
    if (isDisplay.display === "block") {
      setIsShow("hover_page_false");
      window.setTimeout(() => {
        setIsDisplay({ display: "none" });
      }, 500);
    } else {
      setIsDisplay({ display: "block" });
      setIsShow("hover_page_false");
      window.setTimeout(() => {
        setIsShow("hover_page_true");
      }, 10);
    }
  };

  return (
    <div className="layout_content">
      <div className="site-layout-background layout_left">
        <div className="author_img">
          <img src={authorData?.authorImg} alt="" />
        </div>
        <div className="author_name">{authorData?.author}</div>
        <div className="target_button" style={{ marginTop: "20px" }}>
          <button
            onClick={() => {
              window.open(authorData?.authorUrl);
            }}
          >
            查看详情
          </button>
        </div>
      </div>
      <div className="site-layout-background layout_right">
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{ pageSize: 9 }}
        />
        <div className={isShow} style={isDisplay}>
          <HoverBox ShowHoverBox={ShowHoverBox} obj={obj}></HoverBox>
        </div>
      </div>
    </div>
  );
};

export default App;
