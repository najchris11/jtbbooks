'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import localFont from 'next/font/local';
import Image from 'next/image';
import jtbLogo from '/public/logos/jtbLogoBlackTransparent.png';
import annait from '/public/authors/alj.jpg';
import mc from '/public/authors/mcj.jpg';
import tiana from '/public/authors/tm.jpeg';



const Gloria = localFont({ src: '/fonts/Gloria.ttf' });


export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: {
            xs: '90%',   // Mobile screens
            sm: '80%',   // Tablets
            md: '60%',   // Small desktops
            lg: '50%',   // Larger desktops
          },
          backgroundColor: 'background.paper',
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
          mb: 2, // Margin bottom for spacing between cards
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column on mobile, row on desktop
            alignItems: 'flex-start',
          }}
        >
          <Box
            sx={{
              flex: '1 1 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: { xs: 2, md: 0 }, // Add margin bottom on mobile
            }}
          >
            <Image
              src={jtbLogo}
              width={200}
              height={200}
              alt="JTB Logo in Black"
              style={{ width: '100%', height: 'auto', maxWidth: '200px' }}
            />
          </Box>
          <CardContent
            sx={{
              flex: '1 1 auto',
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom className={Gloria.className}>
              What is Jump The Broom Books?
            </Typography>
            <Typography variant="body1">
              Jump the Broom Books is a free ebook downloading event that exclusively highlights Black stories written by Black authors. Why are we called &quot;Jump The Broom&quot;?
            </Typography>
            <Typography variant="body1">
              African American history is deeply rooted in the unjust act of slavery. Enslavers imposed many restrictions to prevent Black communities from forming and thriving. One of these restrictions was that enslaved people were not legally allowed to marry. In turn, those in love would jump over a broom to symbolize their commitment to one another.
            </Typography>
            <Typography variant="body1">
              The celebration of Black love exists and persists despite restrictions in place, and this is true for the past, the present, and will continue to be true in the future. This tradition, ingrained in Black history, inspired the name of our event.
            </Typography>
            <Typography variant="body1">
              JTB is similar to the “Black Reader Appreciation Event” aka BRAE. This platform serves to elevate Black readership and community through books. JTB not only encourages Black authors to participate in the spreading of their stories, but also readers to interact with these stories through JTB&apos;s virtual book club (hosted through Discord and Fable).
            </Typography>
            <Typography variant="body1">
              The virtual book club will choose the book of the month from the authors who take part in the event. We highly encourage and accept all submissions from Black authors through our google form linked above.
            </Typography>
          </CardContent>
        </Box>
      </Card>

      <Card
        sx={{
          width: {
            xs: '90%',
            sm: '80%',
            md: '60%',
            lg: '50%',
          },
          backgroundColor: 'background.paper',
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          {/* Author 1 */}
          <Box
            sx={{
              flex: '1 1 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: { xs: 2, md: 0 },
            }}
          >
            <Image
              src={annait}
              width={150}
              height={150}
              alt="Author 1"
              style={{ borderRadius: '50%' }}
            />
            <Typography variant="h6" gutterBottom>
              Annait L.J.
            </Typography>
            <Typography variant="body2">
            Annait is a 25 year old dystopian fantasy author who spends most of the writing process daydreaming. When she’s not serving time in the military, she’s dreaming of getting out. When she’s not doing either activity, she is in fact, dreaming. Her favorite genres to read are mystery and fantasy. You can find Annait staring at a sunset, the moon, or her reflection depending on the time of day.
            https://www.authorannait.com/
            </Typography>
          </Box>

          {/* Author 2 */}
          <Box
            sx={{
              flex: '1 1 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: { xs: 2, md: 0 },
            }}
          >
            <Image
              src={mc}
              width={150}
              height={150}
              alt="Author 2"
              style={{ borderRadius: '50%' }}
            />
            <Typography variant="h6" gutterBottom>
              M. C. Jeter
            </Typography>
            <Typography variant="body2">
            M. C. Jeter is a new-adult and young adult fantasy romance author. When she’s not writing, she can be found studying for the MCAT or working at a local clinic. Her stories feature strong female leads who learn to embrace the magic within them, and she has many more stories she wishes to tell.
            https://www.mcjeterbooks.com/
            </Typography>
          </Box>

          {/* Author 3 */}
          <Box
            sx={{
              flex: '1 1 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              src={tiana}
              width={150}
              height={150}
              alt="Author 3"
              style={{ borderRadius: '50%' }}
            />
            <Typography variant="h6" gutterBottom>
              Tiana M
            </Typography>
            <Typography variant="body2">
            Tiana M is a 23 year old dystopian fantasy author who writes about dark themes with positive messages. When she’s not working one of her part time jobs, she's playing Zelda or Stardew valley. Her favorite genre to read is dystopian and fantasy with a little bit of romance. You can find Slim building another Lego set or crocheting a blanket depending on the mood she’s in.
https://www.slims-universe.com/

            </Typography>
          </Box>
        </Box>
      </Card>

      <Card
        sx={{
          width: {
            xs: '90%',   // Mobile screens
            sm: '80%',   // Tablets
            md: '60%',   // Small desktops
            lg: '50%',   // Larger desktops
          },
          backgroundColor: 'background.paper',
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
          mb: 2, // Margin bottom for spacing between cards
        }}
      >
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Mission Statement:
          </Typography>
          <Typography variant="body1">
            Jump the Broom Books&apos; mission is to highlight and uplift Black stories. We focus on romance and fantasy, but highly encourage engaging in all aspects of Black literature in order to elevate our shared experiences through reading. Jump the Broom Books is dedicated to the Black community and its diaspora. We intend to create an environment that is focused on Black inclusion and community, allowing like-minded individuals to flourish over time.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}