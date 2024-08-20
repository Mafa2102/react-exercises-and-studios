//import style from './BookList.module.css';

export default function BookList() {
   let pageTitle = "New Release Books August 2024";
   let book1 = "https://www.booklistqueen.com/wp-content/uploads/the-house-keepers-secret-iona-grey.jpg";
   let book2 = "https://www.booklistqueen.com/wp-content/uploads/this-is-why-we-lied-karin-slaughter.jpg";
   let book3 = "https://www.booklistqueen.com/wp-content/uploads/by-any-other-name-jodi-picoult.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Housekeepers Secret" />
         <img src={book2} alt="This is Why We Lied" />
         <img src={book3} alt="By Any Other Name" />
      </div>      
   );
}