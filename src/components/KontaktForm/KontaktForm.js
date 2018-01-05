import React from "react"
import style from "./KontaktForm.module.less"

// Read
// https://developers.google.com/web/fundamentals/design-and-ux/input/forms/

// I am using netlify-form handeling
// https://www.netlify.com/docs/form-handling/
// "bot-honey-hell" is a honeypot for bots, if there is content netlify will
// discard the submission

export default () =>
    <form className={style.form} name="contact" data-netlify="true" netlify-honeypot="bot-honey-hell">
        <label for="bot-honey-hell" style={{display: "none"}} >
          <p>Don’t fill this out:</p>
          <input type="text" name="bot-honey-hell" />
        </label>
        <label for="name" className={style.name}>
          <p>Name</p>
          <input type="text" name="name" placeholder="Max Mustermann" minlength="4" required autocomplete="name"/>
        </label>

        <label for="email" className={style.mail}>
          <p>E-Mail</p>
          <input type="email" name="email" placeholder="name@example.com" minlength="4" required autocomplete="email"/>
        </label>

        <label for="text" className={style.message}>
          <p>Nachricht</p>
          <textarea name="text" required minlength="10"></textarea>
        </label>
        <button className={style.button} type="submit">Absenden</button>
    </form>
