import React from 'react';
import AboutView from './view/aboutView';
import IndexView from './view/indexView';
import JoinView from './view/joinView';
import ListView from './view/listView';
import View404 from './view/404View';
import { Redirect } from 'react-router-dom';

const types = ["good", "share", "ask"];
const nav_list = [
  {
    title: "首页",
    to: "/",
    exact: true,
    isActive(pathname) {
      return pathname==="/"||pathname==="/home"
    }
  }, {
    title: "关于",
    to: "/about",
    exact: true,
  }, {
    title: "加入",
    to: "/join",
    exact: true,
  }, {
    title: "列表",
    to: "/list",
    exact: true,
  },
]
const route_list = [
  {
    path: ["/", "/home"],
    exact: true,
    render(props) {
      return <IndexView {...props} />
    },
  },
  {
    path: "/about",
    exact: true,
    render(props) {
      return <AboutView {...props} />
    },
  },
  {
    path: "/join",
    exact: true,
    render(props) {
      return <JoinView {...props} />
    },
  },
  {
    path: ["/list", "/list/:type", "/list/:type/:page"],
    exact: true,
    render(props) {
      const { type = "good", page = 1 } = props.match.params;
      if (types.includes(type) && page > 0 && parseInt(page) + "===page") {
        return <ListView {...props}/>
      }
      return <Redirect to="/undefined"/>
    },
  },
  {
    path: "",
    render(props) {
      return <View404 {...props} />
    },
  }
];
const list_navs = [
  {
    title: "精华",
    to: "/list/good",
    exact: false,
    isActive(pathname) {
      return pathname === "/list" || pathname.slice(0,10) === "/list/good"
    }
  }, {
    title: "分享",
    to: "/list/share",
    exact: false,
  }, {
    title: "问答",
    to: "/list/ask",
    exact: false,
  },
]

export { route_list, nav_list, list_navs}