// src/app/authors/page.tsx
'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import localFont from 'next/font/local';
import Link from 'next/link';

const Gloria = localFont({ src: '../fonts/Gloria.ttf' });

export default function Authors() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
      }}
    >
      {/* Event Rules Card */}
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
          textAlign: 'left',
          mb: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={Gloria.className}
          >
            Apply Here: <Link href="https://forms.gle/mNEWgh7Bqr8ewrYx8">Google Form</Link>
          </Typography>
          <Typography variant="body1">
            Everything Black Love: February 1st 2025 - February 3rd, 2025
          </Typography>
        </CardContent>
      </Card>

      {/* Requirements to Participate Card */}
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
          textAlign: 'left',
          mb: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={Gloria.className}
          >
            Requirements to Participate:
          </Typography>
          <Typography variant="body1">
            1.) You must be filling this form out for yourself
          </Typography>
          <Typography variant="body1">
            2.) You must be Black or of African descent. We will be vetting all
            of the authors. If you are not Black or of African descent, we ask
            that you please not fill out this form. This event is meant to
            highlight authors from this community.
          </Typography>
          <Typography variant="body1">
            3.) You can submit ONE book per author
          </Typography>
          <Typography variant="body1">
            4.) The book you submit must be free during the specified dates.
            Please note that distributors requiring email signups are not
            permitted. No exceptions. 👍🏾 We also highly recommend setting the
            day before and after as well, some folk run on CP time 😉 It opens
            up the possibility for early and late downloads.
          </Typography>
          <Typography variant="body1">
            5.) Currently, we are only accepting books available on Amazon.
            Please submit a clean link. The links should be in their simplest
            form and should not have the extra content after it.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Unacceptable Links:
          </Typography>
          <Typography variant="body1" sx={{ wordBreak: 'break-all' }}>
            https://www.amazon.com/Gems-M-C-Jeter-ebook/dp/B0C9R4L8WF/ref=sr_1_1?crid=2HM4KNIOUWJVJ&dib=eyJ2IjoiMSJ9.7d_-9CkxalCzaoFEzI0_VJSzCy4UceshpEpjPlnO8FC73Ei8IHjrEG6Z3YdIpDYX.n_7JiPw3pEJldL6PKmnNKdJ-PfEUxzR1XmeWrSRlK1U&dib_tag=se&keywords=The+Gems+M+C+Jeter&qid=1726442318&s=digital-text&sprefix=the+gems+m+c+jeter%2Cdigital-text%2C102&sr=1-1
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Acceptable Links:
          </Typography>
          <Typography variant="body1" sx={{ wordBreak: 'break-all' }}>
            https://www.amazon.com/dp/B0C9R4L8WF
          </Typography>
          <Typography variant="body1">
            6.) No freeloaders! If you have a book in this event, we expect you
            to promote the event.
          </Typography>
          <Typography variant="body1">
            7.) We DO NOT allow any books that promote or glorify hate speech,
            child abuse or exploitation, underage or illegal pornography, rape,
            pedophilia glorification, terrorism advocacy, or other inappropriate
            or offensive content. These books will not be included in the event.
          </Typography>
          <Typography variant="body1">
            8.) AI standards. While we understand that some individuals opt to
            use AI, we don&apos;t promote or encourage it. Any obvious AI-generated
            art will be automatically declined. AI-written books are prohibited.
          </Typography>
        </CardContent>
      </Card>

      {/* How to Set Books Free on Amazon Card */}
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
          textAlign: 'left',
          mb: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={Gloria.className}
          >
            How to Set Books Free on Amazon:
          </Typography>
          <Typography variant="body1">
            JTB staff will be checking that all participating authors&apos; books are
            set free at 12am PST on the first day of the event. If your book is
            not free during this time, you will be removed from the website as
            we do not want to mislead any readers. If you are experiencing any
            difficulty in setting your book free, don&apos;t hesitate to send a
            message in <Link href="https://discord.gg/SWVQ36VVjA">Discord</Link>, and one of the other participating authors or
            the JTB staff can help guide you through the process.
          </Typography>
          <Typography variant="body1">
            There are 2 ways to set your books to be free on Amazon.
          </Typography>
          <Typography variant="body1">
            <strong>Option 1:</strong> If you are enrolled in KDP Select,
            Amazon has directions you can find here. KDP Select has enrollment
            periods of 90 days. The maximum number of free book days during each
            enrollment period is <strong>FIVE</strong>. If you have already used
            your free days during the time in which this event is being held,
            you will NOT be able to set your book free via this method. If your
            enrollment end date falls on one of the days between February 1st
            and February 3rd, you will also not be able to use this method to
            set your books free.
          </Typography>
          <Typography variant="body1">
            <strong>Option 2:</strong> To set your book free without being
            enrolled in KDP Select, you MUST set your ebook free on all
            available vendors first and reach out to Amazon via email through
            their customer service portal <Link href='https://kdp.amazon.com/en_US/help/topic/G201298240'>here</Link>. This email should contain links
            to where else your book is available to buy to prove your ebook is
            free elsewhere. In the dropdown, select “Pricing” then “Price
            Matching” and request a price match. This should be done a week
            prior to the event to give Amazon ample time to make the price
            adjustment. Please note that Amazon is not obligated to change the
            price. If they deny the request, you can attempt again by sending
            more links and proof that your book is free on other sites. This
            method is much more complicated than the first.
          </Typography>
        </CardContent>
      </Card>

      {/* Communication Card */}
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
          textAlign: 'left',
          mb: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={Gloria.className}
          >
            Communication:
          </Typography>
          <Typography variant="body1">
            The majority of JTB communication will be occurring via <Link href='https://discord.gg/SWVQ36VVjA'>Discord</Link>. You
            can reach out to the hosts, Annait LJ, Tiana M, and M. C. Jeter
            through here for any personal matters, questions, or concerns.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}