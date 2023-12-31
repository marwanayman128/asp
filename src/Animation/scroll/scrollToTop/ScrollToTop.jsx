import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import "./ScrollToTop.css";
const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger({ threshold: 100 })}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        variant="extended"
        size="small"
        sx={{
          position: "fixed",
          bottom: 33,
          right: 33,
          borderRadius: "50%",
          width: 50,
          height: 50,
          backgroundColor: "#ED5521",
          "&:hover": {
            backgroundColor: "#000000",
          },
        }}
        aria-label="add"
      >
        <KeyboardArrowUp fontSize="medium" style={{ color: "white" }} />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
