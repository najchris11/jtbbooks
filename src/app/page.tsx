'use client';

import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: {
            xs: '90%',   // Mobile screens
            sm: '80%',   // Tablets
            md: '60%',   // Small desktops
            lg: '50%',   // Larger desktops
          },
          backgroundColor: 'background.paper',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          What is Jump The Broom Books?
        </Typography>
        <Typography variant="body1">
          Jump the Broom Books is a free ebook downloading event that exclusively highlights Black stories written by Black authors. Why are we called “Jump The Broom"?<br />
          African American history is deeply rooted in the unjust act of slavery. Enslavers imposed many restrictions to prevent Black communities from forming and thriving. One of these restrictions was that enslaved people were not legally allowed to marry. In turn, those in love would jump over a broom to symbolize their commitment to one another. The celebration of Black love exists and persists despite restrictions in place, and this is true for the past, the present, and will continue to be true in the future. This tradition, ingrained in Black history, inspired the name of our event.<br />
          JTB is similar to the “Black Reader Appreciation Event” aka BRAE. This platform serves to elevate Black readership and community through books. JTB not only encourages Black authors to participate in the spreading of their stories, but also readers to interact with these stories through JTB’s virtual book club (hosted through Discord and Fable).<br />
          The virtual book club will choose the book of the month from the authors who take part in the event. We highly encourage and accept all submissions from Black authors through our google form linked above.<br />

        </Typography>
      </Box>
      <Box
        sx={{
          width: {
            xs: '90%',   // Mobile screens
            sm: '80%',   // Tablets
            md: '60%',   // Small desktops
            lg: '50%',   // Larger desktops
          },
          backgroundColor: 'background.paper',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
        Mission Statement:
        </Typography>
        <Typography variant="body1">
        Jump the Broom Books’ mission is to highlight and uplift Black stories. We focus on romance and fantasy, but highly encourage engaging in all aspects of Black literature in order to elevate our shared experiences through reading. Jump the Broom Books is dedicated to the Black community and its diaspora. We intend to create an environment that is focused on Black inclusion and community, allowing like-minded individuals to flourish over time.
        </Typography>
      </Box>
    </Box>
  );
}