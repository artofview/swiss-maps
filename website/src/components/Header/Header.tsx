import * as MUI from "@material-ui/core";
import * as React from "react";
import { palette } from "src/theme/colors";

/**
 * The underlying DOM element which is rendered by this component.
 */
const Root = "div";

interface Props extends React.ComponentPropsWithoutRef<typeof Root> {}

function Header(props: Props, ref: any) {
  const classes = useStyles();

  const { ...rest } = props;

  return (
    <Root ref={ref} className={classes.root} {...rest}>
      <div className={classes.pattern}>
        <img src="/pattern.svg" />
        <div />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          padding: "50px 70px",
        }}
      >
        <MUI.Typography variant="h1" color="primary">
          Swiss Maps
        </MUI.Typography>

        <nav>
          <MUI.Link
            variant="h4"
            color="textPrimary"
            style={{ padding: "10px 30px" }}
          >
            Generator
          </MUI.Link>
          <MUI.Link
            variant="h4"
            color="textPrimary"
            style={{ padding: "10px 30px" }}
          >
            Gallery
          </MUI.Link>
          <MUI.Link
            variant="h4"
            color="textPrimary"
            style={{ padding: "10px 30px" }}
          >
            Credits
          </MUI.Link>
        </nav>
      </div>

      <div style={{ textAlign: "center", paddingTop: 40, paddingBottom: 80 }}>
        <h1 className={classes.title}>
          Generate TopoJSON from Swisstopo geodata
        </h1>
        <div className={classes.subtitle}>
          A free tool to generate TopoJSON from Swisstopo geodata
        </div>
      </div>
    </Root>
  );
}

const useStyles = MUI.makeStyles(
  (theme) => ({
    root: {
      position: "relative",
    },

    pattern: {
      zIndex: -1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.5,

      "& img": {
        display: "block",
        width: "100%",
      },

      "& div": {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
      },
    },

    title: {
      ...theme.typography.display1,
      maxWidth: 800,
      margin: "0 auto",
    },
    subtitle: {
      ...theme.typography.body1,
      marginTop: theme.spacing(3),
    },
  }),
  { name: "XuiHeader" }
);

export default React.forwardRef(Header);