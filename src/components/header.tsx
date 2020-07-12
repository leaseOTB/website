import PropTypes from "prop-types"
import React from "react"
import HeaderLogoDark from "./images/headerLogoDark"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  Grid,
  AppBar,
  Toolbar,
  ThemeProvider,
  Button,
  Hidden,
  List,
  ListItem,
  Typography,
  Divider,
  Drawer,
  CssBaseline,
  IconButton,
} from "@material-ui/core"
import theme from "./theme"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import clsx from "clsx"
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      height: "70px",
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  })
)

const Header = (page: any) => {
  const intl = useIntl()

  const classes = useStyles()
  // const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <Hidden smUp>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.root}>
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
              style={{
                backgroundColor: theme.palette.secondary.white,
                boxShadow: "none",
              }}
            >
              <Toolbar>
                <Link
                  className={classes.title}
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  <HeaderLogoDark width="15em" />
                </Link>
                <IconButton
                  color={theme.palette.secondary.main}
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="right"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem>
                  <Link
                    to="/about"
                    style={{
                      color: theme.palette.secondary.main,
                      textDecoration: `none`,
                      fontFamily: "Gilroy Ultra Light",
                    }}
                  >
                    <Button
                      color="inherit"
                      variant="text"
                      style={{
                        fontFamily: "Gilroy Ultra Light",
                        fontWeight: "bolder",
                      }}
                    >
                      <FormattedMessage id="aboutButton" />
                    </Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="/platform"
                    style={{
                      color: theme.palette.secondary.main,
                      textDecoration: `none`,
                      fontFamily: "Gilroy Ultra Light",
                    }}
                  >
                    <Button
                      color="inherit"
                      variant="text"
                      style={{
                        fontFamily: "Gilroy Ultra Light",
                        fontWeight: "bolder",
                      }}
                    >
                      Platform
                    </Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="/team"
                    style={{
                      color: theme.palette.secondary.main,
                      textDecoration: `none`,
                      fontFamily: "Gilroy Ultra Light",
                    }}
                  >
                    <Button
                      color="inherit"
                      variant="text"
                      style={{
                        fontFamily: "Gilroy Ultra Light",
                        fontWeight: "bolder",
                      }}
                    >
                      Team
                    </Button>
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </div>
        </Grid>
      </Hidden>
      <Hidden xsDown>
        <Grid item xs={12} sm={6} md={"auto"}>
          <ThemeProvider theme={theme}>
            <AppBar
              style={{
                boxShadow: "0px 0px 5px rgb(50,50,50)",
                height: "70px",
                justifyContent: "center",
              }}
              color="white"
              position="fixed"
              display="flex"
              justify="center"
            >
              <Toolbar variant="dense">
                <Link
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                    fontFamily: "Gilroy Ultra Light",
                  }}
                >
                  <HeaderLogoDark width="15em" />
                </Link>
                <Grid
                  item
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item>
                    <Link
                      to="/about"
                      style={{
                        color: theme.palette.secondary.main,
                        textDecoration: `none`,
                        fontFamily: "Gilroy Ultra Light",
                      }}
                    >
                      <Button
                        color="inherit"
                        variant="text"
                        style={{
                          fontFamily: "Gilroy Ultra Light",
                          fontWeight: "bolder",
                        }}
                      >
                        <FormattedMessage id="aboutButton" />
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      to="/platform"
                      style={{
                        color: theme.palette.secondary.main,
                        textDecoration: `none`,
                        fontFamily: "Gilroy Ultra Light",
                      }}
                    >
                      <Button
                        color="inherit"
                        variant="text"
                        style={{
                          fontFamily: "Gilroy Ultra Light",
                          fontWeight: "bolder",
                        }}
                      >
                        Platform
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      to="/team"
                      style={{
                        color: theme.palette.secondary.main,
                        textDecoration: `none`,
                      }}
                    >
                      <Button
                        color="inherit"
                        variant="text"
                        style={{
                          fontFamily: "Gilroy Ultra Light",
                          fontWeight: "bolder",
                        }}
                      >
                        Team
                      </Button>
                    </Link>
                  </Grid>
                  {/* hidden, no hiring atm
             <Hidden xsDown>
              <Grid item>
                <Link
                  to="/careers"
                  style={{
                    color: theme.palette.secondary.light,
                    textDecoration: `none`,
                  }}
                >
                  <Button color="primary" variant="outlined">
                    Join
                  </Button>
                </Link>
              </Grid>
            </Hidden>
            */}
                </Grid>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </Grid>
      </Hidden>
    </div>
  )
}

Header.propTypes = {
  page: PropTypes.string,
}

export default Header
