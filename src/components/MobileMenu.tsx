import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import { Button, Typography } from '@mui/material';
import { getCurrentYear, getGreeting } from '../utils/helper';
import { useNavigate } from 'react-router-dom';

const MobileMenu: React.FC<{
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({mobileMenuOpen,setMobileMenuOpen}) => {
  // const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setMobileMenuOpen(newOpen);
  };

  const navigate = useNavigate();


  const DrawerList = (
    <Box
      sx={{
        width: 250,
        px: "10px",
        pt: "20px",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "20px",
          height: "100%",
          pb: "15px",
          // alignItems:"stretch"
        }}
      >
        <Box>
          <Box sx={{ mb: "10px" }}>
            <Typography
              sx={{
                fontSize: { xs: "22px" },
                textAlign: "center",
                fontStyle: "italic",
                color: "#E0E0E0",
                lineHeight: "25px",
              }}
            >
              Hi Explorer
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "22px" },
                textAlign: "center",
                fontStyle: "italic",
                color: "#E0E0E0",
              }}
            >
              {getGreeting()}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <Box
              sx={{
                bgcolor: "rgba(20, 89, 109, 0.2)",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
                py: "2px",
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#E0E0E0" }}
              >
                Blogs
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "rgba(20, 89, 109, 0.2)",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
                py: "2px",
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#E0E0E0" }}
              >
                Events
              </Typography>
            </Box>
            <Box
              component={Button}
              sx={{
                bgcolor: "rgba(20, 89, 109, 0.2)",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
                py: "2px",
                textTransform: "initial",
              }}
              onClick={() => {
                navigate("/about");
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#E0E0E0" }}
              >
                About
              </Typography>
            </Box>
          </Box>

          <Divider
            sx={{ bgcolor: "white", opacity: 0.2, my: "20px" }}
          ></Divider>

          {/* Sources */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "22px" },
                textAlign: "center",
                fontStyle: "italic",
                color: "#E0E0E0",
              }}
            >
              Our Sources
            </Typography>
            <Box
              sx={{
                bgcolor: "rgba(20, 89, 109, 0.2)",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
                py: "2px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: { xs: "14px", md: "18px" },
                  color: "#E0E0E0",
                }}
              >
                NASA
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "rgba(20, 89, 109, 0.2)",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
                py: "2px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: { xs: "14px", md: "18px" },
                  color: "#E0E0E0",
                }}
              >
                SpaceFlightNow
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "rgba(20, 89, 109, 0.2)",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
                py: "2px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: { xs: "14px" },
                  color: "#E0E0E0",
                }}
              >
                Universe Today
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Bottom */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Venite Adoremus",
              fontSize: "18px",
              color: "#E0E0E0",
            }}
          >
            SpaceNews
          </Typography>
          <Typography
            sx={{
              fontStyle: "italic",
              lineHeight: "10px",
              color: "#E0E0E0",
              fontSize: "14px",
            }}
          >{`All rights reserved @ ${getCurrentYear()}`}</Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer
        // open={true}
        open={mobileMenuOpen}
        anchor="right"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            //   width: 100
            bgcolor: "#061618",
          },
        }}
        // sx={{
        //   ".MuiDrawer-modal": {
        //     color: "red",
        //     width:"600px"
        //   },
        // }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};


export default MobileMenu