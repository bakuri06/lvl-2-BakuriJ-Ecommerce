// import React from "react";
// import Button from "@material-ui/core/Button";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
// import Grow from "@material-ui/core/Grow";
// import Paper from "@material-ui/core/Paper";
// import Popper from "@material-ui/core/Popper";
// import MenuItem from "@material-ui/core/MenuItem";
// import MenuList from "@material-ui/core/MenuList";
// import { makeStyles } from "@material-ui/core/styles";
// import "./style.css";
// import { useContext } from "react";
// import { UserContext } from "./../../store/UserContextProvider";
// import { Link, generatePath } from "react-router-dom";
// import { SINGLE_LIST } from "./../../routes";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../store/user/userSelector";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   paper: {
//     marginRight: theme.spacing(2),
//   },
//   noPadding: {
//     padding: "0px",
//     paddingTop: "3px",
//   },
// }));

// export default function Products() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);
//   const user = useSelector(selectUser);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event) {
//     if (event.key === "Tab") {
//       event.preventDefault();
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   return (
//     <div className={classes.root}>
//       <Button
//         className={classes.noPadding}
//         ref={anchorRef}
//         aria-controls={open ? "menu-list-grow" : undefined}
//         aria-haspopup="true"
//         onClick={handleToggle}
//       >
//         <i className="badge-pill">{user.counter}</i>
//         <i className="fas fa-caret-down"></i>
//       </Button>
//       <Popper
//         open={open}
//         anchorEl={anchorRef.current}
//         role={undefined}
//         transition
//         disablePortal
//       >
//         {({ TransitionProps, placement }) => (
//           <Grow
//             {...TransitionProps}
//             style={{
//               transformOrigin:
//                 placement === "bottom" ? "center top" : "center bottom",
//             }}
//           >
//             <Paper>
//               <ClickAwayListener onClickAway={handleClose}>
//                 <MenuList
//                   autoFocusItem={open}
//                   id="menu-list-grow"
//                   onKeyDown={handleListKeyDown}
//                 >
//                   {user.product.map((el) => {
//                     return (
//                       <Link
//                         to={generatePath(SINGLE_LIST, {
//                           id: el.id,
//                         })}
//                       >
//                         <MenuItem onClick={handleClose}>{el.title}</MenuItem>
//                       </Link>
//                     );
//                   })}
//                 </MenuList>
//               </ClickAwayListener>
//             </Paper>
//           </Grow>
//         )}
//       </Popper>
//     </div>
//   );
// }
