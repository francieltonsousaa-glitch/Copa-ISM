export const metadata = {
  title: 'COPA ISM',
  description: 'Copa das Nações do Instituto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{margin:0,fontFamily:'Arial, sans-serif',background:'#000',color:'#fff'}}>
        {children}
      </body>
    </html>
  )
}
