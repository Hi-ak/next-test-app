import classes from "src/components/Links/Links.module.scss";

const ITEMS = [
  {href: "https://nextjs.org/docs", title: "Documentation →", description: "Find in-depth information about Next.js features and API."},
  {href: "https://nextjs.org/learn", title: "Learn →", description: "Learn about Next.js in an interactive course with quizzes!"},
  {href: "https://github.com/vercel/next.js/tree/master/examples", title: "Examples →", description: "Discover and deploy boilerplate example Next.js projects."},
  //UTF-8使ってもUnicodeで表してもいい。&rarr;などのHTML Entities は使わない。
  {href: "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", title: "Deploy \u2192", description: "Instantly deploy your Next.js site to a public URL with Vercel."}
] 

export function Links() {
  return (
    <div className={classes.grid}>
      {/* &rarr; UTF-8ならITEMSの文字列にそのまま使っていい。*/}
      {ITEMS.map(item => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>  
          {/* keyは一意ならいい */}
            <h3 className={classes.title}>{item.title}</h3>
            <p className={classes.description}>{item.description}</p>
          </a>
        )
      })}
      
    </div>
  )
}