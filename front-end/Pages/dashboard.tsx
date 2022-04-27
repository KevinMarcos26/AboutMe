import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import clsx from 'clsx'
import clase9modulescss from 'dist/css/clase9.module.scss'
import React, { FunctionComponent } from 'react'
import baseClasses from './layout.module.scss'

const Dashboard: FunctionComponent = (props: any) => {
  const classes = baseClasses
  const theme = clase9modulescss

  // Theme selection

  return (
    <React.Fragment>
      <div className={clsx(theme.pages, theme.aboutMe)}>
        <Container className={theme.aboutContainer} maxWidth="lg">
          <div title="Card" className={theme.aboutCard}>
            <div title="Imagen">
              <picture>
                <img src="/img/Captura.PNG" alt="/img/Captura.PNG" width="605" height="420" />
              </picture>
            </div>

            <div title="Info" className={theme.aboutInfo}>
              <Typography variant="h2">Kevin Marcos Agüi Manera</Typography>

              <Typography variant="h3">Abogado en Derecho Informático - Full Satck Developer - Analista de Datos en Power Bi</Typography>

              <div title="Socials" className={theme.socials}>
                <picture>
                  <a href="https://www.facebook.com/kevinmarcos.aguimanera"><img src="/img/facebookLogo.svg" alt="/img/facebookLogo.svg" width="30" height="30" />
               </a>
                </picture>

                <picture>
                  <a href="https://www.instagram.com/kevin_manera96/"><img src="/img/instagramLogo.svg" alt="/img/instagramLogo.svg" width="30" height="30" />
                </a>
                  </picture>

                <picture>
                  <a href="https://www.linkedin.com/in/kevin-marcos-agui-manera-392aa9170/"><img src="/img/linkedinLogo.svg" alt="/img/linkedinLogo.svg" width="30" height="30" />
                </a>
                  </picture>

                <picture>
                  <a href="https://github.com/KevinMarcos26"><img src="/img/git.jpg" alt="/img/git.jpg" width="30" height="30" /></a>
                </picture>
             
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
