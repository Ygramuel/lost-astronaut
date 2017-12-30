import React from "react"
import style from "./KontaktForm.module.less"

// Read
// https://developers.google.com/web/fundamentals/design-and-ux/input/forms/

export default () =>
    <form className={style.form} name="contact" data-netlify="true">
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
