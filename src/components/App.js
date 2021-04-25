import {
  AppBar,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { NeoGraph } from "./NeoGraph";
import { makeStyles } from "@material-ui/core/styles";
import RightSideBar from "./RightSideBar";

const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "zxjzxj233";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dragger: {
    width: "5px",
    cursor: "ew-resize",
    padding: "4px 0 0",
    borderTop: "1px solid #ddd",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: "100",
    backgroundColor: "#f4f7f9",
  },
}));

const App = () => {
  const classes = useStyles();
  // const [newWidth, setNewWidth] = useState({});
  // const [isResizing, setIsResizing] = useState(false);
  // const [lastDownX, setLastDownX] = useState(0);
  //
  // const handleMousedown = (event) => {
  //   setIsResizing(true);
  //   setLastDownX(event.clientX);
  // };

  // const handleMousemove = e => {
  //   console.log(newWidth)
  //   // we don't want to do anything if we aren't resizing.
  //   if (!isResizing) {
  //     return;
  //   }
  //
  //   let offsetRight =
  //     document.body.offsetWidth - (e.clientX - document.body.offsetLeft);
  //   let minWidth = 50;
  //   let maxWidth = 600;
  //   if (offsetRight > minWidth && offsetRight < maxWidth) {
  //     setNewWidth({ width: offsetRight });
  //   }
  //
  // };
  //
  // const handleMouseup = (event) => {
  //   setIsResizing(false);
  // };
  //
  // useEffect(() => {
  //   document.addEventListener("mousemove", e => handleMousemove(e));
  //   document.addEventListener("mouseup", e => handleMouseup(e));
  // }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Christin Graph
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Toolbar />
        <NeoGraph
          width={"100%"}
          height={window.outerHeight * 0.75 + "px"}
          containerId={"id1"}
          neo4jUri={NEO4J_URI}
          neo4jUser={NEO4J_USER}
          neo4jPassword={NEO4J_PASSWORD}
          backgroundColor={"#b2beb5"}
        />
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        {/*<div*/}
        {/*  id="dragger"*/}
        {/*  onMouseDown={event => {*/}
        {/*    handleMousedown(event);*/}
        {/*  }}*/}
        {/*  className={classes.dragger}*/}
        {/*/>*/}
        <Toolbar />
        <div className={classes.drawerContainer}>
          <RightSideBar />
        </div>
      </Drawer>
    </div>
  );
};

export default App;
