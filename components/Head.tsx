import NextHead from 'next/head'
import { ReactNode } from 'react';


const Head = ({children}: {children: ReactNode}) => {
  return (
    <NextHead>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      <link rel="icon" href="/favicon.ico" />
      <meta name='application-name' content='Notes by Gabsii' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='Notes by Gabsii' />
      <meta name='description' content='Best Notes App in the world' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='msapplication-config' content='/icons/browserconfig.xml' />
      <meta name='msapplication-TileColor' content='#2B5797' />
      <meta name='msapplication-tap-highlight' content='no' />
      <meta name='theme-color' content='#ffffff' />
                
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/icon-192x192.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
      <link rel='shortcut icon' href='/favicon.ico' />
          
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:url' content='https://notes.gabsii.com' />
      <meta name='twitter:title' content='Notes by Gabsii' />
      <meta name='twitter:description' content='Best Notes App in the world' />
      <meta name='twitter:image' content='https://notes.gabsii.com/icons/icon-192x192.png' />
      <meta name='twitter:creator' content='@G4bsi' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Notes by Gabsii' />
      <meta property='og:description' content='Best Notes App in the world' />
      <meta property='og:site_name' content='Notes by Gabsii' />
      <meta property='og:url' content='https://notes.gabsii.com' />
      <meta property='og:image' content='https://notes.gabsii.com/icons/icon-192x192.png' />
      {children}
    </NextHead>
  )
}

export default Head;
