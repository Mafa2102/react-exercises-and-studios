import style from './HobbyLinks.module.css';

export default function HobbyLinks(){
    const hobbyLinks = ["https://www.youtube.com/@WorldClassClubs", "https://lifestyle.allwomenstalk.com/reasons-why-reading-is-the-best-hobby/", 'https://www.launchcode.org/course-catalog']
    return (
        <div>
        <ol>
           <li ><a href={hobbyLinks[0]}>Sport</a></li>
           <li ><a href={hobbyLinks[1]}>Reading</a></li>
           <li  ><a href={hobbyLinks[2]}>Programming</a></li>
       </ol>
   </div>
    )
}