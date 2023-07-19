import React from "react";
import * as icons from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    float: "left",
    margin: "16px 10px 5px 10px",
    border: "1px solid #ccddee",
    overflow: "hidden",
    width: "70px",
    flexGrow: "1",
    fontFamily: "Arial",
    fontSize: "10px",
    fontWeight: " 400",
    "&:hover, &:focus": {
      backgroundColor: "#ccddee",
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    }
  },
  iconDefault: {
    display: "flex",
    color: "#212121",
    textAlign: "center",
    margin: "0 auto",
    height: 50,
    width: 50
  },
  iconLabel: {
    textAlign: "center",
    marginTop: "12px"
  }
});

interface MenuItem {
  label: string;
  icon: keyof typeof icons;
  path: string;
}

const Menu = (props: any) => {
  const menuItems: MenuItem[] = [];
  const classes = useStyles();

  const getSelectedIcon = (Icn: string) => {
    props.callBack(Icn, () => {
      const Icon = icons[Icn];
      return (
        <>
          <Icon style={{ color: "blue" }} />
        </>
      );
    });
  };
  const searchTxt = props.searchTxt === undefined ? "" : props.searchTxt;
  for (let i = 0; i < props.icnArr.split(",").length; i++) {
    if (props.icnArr.split(",")[i].toLowerCase().includes(searchTxt)) {
      const Mitem = {
        label: props.icnArr.split(",")[i],
        path: "./" + props.icnArr.split(",")[i],
        icon: props.icnArr.split(",")[i]
      };
      menuItems.push(Mitem);
    }
  }
  return (
    <>
      {menuItems.map((menuItem) => {
        const Icon = icons[menuItem.icon];

        return (
          <div
            className={classes.root}
            key={menuItem.path}
            onClick={(e) => {
              getSelectedIcon(menuItem.icon);
            }}
          >
            <Icon className={classes.iconDefault} />
            <div className={classes.iconLabel}>{menuItem.label}</div>
          </div>
        );
      })}
    </>
  );
};
export default Menu;
