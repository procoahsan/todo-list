
import { Box } from "./Box.js";


export const Layout = ({ children }) => (
  <Box
    css={{
     width:'300px',
     alignSelf:'center',
    }}
  >
    {children}
   
  </Box>
);
