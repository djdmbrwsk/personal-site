import { css } from '@emotion/react';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import { Typography, lighten, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import { Pane, Panes } from 'components/Panes';

const Home: NextPage = () => {
  const theme = useTheme();
  const [currentPane, setCurrentPane] = useState(0);
  const [animateIcon, setAnimateIcon] = useState(false);

  const logo = css`
    cursor: pointer;
    transition: 300ms ease-in-out;

    fill: ${currentPane === 0 ? '#008fff' : '#C7254E'};
    :hover {
      transform: ${!animateIcon && 'scale(1.025, 1.025) rotate(0deg)'};
    }
    transform: ${!animateIcon
      ? 'scale(1) rotate(0deg)'
      : `scale(1.15, 1.15) rotate(${currentPane ? '' : '-'}360deg)`};
  `;

  const bullet = css`
    margin-left: 0.25em;
    margin-right: 0.25em;
    color: ${lighten(theme.typography.subtitle1.color ?? '#000', 0.25)};
    font-size: ${parseInt(`${theme.typography.subtitle1.fontSize ?? '1em'}`) *
    0.7}em;
  `;

  const social = css`
    color: #b0b0b0;
    margin-left: 0.25em;
    margin-right: 0.25em;
    transition: 200ms ease-in-out;
    :hover {
      color: #9d9d9d;
      transform: scale(1.15, 1.15);
    }
  `;

  return (
    <>
      <Head>
        <title>Dan Dombrowski</title>
        <meta
          name="description"
          content="The personal website of Dan Dombrowski. A software engineer focused on practical system design, efficient development, and swift deployment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main itemScope itemType="https://schema.org/Person">
        <Box textAlign="center" marginTop={14} lineHeight="0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="180"
            viewBox="0, 0, 400,400"
            css={logo}
            onClick={() => {
              currentPane === 0 ? setCurrentPane(1) : setCurrentPane(0);
              setAnimateIcon(true);
              setTimeout(() => setAnimateIcon(false), 300);
            }}
          >
            <g>
              <path
                d="M190.519 0.183 C 82.616 6.409,0.178 92.951,0.178 200.000 C 0.178 330.676,123.410 426.223,249.926 393.640 C 381.612 359.726,441.581 206.736,368.222 91.852 C 330.244 32.377,260.057 -3.829,190.519 0.183 M104.355 132.577 C 106.690 133.286,108.707 134.839,112.981 139.221 C 118.139 144.511,118.940 145.967,118.947 150.074 C 118.955 155.168,120.459 153.360,94.846 179.035 L 72.457 201.478 94.730 223.776 C 118.984 248.057,118.103 247.056,118.883 251.246 C 119.729 255.799,118.433 258.367,112.181 264.526 C 105.241 271.363,101.553 272.532,95.719 269.745 C 93.016 268.453,33.876 209.227,32.627 206.560 C 31.078 203.254,31.126 199.318,32.754 196.148 C 33.338 195.012,94.271 133.634,94.821 133.628 C 94.899 133.628,95.763 133.297,96.741 132.895 C 98.831 132.033,102.113 131.897,104.355 132.577 M302.632 132.500 C 303.303 132.694,304.519 133.280,305.333 133.803 C 307.370 135.111,366.856 194.761,367.654 196.296 C 369.433 199.719,369.285 204.161,367.278 207.531 C 366.365 209.064,306.931 268.427,305.333 269.402 C 299.531 272.942,295.427 271.749,287.901 264.332 C 282.036 258.553,280.713 255.835,281.476 251.143 C 282.052 247.603,281.557 248.159,305.521 224.146 L 327.996 201.624 305.781 179.410 C 281.768 155.399,282.110 155.785,281.502 151.979 C 280.743 147.229,281.754 145.093,287.493 139.313 C 294.458 132.299,297.380 130.984,302.632 132.500 M239.414 140.948 C 241.097 141.780,242.687 143.258,252.331 152.948 C 264.843 165.522,264.444 164.974,264.444 169.630 C 264.444 173.823,264.183 174.209,255.416 182.962 L 247.998 190.368 231.037 173.407 L 214.077 156.446 221.187 149.308 C 225.097 145.382,228.816 141.834,229.452 141.424 C 232.344 139.556,236.221 139.371,239.414 140.948 M208.667 229.703 L 174.668 263.704 157.704 263.704 L 140.741 263.704 140.741 246.741 L 140.741 229.779 174.740 195.778 L 208.739 161.778 225.703 178.740 L 242.667 195.702 208.667 229.703 M187.777 198.445 C 164.003 222.221,164.351 221.833,165.630 223.111 C 166.910 224.391,166.516 224.745,190.297 200.962 C 214.381 176.877,213.963 177.341,212.681 176.059 C 211.398 174.776,211.866 174.355,187.777 198.445 M154.886 230.447 L 151.111 234.230 151.111 238.597 L 151.111 242.963 156.444 242.963 L 161.778 242.963 161.778 248.148 L 161.778 253.333 166.000 253.319 L 170.222 253.304 174.064 249.605 L 177.906 245.907 168.284 236.285 L 158.662 226.663 154.886 230.447 "
                stroke="none"
                fillRule="evenodd"
              ></path>
            </g>
          </svg>
        </Box>
        <Box textAlign="center" marginTop={2}>
          <Panes currentPane={currentPane}>
            <Pane>
              <Typography
                variant="h4"
                component="h1"
                fontWeight="300"
                css={css`
                  font-variant: small-caps;
                `}
                itemProp="name"
              >
                Dan Dombrowski
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                fontWeight="300"
                css={css`
                  text-transform: uppercase;
                `}
              >
                <span itemProp="knowsAbout">Design</span>
                <FiberManualRecord css={bullet} />
                <span itemProp="knowsAbout">Develop</span>
                <FiberManualRecord css={bullet} />
                <span itemProp="knowsAbout">Deploy</span>
              </Typography>
            </Pane>
            <Pane>
              <pre
                css={css`
                  color: #c7254e;
                  font-weight: 600;
                  white-space: pre-wrap;
                `}
              >
                {`<output type="code" name="danDombrowski" class="design develop deploy" />`}
              </pre>
            </Pane>
          </Panes>
        </Box>
        <hr
          css={css`
            margin: 2em auto 0 auto;
            width: 10em;
            border-color: #dbdbdb;
            border-top: 0;
          `}
        />
        <Box textAlign="center" marginTop={2}>
          <a
            href="https://github.com/djdmbrwsk"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub css={social} />
          </a>
          <a
            href="https://twitter.com/djdmbrwsk"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter css={social} />
          </a>
          <a
            href="https://www.linkedin.com/in/djdmbrwsk/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn css={social} />
          </a>
        </Box>
      </main>
    </>
  );
};

export default Home;
