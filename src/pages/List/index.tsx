import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import { useDispatch } from "react-redux";

import HoverBox from "../../components/HoverBox";
import { GetRepos } from "../../utils/axios";
import useFormatTime from "../../hooks/useFormatTime";
import Loading from "../Loading";
import { message } from "antd";

import "./index.css";
import { GetImg } from "../../store/img";

const error = (msg: string) => {
  message.error(msg);
};

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
  const [isTable, setIsTable] = useState({ display: "none" });
  const [isLoad, setIsLoad] = useState({ display: "block" });
  const [obj, setObj] = useState({});
  const [authorData, setAuthorData] = useState<AuthorTypes>({});
  const [filterData, setFilterData] = useState<Array<DataTypes>>();

  // dispatch
  const dispatch = useDispatch();

  // ref
  const listInput: MutableRefObject<any> = useRef(null);

  const changeInputValue = () => {
    setFilterData(
      data.filter((item) => {
        if (item.name?.includes(listInput.current.value)) {
          return true;
        } else if (item.description?.includes(listInput.current.value)) {
          return true;
        } else if (item.createTime?.includes(listInput.current.value)) {
          return true;
        } else if (item.updateTime?.includes(listInput.current.value)) {
          return true;
        }
        return false;
      })
    );
    if (listInput.current.value.trim() === "") {
      setFilterData(tableData);
    }
  };

  // ?????????
  const authorName = window.localStorage.getItem("author") || "linyana";

  // ????????????
  const columns: ColumnsType<DataTypes> = [
    {
      title: "??????",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "??????",
      dataIndex: "description",
    },
    {
      title: "????????????",
      dataIndex: "createTime",
    },
    {
      title: "????????????",
      dataIndex: "updateTime",
    },
    {
      title: "??????",
      key: "check",
      render: (row, record) => {
        return (
          <div className={"check"} onClick={() => checkMore(row, record.key)}>
            ??????
          </div>
        );
      },
    },
  ];

  // ??????????????????
  const getsearchState = useLocation().state;
  const searchState =
    getsearchState === null ? authorName : getsearchState.searchState;

  // ??????????????????
  useEffect(() => {
    GetRepos(searchState).then((response: any): void => {
      data = [];
      author = {};
      if (response === undefined) {
        error("??????????????????");
      } else {
        for (let i = 0; i < response.data?.length; i++) {
          const res = response.data[i];
          data.push({
            // key
            key: res.id,
            // ??????
            name: res.name,
            // ??????
            description: res.description || "????????????????????????????????????",
            // ????????????
            // eslint-disable-next-line react-hooks/rules-of-hooks
            createTime: useFormatTime(res.created_at),
            // ????????????
            // eslint-disable-next-line react-hooks/rules-of-hooks
            updateTime: useFormatTime(res.updated_at),
            // ??????
            languages: res.languages_url,
            // ?????????
            contributors: res.contributors_url,
            // ??????
            url: res.html_url,
          });
        }
        const authorRes = response.data[0].owner;
        author = {
          // ????????????
          authorImg: authorRes.avatar_url,
          // ??????
          author: authorRes.login,
          // ??????
          authorUrl: authorRes.html_url,
        };
      }

      setAuthorData(author);
      setTableData(data);
      setFilterData(data);
      if (window.localStorage.getItem("author") === authorData?.author) {
        window.localStorage.setItem("authorImg", authorData?.authorImg || "");
      }
      setIsTable({ display: "block" });
      setIsLoad({ display: "none" });
      dispatch(GetImg());
    });
  }, [authorData?.author, authorData?.authorImg, dispatch, searchState]);

  // ?????????????????????
  const checkMore = (row: any, key: any) => {
    // ??????????????????????????????????????????props???????????????????????????
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
            ????????????
          </button>
        </div>
      </div>
      <div className="site-layout-background layout_right">
        <div className="list_load" style={isLoad}>
          <Loading />
        </div>
        <div className="list_input">
          <input
            type="text"
            ref={listInput}
            onKeyUp={() => changeInputValue()}
          />
        </div>
        <div className="list_table" style={isTable}>
          <Table
            columns={columns}
            dataSource={filterData}
            pagination={{ pageSize: 9 }}
          />
        </div>
        <div className={isShow} style={isDisplay}>
          <HoverBox ShowHoverBox={ShowHoverBox} obj={obj}></HoverBox>
        </div>
      </div>
    </div>
  );
};

export default App;
