import React from "react"
import style from "./KontaktForm.module.less"

export default () =>
    <form className={style.form} name="contact" data-netlify="true">
      <p>
        <label className={style.name}>Name: <input type="text" name="name"/></label>
      </p>
      <p>
        <label className={style.mail}>E-Mail: <input type="email" name="email"/></label>
      </p>
      <p>
        <label className={style.message}>Nachricht: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button className={style.button} type="submit">Absenden</button>
      </p>
    </form>
