import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Menu from "./icon";
import icnArr from "./iconListMap";

export default function SvgMaterialIcons() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [searchTxt, setsearchTxt] = React.useState();
  const [selectedIcon, setSelectedIcon] = React.useState();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const onChangeHandler = (e: any) => {
    e.stopPropagation();
    setsearchTxt(e.currentTarget.value);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const getIcon = (Icon: string, cb: any) => {
    setSelectedIcon(cb);
    // return cb;
  };
  return (
    <div>
      <div>
        <Button
          aria-describedby={id}
          type="button"
          variant="contained"
          onClick={handleClick}
        >
          Primay Graphic
        </Button>
        <div style={{ float: "right" }}>{selectedIcon}</div>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          style={{ width: "70%", height: "50%" }}
        >
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            <TextField
              id="outlined-basic"
              label="Search Icon"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={(e) => onChangeHandler(e)}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
            <br />
            <br />
            <Grid container sx={{ color: "text.primary" }}>
              <Grid
                item
                xs={12}
                style={{ height: "400px", overflow: "scroll" }}
              >
                {
                  <Menu
                    icnArr={icnArr()}
                    searchTxt={searchTxt}
                    callBack={getIcon}
                  />
                }
              </Grid>
            </Grid>
          </Box>
        </Popper>
      </div>
    </div>
  );
}
