import React, { useEffect } from 'react';
// import  { Fragment} from 'react';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from "./pages/chat/Chat";
// import Menu from '@mui/material';
import Navbar from "./components/navbar/Navbar";
// import Rightbar from "./components/rightbar/Rightbar";
import Sidebar from "./components/sidebar/Sidebar";
import Shop from './pages/store/Shop';
import {useDispatch} from 'react-redux'
// import {useSelector} from 'react-redux'
import { getCurrentUser} from './features/auth/auth';
// import {  logout } from './features/auth/auth';

function App() {

  const dispatch= useDispatch()
  // const auth =useSelector(state=>state.auth)
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <Box className="App">
        <Navbar />
        <Stack 
          direction="row" 
          spacing={2} 
          justifyContent="space-between"
          sx={{ flexWrap: 'wrap' }}
        >
          {/* {auth.currentUser===null&&(<Fragment>
          <Link to='/login'>login</Link>
          <Link to='/register'>register</Link>
          </Fragment>)}
           
         {auth.currentUser &&<span onClick={()=>dispatch(logout())}>Logout

          </span>} */}

          {/* Conditionally render the Sidebar based on screen size */}
          {!isSmallScreen && <Sidebar />}

          {/* Define Routes to determine which component to render */}
          <Routes>
            {/* Example Routes */}
            <Route path="/" element={<Shop />} />
            {/* Add more routes as needed */}
          </Routes>

          {/* {!isSmallScreen && <Rightbar />} */}
        </Stack>

        {/* Chat component will be always visible */}
        <Chat />
      </Box>
    </Router>
  );
}

export default App;
