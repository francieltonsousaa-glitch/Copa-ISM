export default function Home() {
  const artilheiros = [
    ["Jocimar", 3],
    ["João", 3],
    ["Matheusinho", 3],
  ];

  const jogos = [
    "Brasil 0x1 França (2º Tempo)",
    "Espanha x Holanda",
    "Argentina x França",
    "Brasil x Alemanha",
  ];

  return (
    <main style={{padding:'40px',maxWidth:'1200px',margin:'0 auto'}}>
      <h1 style={{fontSize:'64px',marginBottom:'10px',color:'#22c55e'}}>COPA ISM</h1>
      <p style={{fontSize:'20px',color:'#aaa'}}>Copa das Nações do Instituto</p>

      <section style={{marginTop:'50px'}}>
        <h2 style={{fontSize:'36px'}}>Próximos Jogos</h2>
        <div style={{display:'grid',gap:'15px',marginTop:'20px'}}>
          {jogos.map((jogo,index)=>(
            <div key={index} style={{
              background:'#111',
              border:'1px solid #222',
              padding:'20px',
              borderRadius:'20px'
            }}>
              {jogo}
            </div>
          ))}
        </div>
      </section>

      <section style={{marginTop:'60px'}}>
        <h2 style={{fontSize:'36px'}}>Artilharia</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'20px',marginTop:'20px'}}>
          {artilheiros.map(([nome,gols],index)=>(
            <div key={index} style={{
              background:'#111',
              border:'1px solid #222',
              borderRadius:'20px',
              padding:'30px',
              textAlign:'center'
            }}>
              <div style={{fontSize:'48px',fontWeight:'bold',color:'#22c55e'}}>{gols}</div>
              <div style={{fontSize:'24px'}}>{nome}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
