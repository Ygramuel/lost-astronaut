import React from "react"
import style from "./KontaktForm.module.less"

// Read
// https://developers.google.com/web/fundamentals/design-and-ux/input/forms/

// I am using netlify-form handeling
// https://www.netlify.com/docs/form-handling/
// "bot-honey-hell" is a honeypot for bots, if there is content netlify will
// discard the submission


// The iframe is inspired by: 
// https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5
export default () =>
  <div>
   <iframe src="/kontaktFormParanoid/" sandbox="allow-forms"></iframe>
    {/* <form className={style.form} name="contact" data-netlify="true" data-netlify-honeypot="bot-honey-hell">
        <label htmlFor="bot-honey-hell" style={{display: "none"}} >
          <p>Don’t fill this out:</p>
          <input type="text" name="bot-honey-hell" />
        </label>
        <label htmlFor="name" className={style.name}>
          <p>Name</p>
          <input type="text" name="name" placeholder="Max Mustermann" minLength="4" required autoComplete="name"/>
        </label>

        <label htmlFor="email" className={style.mail}>
          <p>E-Mail</p>
          <input type="email" name="email" placeholder="name@example.com" minLength="4" required autoComplete="email"/>
        </label>

        <label htmlFor="text" className={style.message}>
          <p>Nachricht</p>
          <textarea name="text" required minLength="10"></textarea>
        </label>
        <button className={style.button} type="submit">Absenden</button>
    </form> */}
  </div>
